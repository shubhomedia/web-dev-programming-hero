import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div>
            <h2>This is Register</h2>
            <form>
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
            <Link to="/login">Already Register ? Login In</Link>
        </div>
    );
};

export default Register;