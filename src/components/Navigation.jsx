import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="quiz-icon">🧠</span>
          QuizMaster
        </Link>
        
        <div className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/')}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/start-quiz" 
            className={`nav-link ${isActive('/start-quiz')}`}
            onClick={closeMenu}
          >
            Start Quiz
          </Link>
          <Link 
            to="/leaderboard" 
            className={`nav-link ${isActive('/leaderboard')}`}
            onClick={closeMenu}
          >
            Scores
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about')}`}
            onClick={closeMenu}
          >
            About
          </Link>
        </div>

        <div className={`hamburger ${isOpen ? 'hamburger-open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;