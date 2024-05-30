import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const foodSchema = new Schema({
    food_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
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
        type: Schema.Types.ObjectId,
        required: true
    }
});

const Food = model('Food', foodSchema);

export default Food;
