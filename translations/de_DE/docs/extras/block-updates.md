# Updates blockieren
---
Alle derzeit bekannten Wii U Exploits können im Gegensatz zum Nintendo Switch RCM Exploit durch ein Systemupdate gepatcht werden. Obwohl die Wii U nicht mehr offiziell unterstützt wird, kann Nintendo noch Updates veröffentlichen. Nämlich, die Updates 5.5.3 und 5.5.4 wurden beide veröffentlicht, nachdem die Wii U eingestellt wurde, so dass das Blockieren von Aktualisierungen immer noch eine empfohlene Maßnahme ist.

### Anleitungen

Derzeit existieren zwei Möglichkeiten, um Updates für das Wii U System zu blockieren:
<!-- tabs:start -->

#### **Update-Ordner löschen**
?> Diese Methode der Update-Blockierung ist etwas fortschrittlicher als die DNS-Blockierung und verwendet eine Homebrew-Anwendung zur Änderung von Systemdateien. Es hat jedoch den Vorteil, dass die Funktionalität des eShops nicht eingeschränkt wird.
1. Stecke deine SD-Karte in deinen Computer.
1. Laden Sie [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases) herunter und extrahieren Sie es auf die Wurzel Ihrer SD-Karte.
1. Stecke die SD-Karte in deine Wii U Konsole ein und schalte sie ein.
1. Geben Sie den Homebrew Launcher ein.
1. Navigieren Sie durch den Homebrew Launcher und führen Sie die UFDiine-App aus.
1. Drücken Sie die Taste A, um den Aktualisierungsordner zu löschen.
1. Bestätigen Sie, dass es heißt `Update folder is deleted`. Jetzt blockiert deine Konsole Updates.

### **DNS-Blockierung**
?> Diese Methode ist die einfachere Methode und wird weniger fortgeschrittenen Benutzern empfohlen. Es hindert den eShop jedoch daran, zu funktionieren. Dies kann durch das Ausführen von [NNUPatcher](http://www.wiiubru.com/appstore/zips/nnupatcher.zip) vor dem Start des eShops behoben werden.
1. Stecke deine SD-Karte in deinen Computer.
1. Entpacke die `nnupatcher.zip` Datei in das Stammverzeichnis deiner SD-Karte. Falls du gefragt wirst, überschreibe doppelte Dateien.
1. Stecke die SD-Karte in deine Wii U Konsole ein und schalte sie ein.
1. Öffne die Systemeinstellungen der Wii U ein und navigiere zu `Internet > Connect to the Internet > Connection List >` `Ihre Wii-Verbindung > Ändern Sie die Einstellungen > DNS` und setzen Sie die Option auf `Nicht automatisch erhalten`.
1. Du wirst aufgefordert, eine primäre und sekundäre DNS einzugeben. Gib die folgenden IP-Adressen ein:
 - Primäre DNS: 168.235.092.108
 - Sekundäre DNS: 081.004.127.020 <img src="docs/assets/img/DNS.png" alt="DNS-Block" />
1. Klicke auf Bestätigen.
1. Jetzt blockiert deine Konsole Updates. Um auf den eShop zuzugreifen, führen Sie die NNUPatcher-Anwendung vom Homebrew Launcher aus, bevor Sie den eShop starten.


<!-- tabs:end -->
