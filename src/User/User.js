import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './User.css'
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";

const User = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users)

    const handleDelteBtn = (user) => {
        const agree = window.confirm(`Are you sure you want to delete : ${user.name}`)
        console.log(agree)
        if(agree){
            fetch(`http://localhost:5000/users/${user._id}`, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('user delete successfullly')
                    const remainingUsers = displayUsers.filter(usr => usr._id !== user._id)
                    setDisplayUsers(remainingUsers); 
                }
            })
            console.log(user._id)
        }
    }

    return (
        <div className='userWrappers'>
            {
                displayUsers.map(user => 
                    <div key={user._id} className='userWraper'>
                        <h3>{user.name}</h3>
                        <p>{user.address}</p>
                        <p>{user.email}</p>
                        <div className="edWrap">
                            <Link to={`/update/${user._id}`}>
                                <button > <FaRegEdit/> </button>
                            </Link>
                            <button onClick={() => handleDelteBtn(user)} > <FaTrashAlt/> </button>
                        </div>
                    </div>
                    )
            }
        </div>
    );
}

export default User;
