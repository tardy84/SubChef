import { db } from './src/db/database';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;

async function generateMissingImages() {
    const recipesToUpdate = db.prepare(`SELECT id, name, description FROM recipes WHERE image_url IS NULL OR image_url = ''`).all() as any[];
    
    console.log(`Found ${recipesToUpdate.length} recipes missing images. Starting generation...`);
    
    for (let i = 0; i < recipesToUpdate.length; i++) {
        const recipe = recipesToUpdate[i];
        console.log(`[${i + 1}/${recipesToUpdate.length}] Generating image for: ${recipe.name}`);
        
        try {
            const prompt = `Vietnamese dish ${recipe.name}, ${recipe.description}, authentic Vietnamese cuisine, simple food photo for small thumbnail`;
            
            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key=${API_KEY}`,
                {
                    contents: [
                        {
                            parts: [
                                { text: prompt }
                            ]
                        }
                    ],
                    generationConfig: {
                        responseModalities: ["IMAGE", "TEXT"]
                    }
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            const data = response.data;
            const candidate = data.candidates?.[0];
            const part = candidate?.content?.parts?.[0];

            if (!part || !part.inlineData || !part.inlineData.data) {
                console.error(`Invalid response from AI model for ${recipe.name}`);
                continue;
            }

            const base64Data = part.inlineData.data;
            const buffer = Buffer.from(base64Data, 'base64');
            
            const fileName = `recipe_${recipe.id}_${Date.now()}.jpeg`;
            const filePath = path.join(__dirname, 'public/images/dishes', fileName);
            
            fs.writeFileSync(filePath, buffer);
            
            const imageUrl = `/public/images/dishes/${fileName}`;
            
            // Update database
            db.prepare('UPDATE recipes SET image_url = ? WHERE id = ?').run(imageUrl, recipe.id);
            console.log(`Successfully generated and saved image for ${recipe.name}: ${imageUrl}`);
            
            // Wait 2 seconds between requests to avoid rate limits
            await new Promise(resolve => setTimeout(resolve, 2000));
            
        } catch (error: any) {
            console.error(`Error generating image for ${recipe.name}:`, error?.response?.data || error.message);
        }
    }
    
    console.log('Finished generating all missing images.');
}

generateMissingImages();
