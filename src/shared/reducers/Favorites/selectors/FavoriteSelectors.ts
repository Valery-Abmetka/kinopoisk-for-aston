import { RootState } from "../../../../app/providers/store/store";

export const getFavorites = (state: RootState) => state.favorite.favorites;
export const isFirstLoadingFavorites = (state: RootState) =>
  state.favorite.isFirstLoading;
export const getError = (state: RootState) => state.history.error;
