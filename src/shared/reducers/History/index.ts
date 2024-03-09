import { deleteFromHistory, addToHistory } from "./actions/HistoryActions";
import {
  selectIsHistoryError,
  selectHistory,
  selectIsFirstLoadingHistory,
} from "./selectors/HistorySelectors";

import historyReducer from "./slice/HistorySlice";

export {
  selectIsHistoryError,
  selectIsFirstLoadingHistory,
  selectHistory,
  deleteFromHistory,
  addToHistory,
  historyReducer,
};
