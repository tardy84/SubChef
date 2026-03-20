import { Router } from 'express';
import { db } from '../db/database';

const router = Router();

// Get all ingredients grouped by category
router.get('/', (req, res) => {
    try {
        const stmt = db.prepare(`SELECT * FROM ingredients ORDER BY category, name`);
        const ingredients = stmt.all() as any[];

        // Group by category
        const grouped = ingredients.reduce((acc, current) => {
            const cat = current.category || 'Khác';
            if (!acc[cat]) {
                acc[cat] = [];
            }
            acc[cat].push(current);
            return acc;
        }, {} as Record<string, any[]>);

        res.json(grouped);
    } catch (error) {
        console.error('Error fetching ingredients:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
