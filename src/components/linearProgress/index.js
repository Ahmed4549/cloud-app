import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressbar() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress value={60} variant="determinate" />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          60/100
        </Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel() {
  return (
    <Box sx={{ width: "100%", margin: "1.5rem 0" }}>
      <Typography color="text.secondary">How Secure Is Your Cloud:</Typography>
      <LinearProgressbar />
    </Box>
  );
}
