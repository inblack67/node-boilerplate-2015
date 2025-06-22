import { Router } from 'express';
import userRouter from './user.routes';
import surveyRouter from './survey.routes';

const router = Router();

router.use('/users', userRouter);
router.use('/surveys', surveyRouter);

export default router;
