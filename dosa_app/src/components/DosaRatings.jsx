import React, { useState } from "react";
import { Box, Typography, Rating } from "@mui/material";

const DosaRating = ({ name }) => {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ mt: 2, backgroundColor: "antiquewhite" }}>
      <Typography sx={{backgroundColor: "antiquewhite"}} variant="subtitle1">{name}</Typography>
      <Rating sx={{backgroundColor: "antiquewhite"}}
        name={`${name}-rating`}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
      />
      <Typography  sx={{backgroundColor: "antiquewhite", ml: 1}} variant="caption">
        {value} stars
      </Typography>
    </Box>
  );
};

export default DosaRating;
