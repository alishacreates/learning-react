import React from 'react'
import { Box, Typography, Button, Container, TextField } from "@mui/material";

const Dashboard = (props) => {
  return (
    <Container>
      <Box className='db-container screen-container'>
          <Typography variant='h2'>DASHBOARD</Typography>
          <Typography variant='h4'>Welcome, {props.currentUser}</Typography>
          <Button onClick={props.logout}>Logout</Button>
      </Box>
    </Container>
  )
}

export default Dashboard