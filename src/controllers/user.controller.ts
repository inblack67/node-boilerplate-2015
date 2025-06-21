import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';
import logger from 'loglevel';

export const getUserById = async (
    req: Request,
    res: Response,
    _next: NextFunction,
) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) {
            res.status(404).json({ success: false, message: 'User not found' });
            return;
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        logger.error('getUserById:', error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

export const createUser = async (
    req: Request,
    res: Response,
    _next: NextFunction,
) => {
    try {
        const body = req.body;
        const newUser = await userService.createUser(body);
        res.status(201).json({
            success: true,
            data: newUser,
            message: 'New user created successfully',
        });
    } catch (error) {
        logger.error('getUserById:', error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};
