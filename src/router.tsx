import { createBrowserRouter } from "react-router-dom";
import { Main } from "./pages/main/index.ts";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: `/`, element: <Main /> }],
  },
]);
export default router;
