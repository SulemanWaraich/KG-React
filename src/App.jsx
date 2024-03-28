import "./App.css";
import AddName from "./comonents/AddName";
import AddTodo from "./comonents/AddTodo";
import AddItem1 from "./comonents/AddItem1";
import AddItem2 from "./comonents/AddItem2";

function App() {
  return (
    <center class="todo-container">
      <AddName></AddName>
      <AddTodo></AddTodo>
      <div className="items-container">
        <AddItem1></AddItem1>
        <AddItem2></AddItem2>
      </div>
    </center>
  );
}

export default App;
