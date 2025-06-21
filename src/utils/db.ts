import mongoose from 'mongoose';
import logger from 'loglevel';

export const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) throw new Error('mongoURI is required');
        await mongoose.connect(mongoURI, {
            dbName: 'mydb',
        });
        logger.info('DB connected successfully');
    } catch (error) {
        logger.error('Failed to connect to db', error);
        throw error;
    }
};
