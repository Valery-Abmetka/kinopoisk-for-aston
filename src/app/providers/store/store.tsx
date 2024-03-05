import { configureStore } from "@reduxjs/toolkit";
import { kinopoiskApi } from "../../../shared/api/kinopoiskApi/kinopoiskApi";
import { authReducer } from "../../../shared/reducers/Authorization";
import { favoriteReducer } from "../../../shared/reducers/Favorites";
import { firestoreReducer } from "../../../shared/reducers/Firestor";
import { searchReducer } from "../../../shared/reducers/Search";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    firestore: firestoreReducer,
    favorite: favoriteReducer,
    search: searchReducer,
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
        ],
      },
    }).concat(kinopoiskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;