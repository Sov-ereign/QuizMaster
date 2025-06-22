import { useState } from 'react';
import './AddPlayerForm.css';

const CATEGORIES = [
  { value: '', label: 'Select Category' },
  { value: 'general', label: 'General Knowledge' },
  { value: 'science', label: 'Science & Technology' },
  { value: 'history', label: 'History' },
  { value: 'sports', label: 'Sports' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'geography', label: 'Geography' }
];

const DIFFICULTIES = [
  { value: '', label: 'Select Difficulty' },
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' }
];

function AddPlayerForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    playerName: '',
    category: '',
    difficulty: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.playerName.trim()) {
      newErrors.playerName = 'Player name is required';
    }
    
    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }
    
    if (!formData.difficulty) {
      newErrors.difficulty = 'Please select a difficulty level';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const playerInfo = {
        ...formData,
        playerName: formData.playerName.trim(),
        timestamp: new Date().toISOString()
      };
      
      onSubmit(playerInfo);
    }
  };

  const isFormValid = formData.playerName.trim() && formData.category && formData.difficulty;

  return (
    <div className="player-form-container">
      <form onSubmit={handleSubmit} className="player-form slide-in-left">
        <div className="form-header">
          <h2>Player Information</h2>
          <p>Tell us about yourself to get started!</p>
        </div>

        <div className="form-group">
          <label htmlFor="playerName" className="form-label">
            <span className="label-icon">👤</span>
            Your Name
          </label>
          <input
            type="text"
            id="playerName"
            name="playerName"
            value={formData.playerName}
            onChange={handleChange}
            className={`form-input ${errors.playerName ? 'error' : ''}`}
            placeholder="Enter your name"
            maxLength={30}
          />
          {errors.playerName && <span className="error-message">{errors.playerName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="category" className="form-label">
            <span className="label-icon">📚</span>
            Quiz Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`form-select ${errors.category ? 'error' : ''}`}
          >
            {CATEGORIES.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          {errors.category && <span className="error-message">{errors.category}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="difficulty" className="form-label">
            <span className="label-icon">⚡</span>
            Difficulty Level
          </label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className={`form-select ${errors.difficulty ? 'error' : ''}`}
          >
            {DIFFICULTIES.map(difficulty => (
              <option key={difficulty.value} value={difficulty.value}>
                {difficulty.label}
              </option>
            ))}
          </select>
          {errors.difficulty && <span className="error-message">{errors.difficulty}</span>}
        </div>

        <button
          type="submit"
          className={`btn btn-primary btn-large start-button ${!isFormValid ? 'disabled' : ''}`}
          disabled={!isFormValid}
        >
          <span className="button-icon">🚀</span>
          Start Quiz
        </button>

        <div className="form-footer">
          <p>
            <span className="info-icon">💡</span>
            Your progress will be saved automatically
          </p>
        </div>
      </form>
    </div>
  );
}

export default AddPlayerForm;