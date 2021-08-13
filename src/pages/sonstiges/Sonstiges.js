import { Container } from "@material-ui/core";
import Body from "components/Body";
import Footer from "components/Footer";
import Page from "components/Page";
import React from "react";

const Sonstiges = () => {
  return (
    <Container maxWidth="md">
      <Page title="Sonstiges" />
      <Body text="In diesem Verzeichnis sammele ich alle Projekte die sehr klein sind oder einfach nur Nachbauten." />
      <Body text="alle Kollegen, Freunde oder Besucher: Die Projekte entsprechen nicht einen professionellen Anspruch." />
      <Body text="Bei den Nachbauten gebe ich, soweit es möglich ist, ein Link zum ursprünglichen Projekt an." />
      <Body text="(26.01.2015)" />
      <Body text="" />
      <Footer />
    </Container>
  );
};

export default Sonstiges;
