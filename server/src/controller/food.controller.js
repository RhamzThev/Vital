import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

import Food from '../model/food.model.js';

// Get all foods
export const getFoods = async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get food by ID
export const getFoodById = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) return res.status(404).json({ message: 'Food not found' });
        res.status(200).json(food);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new food
export const createFood = async (req, res) => {
    const { name, units_type, units, calories, fats, carbs, proteins } = req.body;
    const user_id = ObjectId.createFromHexString(req.session.userId);
    const newFood = new Food({ name, units_type, units, calories, fats, carbs, proteins, user_id });

    try {
        const savedFood = await newFood.save();
        res.status(201).json(savedFood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update food by ID
export const updateFood = async (req, res) => {

    const { name, units_type, units, calories, fats, carbs, proteins } = req.body;

    try {
        const updatedFood = await Food.findByIdAndUpdate(req.params.id, { name, units_type, units, calories, fats, carbs, proteins }, { new: true, runValidators: true });
        if (!updatedFood) return res.status(404).json({ message: 'Food not found' });
        res.status(200).json(updatedFood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete food by ID
export const deleteFood = async (req, res) => {
    try {
        const deletedFood = await Food.findByIdAndDelete(req.params.id);
        if (!deletedFood) return res.status(404).json({ message: 'Food not found' });
        res.status(200).json({ message: 'Food deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
