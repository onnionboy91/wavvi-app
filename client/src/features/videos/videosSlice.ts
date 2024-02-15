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
  extraReducers: (builder: { addCase: (arg0: any, arg1: (state: any, action: any) => void) => { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any) => void): { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any, action: any) => void): { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any, action: any) => void): { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any) => void): { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any, action: any) => void): { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any, action: any) => void): { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any, action: any) => void): { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any, action: any) => void): { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any, action: any) => void): void; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) => {
    builder
      .addCase(loadVideos.fulfilled, (state: { videos: any; loading: boolean; }, action: { payload: any; }) => {
        state.videos = action.payload;
        state.loading = false;
      })
      .addCase(loadVideos.pending, (state: { loading: boolean; }) => {
        state.loading = true;
      })
      .addCase(loadVideos.rejected, (state: { error: any; loading: boolean; }, action: { error: { message: any; }; }) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(loadVideosAll.fulfilled, (state: { videos: any; loading: boolean; }, action: { payload: any; }) => {
        state.videos = action.payload;
        state.loading = false;
      })
      .addCase(loadVideosAll.pending, (state: { loading: boolean; }) => {
        state.loading = true;
      })
      .addCase(loadVideosAll.rejected, (state: { error: any; loading: boolean; }, action: { error: { message: any; }; }) => {
        state.error = action.error.message;
        state.loading = false;
      })
    .addCase(addVideo.fulfilled, (state: { videos: any[]; }, action: { payload: any; }) => {
      state.videos.push(action.payload)
    })
    .addCase(addVideo.rejected, (state: { error: any; }, action: { error: { message: any; }; }) => {
      state.error = action.error.message
    })
    .addCase(removeVideo.fulfilled, (state: { videos: any[]; }, action: { payload: string | number; }) => {
      state.videos = state.videos.filter((video: { id: number; }) => video.id !== +action.payload)
    })
    .addCase(removeVideo.rejected, (state: { error: any; }, action: { error: { message: any; }; }) => {
      state.error = action.error.message
    })
  },
});

//export const {stopLoading} = videosSlice.actions
export default videosSlice.reducer;
