import React from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Container>
      <Box
        sx={{
          border: "2px solid white",
          width: "500px",
          height: "50px",
          margin: "10px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          borderRadius: "40px",
        }}
      >
        {/* Menu Button */}
        <Button
          variant="contained"
          disableRipple
          disableElevation
          onClick={() => navigate("/menu")}
          sx={{
            backgroundColor: isActive("/menu") ? "wheat" : "white",
            color: "black",
            "&:hover": {
              backgroundColor: "wheat",
            },
          }}
        >
          Menu
        </Button>

        {/* Home */}
        <Typography
          sx={{
            cursor: "pointer",
            fontWeight: isActive("/") ? "bold" : "normal",
            color: isActive("/") ? "wheat" : "white",
          }}
          onClick={() => navigate("/")}
        >
          Home
        </Typography>

        {/* About */}
        <Typography
          sx={{
            cursor: "pointer",
            fontWeight: isActive("/about") ? "bold" : "normal",
            color: isActive("/about") ? "wheat" : "white",
          }}
          onClick={() => navigate("/about")}
        >
          About
        </Typography>
      </Box>
    </Container>
  );
};

export default Nav;

