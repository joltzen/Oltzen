import { Container } from "@material-ui/core";
import React from "react";
import Page from "../components/Page";
import useStyles from "../hooks/useStyles";
import lcmeterschaltung from "../images/lcmeterschaltung.png";
const Schaltung = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md">
        <Page title="Schaltung" />
      </Container>
      <img
        className={classes.lcmeterschaltung}
        src={lcmeterschaltung}
        alt="lcmeterschaltung"
      />
    </div>
  );
};

export default Schaltung;
