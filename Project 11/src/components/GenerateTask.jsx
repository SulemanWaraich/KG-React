import React, { useState } from "react";
import styles from "./GenerateTask.module.css";

function GenerateTask({ prop, func}) {

  return (
    <div>
      {" "}
      <ul id={styles["todo-list"]}>
        {prop.length > 0 ? (
          prop.map((task, index) => (
            <li key={index}>
              {task}
              <button className={styles["delete-btn"]} onClick={() => func(index)}> Remove </button>
            </li>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </ul>{" "}
    </div>
  );
}

export default GenerateTask;
