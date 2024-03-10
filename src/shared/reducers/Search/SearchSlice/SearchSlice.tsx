import { createSlice } from "@reduxjs/toolkit";
import { Props as Item } from "../../../../entities"; //для удобства чтения

interface searchState {
  movies: Item[];
  status: "uninitialized" | "pending" | "fulfilled" | "rejected" | undefined;
  isError: boolean;
  statusUpdate:
    | "uninitialized"
    | "pending"
    | "fulfilled"
    | "rejected"
    | undefined;
}

const initialState: searchState = {
  movies: [],
  status: "uninitialized",
  isError: false,
  statusUpdate: undefined,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setResultSearch: (state, { payload }) => {
      state.movies = payload.movies;
      state.isError = payload.isError;
      state.status = payload.status;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    updateResult(state, { payload }) {
      state.movies = state.movies.concat(payload.movies.slice(2));
      //апишка возвращает первые два одинаковых элемента поэтому slice
      state.isError = payload.isError;
      state.statusUpdate = payload.status;
    },
    setStatusUpdate: (state, action) => {
      state.statusUpdate = action.payload;
    },
  },
});

export const { setResultSearch, setStatus, updateResult, setStatusUpdate } =
  searchSlice.actions;

export default searchSlice.reducer;
