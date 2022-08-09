import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAppDispatch } from "../hooks/hooks";
import {
  addExpenseToHistory,
  calculateIncome,
  calculateBalance,
  IExpense,
  calculateExpense,
} from "../redux/features/expenseSlice";

const TransactionForm = () => {
  const dispatch = useAppDispatch();
  const [expense, setExpense] = useState<IExpense>({
    expenseName: "",
    amount: "",
  });

  const onChange = <K extends keyof IExpense>(key: K, value: IExpense[K]) => {
    setExpense({ ...expense, [key]: value });
  };

  return (
    <div className="mt-3">
      <h3 className="border-bottom border-2">Add New Transaction</h3>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Text</Form.Label>
        <Form.Control
          onChange={(e) =>
            onChange(e.target.name as keyof IExpense, e.target.value)
          }
          id="text"
          name="expenseName"
          type="text"
          placeholder="Enter text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          onChange={(e) =>
            onChange(e.target.name as keyof IExpense, e.target.value)
          }
          id="amount"
          name="amount"
          type="text"
          placeholder="Enter Amount"
        />
      </Form.Group>
      <Button
        onClick={() => {
          if (
            typeof expense.amount === "string" &&
            !isNaN(parseFloat(expense.amount))
          ) {
            dispatch(addExpenseToHistory(expense));
            dispatch(calculateBalance());
            dispatch(calculateIncome());
            dispatch(calculateExpense());
          }
        }}
      >
        Add Transaction
      </Button>
    </div>
  );
};

export default TransactionForm;
