import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressbar({ progressValue, renderingComponent }) {
  // get value upto two decimal places
  const getValue = () => {
    if (renderingComponent === "home") {
      return progressValue * 25;
    } else {
      progressValue = progressValue * 0.76;
      return progressValue.toFixed(2);
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          value={
            renderingComponent === "home"
              ? progressValue * 25
              : progressValue * 0.76
          }
          variant="determinate"
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          {getValue()}
          /100
        </Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel({
  progressValue,
  renderingComponent,
}) {
  return (
    <Box sx={{ width: "100%", margin: "1.5rem 0" }}>
      <Typography color="text.secondary">How Secure Is Your Cloud:</Typography>
      <LinearProgressbar
        progressValue={progressValue}
        renderingComponent={renderingComponent}
      />
    </Box>
  );
}
