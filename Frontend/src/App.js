import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DummyExpenses = [
  {
    id: Math.random(),
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: Math.random(),
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: Math.random(),
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: Math.random(),
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DummyExpenses);
  const [salary, setSalary] = useState('');

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter(
        (expense) => expense.id !== expenseId
      );
      return updatedExpenses;
    });
  };
  const saveSalarydataHandler = (salaryData) => {
    setSalary(salaryData);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>

      <Expenses
        items={expenses}
        onDeletingExpense={deleteExpenseHandler}
        Salary={salary}
      />
    </div>
  );
};

export default App;
