const list1 = [
  "Die MIDI-Datei wird über USB übertragen.",
  "Das Modul ist auch ohne PC verwendbar. Der PC wird nur zum Übertragen benötigt.",
  "Die Abspielgeschwindigkeit ist regulierbar.",
  "Die Verbindung von Leuchtleiste und Steuergerät ist schmaler.",
  "Die LED Farben für die schwarzen und weißen Tasten sind unterschiedlich.",
];

const list2 = [
  "Zum Controller wird keine 1:1 MIDI Datei übertragen. Weil ein Mikrocontroller (MC) von seiner Leistung her sehr klein ist, müssen Kompromisse eingegangen werden und Schnittstellen sehr pragmatisch sein. Dies ist so ein Fall. Obwohl eine MIDI-Datei im Prinzip nicht sehr komplex ist, erfordert diese einen gewissen Aufwand. Ich habe ein Format entwickelt, dass leicht im MC implementiert werden kann.",
  "Standard Bauteile und kein SMD Alle Bauteile sind im DIP-Gehäuseerhältlich und können entsprechend leicht gelötet werden. Es werden auch keine speziellen IC verwendet, sodass die Bestellung der Einzelteile kein Problem ist. Insbesondere die Soundausgabe hat keinen speziellen Soundgenerator-IC.",
  "Soundausgabe Der Controller enthält auch eine Soundausgabe, damit es dem Schüler leichter fällt, die richtigen Töne zu treffen. Insbesondere wenn der gleiche Ton zwei Mal direkt hintereinander gespielt wird. Die LED wird kurzzeitig dunkel, was schlecht gesehen wird, aber man hört es sehr gut. Die Soundausgabe ist nicht grade berauschend, aber erfüllt seinen Zweck. Insbesondere wenn Akkorde gespielt werden, hört es sich schon sehr schräg an.",
  "Controller LED-Leiste Verbindung Der Controller und die LED-Leiste sind über ein 10-adriges Flachbandkabel verbunden. Über dieses läuft die Stromversorgung, I2C-Bus und die Verbindungserkennung. Das Kabel ist über Stecker nicht so leicht raus geht.",
];

const list3 = [
  "Samplingrate auf 19531/s erhöht",
  "Bei halber Samplingrate können bis zu 16 Töne gleichzeitig gespielt werden. Dazu ist aber eine Neucompilierung notwendig.",
  "MIDI Ausgang.",
];

export { list1, list2, list3 };
