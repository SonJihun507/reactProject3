import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const INITIAL_DATA = [
  {
    id: uuidv4(),
    month: 1,
    date: "2024-01-05",
    item: "식비",
    amount: 100000,
    description: "세광양대창",
  },
  {
    id: uuidv4(),
    month: 1,
    date: "2024-01-10",
    item: "도서",
    amount: 40500,
    description: "모던 자바스크립트",
  },
  {
    id: uuidv4(),
    month: 2,
    date: "2024-02-02",
    item: "식비",
    amount: 50000,
    description: "회식",
  },
  {
    id: uuidv4(),
    month: 2,
    date: "2024-02-02",
    item: "간식",
    amount: 500,
    description: "아이스크림",
  },
  {
    id: uuidv4(),
    month: 2,
    date: "2024-02-02",
    item: "여행",
    amount: 1055000,
    description: "일본여행",
  },
  {
    id: uuidv4(),
    month: 2,
    date: "2024-02-02",
    item: "미용",
    amount: 155000,
    description: "미용실",
  },
  {
    id: uuidv4(),
    month: 2,
    date: "2024-02-02",
    item: "도서",
    amount: 95000,
    description:
      "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
  },
];

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
