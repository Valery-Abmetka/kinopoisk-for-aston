import {
  getSearchIsError,
  getSearchIsLoading,
  getSearchKeywords,
  getSearchMovies,
} from "./SearchSelectors/SearchSelector";
import { setResultSearch } from "./SearchSlice/SearchSlice";
import searchReducer from "./SearchSlice/SearchSlice";

export {
  setResultSearch,
  searchReducer,
  getSearchMovies,
  getSearchIsLoading,
  getSearchIsError,
  getSearchKeywords,
};
