import React from "react";
import Card from "../Card/Card";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
  const expenses = [
    {
      id: 1,
      title: "toilet paper",
      amount: 230,
      date: new Date(2021, 3, 14),
    },
    {
      id: 2,
      title: "news paper",
      amount: 23,
      date: new Date(2021, 5, 24),
    },
    {
      id: 3,
      title: "sand paper",
      amount: 930,
      date: new Date(2020, 3, 14),
    },
    {
      id: 4,
      title: "laptop",
      amount: 1200,
      date: new Date(2021, 7, 26),
    },
  ];

  return (
    <Card>
      <NewExpense />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
};

export default Expenses;
