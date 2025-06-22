import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuestions } from '../data/questions';
import QuizEngine from '../components/QuizEngine';
import './QuizPage.css';

function QuizPage({ playerData, setQuizResults }) {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!playerData) {
      // If no player data, redirect to start quiz
      navigate('/start-quiz');
      return;
    }

    // Load questions based on player's selection
    const quizQuestions = getQuestions(playerData.category, playerData.difficulty, 5);
    setQuestions(quizQuestions);
    setLoading(false);
  }, [playerData, navigate]);

  const handleQuizComplete = (results) => {
    // Save results and navigate to summary
    setQuizResults(results);
    navigate('/quiz/results');
  };

  if (loading) {
    return (
      <div className="quiz-loading">
        <div className="container">
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <h2>Preparing Your Quiz...</h2>
            <p>Getting ready with {playerData?.category} questions at {playerData?.difficulty} difficulty</p>
          </div>
        </div>
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="quiz-error">
        <div className="container">
          <div className="error-content">
            <h2>Oops! No Questions Available</h2>
            <p>We couldn't load questions for your selection. Please try again.</p>
            <button 
              onClick={() => navigate('/start-quiz')} 
              className="btn btn-primary"
            >
              Back to Start
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="container">
        <QuizEngine 
          questions={questions}
          playerData={playerData}
          onComplete={handleQuizComplete}
        />
      </div>
    </div>
  );
}

export default QuizPage;