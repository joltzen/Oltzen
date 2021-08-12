import { Container } from "@material-ui/core";
import React from "react";
import Page from "../components/Page";
import Version from "../components/Version";

const Changelog=()=> {
  return (
    <>
      <Container maxWidth="md">
        <Page title="Changelog" />
        <div style={{ width: "100%" }}>
          <Version
            version="Version 20160813 BETA"
            latest
            features={[
              " Nachrichtenzeile für fehlerhafte Linien hinzugefügt",
              "Dublizieren von Bauteilen implementiert",
              "Linien können mit Punkte erweitert werden, so dass die Linie immer durch den Punkt geht.Dadurch ist es noch leichter, dass der Schaltplan schön aussieht.",
              "Neue Symbole hinzugefügt",
              "Prefer Horizontal und Vertical Optionen gelöscht. Dieses Feature ist durch das verbesserte Routing der Verbindungen nicht mehr nötig.",
              "Routingfehler beseitig",
              "Routing mit weniger Ecken ",
              "Nummerierung gemäß Position neu sortieren. (Links nach rechts/ von Oben nach unten)",
              "Wenn der Mode 'Show Line Limits' gesetzt ist, zeigt die Nachrichtenzeile 'Message: Draw only x of y lines.' an",
              "Das Menü 'Spezial' in die Menüs 'Spezial' und 'Tools' aufgeteilt.",
              "Selektieren und verschieben von ganzen Bauteilgruppen",
            ]}
          />
          <Version
            version="Version 20141222 BETA"
            features={[
              "Neue Bauteile",
              "Busse könne jetzt erstellt werden",
              "IC Editoren vom Handling verbessert",
              "Zusammenführen von Bauteilen implementiert",
              "Importieren von Schaltplänen",
              "Im Teile Editor werden die fehlerhaften Felder hellrot hinterlegt.",
              "Im Teile Editor werden mit 'Move all up/left' auch Forbidden-Felder verschoben",
              "Im Teile Editor ist der Menüpunkt 'Move all down/right' hinzugefügt",
              "Selektierte Bauteile sind jetzt grau hinterlegt, was die Bedienung erleichtert",
              "Neuer Mode; Mit dem Mausrad kann die Anzahl der angezeigten Linien begrenzt werden",
              "Priority Pins hinzugefügt. Zu diesen Pins werden alle zugehörigen Verbindungen gezogen. Dadurch kann man leichter 'schönere' Schaltplane erzeugen.",
            ]}
          />
          <Version
            version="Version 20141215 BETA"
            features={[
              "Neue Bauteile",
              "IC Editoren vom händling verbessert",
              "VerschiedeneBugs beseitigt.",
            ]}
          />
          <Version
            version="Version 20141212 BETA"
            features={[
              "Bauteile werden jetzt per Doppelclick in den Schaltplan eingefügt. ",
              "Beim Einfügen eines Bauteils wird nicht mehr nach der Kategorie/Variante gefragt. ",
              "2 Pin Bauteile können die Pins getauscht werden. Dies kann z.B. bei einer Diode sinnvoll sein. ",
              "Routing der Linien wurde verbessert. ",
              "Der Usability des Teileeditor wurde verbessert. ",
              "Hilfetext im Teileeditor hinzugefügt. ",
            ]}
          />
          <Version
            version="Version 20141210 BETA"
            features={[
              "Symbole in der Teileliste anzeigen ",
              "Neue Bauteile in der Standardauslieferung ",
              "Neuer Modus beim Verbindungsziehen ",
              "Verkleinern/Vergrößern per Mausrad auf dem Schaltplan ",
              "Vergrößerung per Mausrad beim Teileeditor ",
              "arc Kurven im Teileeditor hinzugefügt ",
              "BUG: Usereinstellungen in Properties abspeichern ",
              "BUG: Programm beendet sich beim Schließen des letzten Fensters ",
              "BUG: Verbindungsrouting hängt sich nicht mehr auf ",
            ]}
          />
          <Version
            version="Version 20141209 BETA"
            features={[
              "SVG Export ",
              "Schwarz/Weiß Modus bei der Anzeige ",
              "Usablity verbessert ",
              "Knotenpunkte an den Pins kann ausgeblendet werden ",
            ]}
          />
          <Version
            version="Version 20141130 BETA"
            features={["Erste Veröffentlichung "]}
          />
        </div>
      </Container>
    </>
  );
}

export default Changelog;
