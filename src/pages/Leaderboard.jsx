import { useState, useEffect } from 'react';
import './Leaderboard.css';

function Leaderboard() {
  const [results, setResults] = useState([]);
  const [sortBy, setSortBy] = useState('score');
  const [sortOrder, setSortOrder] = useState('desc');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');

  useEffect(() => {
    // Load results from localStorage
    const savedResults = localStorage.getItem('quizResults');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
  }, []);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  const filteredAndSortedResults = results
    .filter(result => {
      if (filterCategory !== 'all' && result.category !== filterCategory) return false;
      if (filterDifficulty !== 'all' && result.difficulty !== filterDifficulty) return false;
      return true;
    })
    .sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'score':
          aValue = a.score;
          bValue = b.score;
          break;
        case 'time':
          aValue = a.totalTime;
          bValue = b.totalTime;
          break;
        case 'accuracy':
          aValue = (a.correctAnswers / a.totalQuestions) * 100;
          bValue = (b.correctAnswers / b.totalQuestions) * 100;
          break;
        case 'date':
          aValue = new Date(a.completedAt);
          bValue = new Date(b.completedAt);
          break;
        default:
          aValue = a[sortBy];
          bValue = b[sortBy];
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const formatTime = (ms) => {
    const seconds = Math.round(ms / 1000);
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getRankIcon = (index) => {
    switch (index) {
      case 0: return '🥇';
      case 1: return '🥈';
      case 2: return '🥉';
      default: return `#${index + 1}`;
    }
  };

  const getUniqueValues = (key) => {
    const values = [...new Set(results.map(result => result[key]))];
    return values.sort();
  };

  const getStats = () => {
    if (results.length === 0) return null;
    
    const totalQuizzes = results.length;
    const averageScore = Math.round(results.reduce((sum, result) => sum + result.score, 0) / totalQuizzes);
    const bestScore = Math.max(...results.map(result => result.score));
    const mostPopularCategory = results.reduce((acc, result) => {
      acc[result.category] = (acc[result.category] || 0) + 1;
      return acc;
    }, {});
    const topCategory = Object.keys(mostPopularCategory).reduce((a, b) => 
      mostPopularCategory[a] > mostPopularCategory[b] ? a : b
    );

    return { totalQuizzes, averageScore, bestScore, topCategory };
  };

  const stats = getStats();

  const clearLeaderboard = () => {
    if (window.confirm('Are you sure you want to clear all quiz results? This action cannot be undone.')) {
      localStorage.removeItem('quizResults');
      setResults([]);
    }
  };

  return (
    <div className="leaderboard">
      <div className="container">
        <div className="leaderboard-content fade-in">
          
          {/* Header */}
          <div className="leaderboard-header">
            <h1 className="page-title">
              <span className="title-icon">🏆</span>
              Leaderboard
            </h1>
            <p className="page-subtitle">
              Track your progress and compete with your previous attempts
            </p>
          </div>

          {/* Stats Section */}
          {stats && (
            <div className="stats-overview slide-in-left">
              <div className="overview-card">
                <div className="overview-icon">📊</div>
                <div className="overview-value">{stats.totalQuizzes}</div>
                <div className="overview-label">Total Quizzes</div>
              </div>
              <div className="overview-card">
                <div className="overview-icon">🎯</div>
                <div className="overview-value">{stats.averageScore}</div>
                <div className="overview-label">Average Score</div>
              </div>
              <div className="overview-card">
                <div className="overview-icon">⭐</div>
                <div className="overview-value">{stats.bestScore}</div>
                <div className="overview-label">Best Score</div>
              </div>
              <div className="overview-card">
                <div className="overview-icon">🔥</div>
                <div className="overview-value">{stats.topCategory}</div>
                <div className="overview-label">Top Category</div>
              </div>
            </div>
          )}

          {results.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🎯</div>
              <h3>No Quiz Results Yet</h3>
              <p>Start taking quizzes to see your results here!</p>
              <a href="/start-quiz" className="btn btn-primary btn-large">
                Take Your First Quiz
              </a>
            </div>
          ) : (
            <>
              {/* Filters and Controls */}
              <div className="controls-section slide-in-right">
                <div className="filters">
                  <div className="filter-group">
                    <label>Category:</label>
                    <select 
                      value={filterCategory} 
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="filter-select"
                    >
                      <option value="all">All Categories</option>
                      {getUniqueValues('category').map(category => (
                        <option key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="filter-group">
                    <label>Difficulty:</label>
                    <select 
                      value={filterDifficulty} 
                      onChange={(e) => setFilterDifficulty(e.target.value)}
                      className="filter-select"
                    >
                      <option value="all">All Difficulties</option>
                      {getUniqueValues('difficulty').map(difficulty => (
                        <option key={difficulty} value={difficulty}>
                          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <button 
                  onClick={clearLeaderboard}
                  className="btn btn-danger clear-btn"
                  title="Clear all results"
                >
                  Clear All
                </button>
              </div>

              {/* Results Table */}
              <div className="results-table-container fade-in">
                <div className="table-header">
                  <h3>Quiz Results ({filteredAndSortedResults.length})</h3>
                </div>
                
                <div className="table-responsive">
                  <table className="results-table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Category</th>
                        <th>Difficulty</th>
                        <th 
                          className={`sortable ${sortBy === 'score' ? 'active' : ''}`}
                          onClick={() => handleSort('score')}
                        >
                          Score {sortBy === 'score' && (sortOrder === 'desc' ? '↓' : '↑')}
                        </th>
                        <th 
                          className={`sortable ${sortBy === 'accuracy' ? 'active' : ''}`}
                          onClick={() => handleSort('accuracy')}
                        >
                          Accuracy {sortBy === 'accuracy' && (sortOrder === 'desc' ? '↓' : '↑')}
                        </th>
                        <th 
                          className={`sortable ${sortBy === 'time' ? 'active' : ''}`}
                          onClick={() => handleSort('time')}
                        >
                          Time {sortBy === 'time' && (sortOrder === 'desc' ? '↓' : '↑')}
                        </th>
                        <th 
                          className={`sortable ${sortBy === 'date' ? 'active' : ''}`}
                          onClick={() => handleSort('date')}
                        >
                          Date {sortBy === 'date' && (sortOrder === 'desc' ? '↓' : '↑')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAndSortedResults.map((result, index) => (
                        <tr key={index} className="result-row">
                          <td className="rank-cell">
                            <span className="rank-display">
                              {getRankIcon(index)}
                            </span>
                          </td>
                          <td className="player-cell">
                            <div className="player-info">
                              <span className="player-name">{result.playerName}</span>
                            </div>
                          </td>
                          <td className="category-cell">
                            <span className="category-badge">
                              {result.category}
                            </span>
                          </td>
                          <td className="difficulty-cell">
                            <span className={`difficulty-badge difficulty-${result.difficulty}`}>
                              {result.difficulty}
                            </span>
                          </td>
                          <td className="score-cell">
                            <span className="score-value">{result.score}</span>
                          </td>
                          <td className="accuracy-cell">
                            <span className="accuracy-value">
                              {Math.round((result.correctAnswers / result.totalQuestions) * 100)}%
                            </span>
                            <span className="accuracy-detail">
                              ({result.correctAnswers}/{result.totalQuestions})
                            </span>
                          </td>
                          <td className="time-cell">
                            <span className="time-value">{formatTime(result.totalTime)}</span>
                          </td>
                          <td className="date-cell">
                            <span className="date-value">{formatDate(result.completedAt)}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;