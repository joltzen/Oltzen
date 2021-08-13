import { Container } from "@material-ui/core";
import Body from "components/Body";
import Footer from "components/Footer";
import Page from "components/Page";
import React from "react";
import { text1, text2, text3, text4 } from "./texts";
const Home = () => {
  return (
    <Container maxWidth="md">
      <Page
        title="Projekte"
        description="Willkommen auf der Startseite von Oltzen.de"
      />
      <Body text={text1} />
      <Body text={text2} />
      <Body text={text3} />
      <Body text={text4} />

      <Footer />
    </Container>
  );
};

export default Home;
