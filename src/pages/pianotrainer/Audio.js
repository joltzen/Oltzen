import { Container } from "@material-ui/core";
import Page from "components/Page";
import useImages from "hooks/useImages";
import audioschaltung from "images/audioschaltung.png";
import React from "react";
import Body from "components/Body";
const Audio = () => {
  const classes = useImages();
  return (
    <Container maxWidth="md">
      <Page title="Audio Ausgabe" />
      <img className={classes.hd} src={audioschaltung} alt="audioschaltung" />
      <Body text="(19.11.2011)" />
    </Container>
  );
};

export default Audio;
