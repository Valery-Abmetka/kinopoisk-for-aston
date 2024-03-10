import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "../../App.tsx";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute.tsx";

const MainPage = lazy(() => import("../../../pages/MainPage/index.ts"));
const FavoritesPage = lazy(
  () => import("../../../pages/FavoritesPage/index.ts"),
);
const HistoryPage = lazy(() => import("../../../pages/HistoryPage/index.ts"));
const SearchPage = lazy(() => import("../../../pages/SearchPage/index.ts"));

const LoginPage = lazy(() => import("../../../pages/LoginPage/index.ts"));

const SignupPage = lazy(() => import("../../../pages/SignupPage/index.ts"));

const ErrorPage = lazy(() => import("../../../pages/ErrorPage/index.ts"));

const SoloCardPage = lazy(() => import("../../../pages/SoloCardPage/index.ts"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "/movies/:id",
        element: <SoloCardPage />,
      },
      {
        path: "/favorites",
        element: (
          <ProtectedRoute>
            <FavoritesPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/history",
        element: (
          <ProtectedRoute>
            <HistoryPage />
          </ProtectedRoute>
        ),
      },
      { path: "/search", element: <SearchPage /> },
      { path: "/signin", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
