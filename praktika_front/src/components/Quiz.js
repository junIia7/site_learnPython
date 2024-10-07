import React, { useState } from 'react';
import '../styles/Quiz.css';

const Quiz = ({ quiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      if (currentQuestionIndex < quiz.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setFeedback('');
      } else {
        setIsCompleted(true);
        setFeedback('Тест пройден!');
      }
    } else {
      setFeedback('Ответ неверный');
    }
  };

  const currentQuestion = quiz[currentQuestionIndex];

  return (
    <div className='quiz-container'>
      {isCompleted ? (
        <div className='quiz-completed'>{feedback}</div>
      ) : (
        <>
          <div className='quiz-question'>
            <h2>Вопрос {currentQuestionIndex+1} из {quiz.length}</h2>
            <h3>{currentQuestion.question}</h3>
          </div>
          <div className='quiz-options'>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option === currentQuestion.answer)}
                className='buttonChooseOpt'
              >
                {option}
              </button>
            ))}
          </div>
          {feedback && <div className='quiz-feedback'>{feedback}</div>}
        </>
      )}
    </div>
  );
};

export default Quiz;
