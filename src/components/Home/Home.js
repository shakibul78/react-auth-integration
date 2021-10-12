import React from 'react';
import useAuth from '../../hooks/UseAuth.js';


const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>This is home</h1>
            <h5>user: {user.displayName}</h5>
        </div>
    );
};

export default Home;