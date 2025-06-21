import logger from 'loglevel';
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { getLogLevel } from './utils';
import { connectDB } from './utils/db';

const main = async () => {
    const currentLogLevel = getLogLevel();
    logger.setLevel(currentLogLevel);
    dotenv.config();

    await connectDB();

    const app = express();
    app.use(morgan('dev'));

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        logger.info(`Server started on port ${PORT}`);
    });
};

main().catch((err) => {
    logger.error('Something went terribly wrong:', err);
});
