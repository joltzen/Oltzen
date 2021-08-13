import { Container } from "@material-ui/core";
import React from "react";
import Page from "../components/Page";
import Typograph from "../components/Typograph";
import useImages from "../hooks/useImages";
import audioschaltung from "../images/audioschaltung.png";

const Audio = () => {
  const classes = useImages();
  return (
    <Container maxWidth="md">
      <Page title="Audio Ausgabe" />
      <img
        className={classes.audioschaltung}
        src={audioschaltung}
        alt="audioschaltung"
      />
      <Typograph variant="body1" text="(19.11.2011)" />
    </Container>
  );
};

export default Audio;
