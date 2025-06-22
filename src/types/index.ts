export type CreateSurveyReq = {
    title: string;
    description: string;
    questions: CreateQuestionReq[];
};

export type CreateQuestionReq = {
    question: string;
    type: string;
    options?: string[];
};
