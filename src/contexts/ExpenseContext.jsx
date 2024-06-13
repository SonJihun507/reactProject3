import { createContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ExpenseContext = createContext();

export default function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
}
