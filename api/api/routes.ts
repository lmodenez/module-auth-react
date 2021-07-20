import { Router } from 'express';

import { AuthController } from './app/controllers/AuthController';
import { UserController } from './app/controllers/UserController';
import { ResetMailController } from './app/controllers/ResetMailController';
import { ConfirmMailController } from './app/controllers/ConfirmMailController';

import { authMiddleware } from './app/middlewares/authMiddleware';

const authController = new AuthController();
const userController = new UserController();
const resetMailController = new ResetMailController();
const confirmMailController = new ConfirmMailController();

const router = Router();

router.post('/auth', authController.authenticate);
router.post('/users', userController.create);
router.post('/mail', resetMailController.execute);
router.post('/reset', resetMailController.reset);
router.post('/mailconfirm', confirmMailController.send);
router.post('/confirm', confirmMailController.confirm);

export default router;
