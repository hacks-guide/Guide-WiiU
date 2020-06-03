# Kopieren originaler Wii Disks
---
Kopieren deiner Disks ermöglicht dir: sie auf einem Wii Emulator (insbesondere Dolphin) zu spielen, sie per USB/SD Karte via Wiiflow zu spielen, Virtual Console Injektionen zu erstellen sodass diese auf eine Wii U formatierte USB Platte installiert und vom Wii U Menü aus gestartet werden können.

?> Dumping Wii Spiele erfordern ein funktionierendes Homebrew Setup auf vWii, also vergewissern Sie sich, dass Sie vorher den [vWii Modding Guide](vwii-modding) fertigzustellen.

### Was Du Brauchst

1. Die neueste Version von [CleanRip](https://github.com/emukidid/cleanrip/releases/download/2.1.1/CleanRip-v2.1.1.zip)
1. Die [wii.dat](https://github.com/emukidid/cleanrip/releases/download/2.1.1/wii.dat) Datei

### Anleitungen

1. Lege die SD-Karte deiner Wii U in deinen Computer ein
1. Kopiere den Ordner `apps` aus der Datei `CleanRip-v2.1.1.zip` in das Stammverzeichnis deiner SD-Karte
1. Kopiere die `wii.dat` Datei in das Stammverzeichnis deiner SD-Karte
1. Nimm die SD-Karte aus deinem Computer heraus und stecke sie in deine Wii U-Konsole.

### Kopieren der Disk

1. Schalte deine Wii U ein und wähle dann das Wii Menü Icon aus um in die vWii zu starten.
1. Starte den Homebrew Channel.
1. CleanRip starten.
1. Lies den Haftungsausschluss und drücke dann A.
1. Wählen Sie Ja aus, um Prüfsummenberechnungen zu aktivieren.
1. Select either USB or Front SD depending on which device you want to use for the dumping process.
 - Bitte beachte, dass das gewählte Gerät entweder in FAT32 oder NTFS formatiert sein muss.
1. Drücke A, um fortzufahren.
1. Wähle Nein auf dem Bildschirm aus der dich dazu auffordert die redump.org DAT Dateien herunterzuladen.
1. Schiebe die Disk ein und drücke dann A.
1. Gehe [zu dieser Seite](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) um herauszufinden ob deine Disk dual-layered ist.
1. Alles auf Folgendes einstellen:
 - Dual Layer `Yes/No` (Wähle `Yes` falls dein Spiel dual-layered ist)
 - Chunk Size `Max`
 - New device per chunk `No`
1. Wenn du mehrere Disks kopieren möchtest, wähle Yes um deine Einstellungen zu speichern. Falls nicht, wähle No.

?> Stell dich darauf ein, eine Weile zu warten. Der Kopiervorgang kann, je nach Geschwindigkeit deiner SD-Karte, 30 Minuten bis hin zu einer Stunde dauern.

### Gesplittete Dateien zusammenfügen

?> falls du die Disk auf ein FAT32 formatiertes Gerät kopiert hast, solltest du mindestens 2 Dateien erhalten haben, die mit `.partX.iso` enden. Diese müssen zusammengeführt werden.

1. Kopiere alle Dateien, die den gleichen Namen teilen und endet mit `.partX.iso` in einem Ordner auf deinem Computer.
1. Öffne ein Befehlsaufforderungsfenster.
1. Verwende den Befehl `cd <path>` und ersetze Sie `<path>` durch den Pfad zu deinen `.partX.iso` Dateien.
1. Benutze den folgenden Befehl wie folgt: `copy /b *.part?.iso game.iso`.