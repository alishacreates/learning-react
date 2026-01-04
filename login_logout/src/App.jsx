import { useState, useEffect } from "react";
import './App.css'
import Home from "./components/Home";
import SignupForm from "./components/SignupForm";
import Registered from "./components/Registered";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import { Box, Typography, Button, Container, TextField } from "@mui/material";

function App() {
  const [screen, setScreen] = useState("home");
  const [currentUser, setCurrentUser] = useState(null);

// Auto-login if token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userEmail = localStorage.getItem("email");
    if (token && userEmail) {
      setCurrentUser(userEmail);
      setScreen("dashboard");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setCurrentUser(null);
    setScreen("login");
  };


 return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#003333', display: "flex", justifyContent: "center", alignItems: "center" }}>
      {screen === "home" && (
        <Home goToSignup={() => setScreen("signup")} goToLogin={() => setScreen("login")} />
      )}
      {screen === "signup" && (
        <SignupForm goToRegistered={() => setScreen("registered")} />
      )}
      {screen === "registered" &&
        <Registered goToLogin={() => setScreen("login")} />}
      {screen === "login" && (
        <LoginForm setCurrentUser={setCurrentUser} goToDashboard={() => setScreen("dashboard")} goToSignup={() => setScreen("signup")} />
      )}
      {screen === "dashboard" &&
        <Dashboard currentUser={currentUser} logout={handleLogout} />}
    </Box>
  );
}

export default App;

