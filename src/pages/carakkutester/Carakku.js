import { Container } from "@material-ui/core";
import Body from "components/Body";
import Buttons from "components/Buttons";
import Page from "components/Page";
import Typograph from "components/Typograph";
import UniqueList from "components/UniqueList";
import useImages from "hooks/useImages";
import caraccutester from "images/caraccutester.jpg";
import React from "react";
import { list } from "./lists";
import { text1, text2, text3, text4 } from "./texts";
const Carakku = () => {
  const classes = useImages();

  return (
    <Container maxWidth="md">
      <Page title="Car Akku Tester" />
      <Body text={text1} />
      <Body text={text2} />
      <Body text={text3} />
      <Body text={text4} />

      <UniqueList component="ol" list={list} />

      <Typograph variant="h4" text="Download" />
      <Buttons
        href="http://oltzen.de/html/gpl/CarAccuTester20141119.zip"
        title="Schaltplan und Sourcecode"
        variant="contained"
      />
      <img className={classes.hd} src={caraccutester} alt="caraccutester" />
      <Body text="(26.01.2015)" />
    </Container>
  );
};

export default Carakku;
