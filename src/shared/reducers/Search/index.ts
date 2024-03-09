import {
  getSearchStatus,
  getSearchMovies,
  getSearchError,
} from "./SearchSelectors/SearchSelector";
import { setResultSearch } from "./SearchSlice/SearchSlice";
import searchReducer from "./SearchSlice/SearchSlice";

export {
  setResultSearch,
  getSearchStatus,
  searchReducer,
  getSearchMovies,
  getSearchError,
};
