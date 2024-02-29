import { createSlice } from "@reduxjs/toolkit";
import { checkAuth, signup } from "../";
import { login, logout } from "../actions/AuthActions";

interface AuthState {
  isAuthenticated: boolean;
  email: string | null;
  isLoading: boolean;
  error: string | undefined;
}
const initialState: AuthState = {
  email: null,
  isAuthenticated: false,
  isLoading: true,
  error: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthorized(state, action) {
      state.email = action.payload.email;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.email = action.payload.email;
        state.isAuthenticated = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.email = action.payload.email;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.email = null;
        state.isAuthenticated = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setAuthorized } = authSlice.actions;

export default authSlice.reducer;