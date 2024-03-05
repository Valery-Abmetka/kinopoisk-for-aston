import { createSlice } from "@reduxjs/toolkit";
import { Props as Item } from "../../../../entities";

interface searchState {
  movies: Item[];
  isLoading: boolean;
  isError: boolean;
  keywords: string[];
}

const initialState: searchState = {
  movies: [],
  isLoading: false,
  isError: false,
  keywords: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setResultSearch: (state, action) => {
      state.movies = action.payload.movies;
      state.isError = action.payload.isError;
      state.isLoading = action.payload.isLoading;
      state.keywords.push(action.payload.keywords);
    },
  },
});

export const { setResultSearch } = searchSlice.actions;

export default searchSlice.reducer;
