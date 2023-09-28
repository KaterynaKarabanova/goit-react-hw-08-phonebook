import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProfileThunk, loginThunk, refreshUser } from './operations';
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
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })

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
