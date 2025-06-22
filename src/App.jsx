import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import StartQuiz from './pages/StartQuiz';
import QuizPage from './pages/QuizPage';
import ScoreSummary from './pages/ScoreSummary';
import Leaderboard from './pages/Leaderboard';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  const [playerData, setPlayerData] = useState(null);
  const [quizResults, setQuizResults] = useState(null);

  useEffect(() => {
    // Load player data from localStorage if available
    const savedPlayerData = localStorage.getItem('currentPlayer');
    if (savedPlayerData) {
      setPlayerData(JSON.parse(savedPlayerData));
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start-quiz" element={<StartQuiz setPlayerData={setPlayerData} />} />
            <Route path="/quiz/start" element={<QuizPage playerData={playerData} setQuizResults={setQuizResults} />} />
            <Route path="/quiz/results" element={<ScoreSummary quizResults={quizResults} playerData={playerData} />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;