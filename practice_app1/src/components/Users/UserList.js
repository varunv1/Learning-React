import React from "react";
import Card from "../Card/Card";
import styles from "./UserList.module.css";
const UserList = (props) => {
  return (
    <li className={styles.list}>
      <p>{`${props.name} (${props.age} years old)`}</p>
    </li>
  );
};

export default UserList;
