import { createSlice } from "@reduxjs/toolkit";
import { signup } from "../actions/AuthActions";

interface AuthState {
  isAuthenticated: boolean;
  email: string | null;
  isLoading: boolean;
  error: string | undefined;
}
const initialState: AuthState = {
  email: null,
  isAuthenticated: false,
  isLoading: false,
  error: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
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
      });
  },
});

export default authSlice.reducer;
