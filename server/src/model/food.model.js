import mongoose, { Schema, model } from "mongoose";
const { ObjectId } = mongoose.Types;

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    units_type: {
        type: String,
        enum: ['g', 'ml'],
        required: true
    },
    units: {
        type: Number,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    fats: {
        type: Number,
        required: true
    },
    carbs: {
        type: Number,
        required: true
    },
    proteins: {
        type: Number,
        required: true
    },
    user_id: {
        type: ObjectId,
        required: true
    }
});

const Food = model('Food', foodSchema);

export default Food;
