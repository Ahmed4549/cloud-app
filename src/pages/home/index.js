import { Button, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomAccordion from "../../components/accordion";
import Card from "../../components/card";
import LinearProgressbar from "../../components/linearProgress";
import dataArr from "../../assets/metadata.json";
import TransitionModal from "../../components/modal";

const homeMain = {
  padding: "2rem",
};
const Home = () => {
  const cloudProvider = [...new Set(dataArr.map((item) => item?.cloud))]; //gets all distinct provicers from the array
  const cloudService = [...new Set(dataArr.map((item) => item?.service))]; //gets all distinct service from the array

  // state
  const [showModal, setShowModal] = useState(false);
  const [provider, setProvider] = useState("");
  const [service, setService] = useState("");
  const [progressValue, setProgressValue] = useState(0);

  // component did mount
  useEffect(() => {
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
  const openModal = () => setShowModal(true);

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

  // progress bar val handler
  const progressValueHandler = (value) => {
    setProgressValue(value);
    console.log(value, "vall");
  };

  // filters
  const filteredData = () => {
    if (provider !== "" && service !== "") {
      return dataArr?.filter((data) => {
        return data?.cloud === provider && data?.service === service;
      });
    } else if (provider !== "" || service !== "") {
      return dataArr?.filter((data) => {
        return data?.cloud === provider || data?.service === service;
      });
    } else {
      return dataArr;
    }
  };

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
      <LinearProgressbar
        progressValue={progressValue}
        renderingComponent="home"
      />
      <Box sx={{ margin: "1.5rem 0" }}>
        {filteredData()?.length > 0 ? (
          filteredData().map((data, index) => {
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
