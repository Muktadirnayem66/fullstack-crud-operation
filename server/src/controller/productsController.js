import { productModel } from "../models/productsModel.js";

const createProduct = async(req,res)=>{

    try {
        const reqBody = req.body 

        const postBody = {
            ...reqBody
        }

        const product = await productModel.create(postBody)

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product
        });
        
    } catch (err) {
       res.status(400).json({success:false, message:"Something went wrong", error: err.message}) 
    }
}

const readProduct = async (req, res)=>{
    try {

        const product = await productModel.find().lean()
        res.status(201).json({
            success: true,
            message: "Products retrieved successfully",
            product
        });
        
    } catch (err) {
        res.status(400).json({success:false, message:"Something went wrong", error: err.message})  
    }
}


const readProductById = async (req, res)=>{
    try {
        const {id} = req.params
        const product = await productModel.findOne({_id:id}).lean()
        res.status(201).json({
            success: true,
            message: "Products retrieved successfully",
            product
        });
        
    } catch (err) {
        res.status(400).json({success:false, message:"Something went wrong", error: err.message})  
    }
}

const updateProduct = async (req, res)=>{
    try {

        const {id} = req.params
        const updateData = req.body

        const product = await productModel.updateOne({_id:id}, updateData)
        if(product.modifiedCount === 0) {
            return res.status(400).json({success:false,  message: "Product not found or no changes made"})
        }
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product
        });
        
    } catch (err) {
        res.status(500).json({success:false, message:"Something went wrong", error: err.message})  
    }
}


const deleteProduct = async (req, res)=>{
    try {

        const {id} = req.params
        const updateData = req.body

        const product = await productModel.deleteOne({_id:id})
        if(product.deletedCount === 0) {
            return res.status(400).json({success:false,  message: "Product not found"})
        }
        res.status(201).json({
            success: true,
            message: "Product deleted successfully"
           
        });
        
    } catch (err) {
        res.status(500).json({success:false, message:"Something went wrong", error: err.message})  
    }
}



export { createProduct, readProduct, updateProduct, deleteProduct, readProductById}