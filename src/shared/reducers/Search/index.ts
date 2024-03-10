import {
  getSearchStatus,
  getSearchMovies,
  getSearchError,
  getUpdateSearchStatus,
} from "./SearchSelectors/SearchSelector";
import {
  setResultSearch,
  setStatus,
  setStatusUpdate,
  updateResult,
} from "./SearchSlice/SearchSlice";
import searchReducer from "./SearchSlice/SearchSlice";

export {
  setResultSearch,
  getSearchStatus,
  searchReducer,
  getSearchMovies,
  getSearchError,
  getUpdateSearchStatus,
  setStatus,
  updateResult,
  setStatusUpdate,
};
