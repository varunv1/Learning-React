import React from "react";
import './ExpenseDate.css';

const ExpenseDate = (props) => {
    let expenseDay = props.date.toLocaleDateString('en-us', {day: 'numeric'});
    let expenseMonth = props.date.toLocaleDateString('en-us', {month: 'long'});
    let expenseYear = props.date.toLocaleDateString('en-us', {year: 'numeric'});
    return (
        <div className = 'expense-date'>
        <div className = 'expense-date__month'>{expenseMonth}</div>
        <div className = 'expense-date__day'>{expenseDay}</div>
        <div className = 'expense-date__year'>{expenseYear}</div>
        </div>
    );
};

export default ExpenseDate;