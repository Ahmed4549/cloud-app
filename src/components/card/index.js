import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TextField, MenuItem, Button } from "@mui/material";
import data from "../../assets/signatures-metadata.json";

export default function OutlinedCard() {
  const cloudProvider = [...new Set(data.map((item) => item?.cloud))]; //gets all distinct provicers from the array
  const cloudService = [...new Set(data.map((item) => item?.service))]; //gets all distinct service from the array

  // state
  const [provider, setProvider] = React.useState("");
  const [service, setService] = React.useState("");

  // component did mount
  React.useEffect(() => {
    let providerName = window.localStorage.getItem("provider");
    let serviceName = window.localStorage.getItem("service");
    if (providerName !== "") {
      setProvider(providerName);
    }
    if (serviceName !== "") {
      setService(serviceName);
    }
  }, []);

  // functions
  // handle menu change of cloud provider and save it to local storage
  const handleProviderChange = (event) => {
    setProvider(event.target.value);
    localStorage.setItem("provider", event.target.value);
  };

  // handle menu change of cloud services and save it to local storage
  const handleServiceChange = (event) => {
    setService(event.target.value);
    localStorage.setItem("service", event.target.value);
  };

  // clear all filters
  const clearFilters = () => {
    setService("");
    setProvider("");
    localStorage.removeItem("service");
    localStorage.removeItem("provider");
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div" sx={{ mb: 1.5 }}>
          Filters:
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
              {cloudProvider.map((option) => (
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
              {cloudService.map((option) => (
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
