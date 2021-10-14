import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const enteredAmountHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(event.target.value);
    };
    const enteredTitleHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(event.target.value);
    };
    const enteredDateHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onNewExpense(expenseDate);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        console.log(expenseDate);
    };
  return (
    <form onSubmit = {submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange = {enteredTitleHandler} value = {enteredTitle}/>
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input type="number" min="0.01" step="0.01" onChange = {enteredAmountHandler} value = {enteredAmount}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2022-01-01" onChange = {enteredDateHandler} value = {enteredDate}/>
        </div>
        <button type = 'submit'>Add New Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
