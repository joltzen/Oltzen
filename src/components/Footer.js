import { Container, Divider } from "@material-ui/core";
import { Copyright } from "@material-ui/icons";
import useStyles from "hooks/useStyles";
import React from "react";
import Typograph from "./Typograph";

const Footer = () => {
  const classes = useStyles();
  const date = new Date().getFullYear();
  return (
    <Container maxWidth="lg" className={classes.footer}>
      <Divider />
      <Copyright fontSize="inherit" />
      <Typograph
        variant="caption"
        text={`Copyright ${date} Thomas Oltzen, Alle Rechte vorbehalten`}
      />
    </Container>
  );
};

export default Footer;
