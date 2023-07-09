import React, { useState } from 'react';

import './Salary.css';

const Salary = (props) => {
  const [enteredSalary, setSalary] = useState('0');

  const salaryChangeHandler = (event) => {
    setSalary(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.saveSalaryData(enteredSalary);
  };

  return (
    <div className="main-pad">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="salary">Enter your salary</label>
            <input
              id="salary"
              type="number"
              onChange={salaryChangeHandler}
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Enter your Salary</button>
        </div>
      </form>
    </div>
  );
};

export default Salary;
