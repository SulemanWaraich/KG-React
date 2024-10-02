import styles from "./App.module.css";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (btnName) => {
    if (btnName === "C") {
      setCalVal("");
    } else if (btnName === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newBtn = calVal + btnName;
      setCalVal(newBtn);
    }
  };

  return (
    <div className={styles.calculator}>
      <Input displayVal={calVal}></Input>
      <Buttons onButtonClick={onButtonClick}></Buttons>
    </div>
  );
}

export default App;
