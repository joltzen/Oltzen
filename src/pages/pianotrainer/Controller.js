import { Container } from "@material-ui/core";
import Page from "components/Page";
import useImages from "hooks/useImages";
import controller from "images/controller.png";
import React from "react";

const Controller = () => {
  const classes = useImages();
  return (
    <Container maxWidth="md">
      <Page title="Controller" />
      <img className={classes.fullhd} src={controller} alt="controller" />
    </Container>
  );
};

export default Controller;
