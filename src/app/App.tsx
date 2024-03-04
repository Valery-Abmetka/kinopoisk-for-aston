import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "../widgest/Navbar";
import { useSelector } from "react-redux";
import { getIsLoadingAuth } from "../features/Authorization";
import { useAuthCheck } from "../shared";

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
