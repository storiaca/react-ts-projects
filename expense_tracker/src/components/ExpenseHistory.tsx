import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const ExpenseHistory = () => {
  const expenses = useAppSelector((state) => state.expense.expenseHistory);
  return (
    <div style={{ width: "100%" }}>
      {expenses.map((ex, i) => {
        return (
          <div key={i}>
            <div>{ex.expenseName}</div>
            <div>{ex.amount}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseHistory;
