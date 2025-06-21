import Joi from 'joi';
import { IUser } from '../interfaces';

export const createUserSchema = Joi.object<IUser>({
    username: Joi.string().required().min(3).max(50),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8).max(16),
});
