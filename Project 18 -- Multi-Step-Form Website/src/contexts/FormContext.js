import React, { createContext, useContext } from 'react';

// Create a context
export const FormContext = createContext();

// Custom hook to use the form context
export function useForm() {
  return useContext(FormContext);
}
