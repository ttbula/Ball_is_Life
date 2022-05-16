import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Rosters from "./pages/Rosters";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/rosters" element={<Rosters />} />
      </Routes>
    </Router>
  );
}

export default App;
