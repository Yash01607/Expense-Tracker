import React from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../actions/authActions';

const ExpenseItem = (props) => {
  const dispatch = useDispatch();

  const cancelClickHandler = () => {
    dispatch(deleteExpense(props.expense));
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Rs. {props.amount}</div>
          <button type="submit" onClick={cancelClickHandler}>
            Remove Expense
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
