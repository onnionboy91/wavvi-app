import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchAddCategory, fetchCategoryRemove, fetchLoadCategories } from "../../App/api";
import { VideosState } from './types';
import { fetchLoadVideos, fetchLoadVideosAll } from '../../App/api';
import { CategoryId } from '../categories/types';

const initialState: VideosState = {
  videos: [],
  error: undefined,
  loading: true,
};

export const loadVideos = createAsyncThunk('videos/load', (id: CategoryId) => fetchLoadVideos(id));

export const loadVideosAll = createAsyncThunk('videos/loadAll', () => fetchLoadVideosAll());

// export const addCategory = createAsyncThunk('categories/add', (category: CategoryWithOutId) => fetchAddCategory(category))

// export const removeCategory = createAsyncThunk('categories/remove', (categoryId: CategoryId) => fetchCategoryRemove(categoryId))

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
      });
    // .addCase(addCategory.fulfilled, (state, action) => {
    //   state.categories.push(action.payload)
    // })
    // .addCase(addCategory.rejected, (state, action) => {
    //   state.error = action.error.message
    // })
    // .addCase(removeCategory.fulfilled, (state, action) => {
    //   state.categories = state.categories.filter((category) => category.id !== +action.payload)
    // })
    // .addCase(removeCategory.rejected, (state, action) => {
    //   state.error = action.error.message
    // })
  },
});

//export const {stopLoading} = videosSlice.actions
export default videosSlice.reducer;
