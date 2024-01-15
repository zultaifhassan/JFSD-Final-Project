import express from 'express';
import { createQuery, deleteQuery, getAllQuery } from '../controllers/query.controller.js';

const router = express.Router();


router.post('/query', createQuery);
router.get('/query', getAllQuery);
router.delete('/query/:id', deleteQuery)


export default router