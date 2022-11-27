import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      return;
    }

    if (+age < 1) {
      return;
    }

    onAddUser(name, age);
    setName("");
    setAge("");
  };

  const idHandler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <Card>
      <form className={styles.input} onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={name} onChange={idHandler} />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' value={age} onChange={ageHandler} />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
