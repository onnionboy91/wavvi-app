import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAddCategory, fetchCategoryRemove, fetchLoadCategories } from "../../App/api";
import type {  CategoriesState, CategoryId, CategoryWithOutId } from "./types";

const initialState: CategoriesState = {
    categories: [],
    error: undefined,
    loading: true
}

export const loadCategories = createAsyncThunk('categories/load', () => fetchLoadCategories())

export const addCategory = createAsyncThunk('categories/add', (formData: FormData) => fetchAddCategory(formData))

export const removeCategory = createAsyncThunk('categories/remove', (categoryId: CategoryId) => fetchCategoryRemove(categoryId))

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        stopLoading: (state) => {
            state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadCategories.fulfilled, (state,action) => {
            state.categories = action.payload
        })
        .addCase(loadCategories.pending, (state) => {
            state.loading = true;
          })
          .addCase(loadCategories.rejected, (state, action) => {
            state.error = action.error.message;
          })
          .addCase(addCategory.fulfilled, (state, action) => {
            state.categories.push(action.payload)
          })
          .addCase(addCategory.rejected, (state, action) => {
            state.error = action.error.message
          })
          .addCase(removeCategory.fulfilled, (state, action) => {
            state.categories = state.categories.filter((category) => category.id !== +action.payload)
          })
          .addCase(removeCategory.rejected, (state, action) => {
            state.error = action.error.message
          })
    }
})

export const {stopLoading} = categoriesSlice.actions
export default categoriesSlice.reducer