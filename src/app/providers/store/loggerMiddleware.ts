/* eslint-disable no-console */
import {
  createListenerMiddleware,
  TypedStartListening,
} from "@reduxjs/toolkit";

import { RootState, store } from "./store";

type Dispatch = typeof store.dispatch;
type AppStartListening = TypedStartListening<RootState, Dispatch>;

export const AuthLogsMiddleware = createListenerMiddleware();

const startTypedListening =
  AuthLogsMiddleware.startListening as AppStartListening;

startTypedListening({
  type: "auth/signup/rejected",
  effect: (_, { getState }) => {
    const error = getState().auth.error;
    console.log(`Произошла ошибка регистрации: ${error}`);
  },
});

startTypedListening({
  type: "auth/signup/fulfilled",
  effect: (_, { getState }) => {
    const email = getState().auth.email;
    console.log(`Регистрация прошла успешно, ваш email: ${email}`);
  },
});

startTypedListening({
  type: "auth/signup/pending",
  effect: (_, { getState }) => {
    const loading = getState().auth.isLoading;
    console.log(`Пробуем зарегстрировать вашими данные, загрузка: ${loading}`);
  },
});

startTypedListening({
  type: "auth/login/rejected",
  effect: (_, { getState }) => {
    const error = getState().auth.error;
    console.log(`При входе произошла ошибка регистрации: ${error}`);
  },
});

startTypedListening({
  type: "auth/login/fulfilled",
  effect: (_, { getState }) => {
    const email = getState().auth.email;
    console.log(`Вход прошел успешно, ваш email: ${email}`);
  },
});

startTypedListening({
  type: "auth/login/pending",
  effect: (_, { getState }) => {
    const loading = getState().auth.isLoading;
    console.log(`Пробуем зайти с вашими данными, загрузка: ${loading}`);
  },
});

startTypedListening({
  type: "auth/checkAuth/rejected",
  effect: (_, { getState }) => {
    const error = getState().auth.error;
    console.log(`При входе произошла ошибка регистрации: ${error}`);
  },
});

startTypedListening({
  type: "auth/checkAuth/fulfilled",
  effect: (_, { getState }) => {
    const email = getState().auth.email;
    const isAuthenticated = getState().auth.isAuthenticated;
    if (isAuthenticated) {
      console.log(`Проверка прошла успешно, вы зашли под: ${email}`);
    } else {
      console.log(`Проверка прошла успешно, вы не авторизованны`);
    }
  },
});

startTypedListening({
  type: "auth/checkAuth/pending",
  effect: (_, { getState }) => {
    const loading = getState().auth.isLoading;
    console.log(`Проверяем авторизованы ли вы, загрузка: ${loading}`);
  },
});

startTypedListening({
  type: "auth/logout/rejected",
  effect: (_, { getState }) => {
    const error = getState().auth.error;
    console.log(`При выходе из аккаунта произошла ошибка : ${error}`);
  },
});

startTypedListening({
  type: "auth/logout/fulfilled",
  effect: () => {
    console.log(`Вы успешно вышли из аккуанта`);
  },
});
