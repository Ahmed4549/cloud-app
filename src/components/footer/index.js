import { Paper, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "3rem",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Made With Love - Ahmed Anis</Typography>
      </Box>
    </Paper>
  );
};

export default Footer;
