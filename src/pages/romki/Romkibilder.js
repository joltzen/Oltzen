import { Container } from "@material-ui/core";
import Body from "components/Body";
import Page from "components/Page";
import useImages from "hooks/useImages";
import antrieb from "images/antrieb.jpg";
import innenleben from "images/innenleben.jpg";
import React from "react";
const Romkibilder = () => {
  const classes = useImages();
  return (
    <Container maxWidth="md">
      <Page
        title="Romkibilder"
        description="Auf dieser Seite sind verschiedene RomkI Bilder. Die Bilder dokumentiert, die Entwicklung von einem fahrbaren Untersatz zu einem komplexen Roboter. (Noch ist der Roboter nicht fertig: )"
      />
      <Body text="RomkI Innen- und Untenansicht" />
      <img src={innenleben} className={classes.innenleben} alt="innenleben" />
      <Body text="Dies ist die erste Version mit einem K8055 als Steuermodul" />
      <img src={antrieb} className={classes.innenleben} alt="antrieb" />
      <Body
        text="Die Räder sind mit den Achsenverbinder an der Achsen der Motoren befestigt.
            Damit die Kraft nicht vollständig auf der Motorachse hängt, sind die Achsen auf Kugellager gestützt.
            Diese Konstuktion erlaubt eine Tragkaft von über 30Kg."
      />
      <Body text="(29.10.2011)" />
    </Container>
  );
};

export default Romkibilder;
