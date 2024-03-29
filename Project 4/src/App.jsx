import styles from "./App.module.css";
import Input from "./components/Input";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className={styles.calculator}>
      <Input></Input>
      <Buttons></Buttons>
    </div>
  );
}

export default App;
