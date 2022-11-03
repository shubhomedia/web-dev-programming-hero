import React, { useEffect, useRef, useState } from 'react';

const Home = () => {

    const [user, setUser] = useState([]);
    const nameRef = useRef();
    const emailRef = useRef();

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    const handleAddUser = e => {
        const name = nameRef.current.value;
        e.preventDefault();
        const email = emailRef.current.value;
        e.preventDefault();

        const newUser = { name: name, }
        //send data to server
        fetch('http://localhost:5000/users', {
            method: 'post',
            headers: {
                'content-tyle': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then()

    }

    return (
        <div>
            <h2>User {user.length}</h2>

            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} placeholder='name' />
                <input type="email" ref={emailRef} placeholder='Email' />
                <input type="submit" value="submit" />
            </form>

            <ul>
                {
                    user.map(user => <li key={user.id}>
                        {user.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;