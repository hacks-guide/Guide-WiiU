---
prev: true
next: true
---

# NAND-Backup erstellen

Für den Fall, dass etwas schiefgeht und deine Wii U am Ende unbrauchbar, beziehungsweise gebrickt wird, kann ein zuvor erstelltes NAND-Backup deine Konsole retten.

## Anleitung

::: tip

Das Wii U-MLC ist (je nach Modell) entweder 8GB oder 32GB. Infolgedessen wird für ein komplettes Backup des NANDs deiner Konsole eine SD-Karte größer als deinen MLC benötigt. Wenn du keine ausreichend große SD-Karte hast, kannst du den optionalen `MLC` Abschnitt überspringen, der die Speicherdateien und Spieldaten beinhaltet und nicht benötigt wird, um einen Brick wiederherzustellen.

:::

::: tip

Die Wiederherstellung eines NAND-Backups auf der Wii U erfordert ISFShax oder zusätzliche Hardware und Mikrolötfähigkeiten.

Jedoch ist das Erstellen eines NAND-Backups **immer** nützlich, daher überspringe es bitte nicht.

Dein NAND-Backup ist einzigartig für dein System. Backups von anderen Konsolen funktionieren **nicht** ohne das erforderliche Wissen.

:::

1. Navigiere mit dem GamePad zu `nanddumper` und drücke A, um es zu starten.
2. Use the Wii U GamePad's D-Pad to enter the following configuration:
   ![SLC: Yes, SLCCMPT: Yes, MLC: Yes or No, OTP: Yes, SEEPROM: Yes](/assets/img/guide/NAND.png)
   - MLC ist **OPTIONAL**, wenn du es nicht sichern willst, lass es auf `No`. If you do want to dump it, make sure you have a SD Card big enough for it and put it on `Yes`.
3. Drücke den A-Knopf, um den Dumping-Vorgang zu starten.
4. Wenn der Prozess abgeschlossen ist, schalte deine Wii U aus, entferne die SD-Karte und stecke sie an deinem PC ein.
5. Um sicherzustellen, dass du die Dateien nicht verlierst, kopiere die `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` (und wenn du dich für ein vollständiges Backup entschieden hast, `jede mlc.bin.part` Datei) zu einem sicheren Ort (Dokumente, Google Drive, OneDrive, usw.) auf deinem Computer.
   - Sie werden im Stammverzeichnis der SD-Karte erscheinen.
6. Lösche die Dateien, die du gerade von deiner SD-Karte kopiert hast, um Speicherplatz freizugeben.
