import React from 'react'
import { Container, TextField, Typography, Button, Box } from "@mui/material";

const Registered = (props) => {
  return (
    <Container>
      <Box sx={{mx: 4, my: 5, p: 5, textAlign: "center", boxShadow: 6}}>
          <Typography sx={{fontWeight: "bold", color: "#eaf0b8ff" }} variant='h2'>Sign Up successful </Typography>
          <Button sx={{color: "#1b29a3ff", boxShadow: "2px", backgroundColor: "white", fontWeight: "bold", borderRadius: "30px" }} variant='contained' onClick={props.goToLogin}>login </Button>
      </Box>
    </Container>
  )
}

export default Registered;