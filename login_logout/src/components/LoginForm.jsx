import React from 'react'
import { useState } from "react";
import { Stack, Container, TextField, Typography, Button, Box, containerClasses } from "@mui/material";

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
        <Box sx={{mx: 4, my: 10, textAlign: "center", boxShadow: 2}}>
          <Typography sx={{fontWeight: "bold", color: "#eaf0b8ff"}} variant='h2'>Login</Typography>
          <br />
          <TextField sx={{backgroundColor: "#ffff"}} type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <br/> <br />
          <TextField sx={{backgroundColor: "#fcfcfc"}} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br/> <br />
          <Button sx={{color: "#1b29a3ff", boxShadow: 3, backgroundColor: "white", fontWeight: "bold", borderRadius: "30px"}} variant='contained' onClick={handleLogin}>Login</Button>
          <br/> <br/>
          <Button sx={{fontFamily: "system-ui"}} onClick={props.goToSignup}>
            Don't have an account? Sign Up</Button>
        </Box>
      </Container>
  );
};

export default LoginForm;
