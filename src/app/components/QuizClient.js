// // // src/app/components/QuizClient.js
// // 'use client'; // This directive makes this a Client Component

// // import { useState, useEffect } from 'react';
// // import Link from 'next/link'; // For client-side navigation

// // export default function QuizClient({ initialQuizData }) {
// //   // State to hold the current quiz data, questions, user progress, and score
// //   const [quiz, setQuiz] = useState(initialQuizData);
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [selectedAnswer, setSelectedAnswer] = useState(null);
// //   const [showFeedback, setShowFeedback] = useState(false);
// //   const [score, setScore] = useState(0);
// //   const [quizCompleted, setQuizCompleted] = useState(false);

// //   // Effect to reset quiz state when a new quiz is loaded (e.g., navigating between quiz pages)
// //   useEffect(() => {
// //     setQuiz(initialQuizData);
// //     setCurrentQuestionIndex(0);
// //     setSelectedAnswer(null);
// //     setShowFeedback(false);
// //     setScore(0);
// //     setQuizCompleted(false);
// //   }, [initialQuizData.id]); // Dependency array: re-run if initialQuizData.id changes

// //   // Basic check for valid quiz data
// //   if (!quiz || !quiz.questions || quiz.questions.length === 0) {
// //     return <p className="text-center text-red-500">Error: Quiz data is missing or empty.</p>;
// //   }

// //   // Get the current question based on the index
// //   const currentQuestion = quiz.questions[currentQuestionIndex];

// //   // Handler for when a user selects an answer
// //   const handleAnswerSelect = (option) => {
// //     // Prevent changing answer if feedback is already being shown
// //     if (showFeedback) return;

// //     setSelectedAnswer(option); // Set the user's selected answer
// //     setShowFeedback(true); // Show immediate feedback

// //     // Check if the selected answer is correct and update score
// //     if (option === currentQuestion.correctAnswer) {
// //       setScore((prevScore) => prevScore + 1);
// //     }
// //   };

// //   // Handler for moving to the next question or finishing the quiz
// //   const handleNextQuestion = () => {
// //     setShowFeedback(false); // Hide feedback for the next question
// //     setSelectedAnswer(null); // Clear selected answer

// //     // Check if there are more questions
// //     if (currentQuestionIndex < quiz.questions.length - 1) {
// //       setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Move to next question
// //     } else {
// //       setQuizCompleted(true); // All questions answered, quiz is complete
// //     }
// //   };

// //   // Helper function to apply dynamic Tailwind CSS classes based on answer state
// //   const getOptionClasses = (option) => {
// //     let classes = 'block w-full text-left p-4 border rounded-lg transition-colors duration-200 ';
// //     if (showFeedback) {
// //       // If feedback is showing, highlight correct/incorrect answers
// //       if (option === currentQuestion.correctAnswer) {
// //         classes += 'bg-green-100 border-green-500 dark:bg-green-800 dark:border-green-600'; // Correct answer
// //       } else if (selectedAnswer === option) {
// //         classes += 'bg-red-100 border-red-500 dark:bg-red-800 dark:border-red-600'; // Incorrectly selected
// //       } else {
// //         classes += 'bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-600 opacity-60'; // Unselected after feedback
// //       }
// //     } else {
// //       // Before feedback, apply hover styles and highlight the currently selected option
// //       classes += 'bg-white border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600';
// //       if (selectedAnswer === option) {
// //         classes += ' ring-2 ring-blue-500'; // Highlight selected before feedback
// //       }
// //     }
// //     return classes;
// //   };

// //   return (
// //     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
// //       <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">{quiz.title}</h1>

// //       {quizCompleted ? (
// //         // Display quiz completion screen and score
// //         <div className="text-center">
// //           <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Quiz Completed!</h2>
// //           <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">Your score: {score} out of {quiz.questions.length}</p>
// //           <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
// //             Go to Home
// //           </Link>
// //           {/* Link back to the specific category page */}
// //           <Link href={`/quizzes/${quiz.categoryId}`} className="ml-4 inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600">
// //             More Quizzes in {quiz.categoryId.charAt(0).toUpperCase() + quiz.categoryId.slice(1)}
// //           </Link>
// //         </div>
// //       ) : (
// //         // Display current question and answer options
// //         <div>
// //           <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
// //           <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{currentQuestion.text}</h2>

// //           <div className="space-y-4">
// //             {currentQuestion.options.map((option, index) => (
// //               <button
// //                 key={index}
// //                 onClick={() => handleAnswerSelect(option)}
// //                 disabled={showFeedback} // Disable buttons once an answer is selected for feedback
// //                 className={getOptionClasses(option)}
// //               >
// //                 {option}
// //               </button>
// //             ))}
// //           </div>

// //           {/* Feedback section (visible after an answer is selected) */}
// //           {showFeedback && (
// //             <div className={`mt-6 p-4 rounded-lg ${selectedAnswer === currentQuestion.correctAnswer ? 'bg-green-50 dark:bg-green-900' : 'bg-red-50 dark:bg-red-900'} text-center`}>
// //               <p className={`font-semibold text-lg ${selectedAnswer === currentQuestion.correctAnswer ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
// //                 {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect!'}
// //               </p>
// //               <p className="text-sm text-gray-600 dark:text-gray-400">
// //                 The correct answer was: **{currentQuestion.correctAnswer}**
// //               </p>
// //               {/* Button to move to the next question or finish the quiz */}
// //               <button
// //                 onClick={handleNextQuestion}
// //                 className="mt-4 inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //               >
// //                 {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // src/app/components/QuizClient.js
// "use client";

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function QuizClient({ initialQuizData }) {
//   const router = useRouter();
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [score, setScore] = useState(0);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [feedback, setFeedback] = useState('');
//   const [incorrectAttempts, setIncorrectAttempts] = useState({}); // To track incorrect attempts per question

//   const currentQuestion = initialQuizData.questions[currentQuestionIndex];

//   // Function to save quiz data to localStorage
//   const saveQuizAttempt = (categoryId, quizId, isCompleted, finalScore, totalQuestionsCount) => {
//     let quizData = JSON.parse(localStorage.getItem('quizStats')) || {};

//     if (!quizData[categoryId]) {
//       quizData[categoryId] = { attempts: 0, completions: 0, scoreSum: 0, totalQuestionsSum: 0 };
//     }

//     quizData[categoryId].attempts += 1; // Increment total attempts for this category
//     if (isCompleted) {
//       quizData[categoryId].completions += 1; // Increment completions if the quiz was fully completed
//       quizData[categoryId].scoreSum += finalScore; // Sum of scores for completed quizzes
//       quizData[categoryId].totalQuestionsSum += totalQuestionsCount; // Sum of total questions from completed quizzes
//     }

//     localStorage.setItem('quizStats', JSON.stringify(quizData));
//   };


//   const handleOptionSelect = (option) => {
//     if (!quizCompleted) {
//       setSelectedOption(option);
//     }
//   };

//   const handleSubmit = () => {
//     if (selectedOption === null) {
//       setFeedback('Please select an option before submitting.');
//       return;
//     }

//     setFeedback(''); // Clear previous feedback

//     if (selectedOption === currentQuestion.correctAnswer) {
//       setScore(prevScore => prevScore + 1);
//       // If correct, clear any incorrect attempts for this question
//       setIncorrectAttempts(prev => {
//         const newAttempts = { ...prev };
//         delete newAttempts[currentQuestion.id];
//         return newAttempts;
//       });
//       // Automatically move to the next question if correct
//       if (currentQuestionIndex < initialQuizData.questions.length - 1) {
//         setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//         setSelectedOption(null);
//       } else {
//         setQuizCompleted(true);
//         // Pass the score AFTER it's updated for the final question
//         saveQuizAttempt(initialQuizData.categoryId, initialQuizData.id, true, score + 1, initialQuizData.questions.length); // Save completed quiz
//       }
//     } else {
//       setFeedback('Incorrect. Please try again.');
//       // Track incorrect attempt for this question
//       setIncorrectAttempts(prev => ({
//         ...prev,
//         [currentQuestion.id]: (prev[currentQuestion.id] || 0) + 1
//       }));
//     }
//   };

//   const handleNextQuestion = () => {
//     // Only allow next question if an option is selected AND it was correct, or if quiz is completed
//     if (selectedOption === currentQuestion.correctAnswer) {
//       if (currentQuestionIndex < initialQuizData.questions.length - 1) {
//         setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//         setSelectedOption(null);
//         setFeedback('');
//       } else {
//         setQuizCompleted(true);
//         saveQuizAttempt(initialQuizData.categoryId, initialQuizData.id, true, score, initialQuizData.questions.length); // Save completed quiz
//       }
//     } else {
//       setFeedback('You must select the correct answer to proceed or complete the quiz.');
//     }
//   };

//   const handleRestartQuiz = () => {
//     setCurrentQuestionIndex(0);
//     setSelectedOption(null);
//     setScore(0);
//     setQuizCompleted(false);
//     setFeedback('');
//     setIncorrectAttempts({});
//   };

//   // If the user navigates away or refreshes before completing, log an attempt (not completed)
//   useEffect(() => {
//     const handleBeforeUnload = () => {
//       // If quiz was started (at least one question answered or moved from first)
//       // and not yet marked as completed
//       if (!quizCompleted && currentQuestionIndex > 0) {
//         saveQuizAttempt(initialQuizData.categoryId, initialQuizData.id, false, score, initialQuizData.questions.length);
//       }
//     };

//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, [quizCompleted, score, currentQuestionIndex, initialQuizData]);


//   if (quizCompleted) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[400px]">
//         <h2 className="text-3xl font-bold mb-4 text-gray-900">Quiz Completed!</h2>
//         <p className="text-xl text-gray-700 mb-6">Your final score: {score} out of {initialQuizData.questions.length}</p>
//         <button
//           onClick={handleRestartQuiz}
//           className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold"
//         >
//           Retake Quiz
//         </button>
//         <button
//           onClick={() => router.push('/')}
//           className="mt-4 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-lg font-semibold"
//         >
//           Back to Categories
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-lg p-6 shadow-md">
//       <h2 className="text-2xl font-bold mb-4 text-gray-900">{initialQuizData.title}</h2>
//       <div className="text-lg text-gray-700 mb-6">
//         Question {currentQuestionIndex + 1} of {initialQuizData.questions.length}
//       </div>

//       <p className="text-xl font-semibold mb-6 text-gray-800">{currentQuestion.text}</p>

//       <div className="space-y-4 mb-6">
//         {currentQuestion.options.map((option, index) => (
//           <button
//             key={index}
//             onClick={() => handleOptionSelect(option)}
//             className={`block w-full text-left py-3 px-4 rounded-lg border-2 ${
//               selectedOption === option
//                 ? 'border-blue-500 bg-blue-50 text-blue-800'
//                 : 'border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100'
//             } transition-colors duration-200`}
//             disabled={quizCompleted}
//           >
//             {option}
//           </button>
//         ))}
//       </div>

//       {feedback && (
//         <p className={`mb-4 text-center font-medium ${feedback.includes('Incorrect') ? 'text-red-600' : 'text-green-600'}`}>
//           {feedback}
//         </p>
//       )}

//       <div className="flex justify-between items-center mt-6">
//         <button
//           onClick={handleSubmit}
//           className={`px-5 py-2 rounded-lg text-white font-semibold transition-colors duration-200 ${
//             selectedOption === null || quizCompleted
//               ? 'bg-gray-400 cursor-not-allowed'
//               : 'bg-green-600 hover:bg-green-700'
//           }`}
//           disabled={selectedOption === null || quizCompleted}
//         >
//           Submit Answer
//         </button>

//         {selectedOption === currentQuestion.correctAnswer && currentQuestionIndex < initialQuizData.questions.length - 1 && (
//             <button
//               onClick={handleNextQuestion}
//               className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
//             >
//               Next Question
//             </button>
//         )}
//         {selectedOption === currentQuestion.correctAnswer && currentQuestionIndex === initialQuizData.questions.length - 1 && (
//              <button
//                 onClick={handleNextQuestion} // This will trigger the quiz completion logic
//                 className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold"
//               >
//                 Finish Quiz
//               </button>
//         )}
//       </div>
//     </div>
//   );
// }


// src/app/components/QuizClient.js
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function QuizClient({ initialQuizData }) {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [answerChecked, setAnswerChecked] = useState(false); // State to control when feedback/colors are shown

  const currentQuestion = initialQuizData.questions[currentQuestionIndex];
  const totalQuestions = initialQuizData.questions.length;
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // Function to save quiz data to localStorage (from previous implementation)
  const saveQuizAttempt = (categoryId, quizId, isCompleted, finalScore, totalQuestionsCount) => {
    let quizData = JSON.parse(localStorage.getItem('quizStats')) || {};

    if (!quizData[categoryId]) {
      quizData[categoryId] = { attempts: 0, completions: 0, scoreSum: 0, totalQuestionsSum: 0 };
    }

    quizData[categoryId].attempts += 1;
    if (isCompleted) {
      quizData[categoryId].completions += 1;
      quizData[categoryId].scoreSum += finalScore;
      quizData[categoryId].totalQuestionsSum += totalQuestionsCount;
    }

    localStorage.setItem('quizStats', JSON.stringify(quizData));
  };


  const handleOptionSelect = (option) => {
    if (!answerChecked) { // Only allow selecting if answer hasn't been checked yet
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null) {
      setFeedback('Please select an option before submitting.');
      return;
    }

    setAnswerChecked(true); // Mark answer as checked

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 1);
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect.');
    }
  };

  const handleNextQuestion = () => {
    // This button should only appear after an answer has been submitted (answerChecked is true)
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedOption(null);
      setFeedback('');
      setAnswerChecked(false); // Reset for the next question
    } else {
      // This is the last question, so complete the quiz
      setQuizCompleted(true);
      saveQuizAttempt(initialQuizData.categoryId, initialQuizData.id, true, score, totalQuestions);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
      setSelectedOption(null); // Clear selected option for the previous question
      setFeedback('');
      setAnswerChecked(false); // Reset for the previous question
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

  // Effect to save incomplete quiz attempts if user leaves/refreshes
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (!quizCompleted && currentQuestionIndex > 0) {
        saveQuizAttempt(initialQuizData.categoryId, initialQuizData.id, false, score, totalQuestions);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [quizCompleted, score, currentQuestionIndex, initialQuizData, totalQuestions]);


  if (quizCompleted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Quiz Completed!</h2>
        <p className="text-xl text-gray-700 mb-6">Your final score: {score} out of {totalQuestions}</p>
        <button
          onClick={handleRestartQuiz}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold"
        >
          Retake Quiz
        </button>
        <button
          onClick={() => router.push('/')}
          className="mt-4 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-lg font-semibold"
        >
          Back to Categories
        </button>
      </div>
    );
  }

  return (
    // Changed the main div styling here
    <div className="bg-gray-800 text-white rounded-lg p-6 shadow-md w-full max-w-xl"> {/* Added w-full and adjusted max-w */}
      {/* Quiz Title */}
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        {initialQuizData.title}
      </h2>

      {/* Progress Bar */}
      <div className="w-full bg-gray-600 rounded-full h-2.5 mb-6">
        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      {/* Question Number */}
      <div className="text-lg text-gray-300 mb-6 text-center">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </div>

      {/* Question Text */}
      <p className="text-xl font-semibold mb-6 text-white text-center">
        {currentQuestion.text}
      </p>

      {/* Options */}
      <div className="space-y-4 mb-6">
        {currentQuestion.options.map((option, index) => {
          let optionClasses = `block w-full text-left py-3 px-4 rounded-lg border-2 font-medium transition-colors duration-200 `;

          if (answerChecked) {
            // If answer has been checked
            if (option === currentQuestion.correctAnswer) {
              // Always highlight correct answer in green
              optionClasses += `bg-green-700 border-green-500 text-white`;
            } else if (option === selectedOption) {
              // Highlight selected incorrect answer in red
              optionClasses += `bg-red-700 border-red-500 text-white`;
            } else {
              // Other unselected options remain neutral but disabled
              optionClasses += `bg-gray-700 border-gray-600 text-gray-300 opacity-70 cursor-not-allowed`;
            }
          } else {
            // If answer is not yet checked
            optionClasses += `text-white `;
            if (selectedOption === option) {
              optionClasses += `bg-blue-600 border-blue-500`; // Selected but not submitted
            } else {
              optionClasses += `bg-gray-700 border-gray-600 hover:bg-gray-600`; // Unselected
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={optionClasses}
              disabled={answerChecked} // Disable options once answer is checked
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Feedback Message */}
      {feedback && (
        <p className={`mb-4 text-center font-medium ${
          feedback.includes('Correct') ? 'text-green-400' : 'text-red-400'
        }`}>
          {feedback}
        </p>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePreviousQuestion}
          className={`px-5 py-2 rounded-lg text-white font-semibold transition-colors duration-200 ${
            currentQuestionIndex === 0 || quizCompleted
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={currentQuestionIndex === 0 || quizCompleted}
        >
          &larr; Previous
        </button>

        {!answerChecked ? (
          // Show Submit button if answer not checked
          <button
            onClick={handleSubmit}
            className={`px-5 py-2 rounded-lg text-white font-semibold transition-colors duration-200 ${
              selectedOption === null || quizCompleted
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            }`}
            disabled={selectedOption === null || quizCompleted}
          >
            Submit Answer
          </button>
        ) : (
          // Show Next Question or Finish Quiz button if answer checked
          currentQuestionIndex < totalQuestions - 1 ? (
            <button
              onClick={handleNextQuestion}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Next Question &rarr;
            </button>
          ) : (
            <button
              onClick={handleNextQuestion} // This will trigger quiz completion
              className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold"
            >
              Finish Quiz
            </button>
          )
        )}
      </div>
    </div>
  );
}