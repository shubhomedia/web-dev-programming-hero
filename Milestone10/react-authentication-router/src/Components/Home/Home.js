import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2>This is Home</h2>
            <h5>User: {user.displayName}</h5>
        </div>
    );
};

export default Home;