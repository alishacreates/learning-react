import React from 'react'
import { useState } from "react";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = props.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      props.setCurrentUser(username);
      props.goToDashboard();
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className='login-container screen-container'>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={props.goToSignup}>
        Don't have an account? Sign Up
      </button>

    </div>
  );
};

export default LoginForm;
