import { Container } from "@material-ui/core";
import DataTable from "components/DataTable";
import Page from "components/Page";
import Typograph from "components/Typograph";
import React from "react";
const Zeichenbefehle = () => {
  return (
    <Container maxWidth="md">
      <Page title="Zeichenbefehle" />

      <Typograph
        variant="body1"
        text="Im Teileeditor können über ein Eingabebereich verschiedene Befehle zum
        Zeichnen des Schaltelements angegeben werden."
      />
      <Typograph
        variant="body1"
        text="Der Nullpunkt des Koordinatensystems liegt links oben."
      />
      <DataTable />
    </Container>
  );
};

export default Zeichenbefehle;
