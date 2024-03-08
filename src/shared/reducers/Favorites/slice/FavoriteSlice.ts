import { createSlice } from "@reduxjs/toolkit";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../actions/FavoritesActions";

interface UserState {
  favorites: number[];
  isLoading: boolean;
  error: string | undefined;
  isFirstLoading: boolean;
}

const initialState: UserState = {
  favorites: [],
  isLoading: false,
  error: undefined,
  isFirstLoading: true,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    updateFavorites(state, action) {
      state.favorites = action.payload;
      state.isLoading = false;
    },
    setFavoritesFirstLoading(state, action) {
      state.isFirstLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites.push(action.payload);
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteFromFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFromFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites.filter((el) => el !== action.payload);
      })
      .addCase(deleteFromFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { updateFavorites, setFavoritesFirstLoading } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
