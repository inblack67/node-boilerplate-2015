import logger from 'loglevel';
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { getCurrentLogLevel } from './utils';
import { connectDB } from './utils/db';
import routes from './routes';

const main = async () => {
    const currentLogLevel = getCurrentLogLevel();
    logger.setLevel(currentLogLevel);
    dotenv.config();

    await connectDB();

    const app = express();
    app.use(express.json());
    app.use(morgan('dev'));

    app.use('/api/v1', routes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        logger.info(`Server started on port ${PORT}`);
    });
};

main().catch((err) => {
    logger.error('Something went terribly wrong:', err);
});
