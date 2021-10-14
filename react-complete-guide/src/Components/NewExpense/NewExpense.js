import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [toggleExpenseForm, setToggleExpenseForm] = useState(false);
    const newExpenseHandler = (expense) =>{
        const updatedExpense = {
            ...expense,
            id: Math.random().toString()
        }
        props.onNewExpense(updatedExpense);
        console.log(expense);
    };

    const toggleHandler = (event) => {
        setToggleExpenseForm(!toggleExpenseForm);
        console.log(toggleExpenseForm);
    }
    return (
        <div className = 'new-expense'>
            {toggleExpenseForm === false && <button onClick= {toggleHandler}>Add Expense</button>}
            {toggleExpenseForm === true && <ExpenseForm onNewExpense = {newExpenseHandler}/>}
            
        </div>
    );
};

export default NewExpense;