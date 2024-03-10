import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "../widgest/Navbar";
import { ErrorBoundary } from "react-error-boundary";
import { useSelector } from "react-redux";
import { useAuthCheck } from "../shared";
import { getIsLoadingAuth } from "../shared/reducers/Authorization";

function App() {
  useAuthCheck();
  const isLoadingCheckAuth = useSelector(getIsLoadingAuth);

  return isLoadingCheckAuth ? (
    <h1>Проверка авторизации</h1>
  ) : (
    <ErrorBoundary
      fallback={<div>Мы уже знаем о проблеме и стараемся ее решить</div>}
    >
      <div className="app">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
