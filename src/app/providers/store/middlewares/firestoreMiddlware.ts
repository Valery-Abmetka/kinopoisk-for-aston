import {
  createListenerMiddleware,
  TypedStartListening,
} from "@reduxjs/toolkit";

import { RootState, store } from "../store";
import {
  setHistoryFirstLoading,
  updateHistory,
} from "../../../../shared/reducers/History/slice/HistorySlice";
import {
  setFavoritesFirstLoading,
  updateFavorites,
} from "../../../../shared/reducers/Favorites/slice/FavoriteSlice";

type Dispatch = typeof store.dispatch;
type AppStartListening = TypedStartListening<RootState, Dispatch>;

export const firestoreMiddleware = createListenerMiddleware();

const startTypedListening =
  firestoreMiddleware.startListening as AppStartListening;

startTypedListening({
  type: "firestor/getDbProfile/rejected",
  effect: (_, { dispatch }) => {
    dispatch(setHistoryFirstLoading(false));
    dispatch(setFavoritesFirstLoading(false));
  },
});

startTypedListening({
  type: "firestor/getDbProfile/fulfilled",
  effect: (_, { getState, dispatch }) => {
    const { history, favorites } = getState().firestore.user;
    dispatch(updateHistory(history));
    dispatch(updateFavorites(favorites));
    dispatch(setHistoryFirstLoading(false));
    dispatch(setFavoritesFirstLoading(false));
  },
});

startTypedListening({
  type: "firestor/getDbProfile/pending",
  effect: (_, { dispatch }) => {
    dispatch(setHistoryFirstLoading(true));
    dispatch(setFavoritesFirstLoading(true));
  },
});
