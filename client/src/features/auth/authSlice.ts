import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCheckUser, fetchLogOut, fetchSignIn, fetchSignUp } from '../../App/api';
import type { AuthState, UserSignIn, UserSignUp } from './types';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Регулярное выражение для проверки формата электронной почты
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialState: AuthState = {
  auth: undefined,
  error: undefined,
  passwordError: undefined,
  emailError: undefined,
  password: '',
  rpassword: '',
  email: '',
};

export const validatePassword = (password: string): string | undefined => {
  if (password.length < 6) {
    return 'Пароль должен быть не менее 6 символов.';
  } else {
    return undefined; // Если пароль прошел валидацию, возвращаем undefined
  }
};

export const validatePasswordsMatch = (password: string, rpassword: string): string | undefined => {
  if (password !== rpassword) {
    return 'Пароли не совпадают!';
  } else {
    return undefined; // Если пароли совпадают, возвращаем undefined
  }
};

export const validateEmailFormat = (email: string): string | undefined => {
  // console.log(email, 'ee');
  if (!emailRegex.test(email)) {
    return 'Некорректный формат электронной почты!';
  } else {
    return undefined;
  }
};

export const validateEmailAuthorization = (email: string): string | undefined => {
  if (!emailRegex.test(email)) {
    return 'Такой пользователь не существует или пароль неверный!';
  } else {
    return undefined;
  }
};

export const checkUser = createAsyncThunk('auth/check', () => fetchCheckUser());

export const signIn = createAsyncThunk('auth/signIn', (user: UserSignIn) => fetchSignIn(user));

export const signUp = createAsyncThunk('auth/signUp', (formData: FormData) =>
  fetchSignUp(formData),
);

export const logOut = createAsyncThunk('auth/logOut', () => fetchLogOut());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
    setPasswordErrorLength: (state, action: PayloadAction<string | undefined>) => {
      state.passwordError = action.payload;
    },
    setPasswordMatchError(state, action: PayloadAction<string | undefined>) {
      const rpassword = action.payload || '';
      const passwordError = validatePasswordsMatch(state.password, rpassword);
      state.passwordError = passwordError;
    },
    setEmailError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
    setPasswordErrorAuth: (state, action) => {
      state.passwordError = action.payload;
    },
    setEmailErrorAuth: (state, action) => {
      state.emailError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkUser.fulfilled, (state, action) => {
        state.auth = action.payload;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.auth = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.auth = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.auth = undefined;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const {
  clearError,
  setPasswordErrorLength,
  setEmailError,
  setPasswordMatchError,
  setEmailErrorAuth,
  setPasswordErrorAuth,
} = authSlice.actions;
export default authSlice.reducer;
