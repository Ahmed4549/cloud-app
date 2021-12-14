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
  const cloudProvider = [...new Set(data.map((item) => item?.cloud))]; //gets all distinct provicers from the array
  const cloudService = [...new Set(data.map((item) => item?.service))]; //gets all distinct service from the array

  // state
  const [provider, setProvider] = useState("");
  const [service, setService] = useState("");
  const [progressValue, setProgressValue] = useState(0);
  const [count, setCount] = useState(4);

  // component did mount
  useEffect(() => {
    let checkList = window.localStorage.getItem("cloudSecurityChecklist");
    if (checkList) {
      setCount(10);
    }
    let providerName = window.localStorage.getItem("provider");
    let serviceName = window.localStorage.getItem("service");
    if (providerName !== null) {
      setProvider(providerName);
    }
    if (serviceName !== null) {
      setService(serviceName);
    }
  }, []);

  // functions
  // handle menu change of cloud provider and save it to local storage
  const handleProviderChange = (event) => {
    setProvider(event.target.value);
    localStorage.setItem("provider", event.target.value);
    // filteredData();
  };

  // handle menu change of cloud services and save it to local storage
  const handleServiceChange = (event) => {
    setService(event.target.value);
    localStorage.setItem("service", event.target.value);
    // filteredData();
  };

  // clear all filters
  const clearFilters = () => {
    setService("");
    setProvider("");
    localStorage.removeItem("service");
    localStorage.removeItem("provider");
  };

  // filters
  const filteredData = () => {
    console.log(data, provider, service);
    if (provider !== "" && service !== "") {
      return data?.filter((data) => {
        return data?.cloud === provider && data?.service === service;
      });
    } else if (provider !== "" || service !== "") {
      return data?.filter((data) => {
        console.log(data?.cloud);
        return data?.cloud === provider || data?.service === service;
      });
    } else {
      return data;
    }
  };

  // progress bar val handler
  const progressValueHandler = (value) => {
    setProgressValue(value);
    console.log(value, "vall");
  };

  // to load more items
  const loadMore = () => setCount((prevCount) => prevCount + 10);

  return (
    <div style={homeMain}>
      <Card
        provider={provider}
        service={service}
        providerDropdown={cloudProvider}
        serviceDropdown={cloudService}
        handleServiceChange={handleServiceChange}
        handleProviderChange={handleProviderChange}
        clearFilters={clearFilters}
      />
      <LinearProgressbar progressValue={progressValue} />
      <Box sx={{ margin: "1.5rem 0" }}>
        {filteredData()?.length > 0 ? (
          filteredData()
            .slice(0, count)
            .map((data, index) => {
              return (
                <CustomAccordion
                  progressValueHandler={progressValueHandler}
                  index={index}
                  data={data}
                />
              );
            })
        ) : (
          <h3 style={{ textAlign: "center" }}>OOPS!!! No Data Found</h3>
        )}
      </Box>
      {filteredData()?.length > 9 ? (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={loadMore}
            disable={count === 130 ? true : false}
            variant="outlined"
          >
            Load More
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CompleteChecklist;
