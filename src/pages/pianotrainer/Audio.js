import { Container } from "@material-ui/core";
import Page from "components/Page";
import Typograph from "components/Typograph";
import useImages from "hooks/useImages";
import audioschaltung from "images/audioschaltung.png";
import React from "react";

const Audio = () => {
  const classes = useImages();
  return (
    <Container maxWidth="md">
      <Page title="Audio Ausgabe" />
      <img className={classes.hd} src={audioschaltung} alt="audioschaltung" />
      <Typograph variant="body1" text="(19.11.2011)" />
    </Container>
  );
};

export default Audio;
