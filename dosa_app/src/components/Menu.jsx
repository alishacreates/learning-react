import React, { useState, useCallback } from "react";
import { Box, Typography } from "@mui/material";

const Menu = ({ onSelect }) => {
  const [active, setActive] = useState("Home");

  const handleClick = useCallback((item) => {
    setActive(item);
    onSelect(item);
  }, [onSelect]);

  const menuItemStyle = (item) => ({
    cursor: "pointer",
    fontWeight: active === item ? "bold" : "normal",
    color: active === item ? "#ff9800" : "white",
    "&:hover": {
      color: "#ffb74d",
    },
  });

  return (
    <Box sx={{ display: "flex", gap: "20px" }}>
      {["Home", "Menu", "About"].map((item) => (
        <Typography
          key={item}
          sx={menuItemStyle(item)}
          onClick={() => handleClick(item)}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default Menu;
