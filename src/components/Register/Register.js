import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h3>Please Register</h3>
            <form >
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="Submit" />
                <br />

            </form>
            <Link to="/login" >Already Registered?</Link>
        </div>
    );
};

export default Register;