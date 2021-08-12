import { Container, Divider, Grid } from "@material-ui/core";
import { Copyright } from "@material-ui/icons";
import React from "react";
import useStyles from "../hooks/useStyles";
import Typograph from "./Typograph";

const Footer = () => {
  const classes = useStyles();
  const date = new Date().getFullYear();
  return (
    <Container maxWidth="md" className={classes.footer}>
      <Divider />
      <Grid item xs={12}>
        <Copyright fontSize="inherit" />

        <Typograph
          variant="caption"
          text={`Copyright ${date} Thomas Oltzen, Alle Rechte vorbehalten`}
        />
      </Grid>
    </Container>
  );
};

export default Footer;
