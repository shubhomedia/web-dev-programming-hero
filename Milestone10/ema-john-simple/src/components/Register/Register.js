import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form" >
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" placeholder='Your Email' />
                    <br />
                    <input type="password" placeholder="Your Password" />
                    <br />
                    <input type="password" placeholder="Re-Enter Your Password" />
                    <br />
                    <input className='btn-regular' type="submit" value="Submit" />
                </form>
                <p>Already Have An Account ?<Link to="/login">Login</Link></p>
            </div>
        </div >
    );
};

export default Register;