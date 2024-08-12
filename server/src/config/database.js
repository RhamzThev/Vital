// src/config/database.ts
import mongoose from 'mongoose';
import { MONGODB_URI } from './index.js';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
