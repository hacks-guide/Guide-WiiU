# Haxchi

## Erstellen eines NAND Backups {docsify-ignore}

Für den Fall dass etwas schiefgeht und deine Wii U am Ende brickt, kann ein zuvor erstelltes NAND Backup deine Konsole retten.

### Anleitungen

?> Der Wii U NAND ist (abhängig von deinem Modell) entweder 8GB oder 32GB. Infolgedessen, erstelle ein komplettes Backup des NAND's deiner Konsole. Die SD-Karte muss hierbei größer als dein NAND sein. Wenn du keine ausreichend große SD-Karte hast, du kannst den optionalen Abschnitt `MLC` überspringen, der das Speichern von Dateien und Spieldaten beinhaltet und nicht benötigt wird, um die meisten Bricks zu beheben.

> Wiederherstellung eines NAND Backups erfordert zusätzliche Hardware und Mikrolötfähigkeiten. <br>Wie auch immer, ein NAND Backup ist **immer** nützlich, also überspringe es nicht. <br>Dein NAND Backup ist einzigartig für dein System. Backups von anderen Konsolen werden **nicht** funktionieren.

1. Navigiere durch den Homebrew Launcher und starte die `Wii U NAND Dumper` App.
1. Nutze das DPAD des Gamepad's um die folgende Konfiguration auszuwählen:
 - Dump SLC: **yes**
 - Dump SLCCMPT: **yes**
 - Dump MLC: **optional**
 - Dump OTP: **yes**
 - Dump SEEPROM: **yes**
1. Drücke den A Knopf um den Kopiervorgang zu starten.
1. Wenn der Prozess abgeschlossen ist, schalte deine Wii U aus, nimm die SD-Karte raus und stecke sie an deinen PC.
1. Stelle sicher diese Dateien nicht zu verlieren. Kopiere die `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin`, und falls du ein komplettes Backup erstellt hast, `jeden mlc.bin.part` auf deinen Computer.
1. Lösche die Dateien dann von deiner SD-Karte um Speicherplatz freizugeben.