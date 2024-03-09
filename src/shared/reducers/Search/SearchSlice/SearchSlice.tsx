import { createSlice } from "@reduxjs/toolkit";
import { Props as Item } from "../../../../entities"; //для удобства чтения

interface searchState {
  movies: Item[];
  status: "uninitialized" | "pending" | "fulfilled" | "rejected" | undefined;
  isError: boolean;
}

const initialState: searchState = {
  movies: [],
  status: "uninitialized",
  isError: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setResultSearch: (state, { payload }) => {
      payload.page !== 1
        ? (state.movies = state.movies.concat(payload.movies.slice(2)))
        : //апишка возвращает первые два одинаковых элемента поэтому slice
          (state.movies = payload.movies);
      state.isError = payload.isError;
      state.status = payload.status;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setResultSearch, setStatus } = searchSlice.actions;

export default searchSlice.reducer;
