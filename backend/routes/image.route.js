import express from 'express';
const router = express.Router();
import { ImageUpload, FindImages } from '../controllers/image.controller.js';
import multer from 'multer';
import path from 'path';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "upload/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
}) 

router.post('/upload', upload.single('image'), ImageUpload);
router.get('/upload', FindImages);

export default router