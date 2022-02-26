import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Social Network</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
