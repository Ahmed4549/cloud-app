import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider, Checkbox } from "@mui/material";

export default function CustomAccordion({ data, index, progressValueHandler }) {
  const [expanded, setExpanded] = React.useState(false);

  // checkbox change handler: handles count of checks and update checkboxes
  const handleCheckChange = (e) => {
    var inputElement = document.getElementsByTagName("input");
    var count = 0;
    for (var i = 0; i < inputElement.length; i++) {
      if (
        inputElement[i].type === "checkbox" &&
        inputElement[i].checked === true
      ) {
        count++;
      }
    }
    progressValueHandler(count);
    // setChecked(e.target.checked);
    data.checked = e.target.checked;
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getColor = () => {
    if (data.risk) {
      if (data.risk.toLowerCase() === "high") {
        return "#FA2528";
      } else if (data.risk.toLowerCase() === "medium") {
        return "#FFBF00";
      } else if (data.risk.toLowerCase() === "low") {
        return "#15E918";
      } else {
        return "black";
      }
    }
  };

  return (
    <>
      <Accordion
        variant="outlined"
        elevation={0}
        expanded={expanded === `panel${index}`}
        onChange={handleChange(`panel${index}`)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Checkbox
            checked={data?.checked}
            key={index}
            // id={index}
            name={`newCheckbox${index}`}
            onChange={(e) => handleCheckChange(e)}
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            inputProps={{ "aria-label": "controlled" }}
            sx={{ mr: 4 }}
          />
          <Typography sx={{ width: "30%", flexShrink: 0, fontWeight: "bold" }}>
            <Typography sx={{ color: "text.secondary" }}>Name:</Typography>
            {data?.name ? data.name : "N/A"}
          </Typography>
          <Typography sx={{ width: "20%", flexShrink: 0, fontWeight: "bold" }}>
            <Typography sx={{ color: "text.secondary" }}>Provider:</Typography>
            {data?.cloud ? data.cloud : "N/A"}
          </Typography>
          <Typography sx={{ width: "25%", flexShrink: 0, fontWeight: "bold" }}>
            <Typography sx={{ color: "text.secondary" }}>Service:</Typography>
            {data?.service ? data.service : "N/A"}
          </Typography>
          <Typography
            sx={{
              width: "25%",
              flexShrink: 0,
              fontWeight: "bold",
              color: getColor(),
            }}
          >
            <Typography sx={{ color: "text.secondary" }}>Risk:</Typography>
            {data?.risk ? data.risk : "N/A"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "normal" }}>
            <Typography sx={{ color: "text.secondary" }}>
              Description:
            </Typography>
            {data?.description ? data.description : "N/A"}
          </Typography>
          <Divider sx={{ margin: "1rem 0" }} />
          <Typography sx={{ fontWeight: "normal" }}>
            <Typography sx={{ color: "text.secondary" }}>
              Page Detail:
            </Typography>
            {data?.pageDetail ? data.pageDetail : "N/A"}
          </Typography>
          <Divider sx={{ margin: "1rem 0" }} />
          <Typography sx={{ fontWeight: "normal" }}>
            <Typography sx={{ color: "text.secondary" }}>
              Remediation Steps:
            </Typography>
            {data?.RemediationSteps ? data.RemediationSteps : "N/A"}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
