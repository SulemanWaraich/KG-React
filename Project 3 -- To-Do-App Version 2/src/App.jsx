import "./App.css";
import AddName from "./components/AddName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  let todoItems = [
    { name: "Buy-Milk", dueDate: "14 - 10 - 2024" },
    { name: "Go To College", dueDate: "31 - 09 - 2023" },
    { name: "Do Something", dueDate: "07 - 12 - 2024" },
  ];
  return (
    <center className="todo-container">
      <AddName></AddName>
      <AddTodo></AddTodo>
      <TodoItems TodoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
