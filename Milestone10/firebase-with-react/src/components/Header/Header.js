import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
const Header = () => {

    const { user, logout } = useAuth();

    return (
        <div className='header'>
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/placeorder">PlaceOrder</Link>
            <Link to="/register">Register</Link>
            {user?.email && <button onClick={logout}>Log Out : {user.displayName}</button>}
        </div>
    );
};

export default Header;