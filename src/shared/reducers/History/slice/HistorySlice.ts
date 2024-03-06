import { createSlice } from "@reduxjs/toolkit";
import { addToHistory, deleteFromHistory } from "../actions/HistoryActions";

interface UserState {
  isLoading: boolean;
  error: string | undefined;
}

const initialState: UserState = {
  isLoading: false,
  error: undefined,
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToHistory.fulfilled, (state) => {
        state.isLoading = false;
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

export default historySlice.reducer;
