import { Container } from "@material-ui/core";
import Body from "components/Body";
import Footer from "components/Footer";
import Page from "components/Page";
import React from "react";

const Romki = () => {
  return (
    <Container maxWidth="md">
      <Page
        title="RomKi"
        description="RomkI steht für 'Roboter mit künstlicher Intelligenz'. Das Ziel ist es
        verschiedenen Konzepte der KI auf einen realen Roboter zu überprüfen."
      />
      <Body text="Um dieses Ziel zu erreichen ..." />
      <Body text="(29.11.2014)" />
      <Footer />
    </Container>
  );
};

export default Romki;
