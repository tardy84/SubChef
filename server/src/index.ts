import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from './db/database';

import recipesRouter from './routes/recipes';
import ingredientsRouter from './routes/ingredients';
import suggestionsRouter from './routes/suggestions';
import shoppingRouter from './routes/shopping';
import aiRouter from './routes/ai';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'EatAtHome API is running' });
});

app.use('/api/recipes', recipesRouter);
app.use('/api/ingredients', ingredientsRouter);
app.use('/api/suggestions', suggestionsRouter);
app.use('/api/shopping', shoppingRouter);
app.use('/api/ai', aiRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`Database initialized: ${db.name}`);
});
