import { Typography } from "@material-ui/core";
import useStyles from "hooks/useStyles";
import React from "react";

const Typograph = ({ variant, text }) => {
  const classes = useStyles();
  return (
    <div>
      {variant === "h2" || "h3" || "h4" || "h5" || "h6" ? (
        <Typography variant={variant} className={classes.typoh}>
          {text}
        </Typography>
      ) : (
        <Typography variant={variant} className={classes.typo}>
          {text}
        </Typography>
      )}
    </div>
  );
};

export default Typograph;
