import { Button, Box } from "@mui/material";
import React, { useState } from "react";
import CustomAccordion from "../../components/accordion";
import Card from "../../components/card";
import LinearProgressbar from "../../components/linearProgress";
import data from "../../assets/signatures-metadata.json";
import TransitionModal from "../../components/modal";

const homeMain = {
  padding: "2rem",
};
const Home = () => {
  // state
  const [showModal, setShowModal] = useState(false);

  // functions
  const openModal = () => setShowModal(true);

  return (
    <div style={homeMain}>
      <Card />
      <LinearProgressbar />
      <Box sx={{ margin: "1.5rem 0" }}>
        {data.slice(0, 4).map((data, index) => {
          return <CustomAccordion index={index} data={data} />;
        })}
      </Box>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={openModal} variant="outlined">
          Unlock Checklist
        </Button>
      </div>
      <TransitionModal show={showModal} setShow={setShowModal} />
    </div>
  );
};

export default Home;
