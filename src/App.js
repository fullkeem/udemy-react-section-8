import React, { useState } from "react";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
