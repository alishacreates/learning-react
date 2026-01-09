import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

 const Dosa = ({ number, name, price }) => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(prev => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <>
        <Box
          sx={{
            border: "2px solid rgb(245, 215, 215)",
            width: 240, padding: 2,display: "flex",
            flexDirection: "column",gap: 1.5, alignItems: "center" }} > 
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

          <Box sx={{ display: "flex", gap:2 }}>
            <Button
            variant="contained" disableRipple disableElevation
              sx={{backgroundColor: "white", color: "black",
                "&:hover": {
                            backgroundColor: "wheat",
                          },
                "&:active": {
                            backgroundColor: "wheat", 
                          }
                           }}
             onClick={increaseQuantity} > + </Button>

          <Button
          variant="contained" disableElevation disableRipple
              sx={{backgroundColor: "wheat"}}
              onClick={decreaseQuantity}
            >
              -
            </Button>
          </Box>

          <Typography
            sx={{ fontFamily: "'Courier New', Courier, monospace", fontStyle: "oblique", }}> Total Price: ₹{price * quantity}
          </Typography>
  </Box>
   </>
  );
 };
export default Dosa;
