import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "../widgest/Navbar";
import { useAuthCheck } from "../shared/hooks/useCheckAuth";
import { useSelector } from "react-redux";
import { getIsLoadingAuth } from "../features/Authorization";

function App() {
  useAuthCheck();
  const isLoadingCheckAuth = useSelector(getIsLoadingAuth);

  return isLoadingCheckAuth ? (
    <h1>Загрузка</h1>
  ) : (
    <div className="app">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
