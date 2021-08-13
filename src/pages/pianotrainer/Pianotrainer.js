import { Container } from "@material-ui/core";
import Body from "components/Body";
import Buttons from "components/Buttons";
import Page from "components/Page";
import Typograph from "components/Typograph";
import UniqueList from "components/UniqueList";
import React from "react";
import ReactPlayer from "react-player";
import { list1, list2, list3 } from "./lists";
const Pianotrainer = () => {
  return (
    <Container maxWidth="md">
      <Page title="Pianotrainer" />
      <Body
        text="Der Pianotrainer unterstützt den 
        Schüler beim Erlernen von Liedern auf einem normalen Piano oder Keyboard.
        Dabei ist über jede Pianotaste eine LED positioniert. Leuchtet die LED 
        auf, muss die Taste gedrückt werden. 
       "
      />
      <Body
        text="Es gibt zwar schon 
        Leuchttasten-Keyboard, aber ein echtes Piano oder Master-Keyboard 
        hat keine Leuchttasten. Mir ist zurzeit auf jeden Fall nichts bekannt. 
        Nichtsdestotrotz finde ich, dass dies ein interessantes Projekt ist.
       "
      />
      <Body
        text="Ein ähnliches Projekt war 5Volt. 
        Leider hat der Autor die Homepage gelöscht und einen alternativen Link 
        kenne ich nicht. Trotzdem zähle ich die Punkte auf, die bei meiner 
        Lösung anders sind:
        "
      />
      <UniqueList component="ul" list={list1} />

      <Typograph variant="h4" text="Designentscheidungen" />
      <UniqueList component="ul" list={list2} />
      <Typograph variant="h4" text="Release" />
      <Body text="18.11.2011" />
      <UniqueList component="ul" list={list3} />
      <Typograph variant="h4" text="Download" />
      <Buttons
        href="http://www.oltzen.de/software/pianotrainer_20111118.zip"
        variant="contained"
        title="Download Pianotrainer"
      />
      <Typograph variant="h4" text="Demofilm" />
      <ReactPlayer
        url="https://www.youtube.com/embed/hWngLQIwxZ0"
        controls
        playbackRate={2}
        width="896px"
        height="504px"
      />
      <Body text="(26.01.2015)" />
    </Container>
  );
};

export default Pianotrainer;
