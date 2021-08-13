import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import useStyles from "hooks/useStyles";
import React from "react";

function createData(command, caption) {
  return { command, caption };
}

const rows = [
  createData(
    "red;",
    "Setzt die Farbe auf rot. Diese Farbe soll für alle aktiven Elemente benutzt werden. D. h. für Leitungen, Kontakte, OPV, Transistoren usw."
  ),
  createData(
    "green;",
    "Setzt die Farbe auf grün. Diese Farbe soll das Gehäuse o.ä. darstellen."
  ),
  createData(
    "black;",
    "Setzt die Farbe auf schwarz. In der Regel soll der Text immer schwarz sein."
  ),
  createData(
    "white;",
    "Setzt die Farbe auf weiß. Diese Farbe sollte nur in Ausnahmenfällen verwendet werden."
  ),
  createData(
    "line x1 y1 x2 y2;",
    "Zieht eine Linie zwischen den Punkt x1, y1 und x2, y2."
  ),
  createData(
    "rect x1 y1 x2 y2;",
    "Zeichnet ein Rechteck zwischen mit den Eckpunkten x1, y1 und x2, y2."
  ),
  createData(
    "oval x1 y1 x2 y2;",
    "Zeichnet ein Oval, wobei das Oval gedanklich in Rechteck mit den Eckpunkten x1, y1 und x2, y2 liegt."
  ),
  createData(
    "arc x1 y1 x2 y2 w wp;",
    "Zeichnet ein Teilausschnitt eines Ovals, wobei das Oval gedanklich in Rechteck mit den Eckpunkten x1, y1 und x2, y2 liegt. Das Oval wird zwischen den Winkel w und w+wp gezeichnet. Wenn wp=180 ist, wird immer ein Halbkreis gezeichnet."
  ),
  createData(
    "polygon x1 y1 ... xn yn;",
    "Zeichnet ein Polygon. Ein Polygon ist immer abgeschlossen."
  ),
  createData("polyline x1 y1 ... xn yn;", "Zeichnet ein Polyline."),
  createData("frect x1 y1 x2 y2;", "Zeichnet ein ausgefülltes Rechteck."),
  createData("foval x1 y1 x2 y2;", "Zeichnet ein ausgefülltes Oval."),
  createData(
    "fpolygon x1 y1 ... xn yn;",
    "Zeichnet ein ausgefülltes Polygone."
  ),
  createData(
    "fpolyline x1 y1 ... xn yn;",
    "Zeichnet ein ausgefülltes Polyline. Dies ist aber identisch mit einem ausgefüllten Polygon."
  ),
  createData(
    "text x y '...' w;",
    "Zeichnet eine Zeichenkette am Punkt x,y. Der Punkt ist links unten von der Zeichenkette. Mit w wird der Winkel des Textes angeben. w=90 bedeutet, dass der Text senkrecht gezeichnet wird."
  ),
];

const DataTable = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Befehl</TableCell>
            <TableCell>Beschreibung</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.command}>
              <TableCell component="th" scope="row">
                {row.command}
              </TableCell>
              <TableCell align="left">{row.caption}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
