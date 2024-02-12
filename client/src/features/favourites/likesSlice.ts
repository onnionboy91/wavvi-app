import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLoadLikes, fetchAddLike, fetchLikeRemove } from '../../App/api';
import type { LikeWithOutId, LikesState } from './types';

const initialState: LikesState = {
  likes: [],
  error: undefined,
  loading: true,
};

export const loadLikes = createAsyncThunk('likes/load', () => fetchLoadLikes());

export const addLike = createAsyncThunk('likes/add', (like: LikeWithOutId) => fetchAddLike(like));

export const removeLike = createAsyncThunk('likes/remove', (like: LikeWithOutId) =>
  fetchLikeRemove(like),
);

const LikesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadLikes.fulfilled, (state, action) => {
        state.likes = action.payload;
      })
      .addCase(loadLikes.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadLikes.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addLike.fulfilled, (state, action) => {
        state.likes[state.likes.length - 1] = action.payload;
      })
      .addCase(addLike.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removeLike.fulfilled, (state, action) => {
        state.likes = state.likes.filter((like) => like.id !== +action.payload);
      })
      .addCase(removeLike.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { stopLoading } = LikesSlice.actions;
export default LikesSlice.reducer;
