import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddNewUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddNewUser = (props) => {
  const enteredName = useRef();
  const enteredAge = useRef();
  const [error, setError] = useState();

  // const [userName, setUserName] = useState("");
  // const [userAge, setUserAge] = useState("");
  // const nameHandler = (event) => {
  //   setUserName(event.target.value);
  // };

  // const ageHandler = (event) => {
  //   setUserAge(+event.target.value);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const name = enteredName.current.value;
    const age = enteredAge.current.value;
    console.log(enteredAge, enteredAge);
    if (name.length === 0 || age <= 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age",
      });
      if (age < 0) {
        setError({
          title: "Invalid Age",
          message: "Please enter a valid age (> 0)",
        });
      }
      return;
    }
    const enchUserData = {
      id: Math.random().toString(),
      name: name,
      age: age,
    };
    console.log("fin", enchUserData);
    props.onAddUser(enchUserData);
    
    // here we are manipulating the dom directly which we should avoid to do.
    // but here we were just reading and are resetting the value of input field and we 
    // are aware of what we are doing, so we can do it. But try to avaoid unnessearly using it.

    enteredAge.current.value = '';
    enteredName.current.value = '';
  };
  const errorHandler = () => {
    setError();
  };
  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={enteredName} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={enteredAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddNewUser;
