import { Container } from "@material-ui/core";
import React from "react";
import Footer from "../components/Footer";
import Page from "../components/Page";
import useStyles from "../hooks/useStyles";
import controller from "../images/controller.png";

const Controller =() =>{
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Page title="Controller" />
      <img className={classes.controller} src={controller} alt="controller" />
      <Footer />
    </Container>
  );
}

export default Controller;
