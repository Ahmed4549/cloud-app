import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TextField, MenuItem, Button } from "@mui/material";

export default function OutlinedCard({
  provider,
  service,
  providerDropdown,
  serviceDropdown,
  handleServiceChange,
  handleProviderChange,
  clearFilters,
}) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">Filters:</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          component="div"
          sx={{ mb: 1.5 }}
        >
          single filter won't show any data because it will not match any record
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              mb: 1.5,
              display: "flex",
              gap: "1rem",
              width: 600,
            }}
          >
            <TextField
              id="outlined-select-currency"
              select
              label="Cloud provider"
              name="provider"
              value={provider}
              size="small"
              onChange={handleProviderChange}
              fullWidth
            >
              {providerDropdown.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Cloud service"
              name="service"
              value={service}
              size="small"
              onChange={handleServiceChange}
              fullWidth
            >
              {serviceDropdown.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Button onClick={clearFilters} variant="outlined">
            Clear All Filters
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
