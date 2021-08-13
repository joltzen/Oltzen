import Typography from "@material-ui/core/Typography";
import useStyles from "hooks/useStyles";
import PropTypes from "prop-types";
import React from "react";

const PageHeader = ({ title, description }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" className={classes.header}>
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
