import { Router } from 'express';
import { db } from '../db/database';

const router = Router();

// Generate shopping list from array of recipe_ids
router.post('/generate', (req, res) => {
    try {
        const { recipeIds } = req.body; // array of numbers
        if (!recipeIds || !Array.isArray(recipeIds) || recipeIds.length === 0) {
            return res.json({});
        }

        const validIds = recipeIds
            .map((id: any) => parseInt(id, 10))
            .filter((id: number) => !isNaN(id) && id > 0);

        if (validIds.length === 0) {
            return res.status(400).json({ error: 'Invalid recipe IDs' });
        }

        const placeholders = validIds.map(() => '?').join(',');
        
        // Aggregate ingredient quantities
        const query = `
            SELECT i.name, i.category, SUM(ri.quantity) as total_quantity, ri.unit
            FROM recipe_ingredients ri
            JOIN ingredients i ON ri.ingredient_id = i.id
            WHERE ri.recipe_id IN (${placeholders})
            GROUP BY i.id, ri.unit
            ORDER BY i.category, i.name
        `;
        
        const stmt = db.prepare(query);
        const list = stmt.all(...validIds) as any[];

        // Group by category for easier shopping
        const shoppingList = list.reduce((acc, item) => {
            const cat = item.category || 'Khác';
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push({
                name: item.name,
                full_amount: `${item.total_quantity} ${item.unit}`
            });
            return acc;
        }, {} as Record<string, any[]>);

        res.json(shoppingList);
    } catch (error) {
        console.error('Error generating shopping list:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
