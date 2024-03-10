import { configureStore } from "@reduxjs/toolkit";
import { kinopoiskApi } from "../../../shared/api/kinopoiskApi/kinopoiskApi";
import { authReducer } from "../../../shared/reducers/Authorization";
import { favoriteReducer } from "../../../shared/reducers/Favorites";
import { firestoreReducer } from "../../../shared/reducers/Profile/Firestore";
import { searchReducer } from "../../../shared/reducers/Search";
import { historyReducer } from "../../../shared/reducers/History/";
import { AuthLogsMiddleware, firestoreMiddleware } from "../";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    firestore: firestoreReducer,
    favorite: favoriteReducer,
    search: searchReducer,
    history: historyReducer,
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "auth/signup/fulfilled",
          "auth/signup/rejected",
          "auth/login/rejected",
          "auth/login/fulfilled",
          "search/setResultSearch",
          "search/updateResult",
        ],
      },
    })
      .concat(kinopoiskApi.middleware)
      .concat(AuthLogsMiddleware.middleware)
      .concat(firestoreMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
