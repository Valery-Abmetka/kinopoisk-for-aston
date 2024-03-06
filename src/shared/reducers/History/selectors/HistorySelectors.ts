import { RootState } from "../../../../app/providers/store/store";

export const isLoadingSetHistory = (state: RootState) =>
  state.history.isLoading;
export const errorSetHistory = (state: RootState) => state.history.error;
