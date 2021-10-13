import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card/Card";

const ExpenseItem = ({ date, title, amount }) => {
  const [clickState, setClickState] = useState(title);

  const clickHandler = () => {
    console.log("I was clicked!!!!!");
    setClickState("Updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{clickState}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
