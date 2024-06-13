import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, getProfile, editUsername } from '../actions/auth.actions';

const initialState = {
  isAuthenticated: false,
  user: {
    firstName: "",
    lastName: "",
  },
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.token = null;
        state.user = null;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      })
  },
});

export default authSlice.reducer;