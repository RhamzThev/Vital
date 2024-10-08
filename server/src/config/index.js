import dotenv from 'dotenv';

dotenv.config();

export const SERVER_PORT = process.env.SERVER_PORT || 3000;
export const CLIENT_PORT = process.env.CLIENT_PORT || 80;
export const URL = process.env.URL || 'http://localhost';
export const MONGODB_URI = process.env.MONGODB_URI || '';
export const SECRET = process.env.SECRET || '';