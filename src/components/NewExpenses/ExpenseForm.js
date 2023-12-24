import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enterdTitle, setEnterdTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");

  const changeTitleHandler = (event) => {
    setEnterdTitle(event.target.value);
  };

  const changeAmountHandler = (event) => {
    setEnterdAmount(event.target.value);
  };

  const changeDateHandler = (event) => {
    setEnterdDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterdTitle,
      amount: +enterdAmount,
      date: new Date(enterdDate),
    };
    props.onSaveExpenseData(expenseData)
    setEnterdTitle("")
    setEnterdDate("")
    setEnterdAmount("")
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Expense title:</label>
      <input type="text" value={enterdTitle} onChange={changeTitleHandler} />
      <label>Expense amount:</label>
      <input type="number" value={enterdAmount} onChange={changeAmountHandler} />
      <label>Date:</label>
      <input type="date" value={enterdDate} onChange={changeDateHandler} />
      <button type="submit">Add Expenses</button>
    </form>
  );
}
