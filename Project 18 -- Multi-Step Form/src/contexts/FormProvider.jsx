import { useState} from "react";
import { FormContext } from "./FormContext";

export function FormProvider({ children }) {
  const [data, setData] = useState({
    name: '',
    email: '',
    country: '',
    city: '',
    notification: '',
  });

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;