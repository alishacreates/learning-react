import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";

const Summary = ({ dosas }) => {
  const { totalQuantity, totalPrice } = useMemo(() => {
    let quantity = 0;
    let price = 0;

    dosas.forEach(dosa => {
      quantity= quantity + dosa.quantity;
      price= price + dosa.quantity * dosa.price;
    });

    return { totalQuantity: quantity, totalPrice: price };
  }, [dosas]);

  return (
    <Box sx={{ 
      border: "2px solid lightblue", width: 300, margin: "20px auto", padding: 2, 
      display: "flex", flexDirection: "column", gap: 1.5, alignItems: "center"
    }}>
      <Typography variant="h6">Order Summary</Typography>

      {totalQuantity === 0 ? (
        <Typography>No dosas selected</Typography>
      ) : (
        <>
          <Typography>Total Dosas: {totalQuantity}</Typography>
          <Typography>Total Price: ₹{totalPrice}</Typography>
        </>
      )}
    </Box>
  );
};

export default Summary;

