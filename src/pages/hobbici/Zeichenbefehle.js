import { Container } from "@material-ui/core";
import Body from "components/Body";
import DataTable from "components/DataTable";
import Page from "components/Page";
import React from "react";
import { text6, text7 } from "./texts";

const Zeichenbefehle = () => {
  return (
    <Container maxWidth="md">
      <Page title="Zeichenbefehle" />
      <Body text={text6} />
      <Body text={text7} />
      <DataTable />
    </Container>
  );
};

export default Zeichenbefehle;
