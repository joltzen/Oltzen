import { Container, List, ListItem } from "@material-ui/core";
import Buttons from "components/Buttons";
import Page from "components/Page";
import Typograph from "components/Typograph";
import useImages from "hooks/useImages";
import caraccutester from "images/caraccutester.jpg";
import React from "react";

const Carakku = () => {
  const classes = useImages();
  return (
    <Container maxWidth="md">
      <Page title="Car Akku Tester" />
      <Typograph
        variant="body1"
        text="Wenn einem der Wagen liegen geblieben ist, 
              weil der Bleiakku zu alt war, fragt man sich wie man das verhindern kann.
              Natürlich kann man in eine Werkstatt fahren und den Akku überprüfen lassen.
              Dies kostet Zeit und Geld. Also selbst ist der Mann."
      />
      <Typograph
        variant="body1"
        text=" Wie gut ein Bleiakku ist, kann man nur 
              feststellen, wenn der Bleiakku unter Last ist.
              Dies ist im Normalfall dann der Fall, wenn der Wagen anspringt."
      />
      <Typograph
        variant="body1"
        text=" Um diese Spannung zu messen, muss man 
              einen Voltmeter zur Hand haben, der die minimale Spannung messen kann.
              Selbst wenn man so einen Voltmeter hat, muss die Spannung immer 
              noch abgegriffen werden, was entweder direkt am Bleiakku oder am 
              Zigarettenanzünder erfolgen kann. Erst einmal muss man so einen 
              Voltmeter besitzen/kaufen. Außerdem ist das Abgreifen der Spannung 
              eher umständlich. Aus diesem Grund habe ich mir ein Messinstrument 
              gebaut, was bequem am Zigarettenanzünder angeschlossen werden kann 
              und mir die Werte liefert."
      />
      <Typograph
        variant="body1"
        text="Weil die Stromversorgung durch den Bleiakku 
              erfolgt, muss keine gesonderte Stromversorgung genommen werden. 
              Die Anwendung ist ganz einfach."
      />

      <List component="ol">
        <ListItem>Tester in den Zigarettenanzünder</ListItem>
        <ListItem>
          Clear-Taste drücken, damit die minimale und maximale Spannung
          zurückgesetzt wird.
        </ListItem>
        <ListItem>Motor starten</ListItem>
        <ListItem>
          Mode-Taste drücken; Die maximale Spannung wird angezeigt.
        </ListItem>
        <ListItem>
          Mode-Taste drücken; Die minimale Spannung wird angezeigt.
        </ListItem>
      </List>

      <Typograph variant="h4" text="Download" />
      <Buttons
        href="http://oltzen.de/html/gpl/CarAccuTester20141119.zip"
        title="Schaltplan und Sourcecode"
        variant="contained"
      />
      <img className={classes.hd} src={caraccutester} alt="caraccutester" />
      <Typograph variant="body1" text="(26.01.2015)" />
    </Container>
  );
};

export default Carakku;
