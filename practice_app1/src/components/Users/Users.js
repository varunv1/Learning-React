import React from "react";
import Card from "../Card/Card";
import UsersList from "./UserList";

// props.userData.map(user => <UsersList name = {user.name} age = {user.age}/>)
const Users = (props) => {

    return(
        <Card>
            <ul>
            {props.userData.map(user => <UsersList key = {user.id} name = {user.name} age = {user.age}/>)}  
            </ul>
</Card>
        
        
    );
};

export default Users;