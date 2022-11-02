import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div>
            <h2>This is Login</h2>
            <br />
            <button onClick={signInUsingGoogle} >Login With Goolge</button>
            <br />
            <Link to="/register">Register</Link>
        </div>
    );
};

export default Login;