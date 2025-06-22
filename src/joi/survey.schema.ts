import Joi from 'joi';
import { CreateQuestionReq, CreateSurveyReq } from '../types';

const questionSchema = Joi.object<CreateQuestionReq>({
    question: Joi.string().required().min(10),
    type: Joi.string().valid('TEXT', 'RADIO', 'MCQ').required(),
    options: Joi.alternatives().conditional('type', {
        is: 'TEXT',
        then: Joi.array().length(0).required().messages({
            'array.length': 'Options must be empty for TEXT type',
        }),
        otherwise: Joi.array()
            .items(Joi.string().min(1))
            .min(1)
            .required()
            .messages({
                'array.min':
                    'Options must contain at least 1 item for RADIO/MCQ type',
            }),
    }),
});

export const createSurveySchema = Joi.object<CreateSurveyReq>({
    title: Joi.string().required().min(3).max(50),
    description: Joi.string().required().min(10).max(100),
    questions: Joi.array().items(questionSchema).min(1).required(),
});
