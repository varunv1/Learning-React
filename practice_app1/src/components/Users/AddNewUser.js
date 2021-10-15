import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddNewUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddNewUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();
  const nameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setUserAge(+event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge <=0){
        setError({
            title: 'Invalid Input',
            message: 'Please enter valid name and age'
        });
    if(userAge < 0){
            setError({
            title: 'Invalid Age',
            message: 'Please enter a valid age (> 0)'
            });
        
    }}
    const enchUserData = {
      id: Math.random().toString(),
      name: userName,
      age: userAge,
    };
    console.log("fin", enchUserData);
    props.onAddUser(enchUserData);
  };
  const errorHandler = () => {
      setError();
  }
  return (
    <div>
      {error && <ErrorModal onConfirm = {errorHandler}
        title={error.title}
        message={error.message}
      />}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={nameHandler}
            value={userName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={ageHandler} value={userAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddNewUser;
