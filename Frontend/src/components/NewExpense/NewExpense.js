import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Salary from './SalaryForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdatingSalary, setisUpdatingSalary] = useState('');

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveExpneseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startUpdatingSalaryHandler = () => {
    setisUpdatingSalary(true);
  };
  const stopUpdatingSalaryHandler = () => {
    setisUpdatingSalary(false);
  };

  const saveSalaryHandler = (salary) => {
    setisUpdatingSalary(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && !isUpdatingSalary && (
        <div>
          <div>
            <button onClick={startEditingHandler}>Add New Expense</button>
          </div>
          <div>
            <button onClick={startUpdatingSalaryHandler}>Add Salary</button>
          </div>
        </div>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpneseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
      {isUpdatingSalary && (
        <Salary
          onCancel={stopUpdatingSalaryHandler}
          saveSalaryData={saveSalaryHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
