import React, { useEffect, useState } from 'react';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h2>Users:  {users.length}</h2>
            <ul>
                {users.map(user => <li key={users._id}>{user.name} :: {user.email}</li>)
                }
            </ul>
        </div>
    );
};

export default Users;