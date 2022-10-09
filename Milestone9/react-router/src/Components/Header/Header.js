import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/about/culture">Culture</NavLink>
        </nav>
    );
};

export default Header;