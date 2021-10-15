import React, { useState } from "react";

const AddNewUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const nameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setUserAge(+event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enchUserData = {
      id: Math.random().toString(),
      name: userName,
      age: userAge,
    };
    console.log('fin',enchUserData);
    props.onAddUser(enchUserData);

  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input type="text" onChange={nameHandler} value={userName} />
      </div>
      <div>
        <label>Age</label>
        <input type="number" onChange={ageHandler} value={userAge} />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddNewUser;
