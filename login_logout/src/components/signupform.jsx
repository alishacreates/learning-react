import { useState } from "react";
import { Container, TextField, Typography, Button, Box } from "@mui/material";

const SignupForm = ({ goToRegistered }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (res.ok) {
        goToRegistered();
      } else {
        const data = await res.json();
        alert(data.error || "Signup failed");
      }
    } catch (err) {
      alert("Error connecting to server");
    }
  };

  return (
    <Container>
      <Box sx={{ mx: 4, my: 5, p: 5, textAlign: "center" }}>
        <Typography sx={{ fontWeight: 'bold', color: "#eaf0b8ff" }} variant="h2">Signup Form</Typography>
        <br />
        <TextField sx={{ backgroundColor: "white", color: "#ffff", borderRadius: "30" }} type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <TextField sx={{ backgroundColor: "#f5f5f5ff" }} type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <Button sx={{ color: "#1b29a3ff", boxShadow: 5, backgroundColor: "white", fontWeight: "bold", borderRadius: "30px" }} variant="contained" onClick={handleSubmit}> Submit </Button>
      </Box>
    </Container>
  );
};

export default SignupForm;

