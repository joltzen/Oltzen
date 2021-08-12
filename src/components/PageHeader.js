import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import useStyles from "../hooks/useStyles";

const PageHeader = ({ title, description }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h2" className={classes.header}>
        {title}
      </Typography>
      <Typography variant="h5">{description}</Typography>
    </div>
  );
};

PageHeader.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

export default PageHeader;
