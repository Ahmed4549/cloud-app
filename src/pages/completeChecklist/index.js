import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomAccordion from "../../components/accordion";
import Card from "../../components/card";
import LinearProgressbar from "../../components/linearProgress";
import data from "../../assets/signatures-metadata.json";

const homeMain = {
  padding: "2rem",
};
const CompleteChecklist = () => {
  // state
  const [count, setCount] = useState(4);

  // component did mount
  useEffect(() => {
    let checkList = window.localStorage.getItem("cloudSecurityChecklist");
    if (checkList) {
      setCount(10);
    }
  }, []);

  // functions
  const loadMore = () => setCount((prevCount) => prevCount + 10);

  return (
    <div style={homeMain}>
      <Card />
      <LinearProgressbar />
      <Box sx={{ margin: "1.5rem 0" }}>
        {data.slice(0, count).map((data, index) => {
          return <CustomAccordion index={index} data={data} />;
        })}
      </Box>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={loadMore}
          disable={count == 130 ? true : false}
          variant="outlined"
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default CompleteChecklist;
