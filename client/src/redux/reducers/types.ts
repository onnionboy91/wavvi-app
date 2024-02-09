import type { User } from '../../features/auth/types';

export type UsersState = {
  users: User[];
};

export type AuthState = {
  auth: User | undefined;
};

export type Action =
  | { type: 'auth/sign-up'; payload: User }
  | { type: 'auth/sign-in'; payload: User }
  | { type: 'auth/logout' };
