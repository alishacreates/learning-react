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
      <Box sx={{mx: 4, my: 5, p: 5, textAlign: "center"}}>
        <Typography sx={{ fontWeight: 'bold', color: "#eaf0b8ff" }} variant="h2">Signup Form</Typography>
        <br />
        <TextField sx={{backgroundColor: "white" ,color: "#ffff", borderRadius: "30"}} type="text" placeholder="Enter your username:" value={username}
          onChange={(e) => setUsername(e.target.value)}/> 
        <br/> <br />
        <TextField sx={{backgroundColor: "#f5f5f5ff"}} type="password" placeholder="Enter your password:" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br/> <br />
        <Button sx={{color: "#1b29a3ff", boxShadow: 5, backgroundColor: "white", fontWeight: "bold", borderRadius: "30px"}}  variant="contained" onClick={handleSubmit}> Submit </Button>
      </Box>
    </Container>
  );
};

export default SignupForm;
