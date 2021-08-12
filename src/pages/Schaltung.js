import { Container } from "@material-ui/core";
import React from "react";
import Page from "../components/Page";
import useStyles from "../hooks/useStyles";
import lcmeterschaltung from "../images/lcmeterschaltung.png";
const Schaltung = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Page title="Schaltung" />
      <img
        className={classes.lcmeterschaltung}
        src={lcmeterschaltung}
        alt="lcmeterschaltung"
      />
    </Container>
  );
};

export default Schaltung;
