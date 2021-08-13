import { Container, Link } from "@material-ui/core";
import Body from "components/Body";
import Page from "components/Page";
import React from "react";
const Bilder = () => {
  return (
    <Container maxWidth="md">
      <Page title="Bilder" />
      <Link href="http://www.oltzen.de/private_bilder/20120607_zons/index.html">
        Stadt Zons vom 07.06.2012
      </Link>
      <Body text="Impression von der schönen kleinen Stadt Zons" />
      <Body text="(07.06.2012)" />
    </Container>
  );
};

export default Bilder;
