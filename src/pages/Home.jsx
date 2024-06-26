import styled from "styled-components";
import MonthNavigation from "../components/MonthNavigation";
import { useState, useContext } from "react";
import ExpenseList from "../components/ExpenseList";
import CreateExpense from "../components/CreateExpense";
import { ExpenseContext } from "../contexts/ExpenseContext";
import { useSelector } from "react-redux";

const Container = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const Section = styled.section`
  background-color: green;
  border-radius: 16px;
  padding: 20px;
`;

export default function Home() {
  const [month, setMonth] = useState(1);

  return (
    <Container>
      <MonthNavigation month={month} setMonth={setMonth} />
      <CreateExpense month={month} />
      <ExpenseList />
    </Container>
  );
}
