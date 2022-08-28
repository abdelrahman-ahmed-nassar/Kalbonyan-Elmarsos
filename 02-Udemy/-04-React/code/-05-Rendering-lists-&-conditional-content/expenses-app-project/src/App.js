// Hello world!
import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";

import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 400,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Book",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e6",
    title: "New Mentor",
    amount: 350,
    date: new Date(2019, 6, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
