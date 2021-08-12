import { Container, Grid } from "@material-ui/core";
import React from "react";
import "../App.css";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";
import Page from "../components/Page";
import Typograph from "../components/Typograph";

const Tutorial = () => {
  return (
    <Container maxWidth="md">
      <Page
        title="Tutorial und Dokumentation"
        description="Am besten erlernt man HobbCi mit YouTube-Tutorials"
      />

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Buttons
            href="http://youtu.be/2tbtw9-DYyg"
            variant="contained"
            title="Teil 1: Einführung in HobbyCi"
          />

          <Buttons
            href="http://youtu.be/HbQJGcrKAIE"
            variant="contained"
            title="Teil 2: Erstellen von einfachen Bauelementen"
          />
          <Buttons
            href="http://youtu.be/zWvkYTpQhds"
            variant="contained"
            title="Teil 3: Erstellen von komplexen Bauelementen"
          />
          <Buttons
            href="http://youtu.be/HFcm4GabcR4"
            variant="contained"
            title="Teil 4: Tipps & Tricks"
          />
        </Grid>
      </Grid>
      <Typograph variant="h5" text="Weitere Tutorials und Videos" />

      <Grid item xs={8}>
        <Buttons
          href="http://youtu.be/iWf7SlGyEUI"
          variant="contained"
          title="Tutorial: Importieren & Zusammenführen von Schaltplänen"
        />
      </Grid>
      <Footer />
    </Container>
  );
};

export default Tutorial;
