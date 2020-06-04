# Wii U Discs dumpen
---
Deine Discs zu dumpen erlaubt dir eine Kopie des Spiels auf deinen Systemspeicher oder auf ein USB Gerät zu installieren, damit du es ohne Disc spielen kannst.

?> Das Dumpen und Installieren von Spielen erfordert ein funktionierendes Homebrew Setup, also vergewissern Sie sich, dass Sie die Hauptanleitung bei der Installation von CFW zuerst beenden, bevor Sie dies befolgen.

### Anleitungen

<!-- tabs:start -->

#### **Auf den Systemspeicher installieren**

?> Installing a game to the system memory (NAND) is not recommended as it's limited to either 8GB or 32GB depending on your model, making you run out of space pretty quickly if you want to install multiple games.

### Was Du Brauchst

- Deine SD-Karte braucht genug Platz um das Spiel zu speichern.
- The latest release of [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- The [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) homebrew application.

### Anleitungen

1. Extrahiere das `wup_installer_gx2.zip` Archiv in das Stammverzeichnis deiner SD-Karte.
1. Extrahiere das `disc2app.zip` Archiv in das Stammverzeichnes deiner SD-Karte.
1. Nimm die SD-Karte aus deinem PC und stecke sie in deine Wii U.
1. Schalte die Wii U an.
1. Solltest du eine Disc in der Wii U haben, werfe diese aus.
1. Öffne den Homebrew Launcher und starte die disc2app app.
1. Drücke den A-Knopf, um den Dumpingvorgang auf die SD-Karte zu starten.
1. Sobald gefragt, lege deine Spieldisc ein, die du dumpen möchtest.
1. Sobald der Vorgang abgeschlossen ist, startet deine Wii U das Wii U Menü.
1. Öffne den Homebrew Launcher und starte die WUP Installer GX2 app.
1. Wähle dein Spiel (`WUP-X-XXXX`), wähle `Install` und bestätige mit `Yes`.
1. Wähle NAND als das Installationsziel.
1. Sobald der Vorgang abgeschlossen ist, startet deine Wii U das Wii U Menü.
1. Dein Spiel sollte nun installiert, und bereit zum Spielen sein.
1. Nimm deine SD-Karte aus deiner Wii U und stecke sie in deinen PC.
1. Lösche den `WUP-X-XXXX` Ordner im `install` Verzeichnis auf deiner SD-Karte, um Speicherplatz freizugeben.

#### **Auf USB Installieren**

?> Wenn Sie ein Spiel auf einem USB-Gerät installieren, empfehlen wir Ihnen, eine Festplatte und kein Flash-Laufwerk zu verwenden, da diese nicht für ständiges Lesen und Schreiben optimiert sind und daher schnell ausfallen. Wenn Ihre Festplatte nicht extern mit Strom versorgt wird, benötigen Sie ein Y-Kabel, um sie an zwei USB-Steckplätze der Wii U anzuschließen.

!> Um auf einem USB-Gerät installiert zu werden, muss es von der Wii U formatiert werden. Wenn Sie dies tun, wird der gesamte Inhalt gelöscht und es kann nicht mehr auf einem anderen System verwendet werden, es sei denn, Sie formatieren es neu.

### Was Du Brauchst

- Deine SD-Karte braucht genug Platz um das Spiel abzuladen.
- Eine USB-Festplatte (+ USB-Y-Kabel ob gebraucht)
- Die neueste Version von [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- Die [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) Homebrew app

### Anleitungen

1. Extrahiere das `wup_installer_gx2.zip` Archiv in das Stammverzeichnis deiner SD-Karte.
1. Extrahiere das `disc2app.zip` Archiv in das Stammverzeichnes deiner SD-Karte.
1. Nimm die SD-Karte aus deinem PC und stecke sie in deine Wii U.
1. Steck deine USB-Festplatte in die Wii U rein.
1. Schalte das Wii U an.
1. Ihr Wii U wird Sie auffordern, Ihre Festplatte zu formatieren. Bestätigen Sie mit Ja.
1. Solltest du eine Disc in der Wii U haben, werfe diese aus
1. Öffne den Homebrew Launcher und starte die disc2app app.
1. Drücke den A-Knopf, um den Dumpingvorgang auf die SD-Karte zu starten.
1. Sobald gefragt, lege deine Spieldisc ein, die du dumpen möchtest
1. Sobald der Vorgang abgeschlossen ist, startet deine Wii U das Wii U Menü.
1. Öffne den Homebrew Launcher und starte die WUP Installer GX2 app.
1. Wähle dein Spiel (`WUP-X-XXXX`), wähle `Install` und bestätige mit `Yes`.
1. Wählen Sie USB als Installationsziel.
1. Sobald der Vorgang abgeschlossen ist, startet deine Wii U das Wii U Menü.
1. Dein Spiel sollte nun installiert, und bereit zum Spielen sein.
1. Nimm deine SD-Karte aus deiner Wii U und stecke sie in deinen PC.
1. Lösche den `WUP-X-XXXX` Ordner im `install` Verzeichnis auf deiner SD-Karte, um Speicherplatz freizugeben.

### Updates/DLC auf USB verschieben

?> Wenn Ihr DVD-Spiel DLC oder Updates installiert hatte, müssen Sie die Dateien auf Ihr USB-Gerät übertragen. Sie können dies über die Datenverwaltung des Wii U tun.

1. Mach die Wii U an
1. Öffne die Wii U Systemeinstellungen.
1. Navigieren Sie zu `Datenverwaltung > Daten kopieren/verschieben/löschen > Systemspeicher > Elemente verschieben (X)`.
1. Wählen Sie Ihre Partie aus und übertragen Sie die Aktualisierungs- und DLC-Daten auf das USB-Gerät.

#### **Von USB installieren**

?> Wenn Sie nicht genug Platz auf Ihrer SD-Karte haben, können Sie eine fortgeschrittene Technik verwenden, um Dumps von einem USB-Gerät zu installieren. Dieses ist nicht das einfachste zu tun und hat den Nachteil, dass man kann das Spiel nur auf deine Systemspeicher (NAND) installieren.

### Was Du Brauchst
- Ein USB-Speichergerät (+ ein Y-Kabel, falls erforderlich) mit genügend Platz für das Spiel, das Sie entsorgen möchten.
- Die neueste Version von [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- Die [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) Homebrew App.
- Die [MochaFAT32](https://www.wiiubru.com/appstore/zips/mocha_fat32.zip) Homebrew App.
- Die Version 1.4 von [Der Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - Sie müssen die Version 1.4 `homebrew_launcher.v.1.4.zip` herunterladen.

### Anleitungen

?> **Notice** Ihr USB-Gerät muss als FAT32 formatiert werden. Wenn Ihr USB nicht auf FAT32 formatiert ist, verwenden Sie [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) mit 32k (32768) Größe der Zuweisungseinheit, um ihn zu formatieren.

1. Entpacken Sie die Datei `homebrew_launcher.v.1.4.zip` in das Stammverzeichnis Ihres USB-Geräts.
1. Entpacken Sie die Datei `wup_installer_gx2.zip` in das Stammverzeichnis Ihres USB-Gerätes.
1. Entpacken Sie die Datei `disc2app.zip` in das Stammverzeichnis Ihres USB-Gerätes.
1. Extrahieren Sie die Datei `mocha_fat32.zip` in das Stammverzeichnis Ihrer SD-Karte.
1. Nehmen Sie die SD-Karte aus Ihrem PC heraus und schließen Sie sie an Ihre Wii U-Konsole an.
1. Schalte die Wii U an.
1. Schließen Sie Ihr USB-Gerät an. Die Wii U wird Sie bitten, sie zu formatieren. Abbrechen mit Nein!
1. Lancez le Homebrew Launcher et lancez l'application MochaFAT32.
1. Nehmen Sie im Konfigurationsmenü die folgenden Einstellungen vor:
  - Config view mode: default
  - Skip this menu on launch: on
  - Don't relaunch OS: off
  - Launch System Menu: on
  - RedNAND: off
1. Ihre Konsole wird das Wii U-Menü laden, wobei Ihr USB-Gerät nun die SD-Karte ersetzt.
1. Starten Sie den Homebrew Launcher und öffnen Sie die disc2app-App.
1. Legen Sie jede eingelegte Spielscheibe aus und drücken Sie die A-Taste, um mit dem Dumping-Prozess zu beginnen.
1. Sobald gefragt, lege deine Spieldisc ein, die du dumpen möchtest.
1. Sobald der Vorgang abgeschlossen ist, startet deine Wii U das Wii U Menü.
1. Öffne den Homebrew Launcher und starte die WUP Installer GX2 app.
1. Wähle dein Spiel (`WUP-X-XXXX`), wähle `Install` und bestätige mit `Yes`.
1. Wähle NAND als das Installationsziel.
1. Sobald der Vorgang abgeschlossen ist, startet deine Wii U das Wii U Menü.
1. Dein Spiel sollte nun installiert, und bereit zum Spielen sein.
1. Retirez le périphérique USB de votre Wii U et connectez-le à votre PC.
2. Löschen Sie den Ordner `WUP-X-XXXX` im Verzeichnis `install` auf Ihrem USB-Gerät, um Speicherplatz freizugeben.

### Das Spiel auf USB übertragen

?> Wenn Sie das Spiel nicht auf NAND installiert lassen möchten, können Sie die Datenverwaltung der Wii U nutzen, um das Spiel auf ein USB-Gerät zu verschieben.

!> Um Ihr Spiel auf ein USB-Gerät zu übertragen, muss es von der Wii U formatiert werden. Wenn Sie dies tun, wird der gesamte Inhalt gelöscht und es kann nicht auf einem anderen System verwendet werden, es sei denn, Sie formatieren es neu.

1. Starten Sie Ihre Wii U neu, um den Effekt von MochaFAT32 zu entfernen.
1. Schließen Sie Ihr USB-Gerät an die Wii U an.
1. Schalte die Wii U an.
1. Ihre Wii U wird Sie auffordern, Ihr USB-Gerät zu formatieren. Bestätigen Sie mit Ja.
1. Öffne die Wii U Systemeinstellungen.
1. Navigieren Sie zu `Datenverwaltung > Daten kopieren/verschieben/löschen > Systemspeicher > Elemente verschieben (X)`
1. Wählen Sie das Spiel aus und übertragen Sie alle Daten (einschließlich Updates und DLC, falls installiert) auf Ihr USB-Gerät.

<!-- tabs:end -->
