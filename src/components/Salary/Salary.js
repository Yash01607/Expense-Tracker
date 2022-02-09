import React, { useState } from "react";

import "./Salary.css";

const Salary = (props) => {
  const [enteredSalary, setSalary] = useState("0");

  const salaryChangeHandler = (event) => {
    setSalary(event.target.value);

    // console.log(salaryData);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.saveSalaryData(enteredSalary);
  };

  return (
    <div className="main-pad">
      <form onSubmit={submitHandler}>
        <label htmlFor="salary">Enter your salary</label>
        <input id="salary" type="number" onChange={salaryChangeHandler}></input>
        <button type="submit">Enter your Salary</button>
      </form>
    </div>
  );
};

export default Salary;
