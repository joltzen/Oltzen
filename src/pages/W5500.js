import { Container } from "@material-ui/core";
import Page from "components/Page";
import Typograph from "components/Typograph";
import useImages from "hooks/useImages";
import w5500 from "images/w5500example.jpg";
import React from "react";
import { Link } from "react-router-dom";

const W5500 = () => {
  const classes = useImages();
  return (
    <Container maxWidth="md">
      <Page title="W5500 am ATmega8" />
      <Typograph
        variant="body1"
        text="Für meine Projekte benötige ich ein LAN Interface der an einem ATmega angeschlossen werden kann.
             Eine frühere Lösung war mit dem Netzwerkcontroller ENC28J60 implementiert worden.
              Leider ist der ENC28J60 nicht so zuverlässig wie ich mir das erhofft habe.
              So ist die Kommunikation von Zeit zu Zeit einfach unterbrochen worden.
             Warum dies der Fall war konnte ich nicht feststellen. "
      />
      <Typograph
        variant="body1"
        text="Vor kurzen habe ich den Netzwerkcontroller W5500 kennengelernt.
             Weil dieser nur in der SMD Technologie hergestellt wird, habe ich mir das Modul WIZ550io bestellt.
             Im Gegensatz zum ENC28J60 besitzt der W5500 ein internen TCP Stack und ist dadurch wesentlich einfacher zu verwenden."
      />
      <Typograph
        variant="body1"
        text="Leider habe ich keine Schaltung gefunden die das Modul WIZ550io mit einem ATmega verbindet.
             Auch wenn die Beschaltung einfach ist, ist es schön eine geprüfte Schaltung zu haben."
      />
      <Typograph
        variant="body1"
        text="Eine weitere Schwierigkeit war die Software. Die Firma WIZnet liefert zwar eine Bibliothek aus,
              aber ein einfaches Beispiel für den ATmega habe ich nicht gefunden. Auch habe ich keine Internetseite gefunden,
              die die Bibliothek für ein ATmega verwendet. Aus diesem Grund habe ich ein kleines Server-Programm in C geschrieben,
              welches als Vorlage für andere Projekte verwendet werden kann."
      />
      <Typograph
        variant="body1"
        text=" Die Schaltung ist recht einfach. Zu beachten ist, das der ATmega mit einer internen Frequenz von 8MHz läuft.
             Also setzt die Fuse Bits richtig."
      />
      <Typograph
        variant="body1"
        text="Der implementierte Server sollte die wichtigsten Eigenschaften haben, um spätere Anwendung ähnlich zu implementieren.
             Die Software implementiert einen TCP-Server auf dem Port 5000.
             Dieser liest alle Eingaben und gibt diese in Großbuchstaben aus.
             Sobald ein Punkt eingegeben wird, wird „Bye, Bye!“ ausgegeben und die Verbindung wird geschlossen.
              Zu beachten ist, dass für diesen Server nur ein ATmega8 verwendet wird. Bei dem ENC28J60 hätte dieser nicht ausgereicht.
        "
      />
      <Typograph
        variant="body1"
        text="Unterm Strich muss ich sagen, dass der W5500 ein sehr einfach zu verwendendes Modul ist und viel Spaß beim Nachbauen."
      />
      <Typograph variant="h4" text="Software:" />
      <Link href="https://github.com/oltzen/W5500Example/">Github</Link>
      <Typograph variant="h4" text="Schaltung:" />
      <img className={classes.w5500} src={w5500} alt="w5500" />
      <Typograph variant="body1" text="(26.02.2019" />
    </Container>
  );
};

export default W5500;
