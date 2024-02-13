import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../auth/types';
import { fetchProfileUpdate } from '../../App/api';

interface UserState {
  userInfo: User | null;
  loading: boolean;
  error: string | undefined;
}

const initialState: UserState = {
  userInfo: null,
  loading: false,
  error: undefined,
};

export const profileUpdate = createAsyncThunk('profile/update', (user: User) =>
  fetchProfileUpdate(user),
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profileUpdate.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      })
      .addCase(profileUpdate.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;

// - userInfo представляет информацию о пользователе (объект User) или может быть null, если информация не
//загружена или отсутствует.
// - loading является логическим значением (boolean), указывающим на состояние загрузки данных пользователя.
//Если loading равно true, то данные загружаются; если loading равно false, то данные загружены или нет загрузки.
// - error представляет строку сообщения об ошибке, если что-то пошло не так при загрузке или обновлении
//данных пользователя. Если ошибки нет, то значение error будет null.
