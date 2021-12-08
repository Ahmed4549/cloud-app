import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

export default function TransitionModal({ show, setShow }) {
  // initial States
  const errorInitialState = {
    nameError: "",
    emailError: "",
    organizationError: "",
    phoneError: "",
  };
  const formInitialState = {
    name: "",
    email: "",
    organization: "",
    phone: "",
  };
  // states
  const [formState, setFormState] = React.useState(formInitialState);
  const [error, setError] = React.useState(errorInitialState);

  // functions
  // close modal
  const closeModal = () => {
    setShow(false);
    setFormState(formInitialState);
    setError(errorInitialState);
  };

  // onChange handler
  const changeHandler = (e) => {
    setError({
      ...error,
      [e.target.name + "Error"]: e.target.value ? false : true,
    });
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // validation checker
  const validate = () => {
    let nameError = false;
    let organizationError = false;
    let emailError = false;
    let phoneError = false;
    if (formState.name === "") {
      nameError = true;
    }
    if (formState.organization === "") {
      organizationError = true;
    }
    if (formState.email === "") {
      emailError = true;
    }
    if (formState.phone === "") {
      phoneError = true;
    }
    setError({
      nameError,
      organizationError,
      emailError,
      phoneError,
    });
    if (nameError || organizationError || emailError || phoneError) {
      return false;
    }
    return true;
  };

  // submit handler
  const submitHandler = () => {
    let isValid = validate();
    if (isValid) {
      console.log(formState);
    } else {
      console.log("error");
    }
    // closeModal()
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={show}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Enter Details
            </Typography>
            <Divider sx={{ margin: "0.7rem 0" }} />
            <TextField
              size="small"
              label="Name"
              id="outlined-size-small"
              defaultValue="Small"
              fullWidth
              autoFocus
              name="name"
              value={formState.name}
              margin="dense"
              onChange={changeHandler}
              error={error.nameError}
            />
            <TextField
              size="small"
              label="Organization"
              id="outlined-size-small"
              defaultValue="Small"
              fullWidth
              name="organization"
              value={formState.organization}
              margin="dense"
              onChange={changeHandler}
              error={error.organizationError}
            />
            <TextField
              size="small"
              label="Email"
              id="outlined-size-small"
              defaultValue="Small"
              fullWidth
              name="email"
              value={formState.email}
              margin="dense"
              onChange={changeHandler}
              error={error.emailError}
            />
            <TextField
              size="small"
              label="Phone"
              id="outlined-size-small"
              defaultValue="Small"
              fullWidth
              type="number"
              name="phone"
              value={formState.phone}
              margin="dense"
              onChange={changeHandler}
              error={error.phoneError}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: ".5rem",
              }}
            >
              <Button
                onClick={closeModal}
                variant="outlined"
                color="error"
                sx={{ mt: 1 }}
              >
                Cancel
              </Button>
              <Button onClick={submitHandler} variant="outlined" sx={{ mt: 1 }}>
                Submit
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
