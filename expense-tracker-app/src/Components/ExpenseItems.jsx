import React from 'react'
import '.././ExpenseItems.css'
import ExpenseDate from './ExpenseDate';
const ExpenseItems = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date = {props.date}/>
      <div className="expense-item__description ">
        <h2>{props.product}</h2>
      </div>
      <div className="expense-item__price">
        <h2>${props.price}</h2>
      </div>
    </div>
  );
}

export default ExpenseItems