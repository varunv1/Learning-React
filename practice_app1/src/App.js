import React, {useState} from "react";
import "./App.css";
import Card from "./components/UI/Card";
import AddNewUser from "./components/Users/AddNewUser";
import Users from "./components/Users/Users";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userData) => {
    setUsers((preUser) =>[...preUser,userData]);

    // need to add new users data to the state
  };
  return (
    <Card>
      <Card>
        <AddNewUser onAddUser={addUserHandler} />
      </Card>
      <Card>
        <Users userData={users} />
      </Card>
    </Card>
  );
}

export default App;
