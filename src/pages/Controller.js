import { Container } from "@material-ui/core";
import React from "react";
import Footer from "../components/Footer";
import Page from "../components/Page";
import useImages from "../hooks/useImages";
import controller from "../images/controller.png";

const Controller = () => {
  const classes = useImages();
  return (
    <Container maxWidth="md">
      <Page title="Controller" />
      <img className={classes.controller} src={controller} alt="controller" />
      <Footer />
    </Container>
  );
};

export default Controller;
