import { Button, Box } from "@mui/material";
import React from "react";
import CustomAccordion from "../../components/accordion";
import Card from "../../components/card";
import LinearProgressbar from "../../components/linearProgress";
import data from "../../assets/signatures-metadata.json";

const Home = () => {
  const homeMain = {
    padding: "2rem",
  };

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
        <Button variant="outlined">Unlock Checklist</Button>
      </div>
    </div>
  );
};

export default Home;
