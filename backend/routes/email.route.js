import express from 'express';
import { register, login, getSingleUser, getAllUsers, upDateUser, deleteUser } from "../controllers/email.controller.js";
import { authenticateUser, checkRole } from '../middlewares/middleware.js';


const router = express.Router();

router.post('/user', checkRole('admin'), register);
router.post('/login', login);
router.get('/user', authenticateUser, getAllUsers);
router.get('/user/:id', getSingleUser);
router.put('/user/:id', upDateUser);
router.delete('/user/:id', checkRole('admin'), deleteUser);





export default router