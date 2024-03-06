import { RootState } from "../../../../app/providers/store/store";

export const isLoadingSetHistory = (state: RootState) =>
  state.favorite.isLoading;
export const errorSetHistory = (state: RootState) => state.favorite.error;
