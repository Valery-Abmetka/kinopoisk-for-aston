import { createSlice } from "@reduxjs/toolkit";
import { getDbProfile, setDbProfile } from "..";

interface UserState {
  user: {
    email: null | string;
    id: null | string;
    favorites: number[];
    history: [];
  };
  isBdLoading: boolean;
  error: string | undefined;
}

const initialState: UserState = {
  user: {
    email: null,
    id: null,
    favorites: [],
    history: [],
  },
  isBdLoading: false,
  error: undefined,
};

const firestorSlice = createSlice({
  name: "firestor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setDbProfile.pending, (state) => {
        state.isBdLoading = true;
      })
      .addCase(setDbProfile.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.id = action.payload.id;
        state.isBdLoading = false;
      })
      .addCase(setDbProfile.rejected, (state, action) => {
        state.isBdLoading = false;
        state.error = action.error.message;
      })
      .addCase(getDbProfile.pending, (state) => {
        state.isBdLoading = true;
      })
      .addCase(getDbProfile.fulfilled, (state, action) => {
        state.user.favorites = action.payload.favorites;
        state.user.id = action.payload.id;
        state.isBdLoading = false;
      })
      .addCase(getDbProfile.rejected, (state, action) => {
        state.isBdLoading = false;
        state.error = action.error.message;
      });
  },
});

export default firestorSlice.reducer;
