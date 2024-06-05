export interface User {
   id: number;
   name: string;
   avatarUrl: string;
   isLoggedIn: boolean;
}

const users: User[] = [
   {
      id: 1,
      name: 'John Doe',
      avatarUrl: '/images/alice.jpg',
      isLoggedIn: false,
   },
];

export default users;
