import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

export default function UserList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} ears old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
