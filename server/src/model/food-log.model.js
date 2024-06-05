import mongoose, { Schema, model } from "mongoose";
const { ObjectId } = mongoose.Types;

const foodLogSchema = new Schema({
    user_id: {
        type: ObjectId,
        required: true
    },
    food_id: {
        type: ObjectId,
        required: true
    },
    consumption_time: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

const FoodLog = model('Food Log', foodLogSchema);

export default FoodLog;
