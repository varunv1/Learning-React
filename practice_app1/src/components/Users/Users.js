import React from "react";
import Card from "../UI/Card";
import UsersList from "./UserList";

// props.userData.map(user => <UsersList name = {user.name} age = {user.age}/>)
const Users = (props) => {
  return (
    <Card>
      <UsersList userData={props.userData} />
    </Card>
  );
};

export default Users;
