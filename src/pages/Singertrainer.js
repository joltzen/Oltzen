import { Container, Link } from "@material-ui/core";
import React from "react";
import Page from "../components/Page";
import Typograph from "../components/Typograph";
import useImages from "../hooks/useImages";
import singertrainer from "../images/SingerTrainer.png";

const Singertrainer = () => {
  const classes = useImages();
  return (
    <Container maxWidth="md">
      <Page title="Singer Trainer" description="Einführung" />
      <Typograph
        variant="body1"
        text="Der Singer Trainer ist ein Programm, 
        mit dem die lauteste Tonhöhe aus einem Mikrofon ermittelt wird. 
        Der Sänger kann also sehen, wie sauber ein Ton getroffen wurde. 
        Das Programm ist auch zum Stimmen von Gitarren geeignet, aber nicht dafür
        ausgelegt."
      />
      <Typograph
        variant="body1"
        text="Weil ich keine freie Software gefunden 
        habe, die das kann, habe ich mich entschlossen ein eigenes Programm 
        zu schreiben. Der Kern des Programmes ist die 
        schnelle Fourier-Transformation. Der Rest war auch schnell 
        zusammengestrickt. Ich denke, man kann noch viel mehr mit der Idee 
        anfangen, aber für mich reicht es. Zum Beispiel könnte man das Programm 
        so erweitern, dass nur nach bestimmten Tönen gemessen wird oder dass 
        ein Lied (Soll-Ton) mit der richtigen Tonhöhe nachgesungen werden muss."
      />
      <Typograph variant="h5" text="Beschreibung" />

      <img
        className={classes.singertrainer}
        src={singertrainer}
        alt="SingerTrainer "
      />
      <Typograph
        variant="body1"
        text="Auf dem Bild ist in ganz großen Lettern der erkannte Ton zu sehen. 
        Dabei wird nach dem internationalen Standard der Ton angezeigt.
        Der Kammerton A ist A4. Ist der Ton um mehr als 10% daneben, wird der 
        Ton rot dargestellt. Zusätzlich wird ein Pfeil, der nach oben oder unten
        zeigt, dargestellt. Zeigt der Pfeil nach oben muss der Sänger etwas 
        höher singen. Zeigt der Pfeil nach unten, entsprechend niedriger.
        Wird der Ton schwarz angezeigt, so liegt der Ton nur um maximal 10% daneben."
      />
      <Typograph
        variant="body1"
        text="Die genaue Abweichung kann an Deviation abgelesen werden. 
              Eine Abweichung von 100% bedeutet, dass man genau zwischen 
              zwei Tönen liegt. Die ermittelte Frequenz wird auch angezeigt. 
              Das Volumen gibt an wie deutlich die Frequenz ist. 
              Dies hängt von der Lautstärke und der Reinheit des Tones ab."
      />
      <Typograph variant="h5" text="Download" />
      <Typograph
        variant="body1"
        text="Es muss mindestens Java 6 installiert sein!"
      />

      <Link href="http://www.oltzen.de/software/SingerTrainer.exe">
        SingerTrainer.exe
      </Link>
      <Typograph
        variant="body1"
        text="Beim Starten könnte eine Fehlermeldung auftreten, dass eine DLL 
        fehlt. Diese Meldung kann einfach übergangen werden."
      />
      <Link href="http://www.oltzen.de/software/SingerTrainerSrc.zip">
        SingerTrainerSrc.zip
      </Link>
      <Typograph variant="body1" text="Für die Linux Nutzer:" />
      <Typograph variant="body1" text="java -jar SingerTrainer.jar" />
      <Link href="http://www.oltzen.de/software/SingerTrainerSrc.jar">
        SingerTrainer.jar
      </Link>
    </Container>
  );
};

export default Singertrainer;
