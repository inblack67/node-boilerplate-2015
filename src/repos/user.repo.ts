import { IUser } from '../interfaces';
import { UserModel } from '../models/User';

export const getUserById = async (id: string): Promise<IUser | null> => {
    return UserModel.findOne({ _id: id }).lean();
};

export const createUser = async (user: IUser) => {
    return await UserModel.create(user);
};
