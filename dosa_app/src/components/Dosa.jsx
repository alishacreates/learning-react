import React, { useState } from "react";
import { Container, Box, Button, Typography } from "@mui/material";

// Dosa card component
const Dosa = ({ number, name, price }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < 10) setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <Box
      sx={{
        border: "2px solid rgb(245, 215, 215)",
        width: 240,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        alignItems: "center",
      }}
    >
      <Typography variant="h6">Dosa {number}</Typography>
      <Typography>Dosa name: {name}</Typography>
      <Typography>Dosa price: ₹{price}</Typography>
      <Typography
        sx={{
          fontFamily: "'Courier New', Courier, monospace",
          fontStyle: "oblique",
          fontSize: "larger",
        }}
      >
        Quantity: {quantity}
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          disableRipple
          disableElevation
          sx={{
            backgroundColor: "white",
            color: "black",
            "&:hover": { backgroundColor: "wheat" },
            "&:active": { backgroundColor: "wheat" },
          }}
          onClick={increaseQuantity}
        >
          +
        </Button>

        <Button
          variant="contained"
          disableRipple
          disableElevation
          sx={{
            backgroundColor: "wheat",
            color: "black",
            "&:hover": { backgroundColor: "white" },
          }}
          onClick={decreaseQuantity}
        >
          -
        </Button>
      </Box>

      <Typography
        sx={{
          fontFamily: "'Courier New', Courier, monospace",
          fontStyle: "oblique",
        }}
      >
        Total Price: ₹{price * quantity}
      </Typography>
    </Box>
  );
};

// Main component rendering all Dosa cards
const DosaList = () => {
  const dosas = [
    { number: 1, name: "Plain Dosa", price: 50 },
    { number: 2, name: "Masala Dosa", price: 70 },
    { number: 3, name: "Cheese Dosa", price: 90 },
    { number: 4, name: "Paneer Dosa", price: 100 },
  ];

  return (
    <Container sx={{ mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {dosas.map(dosa => (
          <Dosa key={dosa.number} {...dosa} />
        ))}
      </Box>

      {/* Images section below all cards */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Images
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Box sx={{ width: 150, height: 100, backgroundColor: "lightgray" }}>
          </Box>
          <Box sx={{ width: 150, height: 100, backgroundColor: "lightgray" }}>
            Image 2
          </Box>
          <Box sx={{ width: 150, height: 100, backgroundColor: "lightgray" }}>
            Image 3
          </Box>
          <Box sx={{ width: 150, height: 100, backgroundColor: "lightgray" }}>
            Image 4
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default DosaList;



