import React from "react";
import { Stack } from "react-bootstrap";
import { useAppSelector } from "../hooks/hooks";

const IncomeAndExpense = () => {
  const income = useAppSelector((state) => state.expense.income);
  const expense = useAppSelector((state) => state.expense.expense);

  return (
    <div className="card shadow px-1 py-3 mt-3" style={{ width: "100%" }}>
      <Stack direction="horizontal">
        <div className="mx-auto d-flex flex-column">
          Expense <span className="text-danger">$ {expense}</span>
        </div>
        <div className="mx-auto d-flex flex-column">
          Income <span className="text-success">$ {income}</span>
        </div>
      </Stack>
    </div>
  );
};

export default IncomeAndExpense;
