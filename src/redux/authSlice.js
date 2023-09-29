import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getProfileThunk,
  loginThunk,
  logoutThunk,
  registrateUserThunk,
} from './operations';
const initialState = {
  token: '',
  isLoading: false,
  error: '',
  profile: null,
  isRefreshing: false,
};
const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.profile = payload;
};
const handleRegistrate = state => {
  state.isLoading = false;
  state.error = '';
  alert('You`ve been successfully registrated');
};
const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addCase(registrateUserThunk.fulfilled, handleRegistrate)

      .addCase(logoutThunk.fulfilled, state => {
        state.profile = null;
        state.token = '';
        state.user = null;
      })

      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          getProfileThunk.pending,
          logoutThunk.pending,
          registrateUserThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          getProfileThunk.rejected,
          logoutThunk.rejected,
          registrateUserThunk.rejected
        ),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
