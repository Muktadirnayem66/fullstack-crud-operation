import express from 'express'
import { createProduct, deleteProduct, readProduct, readProductById, updateProduct } from '../controller/productsController.js'


const router = express.Router()





//api endpoint

router.post("/createProduct", createProduct)
router.get("/readProduct", readProduct)
router.get("/readProductById/:id", readProductById)
router.post("/updateProduct/:id", updateProduct)
router.delete("/removeProduct/:id", deleteProduct )



export default router