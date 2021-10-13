import React from "react";
import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const day = props.date.toLocaleDateString("en-US", { day: "numeric" });
  const year = props.date.getFullYear();
  const month = props.date.toLocaleDateString("en-US", { month: "long" });

  console.log(day, month, year);

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
