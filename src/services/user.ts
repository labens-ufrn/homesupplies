import { User } from "../models";
import {
    getUsers,
    createUser,
    getUser,
} from "../repositories/user";

export interface IUserPayload {
    firstName: string;
    lastName: string;
    email: string;
}

export class UserService {

    public async getUsers(): Promise<Array<User>> {
        return getUsers();
    }

    public async createUser(payload: IUserPayload): Promise<User> {
        const user = new User();
        return createUser({
            ...user,
            ...payload,
        });
    }

    public async getUser(id: number): Promise<User | null> {
        return getUser(id);
    }
}
