import { Router } from 'express';
import { getFoods, getFoodById, createFood, updateFood, deleteFood } from '../controller/food.controller.js';

const router = Router();

// Get all foods
router.get('/', getFoods);

// Get food by ID
router.get('/:id', getFoodById);

// Create a new food
router.post('/', createFood);

// Update food by ID
router.put('/:id', updateFood);

// Delete food by ID
router.delete('/:id', deleteFood);

export default router;
