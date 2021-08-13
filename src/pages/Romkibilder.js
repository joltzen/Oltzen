import { Container } from "@material-ui/core";
import React from "react";
import Page from "../components/Page";
import Typograph from "../components/Typograph";
import useImages from "../hooks/useImages";
import antrieb from "../images/antrieb.jpg";
import innenleben from "../images/innenleben.jpg";
const Romkibilder = () => {
  const classes = useImages();
  return (
    <Container maxWidth="md">
      <Page
        title="Romkibilder"
        description="Auf dieser Seite sind verschiedene RomkI Bilder. Die Bilder dokumentiert, die Entwicklung von einem fahrbaren Untersatz zu einem komplexen Roboter. (Noch ist der Roboter nicht fertig: )"
      />
      <Typograph
        variant="body1"
        text="RomkI Innen- und Untenansicht"
      ></Typograph>
      <img src={innenleben} className={classes.innenleben} alt="innenleben" />
      <Typograph
        variant="body1"
        text="Dies ist die erste Version mit einem K8055 als Steuermodul"
      />
      <img src={antrieb} className={classes.innenleben} alt="antrieb" />
      <Typograph
        variant="body1"
        text="Die Räder sind mit den Achsenverbinder an der Achsen der Motoren befestigt.
            Damit die Kraft nicht vollständig auf der Motorachse hängt, sind die Achsen auf Kugellager gestützt.
            Diese Konstuktion erlaubt eine Tragkaft von über 30Kg."
      />
      <Typograph variant="body1" text="(29.10.2011)" />
    </Container>
  );
};

export default Romkibilder;
