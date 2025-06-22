import './AboutPage.css';

function AboutPage() {
  const techStack = [
    { name: 'React', icon: '⚛️', description: 'Frontend library for building user interfaces' },
    { name: 'React Router', icon: '🛣️', description: 'Declarative routing for React applications' },
    { name: 'CSS3', icon: '🎨', description: 'Modern styling with animations and responsive design' },
    { name: 'LocalStorage', icon: '💾', description: 'Browser storage for persistent data' },
    { name: 'Vite', icon: '⚡', description: 'Fast build tool and development server' }
  ];

  const features = [
    { icon: '🎯', title: 'Multiple Categories', description: 'Science, History, Sports, and Entertainment' },
    { icon: '⏱️', title: 'Timed Questions', description: '15-second timer for each question' },
    { icon: '🔄', title: 'Answer Modification', description: 'Change answers before time runs out' },
    { icon: '📊', title: 'Progress Tracking', description: 'Visual progress bar and statistics' },
    { icon: '🏆', title: 'Leaderboard', description: 'Track and compare your performance' },
    { icon: '💾', title: 'Data Persistence', description: 'Your results are saved locally' }
  ];

  const learnings = [
    'State management with React hooks (useState, useEffect)',
    'React Router for single-page application navigation',
    'LocalStorage for data persistence across sessions',
    'CSS animations and responsive design principles',
    'Component composition and reusability patterns',
    'Timer implementation and cleanup with useEffect',
    'Form validation and user experience optimization'
  ];

  return (
    <div className="about-page">
      <div className="container">
        <div className="about-content fade-in">
          
          {/* Header Section */}
          <div className="about-header">
            <h1 className="page-title slide-in-left">
              <span className="title-icon">🧠</span>
              About QuizMaster
            </h1>
            <p className="page-subtitle slide-in-right">
              A modern, interactive quiz application built with React and lots of ☕
            </p>
          </div>

          {/* Meme Section */}
          <div className="meme-section fade-in">
            <div className="meme-card">
              <div className="meme-content">
                <div className="meme-text">
                  <h3>When you get 100% on the quiz:</h3>
                  <div className="meme-emoji">🎉🏆✨</div>
                  <p>"I am inevitable" - Quiz Champion, probably</p>
                </div>
              </div>
            </div>
            
            <div className="meme-card">
              <div className="meme-content">
                <div className="meme-text">
                  <h3>When the timer hits 0:</h3>
                  <div className="meme-emoji">⏰😱💨</div>
                  <p>"Time flies when you're having fun... or panicking"</p>
                </div>
              </div>
            </div>
          </div>

          {/* App Description */}
          <div className="app-description slide-in-left">
            <h2>What is QuizMaster?</h2>
            <p>
              QuizMaster is an interactive quiz application designed to test your knowledge across multiple categories. 
              Built with modern web technologies, it offers a smooth, engaging experience with timed questions, 
              real-time feedback, and comprehensive performance tracking.
            </p>
            <p>
              Whether you're a trivia enthusiast or just looking to challenge yourself, QuizMaster provides 
              an entertaining way to learn and compete with your previous attempts.
            </p>
          </div>

          {/* Features Grid */}
          <div className="features-section slide-in-right">
            <h2>Key Features</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="tech-section fade-in">
            <h2>Technology Stack</h2>
            <div className="tech-grid">
              {techStack.map((tech, index) => (
                <div key={index} className="tech-card">
                  <div className="tech-icon">{tech.icon}</div>
                  <div className="tech-info">
                    <h3>{tech.name}</h3>
                    <p>{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Section */}
          <div className="learning-section slide-in-left">
            <h2>What I Learned Building This</h2>
            <div className="learning-content">
              <p>
                Building QuizMaster was an incredible learning experience that challenged me to implement 
                various React concepts and modern web development practices. Here's what I mastered:
              </p>
              <ul className="learning-list">
                {learnings.map((learning, index) => (
                  <li key={index} className="learning-item">
                    <span className="learning-bullet">🚀</span>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fun Stats */}
          <div className="fun-stats slide-in-right">
            <h2>Fun Development Stats</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">☕</div>
                <div className="stat-value">∞</div>
                <div className="stat-label">Cups of Coffee</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🐛</div>
                <div className="stat-value">42</div>
                <div className="stat-label">Bugs Fixed</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">💡</div>
                <div className="stat-value">100+</div>
                <div className="stat-label">Lightbulb Moments</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🎉</div>
                <div className="stat-value">1</div>
                <div className="stat-label">Awesome App</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="cta-section fade-in">
            <div className="cta-card">
              <h2>Ready to Test Your Knowledge?</h2>
              <p>
                Challenge yourself with our engaging quizzes and see how you stack up on the leaderboard!
              </p>
              <div className="cta-buttons">
                <a href="/start-quiz" className="btn btn-primary btn-large">
                  <span className="btn-icon">🚀</span>
                  Start Quiz Now
                </a>
                <a href="/leaderboard" className="btn btn-secondary btn-large">
                  <span className="btn-icon">🏆</span>
                  View Leaderboard
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="about-footer">
            <p>
              Made with ❤️ and lots of debugging sessions. 
              <br />
              <em>"It's not a bug, it's a feature!"</em> - Every developer ever 😄
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;