import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

export default function OutlinedCard() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          Filters:
        </Typography>
        <Box
          sx={{
            mb: 1.5,
            display: "flex",
            gap: ".5rem",
          }}
        >
          <Typography color="text.secondary">Cloud provider:</Typography>
          <Chip label="hello" size="small" variant="outlined" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: ".5rem",
          }}
        >
          <Typography color="text.secondary">Services:</Typography>
          <Chip label="hello" size="small" variant="outlined" />
        </Box>
      </CardContent>
    </Card>
  );
}
