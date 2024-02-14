

import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const Login = () => {
    const [formData, setFormData] = useState({
        usernameOrEmail: '',
        password: ''
    });

    const { usernameOrEmail, password } = formData;

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', formData); // Send form data to the backend
            console.log(response.data); // Log the response from the backend
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="usernameOrEmail">Username or Email</label>
                    <input type="text" name="usernameOrEmail" value={usernameOrEmail} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} required />
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;
