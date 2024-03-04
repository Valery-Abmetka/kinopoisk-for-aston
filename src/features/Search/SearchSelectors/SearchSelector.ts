import { RootState } from "../../../app/providers/store";

export const getSearchMovies = (state: RootState) => state.search.movies;

export const getSearchIsLoading = (state: RootState) => state.search.isLoading;

export const getSearchIsError = (state: RootState) => state.search.isError;
export const getSearchKeywords = (state: RootState) => state.search.keywords;
