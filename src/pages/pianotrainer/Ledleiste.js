import { Container } from "@material-ui/core";
import Page from "components/Page";
import useImages from "hooks/useImages";
import ledleiste from "images/ledleiste.png";
import React from "react";
import Body from "components/Body";

const Ledleiste = () => {
  const classes = useImages();
  return (
    <Container maxWidth="md">
      <Page title="LED Leiste" />
      <img className={classes.fullhd} src={ledleiste} alt="ledleiste" />
      <Body text="(19.11.2011)" />
    </Container>
  );
};

export default Ledleiste;
