import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Board from "./components/board/Board";
import Welcome from "./components/welcome/Welcome";
import Personalize from "./components/personalization/Personalize";
import Library from "./components/library/Library";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="desk">
          <div className="wrapper">
            <Routes>
              <Route path="/" element={<Board/>}/>
              <Route path="/welcome" element={<Welcome/>}/>
              <Route path="/personalize" element={<Personalize/>}/>
              <Route path="/library" element={<Library/>}/>
            </Routes>
          </div>
          <button className="home"></button>
        </div>
      </div>
    </Router>
  );
}

export default App;
