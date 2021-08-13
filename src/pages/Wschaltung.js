import { Container } from "@material-ui/core";
import React from "react";
import Footer from "../components/Footer";
import Page from "../components/Page";
import useImages from "../hooks/useImages";
import w5500 from "../images/w5500example.jpg";

const Wschaltung = () => {
  const classes = useImages();
  return (
    <Container maxWidth="md">
      <Page title="Schaltung mit WIZ550io und ATmega8" />
      <img className={classes.controller} src={w5500} alt="w5500" />
      <Footer />
    </Container>
  );
};

export default Wschaltung;
