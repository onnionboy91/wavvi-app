export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  img: string;
  role: string;
  level?: string;
  styleDance?: string;
  description?: string;
};

export type AuthState = {
  auth: User | undefined;
  error: string | undefined;
  passwordError: string | undefined;
  profileError: string | undefined;
  password: string;
  rpassword: string;
  email: string;
  emailError: string | undefined;
};

export type UserSignIn = Omit<User, 'id' | 'name' | 'role' | 'img'>;

export type UserSignUp = Omit<User, 'id'> & { rpassword: string };

export type UserWithOutId = Omit<User, 'id'>;
