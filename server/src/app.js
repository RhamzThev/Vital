import express from 'express';
import session from 'express-session';
import { SECRET, URI } from './config/index.js';
import cors from 'cors';
import MongoStore from 'connect-mongo';

import testRoutes from './routes/test.routes.js';
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import foodRoutes from './routes/food.routes.js'
import foodLogRoutes from './routes/food-log.routes.js'

const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Middleware
app.use(express.json());
app.use(session({
    secret: SECRET, // Replace with a secure secret key
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: URI
    }),
    cookie: { secure: false, httpOnly: false } // Set to true in production with HTTPS
}));

// Routes
app.use('/api/tests', testRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/foods/logs', foodLogRoutes);
app.use('/api/foods', foodRoutes);

export default app;
