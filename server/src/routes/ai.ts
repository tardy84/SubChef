import express from 'express';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { db } from '../db/database';

const router = express.Router();

const API_KEY = process.env.GEMINI_API_KEY;

router.post('/generate-image', async (req, res) => {
    try {
        const { prompt, recipeId } = req.body;
        
        if (!prompt || !recipeId) {
            return res.status(400).json({ error: 'Prompt and recipeId are required' });
        }

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key=${API_KEY}`,
            {
                contents: [
                    {
                        parts: [
                            { text: prompt }
                        ]
                    }
                ]
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        );

        const data = response.data;
        const candidate = data.candidates?.[0];
        const part = candidate?.content?.parts?.[0];

        if (!part || !part.inlineData || !part.inlineData.data) {
            throw new Error('Invalid response from AI model');
        }

        const base64Data = part.inlineData.data;
        const buffer = Buffer.from(base64Data, 'base64');
        
        const fileName = `recipe_${recipeId}_${Date.now()}.jpeg`;
        const filePath = path.join(__dirname, '../../public/images/dishes', fileName);
        
        fs.writeFileSync(filePath, buffer);
        
        const imageUrl = `/public/images/dishes/${fileName}`;
        
        // Update database
        db.prepare('UPDATE recipes SET image_url = ? WHERE id = ?').run(imageUrl, recipeId);

        res.json({ image_url: imageUrl });
        
    } catch (error: any) {
        console.error('Error generating image:', error?.response?.data || error.message);
        res.status(500).json({ error: 'Failed to generate image' });
    }
});

export default router;
