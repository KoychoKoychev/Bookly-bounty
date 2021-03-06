import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Board from "./components/board/Board";
import Welcome from "./components/welcome/Welcome";
import Personalize from "./components/personalization/Personalize";
import Library from "./components/library/Library";
import Player from "./components/player/Player";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/personalize" element={<Personalize />} />
            <Route path="/library" element={<Library />} />
            <Route path="/listen:id" element={<Player/>} />
          </Routes>
          <button className="home"></button>
        </div>
      </div>
    </Router>
  );
}

export default App;
