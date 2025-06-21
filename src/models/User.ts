import mongoose, { Model, Schema } from 'mongoose';
import { IUser } from '../interfaces';

const UserSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            required: [true, 'username is required'],
            unique: true,
        },
        email: {
            type: String,
            required: [true, 'email is required'],
        },
        password: {
            type: String,
            required: [true, 'password is required'],
        },
    },
    { timestamps: true },
);

export const UserModel: Model<IUser> =
    mongoose.models.User || mongoose.model('User', UserSchema);
