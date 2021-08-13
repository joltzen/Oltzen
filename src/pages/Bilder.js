import { Container, Link } from "@material-ui/core";
import React from "react";
import Page from "../components/Page";
import Typograph from "../components/Typograph";
const Bilder = () => {
  return (
    <Container maxWidth="md">
      <Page title="Bilder" />
      <Link href="http://www.oltzen.de/private_bilder/20120607_zons/index.html">
        Stadt Zons vom 07.06.2012
      </Link>
      <Typograph
        variant="body1"
        text="Impression von der schönen kleinen Stadt Zons"
      />
      <Typograph variant="body1" text="(07.06.2012)" />
    </Container>
  );
};

export default Bilder;
