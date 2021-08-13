import { Container } from "@material-ui/core";
import React from "react";
import Page from "../components/Page";
import useImages from "../hooks/useImages";
import lcmeterschaltung from "../images/lcmeterschaltung.png";
const Schaltung = () => {
  const classes = useImages();
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
