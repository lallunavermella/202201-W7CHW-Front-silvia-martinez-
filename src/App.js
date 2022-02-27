import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default App;
