import { SurveyModel } from '../models/Survey';
import logger from 'loglevel';
import { CreateQuestionReq, CreateSurveyReq } from '../types';
import mongoose from 'mongoose';
import { QuestionModel } from '../models/Question';

export const createSurvey = async (
    newSurveyReqBody: CreateSurveyReq,
    userId: string,
) => {
    try {
        const newSurveyObj = {
            title: newSurveyReqBody.title,
            description: newSurveyReqBody.description,
            userId,
        };
        const newSurvey = await SurveyModel.create(newSurveyObj);
        logger.info('New Survey Persisted:', newSurvey._id);
        return newSurvey;
    } catch (error) {
        logger.error('survey.repo:createSurvey:', error);
        throw error;
    }
};

const persistQuestionsOfSurvey = (
    surveyId: mongoose.Types.ObjectId,
    questions: CreateQuestionReq[],
) => {
    if (!surveyId || !questions || !questions.length)
        throw new Error('persistQuestionsOfSurvey Invalid arguments');
    const newQuestionsPayload = questions.map((qn) => ({
        ...qn,
        surveyId,
    }));
    await QuestionModel.insertMany(newQuestionsPayload);
};
