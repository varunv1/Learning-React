import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
import NewExpense from "../NewExpense/NewExpense";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = () => {

  const [year, setYear] = useState('2020');
  const [expenseList, setExpenseList] = useState([
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
        id: 3,
        title: "Scooty service",
        amount: 900,
        date: new Date(2019, 2, 26),
      },
      {
        id: 4,
        title: "Home rent",
        amount: 10000,
        date: new Date(2021, 1, 1),
      }
  ]);


  const yearHandler = (updatedYear) => {
    setYear(updatedYear);
  };

  const expenseHandler = (expense) => {

    setExpenseList((prevState) => {return([
      expense,
      ...prevState
    ])});
    
  };
  const expenseListFilter = () => {
    return expenseList.filter((element) => element.date.getFullYear().toString() === year ?element:null);
    };
    let defaultMessage = <p style = {{textAlign: "center", color: "white", padding: "0px"}}>No expenses found</p>;

    if (expenseListFilter().length > 0){
      defaultMessage = expenseListFilter().map(expense => <ExpenseItem key = {expense.id} date = {expense.date} title = {expense.title} amount = {expense.amount} />)
    }
  return (
      <Card>
          <NewExpense onNewExpense = {expenseHandler}/>
          <ExpensesFilter onYearChange = {yearHandler} selectedYear = {year}/>
          <ExpensesChart expenses = {expenseListFilter()}/>
          {defaultMessage}
      </Card>
  );
};

export default Expenses;
//