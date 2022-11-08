import React, { useEffect, useState } from "react";
import User from "../User/User";
import "./Home.css";

const Home = () => {
  const [users, setUsers] = useState({});

  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(users);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("data insert successfully");
          event.target.reset();
        }
      });
  };

  const handleInputBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUsers = { ...users };
    newUsers[field] = value;
    setUsers(newUsers);
    console.log(newUsers);
  };

  return (
      <div className="formWrapper">
        <form onSubmit={handleAddUser}>
          <div>
            <h1>Add User</h1>
            <input
              onBlur={handleInputBlur}
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              onBlur={handleInputBlur}
              type="text"
              name="address"
              placeholder="Address"
              required
            />
          </div>
          <div>
            <input
              onBlur={handleInputBlur}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <button type="submit">Add User</button>
        </form>
      </div>
  );
};

export default Home;
