import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";

export default function CustomAccordion(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log(props.data);
  // TODO: low, medium, high risk => lower case => colorful text

  return (
    <>
      <Accordion
        variant="outlined"
        elevation={0}
        expanded={expanded === `panel${props?.index}`}
        onChange={handleChange(`panel${props?.index}`)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "30%", flexShrink: 0, fontWeight: "bold" }}>
            <Typography sx={{ color: "text.secondary" }}>Name:</Typography>
            {props.data.name}
          </Typography>
          <Typography sx={{ width: "20%", flexShrink: 0, fontWeight: "bold" }}>
            <Typography sx={{ color: "text.secondary" }}>Provider:</Typography>
            {props.data.cloud}
          </Typography>
          <Typography sx={{ width: "25%", flexShrink: 0, fontWeight: "bold" }}>
            <Typography sx={{ color: "text.secondary" }}>Service:</Typography>
            {props.data.service}
          </Typography>
          <Typography sx={{ width: "25%", flexShrink: 0, fontWeight: "bold" }}>
            <Typography sx={{ color: "text.secondary" }}>Risk:</Typography>
            {props.data.risk}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontWeight: "normal" }}>
            <Typography sx={{ color: "text.secondary" }}>
              Description:
            </Typography>
            {props.data.description}
          </Typography>
          <Divider sx={{ margin: "1rem 0" }} />
          <Typography sx={{ fontWeight: "normal" }}>
            <Typography sx={{ color: "text.secondary" }}>
              Page Detail:
            </Typography>
            {props.data.pageDetail}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
