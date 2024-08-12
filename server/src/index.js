import app from "./app.js"
import connectDB from './config/database.js';
import { SERVER_PORT } from './config/index.js';

// Connect to MongoDB
connectDB();

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});