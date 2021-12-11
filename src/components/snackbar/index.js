import React from "react";
import Snackbar from "@mui/material/Snackbar";

export default function SimpleSnackbar({ open, close, message }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={close}
      message={message}
    />
  );
}
