import { Container } from "@material-ui/core";
import Body from "components/Body";
import Page from "components/Page";
import Typograph from "components/Typograph";
import React from "react";
import { anschrift } from "./anschrift";

const Impressum = () => {
  return (
    <Container maxWidth="md">
      <Page title="Impressum" description="Anschrift" />

      <Typograph variant="h6" text="Thomas Oltzen" />
      {anschrift.map((a) => (
        <Body text={a} />
      ))}
    </Container>
  );
};

export default Impressum;
