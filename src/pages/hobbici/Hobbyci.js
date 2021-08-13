import { Container, Divider } from "@material-ui/core";
import Body from "components/Body";
import Buttons from "components/Buttons";
import Page from "components/Page";
import Typograph from "components/Typograph";
import UniqueList from "components/UniqueList";
import React from "react";
import { list1, list2, list3, list4 } from "./lists";
import { text1, text2, text3, text4, text5 } from "./texts";
const Hobbyci = () => {
  return (
    <Container maxWidth="md">
      <Page title="HobbyCi" description="Grundgedanke" />
      <Body text={text1} />
      <Body text={text2} />
      <Typograph
        variant="h5"
        text="Was hat mir an den 'professionellen' Programmen nicht gefallen?"
      />
      <UniqueList component="ul" list={list1} />

      <Typograph variant="h5" text="Was soll HobbyCi leisten:" />
      <UniqueList component="ul" list={list2} />

      <Typograph variant="h5" text="Was soll HobbyCi nicht leisten:" />
      <UniqueList compoenent="ul" list={list3} />
      <Body text={text3} />
      <Divider />
      <Typograph variant="h6" text="Systemvoraussetzungen:" />
      <UniqueList component="ul" list={list4} />
      <Buttons
        href="http://www.oltzen.de/software/HobbyCi_20160813Beta.jar"
        variant="contained"
        title="Download"
      ></Buttons>
      <Typograph
        variant="h4"
        text="Das Programm mit der folgenden Befehlszeile gestartet werden:"
      />
      <Body text={text4} />
      <Body text={text5} />
    </Container>
  );
};

export default Hobbyci;
