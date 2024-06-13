import users, { User } from './data/users';

export const fetchUserById = async (userId: number): Promise<User | null> => {
      return users.find((user) => user.id === userId) || null;
};
