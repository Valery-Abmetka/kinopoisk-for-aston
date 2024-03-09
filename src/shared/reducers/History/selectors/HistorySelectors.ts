import { RootState } from "../../../../app/providers/store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectHistoryState = (state: RootState) => state.history;

export const selectHistory = createSelector(
  [selectHistoryState],
  (historyState) => historyState.history,
);

export const selectIsFirstLoadingHistory = createSelector(
  [selectHistoryState],
  (historyState) => historyState.isFirstLoading,
);

export const selectIsHistoryError = createSelector(
  [selectHistoryState],
  (historyState) => historyState.error,
);
