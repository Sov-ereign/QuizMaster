import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ScoreSummary.css';

function ScoreSummary({ quizResults, playerData }) {
  const navigate = useNavigate();
  const [animationPhase, setAnimationPhase] = useState(0);
  const [showDetailedReview, setShowDetailedReview] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (!quizResults || !playerData) {
      navigate('/start-quiz');
      return;
    }

    // Enhanced animation sequence
    const timer1 = setTimeout(() => setAnimationPhase(1), 300);
    const timer2 = setTimeout(() => setAnimationPhase(2), 800);
    const timer3 = setTimeout(() => setAnimationPhase(3), 1300);
    const timer4 = setTimeout(() => setAnimationPhase(4), 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [quizResults, playerData, navigate]);

  if (!quizResults || !playerData) {
    return null;
  }

  const {
    correctAnswers,
    totalQuestions,
    score,
    totalTime,
    answerTimes,
    questionResults,
    category,
    difficulty
  } = quizResults;

  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  // Enhanced time analysis
  const validAnswerTimes = Object.values(answerTimes).filter(time => time > 0);
  const fastestAnswer = validAnswerTimes.length > 0 ? Math.min(...validAnswerTimes) / 1000 : 0;
  const slowestAnswer = validAnswerTimes.length > 0 ? Math.max(...validAnswerTimes) / 1000 : 0;
  const averageAnswerTime = validAnswerTimes.length > 0 ? validAnswerTimes.reduce((sum, time) => sum + time, 0) / validAnswerTimes.length / 1000 : 0;

  // Performance insights
  const correctQuestions = questionResults.filter(q => q.isCorrect);
  const incorrectQuestions = questionResults.filter(q => !q.isCorrect);
  
  const averageTimeCorrect = correctQuestions.length > 0 
    ? correctQuestions.reduce((sum, q) => sum + q.timeTaken, 0) / correctQuestions.length / 1000 
    : 0;
  const averageTimeIncorrect = incorrectQuestions.length > 0 
    ? incorrectQuestions.reduce((sum, q) => sum + q.timeTaken, 0) / incorrectQuestions.length / 1000 
    : 0;

  const getMotivationalMessage = () => {
    if (percentage >= 90) return { message: "Quiz Champion! 🏆", emoji: "🌟", color: "var(--secondary-color)", bg: "linear-gradient(135deg, #10B981 0%, #059669 100%)" };
    if (percentage >= 75) return { message: "Excellent Work! 👏", emoji: "🎉", color: "var(--secondary-color)", bg: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)" };
    if (percentage >= 60) return { message: "Good Job! 💪", emoji: "👍", color: "var(--primary-color)", bg: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)" };
    if (percentage >= 40) return { message: "Keep Learning! 📚", emoji: "💡", color: "var(--warning-color)", bg: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)" };
    return { message: "More Practice Needed! 📖", emoji: "😅", color: "var(--error-color)", bg: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)" };
  };

  const motivational = getMotivationalMessage();

  const formatTime = (ms) => {
    const seconds = Math.round(ms / 1000);
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const getScoreColor = () => {
    if (percentage >= 75) return 'var(--secondary-color)';
    if (percentage >= 50) return 'var(--primary-color)';
    return 'var(--error-color)';
  };

  const getPerformanceInsight = () => {
    if (averageAnswerTime < 8) return "Lightning fast! You're a quick thinker.";
    if (averageAnswerTime < 12) return "Great pace! You balanced speed and accuracy well.";
    return "Take your time! Accuracy is more important than speed.";
  };

  const getAccuracyInsight = () => {
    if (percentage >= 80) return "Excellent accuracy! You really know your stuff.";
    if (percentage >= 60) return "Good work! A few more correct answers and you'll be a pro.";
    return "Keep studying! Practice makes perfect.";
  };

  const getSpeedAccuracyInsight = () => {
    if (averageTimeCorrect < averageTimeIncorrect) {
      return "You answered correctly faster than incorrectly - great intuition!";
    } else if (averageTimeCorrect > averageTimeIncorrect) {
      return "You took more time on correct answers - careful thinking pays off!";
    } else {
      return "Your timing was consistent regardless of correctness.";
    }
  };

  return (
    <div className="score-summary">
      <div className="container">
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close" onClick={() => setShowModal(false)}>&times;</button>
              <div className="completion-badge slide-in-left">
                <span className="badge-icon">🎯</span>
                <span>Quiz Completed!</span>
              </div>
              <h1 className="player-name">
                Great job, <span className="highlight">{playerData.playerName}</span>!
              </h1>
              <div className="quiz-details">
                <span className="detail-badge">{category}</span>
                <span className="detail-badge">{difficulty}</span>
              </div>
            </div>
          </div>
        )}
        <div className="summary-content fade-in">
          
          {/* Hero Section */}
          {/* Removed hero section as per user request */}

          {/* Score Circle */}
          <div className="score-circle-container">
            <div className="score-circle slide-in-right">
              <div 
                className="score-ring" 
                style={{ 
                  '--percentage': percentage,
                  '--score-color': getScoreColor()
                }}
              >
                <div className="score-content">
                  {animationPhase >= 1 && (
                    <>
                      <div className="score-percentage">{percentage}%</div>
                      <div className="score-fraction">{correctAnswers}/{totalQuestions}</div>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            {animationPhase >= 2 && (
              <div className="motivational-message slide-in-left" style={{ color: motivational.color }}>
                <span className="message-emoji">{motivational.emoji}</span>
                <span className="message-text">{motivational.message}</span>
              </div>
            )}
          </div>

          {/* Navigation Tabs */}
          {animationPhase >= 3 && (
            <div className="tab-navigation fade-in">
              <button
                className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                <span className="tab-icon">📊</span>
                Overview
              </button>
              <button
                className={`tab-button ${activeTab === 'performance' ? 'active' : ''}`}
                onClick={() => setActiveTab('performance')}
              >
                <span className="tab-icon">⚡</span>
                Performance
              </button>
              <button
                className={`tab-button ${activeTab === 'review' ? 'active' : ''}`}
                onClick={() => setActiveTab('review')}
              >
                <span className="tab-icon">🔍</span>
                Review
              </button>
            </div>
          )}

          {/* Tab Content */}
          {animationPhase >= 3 && (
            <div className="tab-content fade-in">
              {activeTab === 'overview' && (
                <div className="overview-tab">
                  {/* Enhanced Stats Grid */}
                  <div className="stats-grid">
                    <div className="stat-card">
                      <div className="stat-icon">🎯</div>
                      <div className="stat-value">{score}</div>
                      <div className="stat-label">Total Score</div>
                    </div>
                    
                    <div className="stat-card">
                      <div className="stat-icon">⏱️</div>
                      <div className="stat-value">{formatTime(totalTime)}</div>
                      <div className="stat-label">Total Time</div>
                    </div>
                    
                    <div className="stat-card">
                      <div className="stat-icon">⚡</div>
                      <div className="stat-value">{fastestAnswer.toFixed(1)}s</div>
                      <div className="stat-label">Fastest Answer</div>
                    </div>
                    
                    <div className="stat-card">
                      <div className="stat-icon">🐌</div>
                      <div className="stat-value">{slowestAnswer.toFixed(1)}s</div>
                      <div className="stat-label">Slowest Answer</div>
                    </div>
                    
                    <div className="stat-card">
                      <div className="stat-icon">📊</div>
                      <div className="stat-value">{averageAnswerTime.toFixed(1)}s</div>
                      <div className="stat-label">Avg per Question</div>
                    </div>
                    
                    <div className="stat-card">
                      <div className="stat-icon">📈</div>
                      <div className="stat-value">{percentage}%</div>
                      <div className="stat-label">Accuracy</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'performance' && (
                <div className="performance-tab">
                  {/* Enhanced Performance Insights */}
                  <div className="insights-section">
                    <h3>Performance Analysis</h3>
                    <div className="insights-grid">
                      <div className="insight-card">
                        <span className="insight-icon">🏃‍♂️</span>
                        <div>
                          <h4>Speed Analysis</h4>
                          <p>{getPerformanceInsight()}</p>
                          <div className="insight-details">
                            <span>Fastest: {fastestAnswer.toFixed(1)}s</span>
                            <span>Slowest: {slowestAnswer.toFixed(1)}s</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="insight-card">
                        <span className="insight-icon">🎯</span>
                        <div>
                          <h4>Accuracy Review</h4>
                          <p>{getAccuracyInsight()}</p>
                          <div className="insight-details">
                            <span>Correct: {correctAnswers}/{totalQuestions}</span>
                            <span>Incorrect: {totalQuestions - correctAnswers}/{totalQuestions}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="insight-card">
                        <span className="insight-icon">⚖️</span>
                        <div>
                          <h4>Speed vs Accuracy</h4>
                          <p>{getSpeedAccuracyInsight()}</p>
                          <div className="insight-details">
                            <span>Correct avg: {averageTimeCorrect.toFixed(1)}s</span>
                            <span>Incorrect avg: {averageTimeIncorrect.toFixed(1)}s</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'review' && (
                <div className="review-tab">
                  {/* Detailed Answer Review */}
                  <div className="detailed-review">
                    <h3>Question-by-Question Review</h3>
                    <div className="review-grid">
                      {questionResults.map((result, index) => (
                        <div key={index} className={`review-card ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                          <div className="review-header">
                            <div className="review-question-number">Q{result.questionIndex + 1}</div>
                            <div className="review-status">
                              {result.isCorrect ? (
                                <span className="status-correct">✓ Correct</span>
                              ) : (
                                <span className="status-incorrect">✗ Incorrect</span>
                              )}
                            </div>
                            <div className="review-time">Time Taken - {formatTime(result.timeTaken)}</div>
                          </div>
                          
                          <div className="review-question">{result.question}</div>
                          
                          <div className="review-answers">
                            {result.options.map((option, optionIndex) => (
                              <div
                                key={optionIndex}
                                className={`review-option ${
                                  optionIndex === result.correctAnswer ? 'correct-answer' : ''
                                } ${
                                  optionIndex === result.userAnswer && !result.isCorrect ? 'wrong-answer' : ''
                                }`}
                              >
                                <span className="option-label">
                                  {String.fromCharCode(65 + optionIndex)}
                                </span>
                                <span className="option-text">{option}</span>
                                {optionIndex === result.correctAnswer && (
                                  <span className="correct-icon">✓</span>
                                )}
                                {optionIndex === result.userAnswer && !result.isCorrect && (
                                  <span className="incorrect-icon">✗</span>
                                )}
                              </div>
                            ))}
                          </div>
                          
                          {result.explanation && (
                            <div className="review-explanation">
                              <strong>Explanation:</strong> {result.explanation}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          {animationPhase >= 4 && (
            <div className="action-buttons fade-in">
              <Link to="/start-quiz" className="btn btn-primary btn-large">
                <span className="btn-icon">🚀</span>
                Play Again
              </Link>
              <Link to="/leaderboard" className="btn btn-secondary btn-large">
                <span className="btn-icon">🏆</span>
                View Leaderboard
              </Link>
              <Link to="/" className="btn btn-outline">
                <span className="btn-icon">🏠</span>
                Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScoreSummary;