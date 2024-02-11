import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/auth/authSlice';
import instructorsSlice from '../features/instructors/instructorsSlice';
import categoriesSlice from '../features/categories/categoriesSlice';
import videosSlice from "../features/videos/videosSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    instructors: instructorsSlice,
    categories: categoriesSlice,
    videos: videosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
