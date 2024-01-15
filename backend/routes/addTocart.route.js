import express from 'express';
import { createCart, getAllCart, deleteCartproduct } from '../controllers/addTocart.controller.js';

const router = express.Router();


router.post('/cart', createCart);
router.get('/cart', getAllCart);
router.delete('/cart/:id', deleteCartproduct)



export default router;