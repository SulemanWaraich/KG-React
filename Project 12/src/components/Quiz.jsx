import React from "react";
import styles from "./Quiz.module.css";

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
  

  return (
    <div id={styles["quiz-container"]}>
      <h1 id={styles["quiz-title"]}>Quiz App</h1>
      <div id={styles["question-container"]}>
        <h2 id="question-text">Start your test</h2>
        <div id={styles["options-container"]}>
          {/* <button></button> */}
        </div>
      </div>
      <button id="next-button">Next</button>
    </div>
  );
}

export default Quiz;
