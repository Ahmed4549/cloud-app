import { Button } from "@mui/material";
import React from "react";
import Card from "../../components/card";
import LinearProgressbar from "../../components/linearProgress";

const Home = () => {
  const homeMain = {
    padding: "2rem",
  };
  return (
    <div style={homeMain}>
      <Card />
      <LinearProgressbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="outlined">Unlock Checklist</Button>
      </div>
    </div>
  );
};

export default Home;
