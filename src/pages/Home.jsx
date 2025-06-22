import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="hero-section">
          <div className="hero-content slide-in-left">
            <h1 className="hero-title">
              Test Your Knowledge with <span className="text-primary">QuizMaster</span>
            </h1>
            <p className="hero-description">
              Challenge yourself with engaging quizzes across multiple categories. 
              Track your progress, compete with others, and become the ultimate quiz champion!
            </p>
            <div className="hero-features">
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <span>Timed Questions</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🏆</span>
                <span>Leaderboard</span>
              </div>
              <div className="feature">
                <span className="feature-icon">📊</span>
                <span>Performance Stats</span>
              </div>
            </div>
            <Link to="/start-quiz" className="btn btn-primary btn-large hero-cta">
              Start Quiz Now
            </Link>
          </div>
          
          <div className="hero-image slide-in-right">
            <div className="quiz-visual float">
              <div className="quiz-card">
                <div className="quiz-question">
                  <div className="question-header">
                    <span className="question-number">Q1</span>
                    <div className="timer-circle">
                      <span>15</span>
                    </div>
                  </div>
                  <h3>What is the capital of France?</h3>
                  <div className="quiz-options">
                    <div className="option">A. London</div>
                    <div className="option option-correct">B. Paris</div>
                    <div className="option">C. Berlin</div>
                    <div className="option">D. Madrid</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-section fade-in">
          <h2 className="section-title">Why Choose QuizMaster?</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <h3>Multiple Categories</h3>
              <p>Choose from Science, History, Sports, and Entertainment</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <h3>Timed Challenges</h3>
              <p>Test your knowledge under pressure with time limits</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <h3>Track Progress</h3>
              <p>See your improvement over time with detailed analytics</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏅</div>
              <h3>Compete & Win</h3>
              <p>Climb the leaderboard and become the quiz champion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;