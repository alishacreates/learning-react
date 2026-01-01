import React from 'react'
import { Container, TextField, Typography, Button, Box } from "@mui/material";

const Registered = (props) => {
  return (
    <Container>
      <Box className='r-container screen-container'>
          <Typography variant='h2'>Sign Up sucessful </Typography>
          <Button onClick={props.goToLogin}>login </Button>
      </Box>
    </Container>
  )
}

export default Registered;