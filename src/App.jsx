import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import GamePage from './components/GamePage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/genshin-impact" element={<GamePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;