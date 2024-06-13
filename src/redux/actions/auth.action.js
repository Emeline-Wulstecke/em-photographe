import { createAsyncThunk } from '@reduxjs/toolkit';

export const logIn = createAsyncThunk(
  '/auth/logIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {

      const response = await fetch('http://localhost:3000/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        console.log('Response is not OK:', response);
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      const token = data.body.token;

      localStorage.setItem('token', token);

      return data;

    } catch (error) {
      console.error('Error:', error);
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem('token'); 
      sessionStorage.removeItem('token');

      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);