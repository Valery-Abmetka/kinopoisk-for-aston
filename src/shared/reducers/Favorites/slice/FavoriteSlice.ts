import { createSlice } from "@reduxjs/toolkit";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../actions/FavoritesActions";

interface UserState {
  isLoading: boolean;
  error: string | undefined;
}

const initialState: UserState = {
  isLoading: false,
  error: undefined,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToFavorites.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteFromFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFromFavorites.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteFromFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default favoriteSlice.reducer;
