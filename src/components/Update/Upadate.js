import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Upadate = () => {
    const storedUser = useLoaderData();
    const [user, setUser] = useState(storedUser);
    const navigate = useNavigate();
    const handleUpdateUser = (event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/users/${user._id}`, {
            method : "PUT",
            headers : {
                'content-type' : "application/json" 
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0 )
            {
                alert('user updated')
                navigate('/users')
            }
        })
    }
    const handleInputChange = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        const newUsers = { ...user };
        newUsers[field] = value;
        setUser(newUsers);
        console.log(newUsers);
    }
    return (
        <div className="formWrapper">
        <form onSubmit={handleUpdateUser}>
          <div>
            <h1>Update User</h1>
            <input
              onBlur={handleInputChange}
              defaultValue={storedUser.name}
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              onBlur={handleInputChange}
              defaultValue={storedUser.address}
              type="text"
              name="address"
              placeholder="Address"
              required
            />
          </div>
          <div>
            <input
              onBlur={handleInputChange}
              defaultValue={storedUser.email}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <button type="submit" >Update User</button>
        </form>
      </div>
    );
}

export default Upadate;
