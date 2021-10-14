import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const newExpenseHandler = (expense) =>{
        const updatedExpense = {
            ...expense,
            id: Math.random().toString()
        }
        props.onNewExpense(updatedExpense);
        console.log(expense);
    };
    return (
        <div className = 'new-expense'>
            <ExpenseForm onNewExpense = {newExpenseHandler}/>
        </div>
    );
};

export default NewExpense;