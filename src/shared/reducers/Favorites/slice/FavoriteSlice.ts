import { createSlice } from "@reduxjs/toolkit";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../actions/FavoritesActions";

interface UserState {
  isDeletedLoading: boolean;
  isAddedLoading: boolean;
  error: string | undefined;
}

const initialState: UserState = {
  isDeletedLoading: false,
  isAddedLoading: false,
  error: undefined,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToFavorites.pending, (state) => {
        state.isAddedLoading = true;
      })
      .addCase(addToFavorites.fulfilled, (state) => {
        state.isAddedLoading = false;
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.isAddedLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteFromFavorites.pending, (state) => {
        state.isDeletedLoading = true;
      })
      .addCase(deleteFromFavorites.fulfilled, (state) => {
        state.isDeletedLoading = false;
      })
      .addCase(deleteFromFavorites.rejected, (state, action) => {
        state.isDeletedLoading = false;
        state.error = action.error.message;
      });
  },
});

export default favoriteSlice.reducer;
