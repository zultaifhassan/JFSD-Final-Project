import express from "express";
import { productCreate, getAllProducts, getSingleProduct, upProductDetails, deleteProducts } from "../controllers/product.controller.js"; 

const router = express.Router();

router.post('/products', productCreate);
router.get('/products', getAllProducts);
router.get('/products/:id', getSingleProduct);
router.put('/products/:id', upProductDetails);
router.delete('/products/:id', deleteProducts);



export default router;