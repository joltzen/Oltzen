import { Container, Link } from "@material-ui/core";
import Body from "components/Body";
import Page from "components/Page";
import Typograph from "components/Typograph";
import useImages from "hooks/useImages";
import mintyboost from "images/mintyboost.jpg";
import mintyboostsch from "images/mintyboostsch.png";
import React from "react";

const Mintyboost = () => {
  const classes = useImages();
  return (
    <Container maxWidth="md">
      <Page title="Minty Boost" />
      <Body
        text="Der Minty Boost ist eine kleine Schaltung, mit dem Handys und andere Geräte,
            mittels Akkus über USB aufgeladen werden. Falls mal wieder das Handy fast leer ist,
            schnappe ich mir den Minty Boost und ein paar Akkus und schon ist das Netzproblem gelöst."
      />
      <Body
        text="Im Handel gibt es zwar auch ähnliche Aufladegeräte, aber diese werden mit LiPo-Akkus betrieben und sind sehr teuer.
             Und was ist, wenn die LiPo-Akkus leer sind? Dann hilft das teure Aufladegerät auch nicht.
             Mit dem Minty Boost kann ich zur Not auch Batterien kaufen, was ich aber auf Grund der Umweltbelastung nicht empfehle."
      />
      <Body
        text="Die Schaltung habe ich von 'ladyada' (der Link zu ihrer Schaltung befindet sich unten). Leider hatte die Schaltung eine Ungenauigkeit.
            Das Bauteil LT1302 reguliert nicht auf 5V, sondern ist über einen Spannungsteiler einstellbar.
             Wenn die Schaltung von ladyada aufgebaut wird, ist die USB Spannung etwas unter der Akku-Spannung.
            Würde das Bauteil LT1302-5 genommen, wäre die USB Spannung 5V. Denn der LT1302-5 hat den richtigen Spannungsteiler bereits eingebaut.
            Weil ich nur den LT1302 gekauft habe, habe ich den Spannungsteiler hinzugefügt und diesen mit ein Poti, zur Feinjustierung, einstellbar gemacht."
      />
      <Link href="http://www.ladyada.net/make/mintyboost/index.html">
        Schaltung von ladyada
      </Link>
      <Body
        text=" Das Gehäuse war ursprünglich ein billiges Aufladegerät für Akkus. Ich habe die ganze Elektronik, bis auf die Batteriehalterung, entfernt.
             Auch wenn für den Betrieb nur 2 Akkus benötigt werden, habe ich jetzt eine Halterung für 4 Akkus, was auch nicht schlecht ist."
      />

      <Typograph variant="h4" text="Hier ist ein Bild vom Ergebnis:" />
      <img src={mintyboost} className={classes.innenleben} alt="mintyboost" />
      <Typograph variant="h4" text="Schaltung:" />
      <img
        src={mintyboostsch}
        className={classes.innenleben}
        alt="mintyboostsch"
      />
      <Body text="(31.01.2015)" />
    </Container>
  );
};

export default Mintyboost;
