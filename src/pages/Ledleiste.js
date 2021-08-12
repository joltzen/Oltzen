import { Container } from "@material-ui/core";
import React from "react";
import Page from "../components/Page";
import Typograph from "../components/Typograph";
import useStyles from "../hooks/useStyles";
import ledleiste from "../images/ledleiste.png";

const Ledleiste = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Page title="LED Leiste" />
      <img className={classes.controller} src={ledleiste} alt="ledleiste" />
      <Typograph variant="body1" text="(19.11.2011)" />
    </Container>
  );
};

export default Ledleiste;
