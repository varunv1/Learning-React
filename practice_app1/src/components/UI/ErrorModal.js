 import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from './ErrorModal.module.css';
 const ErrorModal = props => {
    return(
        <div onClick = {props.onConfirm}>
            <div className = {styles.backdrop}>

            </div>
        
        <Card className = {styles.modal}>
            <header className = {styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className = {styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className = {styles.actions}>
                <Button onClick = {props.onConfirm}>Okay</Button>
            </footer>
        </Card>
        </div>
    );
 };

 export default ErrorModal;