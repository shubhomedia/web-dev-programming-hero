import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import "./Login.css";
const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    console.log('Came From', location.state?.form)
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New To Ema-john ?<Link to="/register"> Create Account</Link></p>
                <div>-------------Or------------</div>
                <button onClick={signInUsingGoogle}
                    className="btn-regular">Google Sign In</button>
            </div>
        </div >
    );
};

export default Login;