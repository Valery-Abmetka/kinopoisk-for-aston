import { createSlice } from "@reduxjs/toolkit";
import { addToHistory, deleteFromHistory } from "../actions/HistoryActions";

interface UserState {
  isLoading: boolean;
  error: string | undefined;
  history: string[];
}

const initialState: UserState = {
  history: [],
  isLoading: false,
  error: undefined,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.history.push(action.payload);
      })
      .addCase(addToHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteFromHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFromHistory.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteFromHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default favoriteSlice.reducer;
