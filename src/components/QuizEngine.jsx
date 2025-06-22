import { useState, useEffect, useCallback } from 'react';
import './QuizEngine.css';

const QUESTION_TIME_LIMIT = 15; // seconds

function QuizEngine({ questions, playerData, onComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(QUESTION_TIME_LIMIT);
  const [answerTimes, setAnswerTimes] = useState({});
  const [questionStartTimes, setQuestionStartTimes] = useState({});
  const [lockedAnswers, setLockedAnswers] = useState({});
  const [quizStartTime] = useState(Date.now());
  const [isNavigating, setIsNavigating] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isCurrentAnswerLocked = lockedAnswers[currentQuestionIndex];
  const hasSelectedAnswer = selectedAnswers[currentQuestionIndex] !== undefined;

  // Timer effect for current question
  useEffect(() => {
    if (isCurrentAnswerLocked) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          // Time's up - lock the answer and auto-advance
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isCurrentAnswerLocked]);

  // Reset timer when question changes
  useEffect(() => {
    if (!isCurrentAnswerLocked) {
      setTimeRemaining(QUESTION_TIME_LIMIT);
      setShowFeedback(false);
      // Record start time for this question
      setQuestionStartTimes(prev => ({
        ...prev,
        [currentQuestionIndex]: Date.now()
      }));
    }
  }, [currentQuestionIndex, isCurrentAnswerLocked]);

  const handleTimeUp = useCallback(() => {
    // Only lock the answer if the user actually selected one
    if (selectedAnswers[currentQuestionIndex] !== undefined) {
      setLockedAnswers(prev => ({
        ...prev,
        [currentQuestionIndex]: true
      }));

      // Record time taken for this question
      const startTime = questionStartTimes[currentQuestionIndex] || Date.now();
      const timeTaken = Date.now() - startTime;
      setAnswerTimes(prev => ({
        ...prev,
        [currentQuestionIndex]: timeTaken
      }));

      // Show feedback briefly before auto-advancing
      setShowFeedback(true);
      setTimeout(() => {
        if (!isLastQuestion) {
          setCurrentQuestionIndex(prev => prev + 1);
        } else {
          // Check if all questions are answered before completing
          const allQuestionsAnswered = questions.every((_, index) => 
            selectedAnswers[index] !== undefined || index === currentQuestionIndex
          );
          
          if (allQuestionsAnswered) {
            handleQuizComplete();
          }
          // If not all questions are answered, stay on current question
        }
      }, 1500);
    } else {
      // If no answer was selected, just advance to next question without locking
      setTimeout(() => {
        if (!isLastQuestion) {
          setCurrentQuestionIndex(prev => prev + 1);
        } else {
          // Check if all questions are answered before completing
          const allQuestionsAnswered = questions.every((_, index) => 
            selectedAnswers[index] !== undefined
          );
          
          if (allQuestionsAnswered) {
            handleQuizComplete();
          }
          // If not all questions are answered, stay on current question
        }
      }, 500);
    }
  }, [currentQuestionIndex, isLastQuestion, questionStartTimes, selectedAnswers, questions]);

  const handleAnswerSelect = (optionIndex) => {
    if (isCurrentAnswerLocked) return;

    // Record the answer
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optionIndex
    }));

    // Record time taken for this question
    const startTime = questionStartTimes[currentQuestionIndex] || Date.now();
    const timeTaken = Date.now() - startTime;
    setAnswerTimes(prev => ({
      ...prev,
      [currentQuestionIndex]: timeTaken
    }));

    // Lock the answer immediately
    setLockedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: true
    }));

    // Show feedback immediately
    setShowFeedback(true);

    // Check if all questions are answered
    const allQuestionsAnswered = questions.every((_, index) => 
      selectedAnswers[index] !== undefined || index === currentQuestionIndex
    );

    // Auto-advance to next question after showing feedback
    setTimeout(() => {
      if (!isLastQuestion) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else if (allQuestionsAnswered) {
        // Only complete if all questions are answered
        const finalizeQuiz = () => {
          // Double-check that the last answer is recorded
          const finalSelectedAnswers = {
            ...selectedAnswers,
            [currentQuestionIndex]: optionIndex
          };
          const finalAnswerTimes = {
            ...answerTimes,
            [currentQuestionIndex]: timeTaken
          };
          const finalLockedAnswers = {
            ...lockedAnswers,
            [currentQuestionIndex]: true
          };
          
          // Call handleQuizComplete with the final data
          handleQuizCompleteWithData(finalSelectedAnswers, finalAnswerTimes, finalLockedAnswers);
        };
        
        setTimeout(finalizeQuiz, 100);
      }
      // If not all questions are answered, stay on current question
    }, 1500);
  };

  const handleQuizCompleteWithData = (finalSelectedAnswers, finalAnswerTimes, finalLockedAnswers) => {
    const totalTime = Date.now() - quizStartTime;
    let correctAnswers = 0;
    let score = 0;
    const questionResults = [];

    // Debug: Log all questions and answers
    console.log('=== QUIZ DEBUG ===');
    console.log('All questions:', questions);
    console.log('All selected answers:', finalSelectedAnswers);
    console.log('All answer times:', finalAnswerTimes);

    questions.forEach((question, index) => {
      const userAnswer = finalSelectedAnswers[index];
      // Fix: Handle cases where userAnswer might be undefined
      const isCorrect = userAnswer !== undefined && userAnswer === question.correct;
      const timeTaken = finalAnswerTimes[index] || 0;
      
      // Debug logging for all questions
      console.log(`Question ${index + 1} (ID: ${question.id}):`, {
        question: question.question,
        userAnswer,
        correctAnswer: question.correct,
        isCorrect,
        options: question.options
      });
      
      if (isCorrect) {
        correctAnswers++;
        score += 100; // 100 points per correct answer
      }

      questionResults.push({
        questionIndex: index,
        question: question.question,
        userAnswer: userAnswer !== undefined ? userAnswer : null,
        correctAnswer: question.correct,
        isCorrect,
        timeTaken,
        wasLocked: finalLockedAnswers[index],
        options: question.options,
        explanation: question.explanation
      });
    });

    console.log('Final results:', {
      correctAnswers,
      totalQuestions: questions.length,
      score
    });

    const results = {
      playerName: playerData.playerName,
      category: playerData.category,
      difficulty: playerData.difficulty,
      totalQuestions: questions.length,
      correctAnswers,
      score,
      totalTime,
      answerTimes: finalAnswerTimes,
      questionResults,
      answers: finalSelectedAnswers,
      questions,
      completedAt: new Date().toISOString()
    };

    // Save to localStorage
    const existingResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    existingResults.push(results);
    localStorage.setItem('quizResults', JSON.stringify(existingResults));

    onComplete(results);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      handleQuizComplete();
    } else {
      setIsNavigating(true);
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        setIsNavigating(false);
      }, 300);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setIsNavigating(true);
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev - 1);
        setIsNavigating(false);
      }, 300);
    }
  };

  const handleQuizComplete = () => {
    // Use the same robust approach for consistency
    handleQuizCompleteWithData(selectedAnswers, answerTimes, lockedAnswers);
  };

  const getTimerColor = () => {
    if (timeRemaining > 10) return 'var(--secondary-color)';
    if (timeRemaining > 5) return 'var(--warning-color)';
    return 'var(--error-color)';
  };

  const getProgressPercentage = () => {
    return ((currentQuestionIndex + 1) / questions.length) * 100;
  };

  const canGoBack = (questionIndex) => {
    return questionIndex > 0;
  };

  const canGoForward = (questionIndex) => {
    return questionIndex < questions.length - 1 && lockedAnswers[questionIndex];
  };

  if (!currentQuestion) return null;

  return (
    <div className="quiz-engine fade-in">
      {/* Progress Bar */}
      <div className="quiz-progress">
        <div className="progress-info">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span className="category-badge">
            {playerData.category.charAt(0).toUpperCase() + playerData.category.slice(1)} - {playerData.difficulty.charAt(0).toUpperCase() + playerData.difficulty.slice(1)}
          </span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${getProgressPercentage()}%` }}
          ></div>
        </div>
      </div>

      {/* Quiz Card */}
      <div className="quiz-card">
        <div className="question-header">
          <div className="question-number">
            Q{currentQuestionIndex + 1}
          </div>
          <div 
            className="timer-display" 
            style={{ color: getTimerColor() }}
          >
            <div className="timer-circle">
              <span>{timeRemaining}</span>
              <svg className="timer-ring" viewBox="0 0 40 40">
                <circle 
                  cx="20" 
                  cy="20" 
                  r="18" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  strokeDasharray={`${((QUESTION_TIME_LIMIT - timeRemaining) / QUESTION_TIME_LIMIT) * 113} 113`}
                  transform="rotate(-90 20 20)"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="question-content">
          <h2 className="question-text">{currentQuestion.question}</h2>
          
          <div className="options-grid">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === index;
              const isCorrect = index === currentQuestion.correct;
              const showResult = showFeedback;
              
              let optionClass = 'option';
              if (showResult) {
                if (isCorrect) {
                  optionClass += ' option-correct';
                } else if (isSelected && !isCorrect) {
                  optionClass += ' option-incorrect';
                }
              } else if (isSelected) {
                optionClass += ' option-selected';
              }

              return (
                <button
                  key={index}
                  className={optionClass}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={isCurrentAnswerLocked}
                >
                  <span className="option-label">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="option-text">{option}</span>
                  {showResult && isCorrect && (
                    <span className="option-icon correct-icon">✓</span>
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <span className="option-icon incorrect-icon">✗</span>
                  )}
                </button>
              );
            })}
          </div>

          {showFeedback && (
            <div className="explanation-box slide-in-left">
              <div className="explanation-header">
                <span className="explanation-icon">
                  {selectedAnswers[currentQuestionIndex] === currentQuestion.correct ? '🎉' : '📚'}
                </span>
                <span>
                  {selectedAnswers[currentQuestionIndex] === currentQuestion.correct 
                    ? 'Correct!' 
                    : 'Good try!'
                  }
                </span>
              </div>
              <p className="explanation-text">{currentQuestion.explanation}</p>
            </div>
          )}
        </div>

        <div className="quiz-controls">
          <button
            className="btn btn-secondary"
            onClick={handlePreviousQuestion}
            disabled={!canGoBack(currentQuestionIndex) || isNavigating}
          >
            ← Previous
          </button>
          
          <div className="control-center">
            {isLastQuestion && isCurrentAnswerLocked && (() => {
              // Check if all questions are answered
              const allQuestionsAnswered = questions.every((_, index) => 
                selectedAnswers[index] !== undefined
              );
              
              const unansweredCount = questions.filter((_, index) => 
                selectedAnswers[index] === undefined
              ).length;
              
              return (
                <div className="complete-section">
                  {!allQuestionsAnswered && (
                    <div className="unanswered-warning">
                      <span className="warning-icon">⚠️</span>
                      <span>You have {unansweredCount} unanswered question{unansweredCount !== 1 ? 's' : ''}</span>
                    </div>
                  )}
                  <button
                    className="btn btn-primary btn-large"
                    onClick={handleQuizComplete}
                    disabled={isNavigating}
                  >
                    Complete Quiz 🏁
                  </button>
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Question Navigation Dots */}
      <div className="question-dots">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`question-dot ${
              index === currentQuestionIndex ? 'active' : ''
            } ${
              lockedAnswers[index] ? 'locked' : ''
            } ${
              selectedAnswers[index] !== undefined ? 'answered' : ''
            }`}
            onClick={() => {
              if (canGoBack(index) || canGoForward(index)) {
                setCurrentQuestionIndex(index);
              }
            }}
            title={`Question ${index + 1}${lockedAnswers[index] ? ' (Locked)' : ''}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizEngine;