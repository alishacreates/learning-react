import { useState } from "react";
import './App.css'
import Home from "./components/Home";
import SignupForm from "./components/signupform";
import Registered from "./components/Registered";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/dashboard";
import { Box, Typography, Button, Container, TextField } from "@mui/material";

function App() {
  const [screen, setScreen] = useState("home");
  const [users, setUsers] = useState([]); 
  const [currentUser, setCurrentUser] = useState(null);


  const saveUser = (username, password) => {
    setUsers([...users, { username, password }]);
  };

  return (
    <Box sx={{minHeight: '100vh', backgroundColor: '#003333', display: "flex", justifyContent: "center", alignItems: "center"}}>
      {screen === "home" && ( 
        <Home goToSignup={() => setScreen("signup")} goToLogin={()=> setScreen("login")}/> )}
      {screen === "signup" && ( 
        <SignupForm saveUser={saveUser} goToLoginbutton ={() => setScreen("registered")} /> )}
      {screen === "registered" && 
        <Registered goToLogin={()=> setScreen("login")} />}
      {screen === "login" && ( 
        <LoginForm users={users} setCurrentUser={setCurrentUser} 
              goToDashboard={() => setScreen("dashboard")} goToSignup={() => setScreen("signup")} /> )}
      {screen === "dashboard" && 
        <Dashboard currentUser={currentUser} logout={() => setScreen("login")} />} 
    </Box>
  );
}

export default App;

