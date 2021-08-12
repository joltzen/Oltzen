import { Container } from "@material-ui/core";
import React from "react";
import DataTable from "../components/DataTable";
import Typograph from "../components/Typograph";
function Zeichenbefehle() {
  return (
    <Container maxWidth="md">
      <Typograph variant="h2" text="Zeichenbefehle" />
      <Typograph
        variant="body1"
        text="Im Teileeditor können über ein Eingabebereich verschiedene Befehle zum
        Zeichnen des Schaltelements angegeben werden."
      />
      <Typograph
        variant="body1"
        text="Der Nullpunkt des Koordinatensystems liegt links oben."
      />
      <DataTable />
      {/* <Typograph variant="h5" text="red;" />
      <Typograph
        variant="body1"
        text="Setzt die Farbe auf rot. Diese Farbe soll für alle aktiven Elemente
        benutzt werden. D. h. für Leitungen, Kontakte, OPV, Transistoren usw."
      />
      <Typograph variant="h5" text="green;" />
      <Typograph
        variant="body1"
        text="Setzt die Farbe auf grün. Diese Farbe soll das Gehäuse o.ä. darstellen."
      />

      <Typograph variant="h5" text="black;" />
      <Typograph
        variant="body1"
        text="Setzt die Farbe auf schwarz. In der Regel soll der Text immer schwarz
        sein."
      />
      <Typograph variant="h5" text="white;" />
      <Typograph
        variant="body1"
        text="Setzt die Farbe auf weiß. Diese Farbe sollte nur in Ausnahmenfällen
        verwendet werden."
      />
      <Typograph variant="h5" text="line x1 y1 x2 y2;;" />
      <Typograph
        variant="body1"
        text="Zieht eine Linie zwischen den Punkt x1, y1 und x2, y2."
      />
      <Typograph variant="h5" text="rect x1 y1 x2 y2;" />
      <Typograph
        variant="body1"
        text="Zeichnet ein Rechteck zwischen mit den Eckpunkten x1, y1 und x2, y2."
      />
      <Typograph variant="h5" text="oval x1 y1 x2 y2;" />
      <Typograph
        variant="body1"
        text="Zeichnet ein Oval, wobei das Oval gedanklich in Rechteck mit den
        Eckpunkten x1, y1 und x2, y2 liegt."
      />
      <Typograph variant="h5" text="arc x1 y1 x2 y2 w wp;" />
      <Typograph
        variant="body1"
        text="Zeichnet ein Teilausschnitt eines Ovals, wobei das Oval gedanklich in
        Rechteck mit den Eckpunkten x1, y1 und x2, y2 liegt."
      />
      <Typograph
        variant="body1"
        text="Das Oval wird zwischen den Winkel w und w+wp gezeichnet. Wenn wp=180
        ist, wird immer ein Halbkreis gezeichnet."
      />
      <Typograph variant="h5" text="polygon x1 y1 ... xn yn;" />
      <Typograph
        variant="body1"
        text="Zeichnet ein Polygon. Ein Polygon ist immer abgeschlossen."
      />

      <Typograph variant="h5" text="polyline x1 y1 ... xn yn;" />
      <Typograph variant="body1" text="Zeichnet ein Polyline." />

      <Typograph variant="h5" text="frect x1 y1 x2 y2;" />
      <Typograph variant="body1" text="Zeichnet ein ausgefülltes Rechteck." />

      <Typograph variant="h5" text="foval x1 y1 x2 y2;" />
      <Typograph variant="body1" text="Zeichnet ein ausgefülltes Oval." />

      <Typograph variant="h5" text="fpolygon x1 y1 ... xn yn;" />
      <Typograph variant="body1" text="Zeichnet ein ausgefülltes Polygone." />
      <Typograph variant="h5" text="polyline x1 y1 ... xn yn;" />
      <Typograph
        variant="body1"
        text="Zeichnet ein ausgefülltes Polyline. Dies ist aber identisch mit einem
        ausgefüllten Polygon."
      />
      <Typograph variant="h5" text="text x y '...' w;" />
      <Typograph
        variant="body1"
        text=" Zeichnet eine Zeichenkette am Punkt x,y. Der Punkt ist links unten von
        der Zeichenkette."
      />
      <Typograph
        variant="body1"
        text="Mit w wird der Winkel des Textes angeben. w=90 bedeutet, dass der Text
        senkrecht gezeichnet wird."
      /> */}
    </Container>
  );
}

export default Zeichenbefehle;
