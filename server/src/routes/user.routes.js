import { Router } from 'express';
import { createUser, getUsers, getUserById, getSessionUser, updateUser, deleteUser } from '../controller/user.controller.js';

const router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/session', getSessionUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
