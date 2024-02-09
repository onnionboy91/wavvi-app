import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/auth/authSlice';
import categoriesSlice from '../features/categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    categories: categoriesSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
