import { useState } from "react";
import { Container, TextField, Typography, Button, Box } from "@mui/material";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data); // {"message":"Login successful"}
        props.setCurrentUser(email);
        props.goToDashboard();
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Error connecting to server:", err);
      alert("Error connecting to server");
    }
  };

  return (
    <Container>
      <Box sx={{ mx: 4, my: 10, textAlign: "center", boxShadow: 2 }}>
        <Typography sx={{ fontWeight: "bold", color: "#eaf0b8ff" }} variant="h2">
          Login
        </Typography>
        <br />
        <TextField
          sx={{ backgroundColor: "#ffff", borderRadius: "10px" }}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <TextField
          sx={{ backgroundColor: "#fcfcfc", borderRadius: "10px" }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <Button
          sx={{
            color: "#1b29a3ff",
            boxShadow: 3,
            backgroundColor: "white",
            fontWeight: "bold",
            borderRadius: "30px",
          }}
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>
        <br /><br />
        <Button sx={{ fontFamily: "system-ui" }} onClick={props.goToSignup}>
          Don't have an account? Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;
