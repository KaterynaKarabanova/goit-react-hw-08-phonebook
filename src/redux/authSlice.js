import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProfileThunk, loginThunk } from './operations';
const initialState = {
  token: '',
  isLoading: false,
  error: '',
  profile: null,
};
const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  console.log(payload);
  state.token = payload.token;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  console.log(payload);
  state.profile = payload;
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.profile = null;
      state.token = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addMatcher(
        isAnyOf(loginThunk.pending, getProfileThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(loginThunk.rejected, getProfileThunk.rejected),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
