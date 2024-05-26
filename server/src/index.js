import app from "./app.js"
import connectDB from './config/database.js';
import { PORT } from './config/index.js';

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});