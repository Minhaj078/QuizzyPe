
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveQuizResult } from '../mystats/page';

export default function QuizClient({ initialQuizData }) {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [answerChecked, setAnswerChecked] = useState(false);

  const currentQuestion = initialQuizData.questions[currentQuestionIndex];
  const totalQuestions = initialQuizData.questions.length;
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleOptionSelect = (option) => {
    if (!answerChecked) setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === null) {
      setFeedback('Please select an option before submitting.');
      return;
    }

    setAnswerChecked(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect.');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setFeedback('');
      setAnswerChecked(false);
    } else {
      setQuizCompleted(true);
      const finalScore = (score / totalQuestions) * 100;
      saveQuizResult(initialQuizData.id, finalScore, initialQuizData.title);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedOption(null);
      setFeedback('');
      setAnswerChecked(false);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setQuizCompleted(false);
    setFeedback('');
    setAnswerChecked(false);
  };

  if (quizCompleted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-6 bg-white text-gray-800 rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-xl mb-6">Your final score: {score} out of {totalQuestions}</p>
        <button
          onClick={handleRestartQuiz}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Retake Quiz
        </button>
        <button
          onClick={() => router.push('/')}
          className="mt-4 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
        >
          Back to Categories
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 rounded-lg p-6 shadow w-full max-w-xl border border-gray-200">
      {/* Quiz Title */}
      <h2 className="text-2xl font-bold mb-4 text-center">{initialQuizData.title}</h2>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div
          className="bg-blue-400 h-2.5 rounded-full transition-all"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Question Number */}
      <div className="text-lg text-gray-600 mb-6 text-center">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </div>

      {/* Question */}
      <p className="text-xl font-semibold mb-6 text-center">{currentQuestion.text}</p>

      {/* Options */}
      <div className="space-y-4 mb-6">
        {currentQuestion.options.map((option, index) => {
          let base = 'block w-full text-left py-3 px-4 rounded-lg border-2 font-medium transition-all ';
          let finalClass = '';

          if (answerChecked) {
            if (option === currentQuestion.correctAnswer) {
              finalClass = base + 'bg-green-100 text-green-700 border-green-400';
            } else if (option === selectedOption) {
              finalClass = base + 'bg-red-100 text-red-700 border-red-400';
            } else {
              finalClass = base + 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed';
            }
          } else {
            if (selectedOption === option) {
              finalClass = base + 'bg-blue-100 text-blue-800 border-blue-400';
            } else {
              finalClass = base + 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200';
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={finalClass}
              disabled={answerChecked}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {feedback && (
        <p
          className={`mb-4 text-center font-medium ${
            feedback.includes('Correct') ? 'text-green-600' : 'text-red-500'
          }`}
        >
          {feedback}
        </p>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6 gap-4 flex-wrap">
        <button
          onClick={handlePreviousQuestion}
          className={`px-5 py-2 rounded-lg font-semibold ${
            currentQuestionIndex === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gray-500 text-white hover:bg-gray-600'
          }`}
          disabled={currentQuestionIndex === 0}
        >
          &larr; Previous
        </button>

        {!answerChecked ? (
          <button
            onClick={handleSubmit}
            className={`px-5 py-2 rounded-lg text-white font-semibold transition ${
              selectedOption === null
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600'
            }`}
            disabled={selectedOption === null}
          >
            Submit Answer
          </button>
        ) : currentQuestionIndex < totalQuestions - 1 ? (
          <button
            onClick={handleNextQuestion}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold"
          >
            Next &rarr;
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="px-5 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-semibold"
          >
            Finish Quiz
          </button>
        )}
      </div>
    </div>
  );
}
