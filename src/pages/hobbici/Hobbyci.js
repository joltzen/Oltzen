import { Container, Divider, List, ListItem } from "@material-ui/core";
import Buttons from "components/Buttons";
import Page from "components/Page";
import Typograph from "components/Typograph";
import React from "react";

const Hobbyci = () => {
  return (
    <Container maxWidth="md">
      <Page title="HobbyCi" description="Grundgedanke" />
      <Typograph
        variant="body1"
        text="HobbyCi ist aus der Idee geboren, Schaltungen möglichst schnell 
                und einfach zu entwerfen."
      />
      <Typograph
        variant="body1"
        text="HobbyCi hat keinen professionellen Anspruch.
                Auch ambitionierte Hobby Entwickler, die zum Beispiel Platinen 
                ätzen, werden bestimmt bessere Programme finden.Aber für Hobby 
                Entwickler, die schnell eine Schaltplan erstellen oder einen
                bestehende Schaltung dokumentieren wollen, werden mit HobbyCi 
                eine interessante Alternative finden."
      />
      <Typograph
        variant="h5"
        text="Was hat mir an den 'professionellen' Programmen nicht gefallen?"
      />
      <List>
        <ListItem>
          Der Aufwand eine (einfache) Schaltung zu entwerfen, ist mit einem
          erheblichen Zeitaufwand verbunden, weil viele Details beachtet werden
          müssen.
        </ListItem>
        <ListItem>
          Eigene Schaltsymbole hinzuzufügen ist bei vielen der von mir
          getesteten Programme eher kompliziert.
        </ListItem>
        <ListItem>
          Viele Programme sind vom Handling recht kompliziert. Wenn ein Jahr
          vergangen ist, ohne dass man das Programm verwendet hat, hat man die
          Bedienung fast vergessen.
        </ListItem>
      </List>

      <Typograph variant="h5" text="Was soll HobbyCi leisten:" />
      <List>
        <ListItem>
          Die Leitungen/Verbindungen sollen automatisch gezogen werden
        </ListItem>
        <ListItem>Eine einfache Suchfunktion für Bauteile</ListItem>
        <ListItem>
          Einfaches hinzufügen von neuen Schaltsymbolen und IC's
        </ListItem>
        <ListItem>Intuitive Benutzerführung, wo möglich</ListItem>
      </List>

      <Typograph variant="h5" text="Was soll HobbyCi nicht leisten:" />
      <List>
        <ListItem>
          Es ist soll kein Platinen-Layout oder 3D Darstellungen von fertigen
          Modulen liefern.
        </ListItem>
        <ListItem>Keine Simulation</ListItem>
        <ListItem>Umfangreiche Bauelemente-Datenbank</ListItem>
        <ListItem>Schaltpläne nach einer Norm erstellen</ListItem>
      </List>
      <Typograph
        variant="body1"
        text="Im Übrigen wurden die Schaltpläne auf dieser Homepage alle 
                mit HobbyCi oder einer Vorversion entwickelt."
      />
      <Divider />
      <Typograph variant="h6" text="Systemvoraussetzungen:" />
      <List>
        <ListItem>Windows/Linux</ListItem>
        <ListItem>Java 1.7</ListItem>
      </List>
      <Buttons
        href="http://www.oltzen.de/software/HobbyCi_20160813Beta.jar"
        variant="contained"
        title="Download"
      ></Buttons>
      <Typograph
        variant="h4"
        text="Das Programm mit der folgenden Befehlszeile gestartet werden:"
      />
      <Typograph variant="body1" text="java -jar HobbyCi_20160813Beta.jar" />
      <Typograph
        variant="body1"
        text="Unter Windows 10 kann über den Explorer die JAR-Datei wie ein Programm
          gestartet werden."
      />
    </Container>
  );
};

export default Hobbyci;
