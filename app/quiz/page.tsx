'use client';

import { useState } from 'react';

const questions = [
  {
    questionText: 'Who is Prime Minister of India?',
    answerOptions: [
      { answerText: 'Vijay Rupani', isCorrect: false },
      { answerText: 'Manmohan singh', isCorrect: false },
      { answerText: 'Narendra Modi', isCorrect: true },
      { answerText: 'Deep Patel', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tata?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Ratan Tata', isCorrect: true },
      { answerText: 'Mukesh Ambani', isCorrect: false },
      { answerText: 'Gautam Adani', isCorrect: false },
    ],
  },
  {
    questionText: 'who is richest person in the world?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Mukesh Ambani', isCorrect: false },
      { answerText: 'Warren Buffett', isCorrect: false },
    ],
  },
  {
    questionText: 'how many countries in the world?',
    answerOptions: [
      { answerText: '120', isCorrect: false },
      { answerText: '183', isCorrect: false },
      { answerText: '170', isCorrect: false },
      { answerText: '195', isCorrect: true },
    ],
  },
];

const Products = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-4'>
      <h1 className='text-center text-green-300'>Quiz</h1>
      <div className='flex w-4/6 justify-evenly bg-purple-100 p-4 shadow-md'>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <div className='flex w-full flex-col items-center justify-center gap-2 text-center'>
            <div className=''>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>
                {questions[currentQuestion].questionText}
              </div>
            </div>

            <div className='grid w-full grid-cols-2 gap-2'>
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button
                  onClick={() =>
                    handleAnswerButtonClick(answerOptions.isCorrect)
                  }
                >
                  <p className='rounded-md border border-green-400 px-2 text-start'>
                    {answerOptions.answerText}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
