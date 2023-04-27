import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import NavBar from "./components/NavBar";

const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </div>
);

export default App;
