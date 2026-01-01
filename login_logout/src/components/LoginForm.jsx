import React from 'react'
import { useState } from "react";
import { Container, TextField, Typography, Button, Box, containerClasses } from "@mui/material";

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
    <Container>
      <Box className='login-container screen-container'>
        <Typography variant='h2'>Login</Typography>
        <TextField type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <TextField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={props.goToSignup}>
          Don't have an account? Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;
