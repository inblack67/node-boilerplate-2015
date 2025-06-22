import { NextFunction, Request, Response } from 'express';
import * as surveyService from '../services/survey.service';
import logger from 'loglevel';

export const createSurvey = async (
    req: Request,
    res: Response,
    _next: NextFunction,
) => {
    try {
        const body = req.body;
        console.log('headers:', req.headers);
        console.log('header:', req.header);
        const userId = req.headers.userid;
        if (!userId) throw new Error('userId is required');
        const newSurvey = await surveyService.createSurvey(
            body,
            userId as string,
        );
        res.status(201).json({
            success: true,
            message: 'Request Successfull',
            data: newSurvey,
        });
    } catch (error) {
        logger.error('survey.controller:createSurvey:', error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};
