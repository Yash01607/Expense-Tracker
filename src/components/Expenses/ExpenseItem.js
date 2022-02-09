import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const cancelClickHandler=()=>{
    props.onCancelClick(props.Id);
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Rs. {props.amount}</div>
          <button type="submit" onClick={cancelClickHandler}>Remove Expense</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
