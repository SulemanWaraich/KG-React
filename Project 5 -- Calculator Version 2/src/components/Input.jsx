import styles from "./Input.module.css";

const Input = ({ displayVal }) => {
  return <input type="text" className={styles.field} value={displayVal} />;
};

export default Input;
