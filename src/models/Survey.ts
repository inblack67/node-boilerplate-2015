import mongoose from 'mongoose';
import { ISurvey } from '../interfaces';

const SurveySchema = new mongoose.Schema<ISurvey>(
    {
        title: {
            type: String,
            required: [true, 'title is required'],
        },
        description: {
            type: String,
            required: [true, 'description is required'],
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'userId is required'],
        },
    },
    {
        timestamps: true,
    },
);

export const SurveyModel =
    mongoose.models.Survey || mongoose.model('Survey', SurveySchema);
