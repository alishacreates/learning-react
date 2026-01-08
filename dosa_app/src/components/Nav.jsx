import React from 'react'
import { Box, Button, Typography, TextField } from "@mui/material";

const Nav = () => {
  return (
    <Container>
        <Box>
            <Typography>Dosa</Typography>
            <Typography>Home</Typography>
            <Button>About</Button>
        </Box>
    </Container>
  )
}

export default Nav