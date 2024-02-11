import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCheckUser, fetchLogOut, fetchSignIn, fetchSignUp } from '../../App/api';
import type { AuthState, UserSignIn, UserSignUp } from './types';

const initialState: AuthState = {
  auth: undefined,
  error: undefined,
  passwordError: undefined, // добавили
  password: '', // Добавлено поле password
  rpassword: '',
};

export const validatePassword = (password: string): string | undefined => {
  if (password.length < 6) {
    return 'Пароль должен быть не менее 6 символов.';
  } else {
    return undefined; // Если пароль прошел валидацию, возвращаем undefined
  }
};

export const validatePasswordsMatchs = (
  password: string,
  rpassword: string,
): string | undefined => {
  if (password !== rpassword) {
    return 'Пароли не совпадают!';
  } else {
    return undefined; // Если пароли совпадают, возвращаем undefined
  }
};

export const checkUser = createAsyncThunk('auth/check', () => fetchCheckUser());

export const signIn = createAsyncThunk('auth/signIn', (user: UserSignIn) => fetchSignIn(user));

export const signUp = createAsyncThunk('auth/signUp', (user: UserSignUp) => fetchSignUp(user));

export const logOut = createAsyncThunk('auth/logOut', () => fetchLogOut());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
    setPasswordError: (state, action: PayloadAction<string | undefined>) => {
      state.passwordError = action.payload;
    },
    validatePasswordsMatchs(state, action: PayloadAction<string | undefined>) {
      const rpassword = action.payload || '';
      const passwordError = validatePasswordsMatchs(state.password, rpassword);
      state.passwordError = passwordError;
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
export const { clearError, setPasswordError } = authSlice.actions;
export default authSlice.reducer;
