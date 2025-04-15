# Häufige Probleme & Behebungen

## Häufige Haxchi-Fehler

- **-3:** Keine SD-Karte erkannt. Stecke die SD-Karte wieder ein und versuche es erneut. Stelle sicher, dass die SD-Karte im FAT32-Format ist. Wenn der Fehler weiterhin besteht, versuche, in den SD-Steckplatz zu pusten, da er innen staubig werden kann.

- **-4:** SD erkannt, konnte aber nicht einhängen. Überprüfe, ob die SD-Karte MBR und nicht GPT verwendet. Überprüfe auch, ob es weitere Partitionen auf der SD-Karte gibt, und führe diese zu einer primären Partition zusammen.

- **-5:** Fehlende Dateien auf der SD. Überprüfe, ob sich der Homebrew Launcher auf deiner SD-Karte unter <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code> befindet.

## Browser-Fehler

- **FSGetMountSource failed:** Wie -3 oben, bedeutet keine SD-Karte erkannt. Setze die SD-Karte wieder ein und versuche es erneut. Dies könnte auch bedeuten, dass die SD-Karte gesperrt ist (Slider ist unten statt oben) oder die SD-Karte hat den Namen „WIIU“, welches, wie in der Anleitung angegeben, zu Konflikte führt. Wenn es keines dieser Probleme ist, beachte den letzten Vorschlag von -3.

- **FSOpenFile failed [...] payload.elf:** Fehlende Payload-Datei auf SD. Make sure you have payload.elf in the wiiu folder, and the wiiu folder on the root.

- **FSOpenFile failed:** `homebrew_launcher` fehlt auf SD. Stelle sicher, dass du `homebrew_launcher.elf` im Ordner <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code> hast.

- **SD Mount Failed:** Ähnlich wie -4, die Konsole erkennt die SD-Karte, konnte sie aber nicht einhängen. Stelle sicher, dass sie korrekt formatiert ist und nicht beschädigt ist. Also, your SD card is more compatible with reputable brands (i.e. SanDisk, Samsung, Lexar, usw.) und weniger wahrscheinlich, Probleme zu haben.

## Datenverwaltung fordert zum Löschen unnötiger Daten auf, was bedeutet das?

Dies bezieht sich auf übrig gebliebene Dateien von unvollständigen Installationen. Wähle immer Ja, um diese Daten zu löschen, da sie unnötig Speicherplatz belegen.
Wenn es beim Löschen der Daten in einer Endlosschleife hängen bleibt, kannst du die Daten selbst manuell löschen.\
Benutze FTPiiU Everywhere und suche `/storage_mlc/usr/import`, dann lösche alle Dateien im Ordner, falls vorhanden. Dies ist der Ort, wo die Teilinstallationen nach den unvollständigen Installationen zurückbleiben. Bei der Installation auf einem USB lautet es `/storage_usb/usr/import`.\
Der `import` Ordner sollte immer leer bleiben.

## Meine Festplatte funktioniert nicht oder macht ein merkwürdiges Klickgeräusch, was soll ich tun?

Der Grund dafür ist, dass die Wii U nicht genug Strom über einen USB-Anschluss liefert, um die Festplatte zu nutzen.

Du kannst dies beheben, indem du entweder eine Festplatte mit eigener Stromversorgung verwendest oder die Festplatte mit einem Y-Kabel an zwei USB-Anschlüsse anschließt.

Wenn deine Festplatte einige Zeit lang funktioniert hat und dann aufhört für einige Spiele/alle Spiele zu arbeiten, handelt sich um das gleiche Problem und kann mit denselben Methoden behoben werden.

## Beim Extrahieren von manchen Dateien sind Duplikate von „info.json“ & „manifest.install“ enthalten, was mache ich mit diesen?

Nichts Besonderes. Du kannst sie entweder dort lassen, sie löschen oder durch neue ersetzen. Diese Dateien werden nicht im Prozess verwendet und werden daher nicht dadurch beeinflusst, dass sie dort sind oder nicht.

## Meine Konsole hat plötzlich die Online-Verbindung verloren und ich habe eine Festplatte auf der Konsole liegen. Was soll ich tun?

Die interne Antenne kann durch den Festplattenmagneten beeinflusst worden sein.\
Du kannst die Festplatte an eine andere Position auf der Wii U verschieben oder sie ganz von der Wii U entfernen.
