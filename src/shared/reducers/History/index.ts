import { deleteFromHistory, addToHistory } from "./actions/HistoryActions";
import {
  getError,
  isFirstLoadingHistory,
  getHistory,
} from "./selectors/HistorySelectors";
import historyReducer from "./slice/HistorySlice";

export {
  getError,
  isFirstLoadingHistory,
  getHistory,
  deleteFromHistory,
  addToHistory,
  historyReducer,
};
