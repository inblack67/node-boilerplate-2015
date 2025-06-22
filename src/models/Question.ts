import mongoose from 'mongoose';
import { IQuestion } from '../interfaces';

const QuestionSchema = new mongoose.Schema<IQuestion>(
    {
        surveyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Survey',
            required: [true, 'surveyId is required'],
        },
        question: {
            type: String,
            required: [true, 'question is required'],
        },
        type: {
            type: String,
            enum: ['TEXT', 'RADIO', 'MCQ'],
            required: [true, 'question type is required'],
        },
        options: {
            type: [String],
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export const QuestionModel =
    mongoose.models.Question || mongoose.model('Question', QuestionSchema);
