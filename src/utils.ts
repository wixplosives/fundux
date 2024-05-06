export interface User {
   id: string;
   name: string;
   email: string;
   avatar: string;
}

export const fetchUsers = async (): Promise<User[]> => {
   try {
      const response = await fetch('/data/users/users.json');
      const users = await response.json();
      return users;
   } catch (error) {
      console.error('Error fetching users:', error);
      return [];
   }
};

export const fetchUserById = async (userId: string): Promise<User | null> => {
   try {
      const users = await fetchUsers();
      return users.find((user) => user.id === userId) || null;
   } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      return null;
   }
};
