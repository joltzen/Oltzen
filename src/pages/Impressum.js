import { Container } from "@material-ui/core";
import Page from "components/Page";
import Typograph from "components/Typograph";
import React from "react";

const Impressum = () => {
  return (
    <Container maxWidth="md">
      <Page title="Impressum" description="Anschrift" />

      <Typograph variant="h6" text="Thomas Oltzen" />
      <Typograph variant="body1" text="Diplom Informatiker" />
      <Typograph variant="body1" text="Carl-von-Ossietzky Straße 2" />
      <Typograph variant="body1" text="41539 Dormagen" />
      <Typograph variant="body1" text="Telefon: +49 (0) 2133 -21 93 10" />
      <Typograph variant="body1" text="E-Mail: support@stolep.de" />
      <Typograph variant="body1" text="(20.10.2011)" />
    </Container>
  );
};

export default Impressum;
