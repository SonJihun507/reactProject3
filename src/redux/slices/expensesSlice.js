import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const INITIAL_DATA = [];

const expensesSlice = createSlice({
  name: "expenses",
  initialState: INITIAL_DATA,
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    editExpense: (state, action) => {
      const { id, date, item, amount, description } = action.payload;
      const existingExpense = state.find((expense) => expense.id === id);
      if (existingExpense) {
        existingExpense.date = date;
        existingExpense.item = item;
        existingExpense.amount = amount;
        existingExpense.description = description;
      }
    },
    deleteExpense: (state, action) => {
      const { id } = action.payload;
      return state.filter((expense) => expense.id !== id);
    },
  },
});

export const { addExpense, editExpense, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
