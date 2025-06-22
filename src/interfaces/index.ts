import mongoose, { Document } from 'mongoose';

export interface IUser {
    username: string;
    email: string;
    password: string;
    role: string;
}

export interface ISurvey extends Document {
    title: string;
    description: string;
    userId: mongoose.Types.ObjectId;
    
}

export interface IQuestion extends Document {
    surveyId: mongoose.Types.ObjectId;
    question: string;
    type: 'TEXT' | 'RADIO' | 'MCQ';
    options: string[];
}
