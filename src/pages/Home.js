import { Container } from "@material-ui/core";
import React from "react";
import Footer from "../components/Footer";
import Typograph from "../components/Typograph";

const Home = () => {
  return (
    <Container maxWidth="md">
      <Typograph variant="h2" text="Projekte" />
      <Typograph variant="h5" text="Willkommen auf Startseite von Oltzen.de" />
      <Typograph
        variant="body1"
        text=" Alle Projekte die ich hier veröffentliche, sollen als Anregung für
          eigene Projekte dienen. Soweit ich keine besonderen Angaben in den
          Projekten gebe, stehen alle Sourcen als GPL zur Verfügung."
      />

      <Typograph
        variant="body1"
        text="An alle Kollegen, Freunde oder Besucher: Die Projekte entsprechen
          nicht einen professionellen Anspruch."
      />

      <Typograph
        variant="body1"
        text="Für alle, die kleinen und großen Technikfreaks, wünsche ich viel Spaß
          beim Stöbern. Ich würde mich auf das ein oder andere Feedback von euch
          freuen."
      />
      <Typograph
        variant="body1"
        text="Für alle Personen die Oltzen als Familiennamen haben biete ich eine
          E-Mail mit dem Muster 'deinname'@oltzen.de an."
      />

      <Footer />
    </Container>
  );
};

export default Home;
