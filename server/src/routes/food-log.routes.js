import express from 'express';
import { createLog, getLogs, getLogsByUserId, getLogById, updateLog, deleteLog } from '../controller/food-log.controller.js';

const router = express.Router();

router.post('/', createLog);
router.get('/', getLogs);
router.get('/session', getLogsByUserId);
router.get('/:id', getLogById);
router.put('/:id', updateLog);
router.delete('/:id', deleteLog);

export default router;
