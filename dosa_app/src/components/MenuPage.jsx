import React, { Component } from "react";
import { Container, Typography, List, ListItem, Paper, Box } from "@mui/material";
import DosaRating from "./DosaRatings"; 

const MenuPage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 6, backgroundColor: "#c6d5e7ff"}}>
      <Paper sx={{backgroundColor: "#e4c7e4ff", p: 1}} elevation={7}>

        <Typography variant="h4" gutterBottom align="center" sx={{color: "#d4dd9bff"}}>
          Welcome to Menu
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center" sx={{color: "#378478"}}>
          List of Dosas
        </Typography>

        <Box sx={{ mt: 2 ,backgroundColor: "#6fa597ff" }}>
          <List>
            <ListItem sx={{color: "antiquewhite"}}>Masala Dosa</ListItem>
            <ListItem sx={{color: "antiquewhite"}}>Paneer Dosa</ListItem>
            <ListItem sx={{color: "antiquewhite"}}>Cheese Dosa</ListItem>
            <ListItem sx={{color: "antiquewhite"}} >Rava Dosa</ListItem>
          </List>
        </Box>
      </Paper>
      <DosaRating name="Masala Dosa" />
      <DosaRating name="Paneer Dosa" />
    </Container>

  );
};

export default MenuPage;
