import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../../../features/Authorization";
import { firestoreReducer } from "../../../features/Firestor";
import { favoriteReducer } from "../../../features/Favorites";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    firestore: firestoreReducer,
    favorite: favoriteReducer,
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
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
