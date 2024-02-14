import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchAddCategory, fetchCategoryRemove, fetchLoadCategories } from "../../App/api";
import { VideoWithOutId, VideosState, VideoId } from './types';
import { fetchLoadVideos, fetchLoadVideosAll } from '../../App/api';
import { CategoryId } from '../categories/types';
import { fetchAddVideo, fetchVideoRemove } from '../../App/api.video';

const initialState: VideosState = {
  videos: [],
  error: undefined,
  loading: true,
};

export const loadVideos = createAsyncThunk('videos/load', (id: CategoryId) => fetchLoadVideos(id));

export const loadVideosAll = createAsyncThunk('videos/loadAll', () => fetchLoadVideosAll());

export const addVideo = createAsyncThunk('videos/add', (video: VideoWithOutId) => fetchAddVideo(video))

export const removeVideo = createAsyncThunk('categories/remove', (videoId: VideoId) => fetchVideoRemove(videoId))

const videosSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadVideos.fulfilled, (state, action) => {
        state.videos = action.payload;
        state.loading = false;
      })
      .addCase(loadVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadVideos.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(loadVideosAll.fulfilled, (state, action) => {
        state.videos = action.payload;
        state.loading = false;
      })
      .addCase(loadVideosAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadVideosAll.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
    .addCase(addVideo.fulfilled, (state, action) => {
      state.videos.push(action.payload)
    })
    .addCase(addVideo.rejected, (state, action) => {
      state.error = action.error.message
    })
    .addCase(removeVideo.fulfilled, (state, action) => {
      state.videos = state.videos.filter((video) => video.id !== +action.payload)
    })
    .addCase(removeVideo.rejected, (state, action) => {
      state.error = action.error.message
    })
  },
});

//export const {stopLoading} = videosSlice.actions
export default videosSlice.reducer;
