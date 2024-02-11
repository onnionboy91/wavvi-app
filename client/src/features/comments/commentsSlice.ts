import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { CommentId, CommentWithOutId, CommentsState } from "./types";
import { fetchAddComment, fetchCommentRemove, fetchLoadComments } from "../../App/api";

const initialState: CommentsState = {
    comments: [],
    error: undefined,
    loading: true
}

export const loadComments = createAsyncThunk('comments/load', () => fetchLoadComments())

export const addComment = createAsyncThunk('comments/add', (comment: CommentWithOutId) => fetchAddComment(comment) )

export const removeComment = createAsyncThunk('comments/remove', (commentId: CommentId) => fetchCommentRemove(commentId))

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        stopLoading: (state) => {
            state.loading = false
        }
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(loadComments.fulfilled, (state,action) => {
           state.comments = action.payload
        })
        .addCase(loadComments.pending, (state) => {
            state.loading = true;
        })
        .addCase(loadComments.rejected, (state, action) => {
            state.error = action.error.message;
          })
        .addCase(addComment.fulfilled, (state, action) => {
            state.comments.push(action.payload)
        })
        .addCase(addComment.rejected, (state, action) => {
            state.error = action.error.message
        })
        .addCase(removeComment.fulfilled, (state,action) => {
            state.comments = state.comments.filter((comment) => comment.id !== +action.payload)
        })
        .addCase(removeComment.rejected, (state,action) => {
            state.error= action.error.message
        })
    }
})



export const {stopLoading} = commentsSlice.actions
export default commentsSlice.reducer