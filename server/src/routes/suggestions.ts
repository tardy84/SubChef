import { Router } from 'express';
import { db } from '../db/database';
import axios from 'axios';

const router = Router();

// Basic filter logic suggestion (fallback or fast option)
router.get('/filter', (req, res) => {
    try {
        const { ingredients } = req.query; // comma separated ingredient names
        if (!ingredients) {
            return res.json([]);
        }

        let rawIngredients = (ingredients as string).split(',').map(i => i.trim().toLowerCase());
        const expandedIngredients = new Set<string>();

        // Synonym groups: each group's members are interchangeable
        const SYNONYM_GROUPS: string[][] = [
            ['lợn', 'heo'],
            ['đậu phụ', 'đậu hũ', 'tàu hũ'],
            ['trứng', 'hột vịt', 'trứng gà', 'trứng vịt', 'trứng cút'],
            ['bò', 'thịt bò'],
            ['gà', 'thịt gà'],
            ['tôm', 'tép'],
            ['hành lá', 'hành xanh'],
            ['hành tây', 'củ hành'],
            ['cà rốt', 'củ cà rốt'],
            ['khoai tây', 'củ khoai tây'],
            ['nấm', 'nấm rơm', 'nấm đông cô', 'nấm hương'],
            ['ớt', 'ớt đỏ', 'ớt xanh', 'ớt hiểm'],
        ];

        rawIngredients.forEach(ing => {
            expandedIngredients.add(ing);
            for (const group of SYNONYM_GROUPS) {
                if (group.some(s => ing.includes(s))) {
                    group.forEach(s => expandedIngredients.add(s));
                }
            }
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
        if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
            return res.json([]);
        }

        const API_KEY = process.env.GEMINI_API_KEY;
        if (!API_KEY) {
            return res.status(500).json({ error: 'AI service not configured' });
        }

        // Limit ingredients to prevent excessive prompt size
        const safeIngredients = ingredients.slice(0, 20).map((i: any) => String(i).slice(0, 50));

        const prompt = `Tôi có những nguyên liệu sau: ${safeIngredients.join(', ')}. Hãy gợi ý 3 món ăn gia đình Việt Nam ngon. Chỉ trả về một Array chứa các object JSON hợp lệ với 2 key là "name" (tên món) và "match_reason" (lý do tại sao hợp với nguyên liệu đang có). Không thêm bất kỳ text định dạng markdown hay text nào khác ngoài Array này.`;

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
        const numMains = Math.min(Math.max(parseInt(mains as string, 10) || 2, 1), 5);
        const numVeggies = Math.min(Math.max(parseInt(veggies as string, 10) || 1, 0), 3);
        const maxTimeNum = maxTime ? parseInt(maxTime as string, 10) : null;
        if (maxTimeNum !== null && (isNaN(maxTimeNum) || maxTimeNum <= 0)) {
            return res.status(400).json({ error: 'maxTime must be a positive number' });
        }

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
