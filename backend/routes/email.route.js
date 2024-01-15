import express from 'express';
import { register, login, getSingleUser, getAllUsers, upDateUser, deleteUser, forgetPasword, verifyOtp } from "../controllers/email.controller.js";
import { authenticateUser, checkRole } from '../middlewares/middleware.js';


const router = express.Router();

router.post('/user', register);
router.post('/login', login);
router.get('/user', getAllUsers);
router.get('/user/:id', getSingleUser);
router.put('/user/:id', upDateUser);
router.delete('/user/:id',authenticateUser,checkRole('admin'), deleteUser);
router.post('/user/forget', forgetPasword);
router.post('/user/verify', verifyOtp);





export default router