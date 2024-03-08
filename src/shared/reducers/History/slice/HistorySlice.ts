import { createSlice } from "@reduxjs/toolkit";
import { addToHistory, deleteFromHistory } from "../actions/HistoryActions";

interface UserState {
  history: string[];
  error: string | undefined;
  isFirstLoading: boolean;
}

const initialState: UserState = {
  history: [],
  error: undefined,
  isFirstLoading: true,
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    updateHistory(state, action) {
      state.history = action.payload;
    },
    setHistoryFirstLoading(state, action) {
      state.isFirstLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToHistory.fulfilled, (state, action) => {
        state.history.includes(action.payload)
          ? null
          : state.history.push(action.payload);
      })
      .addCase(addToHistory.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteFromHistory.fulfilled, (state, action) => {
        state.history = state.history.filter((el) => el !== action.payload);
      })
      .addCase(deleteFromHistory.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { updateHistory, setHistoryFirstLoading } = historySlice.actions;

export default historySlice.reducer;
