import { Paper, Typography, Box } from "@mui/material";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "3rem",
      }}
      elevation={2}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "text.secondary" }}>
          &copy; Ahmed Anis | Made With &hearts; | {year}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Footer;
