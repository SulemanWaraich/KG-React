import styles from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" name="text" className={styles["field"]} />
        </div>
        <div className="col-4">
          <input type="date" name="date" className={styles["field"]} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
