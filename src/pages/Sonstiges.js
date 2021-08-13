import { Container } from "@material-ui/core";
import React from "react";
import Footer from "../components/Footer";
import Page from "../components/Page";
import Typograph from "../components/Typograph";

const Sonstiges = () => {
  return (
    <Container maxWidth="md">
      <Page title="Sonstiges" />
      <Typograph
        variant="body1"
        text="In diesem Verzeichnis sammele ich alle Projekte die sehr klein sind oder einfach nur Nachbauten."
      />
      <Typograph
        variant="body1"
        text="alle Kollegen, Freunde oder Besucher: Die Projekte entsprechen nicht einen professionellen Anspruch."
      />
      <Typograph
        variant="body1"
        text="Bei den Nachbauten gebe ich, soweit es möglich ist, ein Link zum ursprünglichen Projekt an."
      />
      <Typograph variant="body1" text="(26.01.2015)" />
      <Typograph variant="body1" text="" />
      <Footer />
    </Container>
  );
};

export default Sonstiges;
