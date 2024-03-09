import { createSlice } from "@reduxjs/toolkit";
import { Props as Item } from "../../../../entities";

interface searchState {
  movies: Item[];
  status: "uninitialized" | "pending" | "fulfilled" | "rejected" | undefined;
  isError: boolean;
  keyword: string | undefined;
}

const initialState: searchState = {
  movies: [],
  status: undefined,
  isError: false,
  keyword: undefined,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setResultSearch: (state, action) => {
      state.movies = action.payload.movies;
      state.isError = action.payload.isError;
      state.status = action.payload.status;
      state.keyword = action.payload.keyword;
    },
  },
});

export const { setResultSearch } = searchSlice.actions;

export default searchSlice.reducer;
