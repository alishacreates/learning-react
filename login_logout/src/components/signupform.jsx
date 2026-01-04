import { useState } from "react";
import { Container, TextField, Typography, Button, Box } from "@mui/material";

const SignupForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data); // {"message":"User registered successfully"}
        props.goToLoginbutton(); // move to "Registered" screen
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Error connecting to server:", err);
      alert("Error connecting to server");
    }
  };

  return (
    <Container>
      <Box sx={{ mx: 4, my: 5, p: 5, textAlign: "center" }}>
        <Typography sx={{ fontWeight: "bold", color: "#eaf0b8ff" }} variant="h2">
          Signup Form
        </Typography>
        <br />
        <TextField
          sx={{ backgroundColor: "white", borderRadius: "10px" }}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <TextField
          sx={{ backgroundColor: "#f5f5f5ff", borderRadius: "10px" }}
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <Button
          sx={{
            color: "#1b29a3ff",
            boxShadow: 5,
            backgroundColor: "white",
            fontWeight: "bold",
            borderRadius: "30px",
          }}
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default SignupForm;

