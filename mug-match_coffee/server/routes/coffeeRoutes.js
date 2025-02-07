// server/routes/coffeeRoutes.js

import express from 'express';
import { getRecommendations, saveRecommendation } from '../controllers/coffeeController.js';

const router = express.Router();

// GET route to fetch coffee recommendations
router.get('/recommendations', getRecommendations);

// POST route to save coffee recommendation preferences
router.post('/recommendations', saveRecommendation);

export default router;
