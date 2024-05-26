import { Schema, model } from 'mongoose';

// Define the User interface extending Document

// Create the user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    sex: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    }
});

// Create the User model
export const User = model('User', userSchema);
