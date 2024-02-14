import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchAddInstructor,
  fetchInstructorRemove,
  fetchLoadInstructors,
  fetchUpdateInstructor,
} from '../../App/api';
import type { InstructorId, InstructorUpdate, InstructorsState, NewInstructor } from './types';

const initialState: InstructorsState = {
  instructors: [],
  error: undefined,
  loading: true,
};

export const loadInstructors = createAsyncThunk('instructors/load', () => fetchLoadInstructors());

export const addInstructor = createAsyncThunk('Instructors/add', (Instructor: NewInstructor) =>
  fetchAddInstructor(Instructor),
);

export const removeInstructor = createAsyncThunk(
  'Instructors/remove',
  (InstructorId: InstructorId) => fetchInstructorRemove(InstructorId),
);

export const updateInstructor = createAsyncThunk(
  'Instructors/update',
  (Instructor: InstructorUpdate) => fetchUpdateInstructor(Instructor),
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
      })
      .addCase(updateInstructor.fulfilled, (state, action) => {
        state.instructors = state.instructors.map((instructor) => {
          if (instructor.id === action.payload.id) {
            return action.payload;
          }
          return instructor;
        });
      })
      .addCase(updateInstructor.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { stopLoading } = instructorsSlice.actions;
export default instructorsSlice.reducer;
