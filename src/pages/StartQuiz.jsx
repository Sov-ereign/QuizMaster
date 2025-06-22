import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddPlayerForm from '../components/AddPlayerForm';
import './StartQuiz.css';

function StartQuiz({ setPlayerData }) {
  const navigate = useNavigate();

  const handlePlayerSubmit = (playerInfo) => {
    // Save to localStorage
    localStorage.setItem('currentPlayer', JSON.stringify(playerInfo));
    
    // Update app state
    setPlayerData(playerInfo);
    
    // Navigate to quiz
    navigate('/quiz/start');
  };

  return (
    <div className="start-quiz">
      <div className="container">
        <div className="start-quiz-content fade-in">
          <div className="quiz-header">
            <h1 className="quiz-title">Ready to Test Your Knowledge?</h1>
            <p className="quiz-subtitle">
              Fill in your details below to begin your quiz journey. Choose your category and difficulty level wisely!
            </p>
          </div>
          
          <div className="form-container">
            <AddPlayerForm onSubmit={handlePlayerSubmit} />
          </div>
          
          <div className="quiz-info">
            <h3>What to Expect:</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-icon">⏰</span>
                <div>
                  <h4>Timed Questions</h4>
                  <p>Each question has a 15-second timer</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🔄</span>
                <div>
                  <h4>Change Answers</h4>
                  <p>You can go back and modify answers if time allows</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📊</span>
                <div>
                  <h4>Progress Tracking</h4>
                  <p>See your progress with our visual progress bar</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🏆</span>
                <div>
                  <h4>Performance Stats</h4>
                  <p>Get detailed analysis of your quiz performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartQuiz;