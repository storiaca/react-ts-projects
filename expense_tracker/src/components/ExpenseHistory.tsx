import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const ExpenseHistory = () => {
  const expenses = useAppSelector((state) => state.expense.expenseHistory);
  return (
    <div style={{ width: "100%" }}>
      {expenses.map((ex, i) => {
        return (
          <div
            key={i}
            className={
              ex.amount < 0
                ? "shadow-sm p-1 my-2 d-flex bg-danger rounded text-white justify-content-center"
                : "shadow-sm p-1 my-2 d-flex bg-success rounded text-white justify-content-center"
            }
          >
            <div className="mx-2">{ex.expenseName} </div>
            <div>{ex.amount}</div>
          </div>
        );
      })}
      {expenses.length === 0 && (
        <div className="p-1 my-3 text-center">No Transactions Yet</div>
      )}
    </div>
  );
};

export default ExpenseHistory;
