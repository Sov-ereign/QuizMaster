import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content fade-in">
          <div className="error-visual">
            <div className="error-number">404</div>
            <div className="error-emoji">🤔</div>
          </div>
          
          <div className="error-message">
            <h1>Oops! Page Not Found</h1>
            <p>
              Looks like you've wandered into uncharted territory! 
              The page you're looking for seems to have vanished into the digital void.
            </p>
          </div>

          <div className="error-suggestions">
            <h3>Here's what you can do:</h3>
            <div className="suggestions-grid">
              <div className="suggestion-card">
                <span className="suggestion-icon">🏠</span>
                <h4>Go Home</h4>
                <p>Return to our homepage and start fresh</p>
                <Link to="/" className="btn btn-primary">
                  Take Me Home
                </Link>
              </div>
              
              <div className="suggestion-card">
                <span className="suggestion-icon">🧠</span>
                <h4>Start a Quiz</h4>
                <p>Challenge yourself with our engaging quizzes</p>
                <Link to="/start-quiz" className="btn btn-secondary">
                  Start Quiz
                </Link>
              </div>
              
              <div className="suggestion-card">
                <span className="suggestion-icon">🏆</span>
                <h4>View Leaderboard</h4>
                <p>Check out the top quiz performers</p>
                <Link to="/leaderboard" className="btn btn-outline">
                  Leaderboard
                </Link>
              </div>
            </div>
          </div>

          <div className="error-fun-fact">
            <div className="fun-fact-card">
              <h4>🎯 Fun Fact</h4>
              <p>
                The term "404" comes from the room number at CERN where the original web servers were located. 
                When a file couldn't be found, it was literally "not found in room 404"!
              </p>
            </div>
          </div>

          <div className="error-meme">
            <div className="meme-card">
              <div className="meme-text">
                <h4>When you type the wrong URL:</h4>
                <div className="meme-emoji-large">🗺️➡️❓➡️😵</div>
                <p><em>"I am not lost, I am exploring alternative routes!"</em></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;