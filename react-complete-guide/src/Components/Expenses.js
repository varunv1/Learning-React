import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
import NewExpense from "../NewExpense/NewExpense";

const Expenses = () => {
  const expenseList = [
    {
      id: 1,
      title: "Car service",
      amount: 5100,
      date: new Date(2021, 8, 26),
    },
    {
        id: 2,
        title: "Bike service",
        amount: 1200,
        date: new Date(2020, 8, 26),
      },
      {
        id: 1,
        title: "Scooty service",
        amount: 900,
        date: new Date(2021, 2, 26),
      },
      {
        id: 4,
        title: "Home rent",
        amount: 10000,
        date: new Date(2021, 8, 1),
      }
  ];

  return (
      <Card>
          <NewExpense />
      <ExpenseItem date = {expenseList[0].date} title = {expenseList[0].title} amount = {expenseList[0].amount} />
      <ExpenseItem date = {expenseList[1].date} title = {expenseList[1].title} amount = {expenseList[1].amount} />
      <ExpenseItem date = {expenseList[2].date} title = {expenseList[2].title} amount = {expenseList[2].amount} />
      <ExpenseItem date = {expenseList[3].date} title = {expenseList[3].title} amount = {expenseList[3].amount} />
      </Card>
  );
};

export default Expenses;
