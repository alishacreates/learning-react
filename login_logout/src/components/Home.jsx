import React from 'react'
import { Box, Typography, Button, Container, TextField } from "@mui/material";


const Home = (props) => {
  return (
  <Container maxWidth='sm'>
   <Box>
        <Typography variant='h2'>Home Page</Typography>
        <Button onClick={props.goToSignup}>Sign Up</Button>
    </Box>
  </Container>
  )
}
// test commit
export default Home