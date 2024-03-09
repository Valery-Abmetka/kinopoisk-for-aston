import { createSlice } from "@reduxjs/toolkit";
import { Props as Item } from "../../../../entities";

interface searchState {
  movies: Item[];
  status: "uninitialized" | "pending" | "fulfilled" | "rejected" | undefined;
  isError: boolean;
}

const initialState: searchState = {
  movies: [],
  status: undefined,
  isError: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setResultSearch: (state, { payload }) => {
      payload.page !== 1
        ? (state.movies = state.movies.concat(payload.movies.slice(2)))
        : //апишка возвращает первые два одинаковых елемента поэтому slice
          (state.movies = payload.movies);
      state.isError = payload.isError;
      state.status = payload.status;
    },
  },
});

export const { setResultSearch } = searchSlice.actions;

export default searchSlice.reducer;
