import { Button, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomAccordion from "../../components/accordion";
import Card from "../../components/card";
import LinearProgressbar from "../../components/linearProgress";
// import data from "../../assets/signatures-metadata.json";
import TransitionModal from "../../components/modal";

const homeMain = {
  padding: "2rem",
};
const Home = () => {
  const dataArr = [
    {
      name: "AWS:CF-001",
      cloud: "AWS",
      risk: "High",
      service: "CF",
      description: "Ensure strong Cipher levels in CloudFront distribution",
      category: "Security",
      function: "Cryptography",
      group: "Encryption in Motion",
      messageFail: "Weak Ciphers exists in CloudFront Distribution",
      messagePass: "Strong Ciphers are set levels in CloudFront Distribution",
      pageDetail:
        "Best practice call for using HTTPS and strong Ciphers. This Signature checks for AWS Cloudfront Content Delivery Network distributions are not using insecure SSL protocols (Like. SSLv3) for HTTPS communication between CloudFront edge locations inclluding your origins. best practice calls for minimum TLSv1.0 or later and avoid using the SSLv3 protocol. Most regulations calls for TLS v1.0 and higher, and PCI calls for TLS v1.1 and higher as of June, 2018.",
      RemediationSteps:
        "To configure CloudFront to require HTTPS between CloudFront and your custom origin   1. Sign in to the AWS Management Console and open the CloudFront console at https://console.aws.amazon.com/cloudfront/.   2. In the top pane of the CloudFront console, choose the ID for the distribution that you want to update.   3. On the Origins tab, choose the origin that you want to update, and then choose Edit.   Update the following settings:   Origin Protocol Policy   Change the Origin Protocol Policy for the applicable origins in your distribution:   HTTPS Only – CloudFront uses only HTTPS to communicate with your custom origin.   Match Viewer – CloudFront communicates with your custom origin using HTTP or HTTPS, depending on the protocol of the viewer request. For example, if you choose Match Viewer for Origin Protocol Policy and the viewer uses HTTPS to request an object from CloudFront, CloudFront also uses HTTPS to forward the request to your origin.   Choose Match Viewer only if you specify Redirect HTTP to HTTPS or HTTPS Only for Viewer Protocol Policy.   CloudFront caches the object only once even if viewers make requests using both HTTP and HTTPS protocols.   Origin SSL Protocols   Choose the Origin SSL Protocols for the applicable origins in your distribution. The SSLv3 protocol is less secure, so we recommend that you choose SSLv3 only if your origin doesn't support TLSv1 or later.   Note   The TLSv1 handshake is both backwards and forwards compatible with SSLv3, but TLSv1.1 and TLSv1.2 are not. In this case, the openssl only sends a SSLv3 handshake.   Choose Yes, Edit.   Repeat steps 3 through 5 for each additional origin that you want to require HTTPS for between CloudFront and your custom origin.   Confirm the following before you use the updated configuration in a production environment:   The path pattern in each cache behavior applies only to the requests that you want viewers to use HTTPS for.   The cache behaviors are listed in the order that you want CloudFront to evaluate them in. For more information, see Path Pattern.   The cache behaviors are routing requests to the origins that you changed the Origin Protocol Policy for.",
    },
    {
      name: "AWS:CF-002",
      cloud: "AWS",
      risk: "Medium",
      service: "CF",
      description: "Ensure CloudFront access logging",
      category: "Security",
      function: "Audit - Log",
      group: "Logging",
      messageFail: "CloudFront access logging is disabled",
      messagePass: "CloudFront access logging is Enabled",
      pageDetail:
        "Ensure that your AWS Cloudfront distributions have the Logging feature enabled in order to track all viewer requests for the content delivered through the Content Delivery Network (CDN).",
      RemediationSteps:
        '"Login to the AWS Management Console.          Navigate to Cloudfront dashboard at https://console.aws.amazon.com/cloudfront/.                  On the Distributions page, select the CDN distribution that you want to update.                  Click the Distribution Settings button from the dashboard top menu to access the configuration page.                  On the General tab click the Edit button.                  On the Distribution Settings page, locate the Logging section and perform the following actions:                  Select On next to Logging to enable the feature.         In the Bucket for Logs box, specify the AWS S3 bucket where you want CloudFront to store the log files. If the selected distribution origin is also an S3 bucket, Cloudnosys recommends selecting a different bucket for storing the access logs."',
    },
    {
      name: "AWS:CF-003",
      cloud: "AWS",
      risk: "High",
      service: "CF",
      description: "Ensure CloudFront Viewer Protocol Policy (HTTPS)",
      category: "Security",
      function: "Cryptography",
      group: "Encryption in Motion",
      messageFail: "CloudFront Protocol Policy is not set to HTTPS",
      messagePass: "CloudFront Protocol Policy is set to HTTPS",
      pageDetail:
        "Ensure that the communication between your Amazon CloudFront CDN distribution and its viewers (end users) is encrypted using HTTPS in order to secure the delivery of your web application content. To enable data in transit encryption, you need to configure the web distribution viewer protocol policy to redirect HTTP requests to HTTPS requests or to require the viewers to use only the HTTPS protocol to access your web content available in the CloudFront distribution cache.",
      RemediationSteps:
        '"Sign in to the AWS Management Console.          02 Navigate to CloudFront dashboard at https://console.aws.amazon.com/cloudfront/.                  03 In the left navigation panel, click Distributions.                  04 On CloudFront Distribution page, under the main menu, select Web and Enabled from Viewing dropdown menus to list all active web distributions available within your AWS account.                  05 Select the web distribution that you want to reconfigure (see Audit section part I to identify the right distribution).                  06 Click the Distribution Settings button from the dashboard top menu to access the resource configuration page.                  07 Choose the Behaviors tab and select the distribution default behavior.                  08 Click the Edit button to access the behavior configuration settings.                  09 On the Edit Behavior page, under Default Cache Behavior Settings, perform one of the following actions to enforce encryption for your web content:                  Set the Viewer Protocol Policy configuration attribute to Redirect HTTP to HTTPS so that any HTTP requests are automatically redirected to HTTPS requests. Click Yes, Edit to apply the changes.         Set the Viewer Protocol Policy attribute to HTTPS Only so that your application viewers can only access your web content using HTTPS. Choosing this option will drop any HTTP traffic between edge servers and viewers. Click Yes, Edit to apply the configuration changes.         10 Repeat steps no. 5 – 9 to reconfigure the viewer protocol policy for other Amazon CloudFront CDN distributions available within your AWS account."',
    },
    {
      name: "AWS:CLT-001",
      cloud: "AWS",
      risk: "Medium",
      service: "CLT",
      description:
        "Ensure Log file integrity validation is enabled for CloudTrail",
      category: "Security",
      function: "Integrity",
      group: "Logging",
      messageFail:
        "CloudTrail log file integrity validation is not enabled or Configured",
      messagePass: "CloudTrail log file integrity validation is enabled",
      pageDetail:
        "To determine whether a log file was modified, deleted, or unchanged after CloudTrail delivered it, you can use CloudTrail log file integrity validation. Validated log files are invaluable in security and forensic investigations. For example, a validated log file enables you to assert positively that the log file itself has not changed, or that particular user credentials performed specific API activity.",
      RemediationSteps:
        "Enabling Validation and Validating Files        To enable log file integrity validation, you can use the AWS Management Console, the AWS CLI, or CloudTrail API.           AWS Management Console     To enable log file integrity validation with the CloudTrail console, choose Yes for the Enable log file validation option when you create or update a trail. By default, this feature is enabled for new trails. For more information, see Creating a Trail with the Console.",
    },
  ];

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
      <LinearProgressbar progressValue={progressValue} renderingComponent="home" />
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
