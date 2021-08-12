import { Container } from "@material-ui/core";
import React from "react";
import Buttons from "../components/Buttons";
import Page from "../components/Page";
import Typograph from "../components/Typograph";
import useStyles from "../hooks/useStyles";
import messung1 from "../images/1Messung.png";
import messung2 from "../images/2Messung.png";
import messung3 from "../images/3Messung.png";
import cformel from "../images/cformel.jpg";
import cformel2 from "../images/cformel2.jpg";
import entladeformel from "../images/entladeformel.jpg";
import lformel from "../images/lformel.jpg";
import messgerät from "../images/Messgerät.jpg";
const Lcmeter = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Page title="LC-Meter" />
      <Typograph
        variant="body1"
        text="Der LC-Meter ist mit dem Ziel entwickelt worden, kleine Kondensatoren und normale Spulen zu messen.
            Mein Multimeter kann nur Kondensatoren größer als ca. 1nF und keine Spulen messen. Aus diesem Grund sollte der LC-Meter folgende Leistungsdaten haben:"
      />
      <Typograph
        variant="body1"
        text="Kondensator: 1pF bis 1nF, 10% Abweichung Spule: 1µH bis 5µH mit 25% Abweichung, 5µH bis 1mH mit 10% Abweichung"
      />
      <Typograph variant="h5" text="Grundlage und Quellen" />
      <Typograph
        variant="body1"
        text="Die Idee für die Spulenmessung ist von der Homepage sprut.de inspiriert worden.
            Auch wenn ich eine ATmega für die Lösung verwende, ist die Grundidee und Umsetzung sehr gut.
             Insbesondere die theoretische Grundlage ist dort sehr gut beschrieben."
      />
      <Typograph
        variant="body1"
        text="Die Kondensatorenmessung ist aus dem Elektronik-Kompendium über die astabile Kippstufe inspiriert worden.
            Der kundige Leser wird sich direkt fragen, warum nicht nur nach der LC-Methode gemessen wurde.
            Zum einen ist das Messen über den NE555 Timer sehr einfach und ich erspare mir ein Reedrelais zum Umschalten.
            Zum anderen hat mich diese Art zu messen gereizt."
      />
      <Typograph variant="h5" text="Designentscheidungen" />
      <Typograph variant="h6" text="Anzeige und Bedienung" />
      <Typograph
        variant="body1"
        text="Die Messwerte werden über ein 16x2 LCD-Display angezeigt. In der ersten Zeile wird das Messergebnis angezeigt und in der zweiten Zeile die gemessene Frequenz.
             Für den Nachbau reicht auch ein 16x1 Display. Die Kondensator-Werte werden immer in pF und die Spule in µH ausgegeben.
             Eine Umstellung des Messbereichs wurde nicht implementiert, weil der Wertebereich nicht so groß ist.
             Sollte ein Messwert größer 999 sein wird nach jeder 1000 Potenz ein Leerzeichen eingefügt. 47nF wird also als 47 000pF angezeigt, wobei die Anzeige rechtsbündig ist.
            Durch die Rechtsbündigkeit können die Werte viel einfacher abgelesen werden, falls diese um eine 10er Potenz schwanken.
            Es wird einmal in der Sekunde ein Messwert angezeigt, was ein zu schnelles Ändern der Anzeige verhindert und das Ablesen erleichtert.</p>
        "
      />
      <Typograph
        variant="body1"
        text="Wird ein Wert kleiner 10pF oder 10µH gemessen, werden die 3 Nachkommastellen angezeigt.
            Das Messinstrument hat zwar nicht die Genauigkeit, aber es ist schon interessant, wie empfindlich die Kapazitätmessung ist.
            Schon wenn man das Messinstrument bewegt, ändert sich die Kapazitätsanzeige."
      />
      <Typograph variant="h4" text="Bilder:" />
      <Typograph variant="h5" text="C-Messung 1,5pF :" />
      <img className={classes.messungpic} src={messung1} alt="messung1 " />
      <Typograph variant="h5" text="C-Messung 100nF:" />
      <img className={classes.messungpic} src={messung2} alt="messung2 " />
      <Typograph variant="h5" text="L-Messung 1mH :" />
      <img className={classes.messungpic} src={messung3} alt="messung3" />
      <Typograph
        variant="body2"
        text="Durch einen Kippschalter (2-polig) wird zwischen L und C Messung ausgewählt.
            Mit einem Schalter-Pol wird die Messleitung ausgewählt und durch den anderen Pol wird dem µC die Schalterstellung mitgeteilt."
      />
      <Typograph variant="h4" text="C-Messung" />
      <Typograph
        variant="body1"
        text=" In der Kondensator Messung ist ein 22pF Kondensator parallel zum messenden Kondensator gesetzt worden.
            Dieser Kondensator soll verhindern, dass die erzeugte Frequenz für den µC und NE555 viel zu hoch ist.
             Durch den parallelen Kondensator kann nur eine maximale Frequenz erzeugt werden.
            Ohne diesen Kondensator kann eine theoretische Frequenz im MHz Bereich erzeugt werden. Beispiel: R1 = 100kOhm, R2= 47KOhm, C=1pF"
      />
      <Typograph variant="body1" text=" f=1/(0,69*(R1+2*R2)*C) => f=7,39MHz" />
      <Typograph
        variant="body1"
        text="Der NE555 ist aber nur bis 500kHz spezifiziert."
      />
      <Typograph
        variant="body1"
        text="Wenn Cmin=22pF ist, beträgt die maximale Frequenz f=338026Hz. Alternativ könnte auch ein Cmin=15pF verwendet werden.
             Dann ist die maximale Frequenz f=495772Hz, was noch vom NE555 verkraftet wird."
      />
      <Typograph
        variant="h6"
        text="Berechnet wird die Kapazität mit der Formel:."
      />
      <img className={classes.cformel} src={cformel} alt="cformel " />
      <Typograph
        variant="h6"
        text="Der Faktor d=0,69 wird aus der Entladekurve des Kondensators abgeleitet, der der Kondensator immer zu 50% auf und entsprechend entladen wird."
      />
      <Typograph
        variant="h6"
        text="Die Entladekurve für Kondensatoren lautet:"
      />
      <img
        className={classes.entladeformel}
        src={entladeformel}
        alt="eformel "
      />
      <Typograph
        variant="h6"
        text="Um d zu ermitteln muss die folgende Gleichung gelöst werden"
      />
      <img className={classes.cformel2} src={cformel2} alt="cformel2 " />
      <Typograph variant="h4" text="Toleranz" />
      <Typograph
        variant="body1"
        text="Die Toleranz der Spannungsteiler-Widerstände im NE555 beträgt 1% (maximal 3%), was entscheidend für die Toleranz des Ladungs-Faktor d ist.
            Aus diesem Grund kann d nur 1% genau sein."
      />
      <Typograph
        variant="body1"
        text="d% = max(log(0,5)-log(0,51), log(0,5)-log(0,49)) = 0,9% Toleranz"
      />
      <Typograph
        variant="body1"
        text="Durch die Kalibrierungstaste wird die maximale Frequenz ermittelt. Daraus kann der Kondensatorwert Cmin berechnet werden.
             Während der Kalibrierung sollte kein Kondensator in den Messpunkten angeschlossen sein. In der Zeit werden auf dem Display der gemessene Kondensatorwert und die Messfrequenz angezeigt.
             Weil der Kondensator Cmin nur subtrahiert wird, ist die Kalibrierung nur bei sehr kleinen Kondensatorwerten nötig."
      />
      <Typograph
        variant="body1"
        text="Leider hat die aufgebaute Schaltung schon eine Kapazität. Bei meinem Aufbau sind dies 30pF. Aus diesem Grund brauche ich keinen parallel geschalteten Kondensator."
      />
      <Typograph variant="h4" text="L-Messung" />
      <Typograph
        variant="body1"
        text="Für die Spulenmessung wurde ein 1nF Glimmer-Kondensator +/- 1% verwendet, weil dieser eine noch bezahlbare geringe Toleranz hat."
      />
      <Typograph
        variant="body1"
        text="Eine sehr gute Beschreibung der L-Messung ist bei sprunt.de zu finden. Meine Schaltung ist einfacher, weil nur Spulen gemessen werden.
            So gibt es keine Kalibrierung oder Reedrelais."
      />
      <Typograph
        variant="body1"
        text="Weil die minimal gewünschte Induktion 1µH ist, werden am µC maximal 5,03Mhz anliegen.
            Ein 16MHz betriebener ATmega kann nur bis 8 MHz zählen, was die zuverlässig messbare Induktion begrenzt."
      />
      <Typograph
        variant="h6"
        text="Berechnet wird die Frequenz in Abhängigkeit mit L und C mit:"
      />
      <img className={classes.lformel} src={lformel} alt="lformel " />
      <Typograph variant="h6" text="Tipp:" />
      <Typograph
        variant="body1"
        text="Sollten kleinere Induktivitäten gemessen werden, müsste der Kondensator vergrößert werden. Mit 100nF könnten Messungen bis zum 10nH erreicht werden.
             Das Programm müsste dann natürlich noch angepasst werden."
      />
      <Typograph variant="h4" text="µC" />
      <Typograph
        variant="body1"
        text="Als µC wurde der ATmega88 ausgewählt. Nach kleinen Anpassungen kann auch der ATmega8A oder ATmega8-16 eingesetzt werden.
             Gegebenenfalls müssen kleine Anpassungen am Sourcecode vorgenommen werden, was ich aber nicht überprüft habe."
      />
      <Typograph
        variant="body1"
        text="Für den µC sollte eine hohe Taktfrequenz gewählt werden, weil über den T1 Eingang am ATmega maximal die halbe Taktfrequenz gezählt werden kann.
            In meiner Lösung habe ich ein 16MHz Quarz eingesetzt. Weil der interne Zeitzähler jeden 1024.
            Takt hoch zählt, ist es nicht möglich, dass genau eine Sekunde lang die Impulse am T1 gezählt werden.
             Durch die Variable SECOND_FACTOR wird dieser Fehler herausgerechnet. Im Sourcecode sind zusätzlich die Werte für 20MHz enthalten."
      />
      <Typograph variant="h4" text="Gehäuse und Betrieb" />
      <Typograph
        variant="body1"
        text="Das Messgerät wird mit einer 9V Blockbatterie betrieben und wird über einen Schiebeschalter eingeschaltet."
      />
      <Typograph
        variant="body1"
        text="Noch eine Anmerkung zum Gehäuse: Es sieht einfach nicht schön aus, aber es ist nur ein Prototyp und um Erfahrungen für das Handling zu sammeln."
      />
      <Typograph variant="h4" text="Alternativen" />
      <Typograph
        variant="body1"
        text="Als Ergebnis der Kalibrierung könnte auch der Ladungs-Faktor d ermittelt werden. Dies würde bei großen Kapazitäten durchaus sinnvoll sein.
             Mittels eines oder mehrerer Referenzkondensatoren kann dann ein genauer d Wert berechnet werden."
      />
      <Typograph
        variant="body1"
        text="Auch könnte ein anderer 555 Timerbausstein verwendet werden, der höhere Frequenzen erlaubt oder genauere Spannungsteiler-Widerstände enthält."
      />
      <Typograph
        variant="body1"
        text="Ob der ATMega wirklich mit 16MHz betrieben werden muss, könnte man auch untersuchen.
            Vielleicht reichen auch schon 2MHz und einen Vorteiler an T1 aus, was die Batterie schonen würde."
      />
      <Typograph variant="h4" text="Bilder:" />
      <Typograph variant="h5" text="C-Messung 1,5pF :" />
      <img className={classes.messgerät} src={messgerät} alt="messgerät " />
      <Typograph variant="h4" text="Fazit" />
      <Typograph
        variant="body1"
        text="Es macht einfach viel Spaß ein eigenes Messinstrument zu bauen und mit diesem zu experimentieren.
            Auch ist es ein Thema in dem Theorie (Formeln) und Praxis (Messergebisse) so schön zusammenspielen."
      />
      <Typograph variant="h4" text="Download" />
      <Buttons
        href="http://www.oltzen.de/software/lc_meter_download_v1.0.zip"
        variant="contained"
        title="LC-Meter Download v1.0"
      ></Buttons>
      <Typograph variant="h4" text="Warnung" />
      <Typograph
        variant="body1"
        text="Weil das Messgerät nicht elektromagnetisch abgeschirmt ist, muss davon ausgegangen werden, dass Störstrahlungen erzeugt werden.
            Hierzu gibt es Gesetze und Vorschriften, die eingehalten werden müssen.
            Aus diesem Grund empfehle ich, das Messgerät nur in elektromagnetisch abgeschirmten Räumen zu verwenden!"
      />
      <Typograph variant="h4" text="Copyright" />
      <Typograph
        variant="body1"
        text="Schaltungen und der Quellcode stehen unter GPLv3."
      />
      <Typograph variant="h4" text="Gewährleistung" />
      <Typograph
        variant="body1"
        text="Es wird keinerlei Gewährleistung auf Sicherheit oder Funktion gegeben.
             Vor der Verwendung für kritische Systeme wird ausdrücklich gewarnt und erfolgt unter eigenem Risiko."
      />
      <Typograph variant="body1" text="(14.08.2016)" />
    </Container>
  );
};

export default Lcmeter;
