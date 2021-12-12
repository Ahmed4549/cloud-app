import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader({ showLoader, closeLoader }) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: 9999 }}
      open={showLoader}
      onClick={closeLoader}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
