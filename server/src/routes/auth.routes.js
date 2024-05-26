import { Router } from 'express';
import { signUp, logIn, logOut, recoverPassword } from '../controller/auth.controller.js';

const router = Router();

router.post('/signup', signUp);
router.post('/login', logIn);
router.post('/logout', logOut);
router.post('/recover', recoverPassword);

export default router;
