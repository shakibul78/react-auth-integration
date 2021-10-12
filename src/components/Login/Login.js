import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth.js';

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={signInUsingGoogle} >Google Sign In</button>
            <br />
            <button onClick={signInUsingGithub}>GitHub Sign in</button>

            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;

