import React, { useState } from "react";
import styles from "./InputTask.module.css";

function InputTask({prop}) {
  const [value, setValue] = useState(null);

  return (
    <div class={styles['input-section']}>
      <input type="text" id={styles['todo-input']} placeholder="Add a new task..." value={value} onChange={(e)=> setValue(e.target.value)}/>
      <button id={styles['add-btn']} 
      onClick={()=> {
        prop(value)
        setValue('')
      }}>Add Task</button>
    </div>
  );
}

export default InputTask;
