import React, { useState } from "react";
import "./App.css";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import NewExpense from "./components/NewExpenses/NewExpense";
import ExpenseList from "./components/Expenses/ExpenseList";
import ExpenseItems from "./components/Expenses/ExpenseItems";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const toggleExpenseFormHandler = () => {
    setShowExpenseForm((prevShowForm) => !prevShowForm);
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    setShowExpenseForm(false);
  };

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <button onClick={toggleExpenseFormHandler}>Add New Expense</button>
      {showExpenseForm && <NewExpense onAddExpense={addExpenseHandler} />}

      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
        availableYears={[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018]}
      />
      <ExpenseList items={filteredExpenses} />
      
    </div>
  );
}

export default App;
