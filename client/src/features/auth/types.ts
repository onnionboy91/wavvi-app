export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  img: string;
  role: string;
};

export type AuthState = {
  auth: User | undefined;
  error: string | undefined;
  passwordError: string | undefined;
  password: string;
  rpassword: string;
};

export type UserSignIn = Omit<User, 'id' | 'name' | 'role'>;

export type UserSignUp = Omit<User, 'id'> & { rpassword: string };

export type UserWithOutId = Omit<User, 'id'>;
