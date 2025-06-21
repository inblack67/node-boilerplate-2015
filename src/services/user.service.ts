import { IUser } from '../interfaces';
import * as userRepo from '../repos/user.repo';

export const getUserById = async (id: string): Promise<IUser | null> => {
    return await userRepo.getUserById(id);
};

export const createUser = async (user: IUser) => {
    return await userRepo.createUser(user);
};
