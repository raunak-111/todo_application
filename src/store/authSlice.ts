import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './types';

interface AuthState {
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  message: {
    type: string;
    text: string;
    color: string;
  } | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  message: null,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/login', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.loading = false;
      state.error = null;
      state.isAuthenticated = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.message = {
          type: 'success',
          text: 'Login successful',
          color: 'green-600', // Change this to the appropriate green color
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.isAuthenticated = false;
        state.message = {
          type: 'error',
          text: action.payload,
          color: 'green-600', // Change this to the appropriate green color
        };
      });
  },
});

export const { logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;