import type { User } from '../../features/auth/types';
import { Category } from '../../features/categories/types';
import type { Video } from "../../features/videos/types";

export type UsersState = {
  users: User[];
};

export type AuthState = {
  auth: User | undefined;
};

export type Action =
  | { type: 'auth/sign-up'; payload: User }
  | { type: 'auth/sign-in'; payload: User }
  | { type: 'auth/logout' }
  | { type: 'categories/load'; payload: Category[] }
  | { type: 'videos/load'; payload: Video[] }
