import { Schema, model } from 'mongoose';

const addressSchema = new Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
});

const testSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: addressSchema, required: true },
    registration_date: { type: Date, required: true },
});

export const Test = model('Test', testSchema);
