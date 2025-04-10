import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js';
const router = express.Router();

export default router;

router.get("/", getProducts); //get all products
router.post("/", createProduct); //create new product
router.put("/:id", updateProduct); //update product
router.delete("/:id", deleteProduct); //delete product from db
