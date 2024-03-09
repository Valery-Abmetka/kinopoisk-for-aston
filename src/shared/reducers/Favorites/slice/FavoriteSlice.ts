import { createSlice } from "@reduxjs/toolkit";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../actions/FavoritesActions";

interface UserState {
  favorites: number[];
  error: string | undefined;
  isFirstLoading: boolean;
}

const initialState: UserState = {
  favorites: [],
  error: undefined,
  isFirstLoading: true,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    updateFavorites(state, action) {
      state.favorites = action.payload;
    },
    setFavoritesFirstLoading(state, action) {
      state.isFirstLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteFromFavorites.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter((el) => el !== action.payload);
      })
      .addCase(deleteFromFavorites.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { updateFavorites, setFavoritesFirstLoading } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
