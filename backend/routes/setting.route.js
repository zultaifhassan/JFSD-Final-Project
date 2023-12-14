import express from 'express';
import { createSetting, getAllSettings } from '../controllers/setting.controlller.js';

const router = express.Router();

router.post('/setting', createSetting);
router.get('/setting', getAllSettings);



export default router