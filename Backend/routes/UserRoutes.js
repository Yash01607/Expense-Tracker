import express, { Router } from 'express';
import {
  signinController,
  signupController,
  salryController,
  addExpenses,
  deleteExpense,
} from '../controllers/userController.js';
import { isAuth } from '../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter.post('/signin', signinController);
userRouter.post('/signup', signupController);
userRouter.post('/salary', isAuth, salryController);
userRouter.post('/addexpense', isAuth, addExpenses);
userRouter.post('/deleteexpense', isAuth, deleteExpense);

export default userRouter;
