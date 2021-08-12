import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import React from "react";
import ChangeList from "./Changelist";

const Version = ({
  children,
  features,
  fixes,
  improvements,
  latest,
  release,
  title,
  version,
  ...props
}) => (
  <Accordion defaultExpanded={latest} {...props}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6">
        Version {version}
        {latest && " (latest)"}
      </Typography>
    </AccordionSummary>
    <AccordionDetails style={{ display: "inherit" }}>
      <Typography variant="h6" style={{ display: "block" }}>
        {title}
      </Typography>
      {children}
      {features?.length && (
        <ChangeList
          changeSet="Features"
          changes={features}
          id={`${version}-features`}
        />
      )}
      {improvements?.length && (
        <ChangeList
          changeSet="Improvements"
          changes={improvements}
          id={`${version}-improvements`}
        />
      )}
      {fixes?.length && (
        <ChangeList changeSet="Fixes" changes={fixes} id={`${version}-fixes`} />
      )}
    </AccordionDetails>
  </Accordion>
);

Version.propTypes = {
  children: PropTypes.any,
  features: PropTypes.array,
  fixes: PropTypes.array,
  improvements: PropTypes.array,
  latest: PropTypes.bool,
  release: PropTypes.string,
  title: PropTypes.string,
  version: PropTypes.string.isRequired,
};

export default Version;
