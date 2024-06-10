import { configureStore } from "@reduxjs/toolkit";
import expensesRuducer from "./slices/expensesSlice";

const store = configureStore({
  reducer: {
    expenses: expensesRuducer,
  },
});

export default store;
