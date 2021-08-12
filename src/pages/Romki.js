import { Container } from "@material-ui/core";
import React from "react";
import Page from "../components/Page";
import Typograph from "../components/Typograph";

const Romki = () => {
  return (
    <Container maxWidth="md">
      <Page
        title="RomKi"
        description="RomkI steht für 'Roboter mit künstlicher Intelligenz'. Das Ziel ist es
        verschiedenen Konzepte der KI auf einen realen Roboter zu überprüfen."
      />
      <Typograph variant="body1" text="Um dieses Ziel zu erreichen ..." />
      <Typograph variant="body1" text="(29.11.2014)" />
    </Container>
  );
};

export default Romki;
