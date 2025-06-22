import * as surveyRepo from '../repos/survey.repo';
import { CreateSurveyReq } from '../types';
import logger from 'loglevel';

export const createSurvey = async (
    newSurveyReqBody: CreateSurveyReq,
    userId: string,
) => {
    try {
        return await surveyRepo.createSurvey(newSurveyReqBody, userId);
    } catch (error) {
        logger.error('survey.service:createSurvey:', error);
        throw error;
    }
};
