import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "../widgest/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
