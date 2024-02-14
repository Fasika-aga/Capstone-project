// Frontend: src/components/Signup.js

import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formData;

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        // You can add your signup logic here, like sending the form data to the backend
        console.log(formData);
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
