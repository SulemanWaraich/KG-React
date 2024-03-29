import AddItem from "./AddItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ TodoItems }) => {
  return (
    <div className={styles["items-container"]}>
      {TodoItems.map(function (item) {
        return (
          <AddItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
          ></AddItem>
        );
      })}
    </div>
  );
};

export default TodoItems;
