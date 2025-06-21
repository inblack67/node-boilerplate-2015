import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { validateRequest } from '../utils/middlewares';
import { createUserSchema } from '../joi/user.schema';

const userRouter = Router();

userRouter.get('/:id', userController.getUserById);
userRouter.post(
    '/',
    validateRequest(createUserSchema),
    userController.createUser,
);

export default userRouter;
