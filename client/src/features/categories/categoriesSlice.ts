import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAddCategory, fetchCategoryRemove, fetchLoadCategories } from "../../App/api";
import type {  CategoriesState, CategoryId, CategoryWithOutId } from "./types";

const initialState: CategoriesState = {
    categories: [],
    error: undefined,
    loading: true
}

export const loadCategories = createAsyncThunk('categories/load', () => fetchLoadCategories())

export const addCategory = createAsyncThunk('categories/add', (category: CategoryWithOutId) => fetchAddCategory(category))

export const removeCategory = createAsyncThunk('categories/remove', (categoryId: CategoryId) => fetchCategoryRemove(categoryId))

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        stopLoading: (state: { loading: boolean; }) => {
            state.loading = false
        }
    },
    extraReducers: (builder: { addCase: (arg0: any, arg1: (state: any, action: any) => void) => { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any) => void): { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any, action: any) => void): { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any, action: any) => void): { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any, action: any) => void): { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any, action: any) => void): { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any, action: any) => void): void; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) => {
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
            state.categories = state.categories.filter((category: { id: number; }) => category.id !== +action.payload)
          })
          .addCase(removeCategory.rejected, (state, action) => {
            state.error = action.error.message
          })
    }
})

export const {stopLoading} = categoriesSlice.actions
export default categoriesSlice.reducer