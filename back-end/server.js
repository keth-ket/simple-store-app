//entry point for api
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/products.routes.js';

//config dotenv
dotenv.config();

//using express
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //to parse json data

app.use("/api/products", productRoutes); //use product routes

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});