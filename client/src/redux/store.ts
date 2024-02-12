import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/auth/authSlice';
import instructorsSlice from '../features/instructors/instructorsSlice';
import categoriesSlice from '../features/categories/categoriesSlice';
import commentsSlice from '../features/comments/commentsSlice';
import videosSlice from '../features/videos/videosSlice';
import likesSlice from '../features/favourites/likesSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    instructors: instructorsSlice,
    categories: categoriesSlice,
    comments: commentsSlice,
    videos: videosSlice,
    likes: likesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
