import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export const validateRequest = (schema: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const message = error.details.map((el) => el.message).join(', ');
            res.status(400).json({ success: false, message: message });
            return;
        }
        next();
    };
};
