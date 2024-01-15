import express from "express";
import { createSaleProduct, getSaleproducts, removeProducts } from '../controllers/sale.controller.js';


const router = express.Router();



router.post('/sale', createSaleProduct);
router.get('/sale', getSaleproducts);
router.delete('/sale/:id', removeProducts)


export default router;

