import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAddInstructor, fetchInstructorRemove, fetchLoadInstructors } from '../../App/api';
import type { InstructorId, InstructorWithOutId, InstructorsState } from './types';

const initialState: InstructorsState = {
  instructors: [],
  error: undefined,
  loading: true,
};

export const loadInstructors = createAsyncThunk('Instructors/load', () => fetchLoadInstructors());

export const addInstructor = createAsyncThunk(
  'Instructors/add',
  (Instructor: InstructorWithOutId) => fetchAddInstructor(Instructor),
);

export const removeInstructor = createAsyncThunk(
  'Instructors/remove',
  (InstructorId: InstructorId) => fetchInstructorRemove(InstructorId),
);

const instructorsSlice = createSlice({
  name: 'instructors',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadInstructors.fulfilled, (state, action) => {
        state.instructors = action.payload;
      })
      .addCase(loadInstructors.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadInstructors.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addInstructor.fulfilled, (state, action) => {
        state.instructors.push(action.payload);
      })
      .addCase(addInstructor.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removeInstructor.fulfilled, (state, action) => {
        state.instructors = state.instructors.filter(
          (instructor) => instructor.id !== +action.payload,
        );
      })
      .addCase(removeInstructor.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { stopLoading } = instructorsSlice.actions;
export default instructorsSlice.reducer;
