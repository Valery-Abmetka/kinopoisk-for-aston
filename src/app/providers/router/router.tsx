import { createBrowserRouter } from "react-router-dom";
import { Main } from "../../../widgest/Main/index.ts";
import App from "../../App.tsx";
import { FavoritesPage } from "../../../pages/FavoritesPage/index.ts";
import { HistoryPage } from "../../../pages/HistoryPage/index.ts";
import { SearchPage } from "../../../pages/SearchPage/index.ts";
import { LoginPage } from "../../../pages/LoginPage/index.ts";
import { SignupPage } from "../../../pages/SignupPage/index.ts";
import { ErrorPage } from "../../../pages/ErrorPage/index.ts";
import { DataLoading } from "../../../shared/index.ts";
import { SoloCardPage } from "../../../pages/SoloCardPage/index.ts";
import { CardLoader } from "../../../shared/api/CardLoader.ts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        loader: DataLoading,
        element: <Main />,
      },
      {
        path: "/:id",
        element: <SoloCardPage />,
        loader: CardLoader,
      },
      { path: "/favorites", element: <FavoritesPage /> },
      { path: "/history", element: <HistoryPage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/signin", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
export default router;
