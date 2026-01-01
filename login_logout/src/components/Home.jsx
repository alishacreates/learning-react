import React from 'react'
import { Box, Typography, Button, Container, TextField } from "@mui/material";


const Home = (props) => {
  return (
  <Container maxWidth='md' sx={{backgroundColor: "primary"}}>
   <Box sx={{mx: 4, my: 5, p: 5, textAlign: "center", boxShadow: 2}}>
        <Typography sx={{fontWeight: "bold", color: "#eaf0b8ff"}} variant='h2'>Home Page</Typography>
        <Button sx={{color: "#1b29a3ff", boxShadow: "2px", backgroundColor: "white", fontWeight: "bold", borderRadius: "30px"}} variant='contained' onClick={props.goToSignup}>Sign Up</Button>
        <Button sx={{color: "#1b29a3ff", boxShadow: "2px", backgroundColor: "white", fontWeight: "bold", borderRadius: "30px" }} variant='contained' onClick={props.goToLogin}>login </Button>
    </Box>
  </Container>
  )
}
export default Home