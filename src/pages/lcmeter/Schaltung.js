import { Container } from "@material-ui/core";
import Page from "components/Page";
import useImages from "hooks/useImages";
import lcmeterschaltung from "images/lcmeterschaltung.png";
import React from "react";

const Schaltung = () => {
  const classes = useImages();
  return (
    <Container maxWidth="md">
      <Page title="Schaltung" />
      <img
        className={classes.fullhd}
        src={lcmeterschaltung}
        alt="lcmeterschaltung"
      />
    </Container>
  );
};

export default Schaltung;
