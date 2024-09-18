import React from "react";
import styles from "./Quiz.module.css";
import { useState } from "react";

function Quiz() {
  const Questions = [
    {
      text: "What is your name?",
      options: ["Suleman", "Ali", "Fahad", "None of these"],
      correct: "Suleman",
    },
    {
      text: "What is your favorite color?",
      options: ["Red", "Blue", "Green", "Yellow"],
      correct: "Blue",
    },
    {
      text: "What is your hobby?",
      options: ["Reading", "Gaming", "Cooking", "Traveling"],
      correct: "Gaming",
    },
  ];

  const [currIndex, setCurrIndex] = useState(0); // State for current question index
  const [score, setScore] = useState(0); // State for tracking correct answers
  const [showResult, setShowResult] = useState(false); // To show final result

  const handleOptionClick = (option) => {
    const currQuestion = Questions[currIndex];

    if (option === currQuestion.correct) {
      setScore(score + 1);
      alert("Correct Answer");
    } else {
      alert("Wrong Answer");
    }

    if (currIndex + 1 < Questions.length) {
      setCurrIndex(currIndex + 1);
    } else {
      setShowResult(true); // Quiz completed
    }
  };

  return (
    <div id={styles["quiz-container"]}>
      <h1 id={styles["quiz-title"]}>Quiz App</h1>
      {!showResult ? (
        <div id={styles["question-container"]}>
          <h2 id="question-text">{Questions[currIndex].text}</h2>
          <div id={styles["options-container"]}>
            {Questions[currIndex].options.map((option, index) => (
              <button
                key={index}
                className={styles["option-btn"]}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>{" "}
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {score} / {Questions.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
