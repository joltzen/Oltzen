import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import useStyles from "../hooks/useStyles";

const Buttons = ({ href, variant, title }) => {
  const classes = useStyles();
  return (
    <Button className={classes.button} href={href} variant={variant}>
      {title}
    </Button>
  );
};
Buttons.propTypes = {
  title: PropTypes.string,
};
export default Buttons;
