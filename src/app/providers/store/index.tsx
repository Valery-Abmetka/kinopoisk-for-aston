import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../../../features/Authorization";
import { firestoreReducer } from "../../../features/Firestor";
import { favoriteReducer } from "../../../features/Favorites";
import { kinopoiskApi } from "../../../shared/api/kinopoiskApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    firestore: firestoreReducer,
    favorite: favoriteReducer,
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
