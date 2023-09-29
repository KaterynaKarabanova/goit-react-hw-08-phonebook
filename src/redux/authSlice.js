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
  isLoggedIn: false,
  isRefreshing: false,
};
const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.isLoggedIn = true;
  state.token = payload.token;
  state.profile = payload.user;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.isLoggedIn = true;
  state.profile = payload;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addCase(registrateUserThunk.fulfilled, handleFulfilled)

      .addCase(logoutThunk.fulfilled, state => {
        state.profile = null;
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(getProfileThunk.pending, state => {
        state.isRefreshing = true;
      })

      .addCase(getProfileThunk.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(
          loginThunk.pending,

          logoutThunk.pending,
          registrateUserThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          logoutThunk.rejected,
          registrateUserThunk.rejected
        ),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
