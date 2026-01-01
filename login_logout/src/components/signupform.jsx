import { useState } from "react";
import { Container, TextField, Typography, Button, Box, containerClasses } from "@mui/material";


const SignupForm = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    props.saveUser(username, password);
    props.goToLoginbutton();
  };

  return (
    <Container>
      <Box className="signup-container screen-container">
        <Typography variant="h2">Signup Form</Typography>
        <TextField type="text" placeholder="Enter your username:" value={username}
          onChange={(e) => setUsername(e.target.value)}/> <br/>
        <TextField type="password" placeholder="Enter your password:" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <Button onClick={handleSubmit}> Submit </Button>
      </Box>
    </Container>
  );
};

export default SignupForm;
