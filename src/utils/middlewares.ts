import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export const validateRequest = (schema: Joi.ObjectSchema) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const message = error.details.map((el) => el.message).join(', ');
            return next(new Error(message));
        } else {
            next();
        }
    };
};
