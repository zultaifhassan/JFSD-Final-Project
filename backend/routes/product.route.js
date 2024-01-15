// routes/product.routes.js
import express from 'express';
import multer from 'multer';
import path from 'path';
import {
  productCreate,
  getAllProducts,
  getSingleProduct,
  upProductDetails,
  deleteProducts,
  getlimitedProducts,
  catogaryWise,
} from '../controllers/product.controller.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
});

router.post('/products', upload.single('image'), productCreate);
router.get('/products', getAllProducts);
router.get('/limitedproducts', getlimitedProducts);
router.get('/products/:id', getSingleProduct);
router.put('/products/:id', upProductDetails);
router.delete('/products/:id', deleteProducts);
router.get('/products/:category', catogaryWise)

export default router;
