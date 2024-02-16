import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLoadVideosAll } from '../../App/api';
import { VideosWithLikesState } from '../videos/types';

const initialState: VideosWithLikesState = {
  videosWithLikes: [],
  error: undefined,
  loading: true,
};

export const loadVideosAll = createAsyncThunk('videosWithLikes/load', () => fetchLoadVideosAll());

const VideosWithLikesSlice = createSlice({
  name: 'videosWithLikes',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(loadVideosAll.fulfilled, (state, action) => {
        state.videosWithLikes = action.payload;
      })
      .addCase(loadVideosAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadVideosAll.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { stopLoading } = VideosWithLikesSlice.actions;
export default VideosWithLikesSlice.reducer;
