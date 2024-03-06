import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router, store } from "./app/providers";
import { ThemeProvider } from "./app/providers/context/themeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <Suspense fallback={<h1>Загрузка страницы</h1>}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
