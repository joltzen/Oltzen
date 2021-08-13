import { Container } from "@material-ui/core";
import Footer from "components/Footer";
import Page from "components/Page";
import useImages from "hooks/useImages";
import w5500 from "images/w5500example.jpg";
import React from "react";

const Wschaltung = () => {
  const classes = useImages();
  return (
    <Container maxWidth="md">
      <Page title="Schaltung mit WIZ550io und ATmega8" />
      <img className={classes.fullhd} src={w5500} alt="w5500" />
      <Footer />
    </Container>
  );
};

export default Wschaltung;
