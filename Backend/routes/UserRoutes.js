import express, { Router } from 'express';
import {
  signinController,
  signupController,
  salryController,
} from '../controllers/userController.js';
import { isAuth } from '../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter.post('/signin', signinController);
userRouter.post('/signup', signupController);
userRouter.post('/salary', isAuth, salryController);

export default userRouter;
