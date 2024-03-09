import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../app/providers/store/store";

const selectFavoritesState = (state: RootState) => state.favorite;

export const selectFavorites = createSelector(
  [selectFavoritesState],
  (favoritesState) => favoritesState.favorites,
);

export const selectIsFirstLoadingFavorites = createSelector(
  [selectFavoritesState],
  (favoritesState) => favoritesState.isFirstLoading,
);

export const selectFavoritesError = createSelector(
  [selectFavoritesState],
  (favoritesState) => favoritesState.error,
);
