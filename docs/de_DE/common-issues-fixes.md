# Häufige Probleme & Behebungen

## Häufige Haxchi-Fehler

- **-3:** Keine SD-Karte erkannt. Stecke die SD-Karte wieder ein und versuche es erneut. Stelle sicher, dass die SD-Karte im FAT32-Format ist. Wenn der Fehler weiterhin besteht, versuche, in den SD-Steckplatz zu pusten, da er innen staubig werden kann.

- **-4:** SD erkannt, konnte aber nicht einhängen. Überprüfe, ob die SD-Karte MBR und nicht GPT verwendet. Überprüfe auch, ob es weitere Partitionen auf der SD-Karte gibt, und führe diese zu einer primären Partition zusammen.

- **-5:** Fehlende Dateien auf der SD. Überprüfe, ob sich der Homebrew Launcher auf deiner SD-Karte unter <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code> befindet.

## Browser-Fehler

- **FSGetMountSource failed:** Wie -3 oben, bedeutet keine SD-Karte erkannt. Setze die SD-Karte wieder ein und versuche es erneut. Dies könnte auch bedeuten, dass die SD-Karte gesperrt ist (Slider ist unten statt oben) oder die SD-Karte hat den Namen „WIIU“, welches, wie in der Anleitung angegeben, zu Konflikte führt. Wenn es keines dieser Probleme ist, beachte den letzten Vorschlag von -3.

- **FSOpenFile failed [...] payload.elf:** Fehlende Payload-Datei auf SD. Stelle sicher, dass payload.elf im wiiu Ordner, und der wiiu Ordner auf dem Stammverzeichnis vorhanden sind.

- **FSOpenFile failed:** `homebrew_launcher` fehlt auf SD. Stelle sicher, dass du `homebrew_launcher.elf` im Ordner <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code> hast.

- **SD Mount Failed:** Ähnlich wie -4, die Konsole erkennt die SD-Karte, konnte sie aber nicht einhängen. Stelle sicher, dass sie korrekt formatiert ist und nicht beschädigt ist. Außerdem ist die SD-Karte besser kompatible mit bekannten Marken (z. B. SanDisk, Samsung, Lexar, usw.) und weniger wahrscheinlich, Probleme zu haben.

## Datenverwaltung fordert zum Löschen unnötiger Daten auf, was bedeutet das?

Dies bezieht sich auf übrig gebliebene Dateien von unvollständigen Installationen. Wähle immer Ja, um diese Daten zu löschen, da sie unnötig Speicherplatz belegen.
Wenn es beim Löschen der Daten in einer Endlosschleife hängen bleibt, kannst du die Daten selbst manuell löschen.\
Benutze FTPiiU Everywhere und suche `/storage_mlc/usr/import`, dann lösche alle Dateien im Ordner, falls vorhanden. Dies ist der Ort, wo die Teilinstallationen nach den unvollständigen Installationen zurückbleiben. Bei der Installation auf einem USB lautet es `/storage_usb/usr/import`.\
Der `import` Ordner sollte immer leer bleiben.

## Meine Festplatte funktioniert nicht oder macht ein merkwürdiges Klickgeräusch, was soll ich tun?

Der Grund dafür ist, dass die Wii U nicht genug Strom über einen USB-Anschluss liefert, um die Festplatte zu nutzen.

You can fix this by either using a powered HDD or using a Y-Cable to connect the HDD to two USB ports.

If your HDD worked for some time and then stopped working for some games/all games, it is the same issue and can be fixed with the same methods.

## When extracting some of the files there are duplicates of certain ones called "info.json" & "manifest.install", what do I do with those?

Nothing special, you can leave them there, delete them or replace them with new ones. Those files are not used in the process, therefore, won't have any impact by being or not being there.

## My console suddenly lost online connectivity and I have an HDD sitting on top of the console, what should I do?

The internal antenna may have been influenced by the hard drive magnet.\
You can move the HDD to a different position atop the Wii U, or move it off the Wii U entirely.
