import React from "react";
import { Container, Box, Button, Typography } from "@mui/material";

const Nav = ({ onSelect }) => {
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
        <Button
          variant="contained"
          disableRipple
          disableElevation
          onClick={() => onSelect("Menu")}
          sx={{
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "wheat",
            },
            "&:active": {
              backgroundColor: "wheat",
            },
          }}
        >
          Menu
        </Button>

        <Typography
          sx={{ cursor: "pointer" }}
          onClick={() => onSelect("Home")}
        >
          Home
        </Typography>

        <Typography
          sx={{ cursor: "pointer" }}
          onClick={() => onSelect("About")}
        >
          About
        </Typography>
      </Box>
    </Container>
  );
};

export default Nav;
