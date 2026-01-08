import React from 'react'
import {Container, Box, Button, Typography, TextField } from "@mui/material";

const Nav = () => {
  return (
    <Container>
        <Box sx={{border: "5px solid black", width: "500px", height: "60px", margin: "10px auto", 
            display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <Typography>Dosa</Typography>
            <Typography>Home</Typography>
            <Typography>About</Typography>
        </Box>
    </Container>
  )
}

export default Nav