import Product from '../models/products.models.js'; //import Product model
import mongoose from 'mongoose';
export const getProducts = async(req, res) => {
    try{
        const products = await Product.find(); //find all products in db
        res.status(200).json({ success: true, data: products}); //send response to user
    }
    catch(error){
        res.status(500).json({ success: false, message: "Error fetching products"}); //send error message to user
    }
};

export const createProduct = async(req, res) => {
    const product = req.body; //user will send this data

    //check if all fields are filled
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({sucess: false, message: "Please fill all the fields"});
    }

    const newProduct = new Product(product); //create new product

    try {
        await newProduct.save(); //save product to db
        res.status(201).json({ success: true, data: newProduct}); //send response to user
    }
    catch(error){
        res.status(500).json({ success: false, message: "Server Error"}); //send error message to user
    }
};

export const updateProduct = async(req, res) => {
    const { id } = req.params; //get id from url
    const product = req.body; //user will send this data

    try {
        const updated = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success: true, data: updated});

    }catch (error){
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const deleteProduct = async(req, res) => {
    const { id } = req.params; //get id from url
    try {
        await Product.findByIdAndDelete(id); //delete product from db
        res.status(200).json({ success: true, message: "Product deleted successfully"}); //send response to user
    }
    catch(error){
        res.status(404).json({ success: false, message: "Product not found"}); //send error message to user
    }
};