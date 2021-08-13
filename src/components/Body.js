import { Typography } from "@material-ui/core";
import useStyles from "hooks/useStyles";
import PropTypes from "prop-types";
import React from "react";

const Body = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography variant="body1" className={classes.typo}>
      {text}
    </Typography>
  );
};

Body.propTypes = {
  title: PropTypes.string,
};

export default Body;
