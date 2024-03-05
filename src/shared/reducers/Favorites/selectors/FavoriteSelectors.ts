import { RootState } from "../../../../app/providers/store/store";

export const isLoadingFavoriteButton = (state: RootState) =>
  state.favorite.isLoading;
export const errorFavoriteButton = (state: RootState) => state.favorite.error;
