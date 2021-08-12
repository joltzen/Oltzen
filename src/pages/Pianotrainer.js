import { Container, List, ListItem } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
import Buttons from "../components/Buttons";
import Page from "../components/Page";
import Typograph from "../components/Typograph";
import useStyles from "../hooks/useStyles";
const Pianotrainer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Page title="Pianotrainer" />
      <Typograph
        variant="body1"
        text="Der Pianotrainer unterstützt den 
        Schüler beim Erlernen von Liedern auf einem normalen Piano oder Keyboard.
        Dabei ist über jede Pianotaste eine LED positioniert. Leuchtet die LED 
        auf, muss die Taste gedrückt werden. 
       "
      />
      <Typograph
        variant="body1"
        text="Es gibt zwar schon 
        Leuchttasten-Keyboard, aber ein echtes Piano oder Master-Keyboard 
        hat keine Leuchttasten. Mir ist zurzeit auf jeden Fall nichts bekannt. 
        Nichtsdestotrotz finde ich, dass dies ein interessantes Projekt ist.
       "
      />
      <Typograph
        variant="body1"
        text="Ein ähnliches Projekt war 5Volt. 
        Leider hat der Autor die Homepage gelöscht und einen alternativen Link 
        kenne ich nicht. Trotzdem zähle ich die Punkte auf, die bei meiner 
        Lösung anders sind:
        "
      />
      <List>
        <ListItem>Die MIDI-Datei wird über USB übertragen.</ListItem>
        <ListItem>
          Das Modul ist auch ohne PC verwendbar. Der PC wird nur zum Übertragen
          benötigt.
        </ListItem>
        <ListItem>Die Abspielgeschwindigkeit ist regulierbar.</ListItem>
        <ListItem>
          Die Verbindung von Leuchtleiste und Steuergerät ist schmaler.
        </ListItem>
        <ListItem>
          Die LED Farben für die schwarzen und weißen Tasten sind
          unterschiedlich.
        </ListItem>
      </List>
      <Typograph variant="h4" text="Designentscheidungen" />
      <List>
        <ListItem>
          Zum Controller wird keine 1:1 MIDI Datei übertragen. Weil ein
          Mikrocontroller (MC) von seiner Leistung her sehr klein ist, müssen
          Kompromisse eingegangen werden und Schnittstellen sehr pragmatisch
          sein. Dies ist so ein Fall. Obwohl eine MIDI-Datei im Prinzip nicht
          sehr komplex ist, erfordert diese einen gewissen Aufwand. Ich habe ein
          Format entwickelt, dass leicht im MC implementiert werden kann.
        </ListItem>
        <ListItem>
          Standard Bauteile und kein SMD Alle Bauteile sind im DIP-Gehäuse
          erhältlich und können entsprechend leicht gelötet werden. Es werden
          auch keine speziellen IC verwendet, sodass die Bestellung der
          Einzelteile kein Problem ist. Insbesondere die Soundausgabe hat keinen
          speziellen Soundgenerator-IC.
        </ListItem>
        <ListItem>
          Soundausgabe Der Controller enthält auch eine Soundausgabe, damit es
          dem Schüler leichter fällt, die richtigen Töne zu treffen.
          Insbesondere wenn der gleiche Ton zwei Mal direkt hintereinander
          gespielt wird. Die LED wird kurzzeitig dunkel, was schlecht gesehen
          wird, aber man hört es sehr gut. Die Soundausgabe ist nicht grade
          berauschend, aber erfüllt seinen Zweck. Insbesondere wenn Akkorde
          gespielt werden, hört es sich schon sehr schräg an.
        </ListItem>
        <ListItem>
          Controller LED-Leiste Verbindung Der Controller und die LED-Leiste
          sind über ein 10-adriges Flachbandkabel verbunden. Über dieses läuft
          die Stromversorgung, I2C-Bus und die Verbindungserkennung. Das Kabel
          ist über Pfostenstecker mit Verriegelung angeschlossen, damit beim
          Spielen der Stecker nicht so leicht raus geht.
        </ListItem>
      </List>
      <Typograph variant="h4" text="Release" />
      <Typograph variant="body1" text="18.11.2011" />
      <List>
        <ListItem>Samplingrate auf 19531/s erhöht</ListItem>
        <ListItem>
          Bei halber Samplingrate können bis zu 16 Töne gleichzeitig gespielt
          werden. Dazu ist aber eine Neucompilierung notwendig.
        </ListItem>
        <ListItem>MIDI Ausgang.</ListItem>
      </List>
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
      <Typograph variant="body1" text="(26.01.2015)" />
    </Container>
  );
};

export default Pianotrainer;
