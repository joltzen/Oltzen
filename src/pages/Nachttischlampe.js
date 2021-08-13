import { Container } from "@material-ui/core";
import Page from "components/Page";
import Typograph from "components/Typograph";
import useImages from "hooks/useImages";
import lampeback from "images/lampeback.jpg";
import lampefront from "images/lampefront.jpg";
import React from "react";

const Nachttischlampe = () => {
  const classes = useImages();
  return (
    <Container maxWidth="md">
      <Page title="Nachttischlampe" />
      <Typograph
        variant="body1"
        text=" Manchmal sind es die ganz einfachen Dinge im Leben die Spaß machen. Meine Tochter wollte eine Nachttischlampe haben.
            Nicht irgendeine, sondern eine mit einem speziellen Motiv und natürlich von Papa gebaut.
            Den Schaltplan verkneife ich mir, da dieser jeder Elektrobastler selbst hinkriegen kann. 
       "
      />
      <Typograph
        variant="body1"
        text="Die ganze Lampe besteht aus ein bisschen Holz, Farbe, Leuchtdioden und Widerständen.
             Die Augen und die Nase sind weiße LEDs. Sie geben die meiste Helligkeit ab.
             Der Mund besteht aus roten und der Becher aus gelben LEDs. Der Strohhalm leuchtet in grün.
             Durch die leicht gekippte Lage, steht die Lampe sicher."
      />
      <Typograph
        variant="body1"
        text="Das Ergebnis kann sich, wie ich finde, sehen lassen."
      />

      <img className={classes.innenleben} src={lampefront} alt="lampefront" />
      <img className={classes.innenleben} src={lampeback} alt="lampeback" />

      <Typograph variant="body1" text="01.01.2010" />
    </Container>
  );
};

export default Nachttischlampe;
