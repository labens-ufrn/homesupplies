import { getRepository } from "typeorm";
import { User } from "../models";

export const getUsers = async (): Promise<Array<User>> => {
  const userRepository = getRepository(User);
  return userRepository.find();
};

export const createUser = async (user: User): Promise<User> => {
  const userRepository = getRepository(User);
  return userRepository.save(user);
};

export const getUser = async (id: number): Promise<User | null> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ id: id });
  if (!user) return null;
  return user;
};
