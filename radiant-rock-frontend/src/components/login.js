import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import Navbar from "./Navbar"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/user/signin",
        data
      ); // Send form data to the backend
      console.log(response.data); // Log the response from the backend
      alert("Login successful"); // Show an alert to the user
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
   <Navbar/>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameOrEmail">Username or Email</label>
          <input
            type="text"
            name="usernameOrEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;