import { Router } from 'express';
import { getTests, getTestById, createTest, updateTest, deleteTest } from '../controller/test.controller.js';

const router = Router();

router.get('/', getTests);
router.get('/:id', getTestById);
router.post('/', createTest);
router.put('/:id', updateTest);
router.delete('/:id', deleteTest);

export default router;
