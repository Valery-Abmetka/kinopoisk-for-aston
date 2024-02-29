import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../../../features/Authorization";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "auth/signup/fulfilled",
          "auth/login/rejected",
          "auth/login/fulfilled",
        ],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
