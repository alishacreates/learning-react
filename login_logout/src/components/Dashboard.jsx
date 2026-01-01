import React from 'react'
import { Box, Typography, Button, Container, TextField } from "@mui/material";

const Dashboard = (props) => {
  return (
    <Container>
      <Box sx={{mx: 4, my: 5, textAlign: "center"}}>
          <Typography sx={{fontWeight: "bold", color: "#eaf0b8ff"}} variant='h2'>DASHBOARD</Typography>
          <br /> <br/>
          <Typography sx={{ fontFamily: "fantasy", color: "#616060ff"}} variant='h4'>Welcome, {props.currentUser}</Typography>
          <br />
          <Button sx={{color: "#1b29a3ff", boxShadow: "2px", backgroundColor: "white", fontWeight: "bold"}} variant='contained' onClick={props.logout}>Logout</Button>
      </Box>
    </Container>
  )
}

export default Dashboard