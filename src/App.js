import React, { useState } from "react";
import AddUser from "./conponents/Users/AddUser";
import UsersList from "./conponents/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const onAddUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
