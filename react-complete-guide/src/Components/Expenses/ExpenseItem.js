import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    const updateHandler = (event) => {
        setTitle('updated');
        console.log('updated!!');
    };
    return (
        <div className = 'expense-item'>
        <ExpenseDate date = {props.date}/>
        <h2 className = 'expense-item__description'>{title}</h2>
        <div className = 'expense-item__price'>${props.amount}</div>
        <button onClick = {updateHandler}>Update</button>
        </div>
    );
};

export default ExpenseItem;