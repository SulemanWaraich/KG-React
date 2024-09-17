import "./App.css";
import InputTask from "./components/InputTask";
import GenerateTask from "./components/GenerateTask";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(data))
  }, [data]);

  function getValue(val) {
    if(val.trim() === "") return;
    setData(prev => [...prev, val])

  }

  function removeTask(index){ 
      setData(prevData => prevData.filter((task, i) => i !== index))
  }

  return (
    <>
      <div class="container">
        <h1>To-Do List</h1>
        <InputTask prop={getValue}></InputTask>
        <GenerateTask prop={data} func={removeTask}></GenerateTask>
      </div>
    </>
  );
}

export default App;
