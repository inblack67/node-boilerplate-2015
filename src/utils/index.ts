import { LogLevelDesc } from 'loglevel';

export const getCurrentLogLevel = (): LogLevelDesc => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return 'error';
        case 'dev':
            return 'info';
        case 'test':
            return 'debug';

        default:
            return 'info';
    }
};
