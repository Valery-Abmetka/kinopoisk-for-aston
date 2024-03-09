import { RootState } from "../../../../app/providers/store/store";

export const getSearchMovies = (state: RootState) => state.search.movies;

export const getSearchStatus = (state: RootState) => state.search.status;

export const getSearchError = (state: RootState) => state.search.isError;

export const getSearchKeyword = (state: RootState) => state.search.keyword;
