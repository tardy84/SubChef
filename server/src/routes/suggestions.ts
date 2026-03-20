import { Router } from 'express';
import { db } from '../db/database';
import axios from 'axios';

const router = Router();
const API_KEY = process.env.GEMINI_API_KEY;

// Basic filter logic suggestion (fallback or fast option)
router.get('/filter', (req, res) => {
    try {
        const { ingredients } = req.query; // comma separated ingredient names
        if (!ingredients) {
            return res.json([]);
        }

        let rawIngredients = (ingredients as string).split(',').map(i => i.trim().toLowerCase());
        const expandedIngredients = new Set<string>();

        rawIngredients.forEach(ing => {
            expandedIngredients.add(ing);
            // Synonyms
            if (ing.includes('lợn')) expandedIngredients.add(ing.replace('lợn', 'heo'));
            if (ing.includes('heo')) expandedIngredients.add(ing.replace('heo', 'lợn'));
            if (ing.includes('đậu phụ')) expandedIngredients.add(ing.replace('đậu phụ', 'đậu hũ'));
            if (ing.includes('đậu hũ')) expandedIngredients.add(ing.replace('đậu hũ', 'đậu phụ'));
            if (ing === 'trứng') { expandedIngredients.add('hột vịt'); expandedIngredients.add('trứng gà'); expandedIngredients.add('trứng vịt'); }
        });

        const ingredientList = Array.from(expandedIngredients);
        // SQLite LIKE is case-insensitive for ASCII, but we can do a simple lower/upper match to be safe.
        const likeConditions = ingredientList.map(() => `(i.name LIKE ? OR r.main_ingredient LIKE ?)`).join(' OR ');
        const likeParams = ingredientList.flatMap(i => [`%${i}%`, `%${i}%`]);
        // Sort by match percentage
        const query = `
            SELECT r.*, c.name as category_name,
            COUNT(ri.ingredient_id) as matched_ingredients,
            (SELECT COUNT(*) FROM recipe_ingredients WHERE recipe_id = r.id) as total_ingredients
            FROM recipes r
            LEFT JOIN categories c ON r.category_id = c.id
            JOIN recipe_ingredients ri ON r.id = ri.recipe_id
            JOIN ingredients i ON ri.ingredient_id = i.id
            WHERE ${likeConditions}
            GROUP BY r.id
            ORDER BY matched_ingredients DESC, (matched_ingredients * 1.0 / total_ingredients) DESC
            LIMIT 20
        `;
        
        const stmt = db.prepare(query);
        const suggestedRecipes = stmt.all(...likeParams);

        res.json(suggestedRecipes);
    } catch (error) {
        console.error('Error suggesting recipes by filter:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// AI Suggestion using Gemini
router.post('/ai', async (req, res) => {
    try {
        const { ingredients } = req.body;
        if (!ingredients || ingredients.length === 0) {
            return res.json([]);
        }

        const prompt = `Tôi có những nguyên liệu sau: ${ingredients.join(', ')}. Hãy gợi ý 3 món ăn gia đình Việt Nam ngon. Chỉ trả về một Array chứa các object JSON hợp lệ với 2 key là "name" (tên món) và "match_reason" (lý do tại sao hợp với nguyên liệu đang có). Không thêm bất kỳ text định dạng markdown hay text nào khác ngoài Array này.`;

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
            {
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    responseMimeType: "application/json"
                }
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        );

        const aiText = response.data.candidates?.[0]?.content?.parts?.[0]?.text || '[]';
        let suggestions = [];
        try {
            suggestions = JSON.parse(aiText);
        } catch (e) {
            console.error('Failed to parse AI JSON', aiText);
        }

        if (!Array.isArray(suggestions) || suggestions.length === 0) {
            suggestions = [
                { 
                    name: 'Món Xào / Canh Tổng Hợp', 
                    match_reason: 'Bạn có thể linh hoạt chế biến mọi nguyên liệu sẵn có.' 
                }
            ];
        }

        res.json(suggestions);
    } catch (error: any) {
        console.error('Error with AI suggestion:', error?.response?.data || error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Suggest a balanced meal combo based on user filters
router.get('/meal-combo', (req, res) => {
    try {
        const { mains = 2, veggies = 1, maxTime, difficulty } = req.query;
        const numMains = parseInt(mains as string, 10);
        const numVeggies = parseInt(veggies as string, 10);
        const maxTimeNum = maxTime ? parseInt(maxTime as string, 10) : null;

        let extraFilters = '';
        const filterParams: any[] = [];

        if (maxTimeNum && !isNaN(maxTimeNum)) {
            extraFilters += ' AND (r.prep_time + r.cook_time) <= ?';
            filterParams.push(maxTimeNum);
        }

        if (difficulty) {
            extraFilters += ' AND r.difficulty = ?';
            filterParams.push(difficulty);
        }

        const mainQuery = `
            SELECT r.*, c.name as category_name
            FROM recipes r
            JOIN categories c ON r.category_id = c.id
            WHERE c.name IN ('Kho', 'Chiên/Rán', 'Luộc', 'Xào') 
            AND r.main_ingredient != 'Rau củ'
            ${extraFilters}
            ORDER BY RANDOM() LIMIT ?
        `;
        const mainsList = db.prepare(mainQuery).all(...filterParams, numMains);

        const vegQuery = `
            SELECT r.*, c.name as category_name
            FROM recipes r
            JOIN categories c ON r.category_id = c.id
            WHERE r.main_ingredient = 'Rau củ' 
            AND c.name IN ('Xào', 'Luộc')
            ${extraFilters}
            ORDER BY RANDOM() LIMIT ?
        `;
        const veggiesList = db.prepare(vegQuery).all(...filterParams, numVeggies);

        const soupQuery = `
            SELECT r.*, c.name as category_name
            FROM recipes r
            JOIN categories c ON r.category_id = c.id
            WHERE c.name = 'Canh'
            ${extraFilters}
            ORDER BY RANDOM() LIMIT 1
        `;
        const soup = db.prepare(soupQuery).get(...filterParams);

        const combo = [...(mainsList as any[]), ...(veggiesList as any[]), soup].filter(Boolean);

        res.json(combo);
    } catch (error) {
        console.error('Error suggesting meal combo:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
