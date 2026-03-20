import { Router } from 'express';
import { db } from '../db/database';

const router = Router();

// Get all recipes, optionally filtered by ingredients (comma separated ids) or search query
router.get('/', (req, res) => {
    try {
        const { search, ingredients, main_ingredient, maxTime, difficulty } = req.query;
        let query = `
            SELECT r.*, c.name as category_name
            FROM recipes r
            LEFT JOIN categories c ON r.category_id = c.id
            WHERE 1=1
        `;
        const params: any[] = [];

        if (search) {
            query += ` AND r.name LIKE ?`;
            params.push(`%${search}%`);
        }

        if (main_ingredient) {
            query += ` AND r.main_ingredient = ?`;
            params.push(main_ingredient);
        }

        if (maxTime) {
            const timeNum = parseInt(maxTime as string, 10);
            if (!isNaN(timeNum)) {
                query += ` AND (r.prep_time + r.cook_time) <= ?`;
                params.push(timeNum);
            }
        }

        if (difficulty) {
            query += ` AND r.difficulty = ?`;
            params.push(difficulty);
        }

        if (ingredients) {
            const ingredientIds = (ingredients as string).split(',').map(id => parseInt(id, 10)).filter(id => !isNaN(id));
            if (ingredientIds.length > 0) {
                const placeholders = ingredientIds.map(() => '?').join(',');
                query += ` AND r.id IN (
                    SELECT recipe_id FROM recipe_ingredients
                    WHERE ingredient_id IN (${placeholders})
                    GROUP BY recipe_id
                    HAVING COUNT(DISTINCT ingredient_id) = ?
                )`;
                params.push(...ingredientIds, ingredientIds.length);
            }
        }

        const stmt = db.prepare(query);
        const recipes = stmt.all(...params);
        
        // Parse instructions for each recipe
        const recipesParsed = recipes.map((r: any) => ({
            ...r,
            instructions: JSON.parse(r.instructions || '[]')
        }));

        res.json(recipesParsed);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get single recipe with ingredients
router.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const recipeStmt = db.prepare(`
            SELECT r.*, c.name as category_name
            FROM recipes r
            LEFT JOIN categories c ON r.category_id = c.id
            WHERE r.id = ?
        `);
        const recipe = recipeStmt.get(id) as any;

        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        const ingredientsStmt = db.prepare(`
            SELECT ri.quantity, ri.unit, ri.notes, i.name as name, i.category
            FROM recipe_ingredients ri
            JOIN ingredients i ON ri.ingredient_id = i.id
            WHERE ri.recipe_id = ?
        `);
        const ingredients = ingredientsStmt.all(id);

        res.json({
            ...recipe,
            instructions: JSON.parse(recipe.instructions || '[]'),
            ingredients
        });
    } catch (error) {
        console.error('Error fetching recipe:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
