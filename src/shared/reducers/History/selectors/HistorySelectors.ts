import { RootState } from "../../../../app/providers/store/store";

export const getHistory = (state: RootState) => state.history.history;
export const isFirstLoadingHistory = (state: RootState) =>
  state.history.isFirstLoading;
export const getError = (state: RootState) => state.history.error;
