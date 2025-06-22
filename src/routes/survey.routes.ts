import { Router } from 'express';
import * as surveyController from '../controllers/survey.controller';
import { validateRequest } from '../utils/middlewares';
import { createSurveySchema } from '../joi/survey.schema';

const surveyRouter = Router();

surveyRouter.post(
    '/',
    validateRequest(createSurveySchema),
    surveyController.createSurvey,
);

export default surveyRouter;
