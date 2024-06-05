import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

import FoodLog from "../model/food-log.model.js";

export const createLog = async (req, res) => {

    const { consumption_time, amount } = req.body;
    const user_id = ObjectId.createFromHexString(req.session.userId);
    const food_id = ObjectId.createFromHexString(req.body.food_id);

    try {
        const newLog = new FoodLog({ user_id, food_id, consumption_time, amount });
        const savedLog = await newLog.save();
        res.status(201).json(savedLog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getLogs = async (req, res) => {
    try {
        const logs = await FoodLog.find();
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getLogsByUserId = async (req, res) => {

    const user_id = ObjectId.createFromHexString(req.session.userId);

    try {
        const logs = await FoodLog.find({ user_id });
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getLogById = async (req, res) => {
    try {
        const log = await FoodLog.findById(req.params.id);
        if (log) {
            res.status(200).json(log);
        } else {
            res.status(404).json({ message: 'FoodLog not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateLog = async (req, res) => {

    const { consumption_time, amount } = req.body;
    const food_id = ObjectId.createFromHexString(req.body.food_id);

    try {
        const updatedLog = await FoodLog.findByIdAndUpdate(req.params.id, { food_id, consumption_time, amount }, { new: true });
        if (updatedLog) {
            res.status(200).json(updatedLog);
        } else {
            res.status(404).json({ message: 'FoodLog not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteLog = async (req, res) => {
    try {
        const deletedLog = await FoodLog.findByIdAndDelete(req.params.id);
        if (deletedLog) {
            res.status(200).json({ message: 'FoodLog deleted' });
        } else {
            res.status(404).json({ message: 'FoodLog not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
