import React from "react";
import AddUser from "./conponents/Users/AddUser";
import UsersList from "./conponents/Users/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
