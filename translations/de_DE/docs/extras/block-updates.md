# Updates blockieren
---
Alle derzeit bekannten Wii U Exploits können im Gegensatz zum Nintendo Switch RCM Exploit durch ein Systemupdate gepatcht werden. Obwohl die Wii U nicht mehr offiziell unterstützt wird, kann Nintendo noch Updates veröffentlichen. Nämlich, die Updates 5.5.3 und 5.5.4 wurden beide veröffentlicht, nachdem die Wii U eingestellt wurde, so dass das Blockieren von Aktualisierungen immer noch eine empfohlene Maßnahme ist.

### Anleitungen

Derzeit existieren zwei Möglichkeiten, um Updates für das Wii U System zu blockieren:
<!-- tabs:start -->

#### **Update-Ordner löschen**
?> Während diese Methode der Update-Blockierung ein bisschen weiter ist als das DNS-Blockieren und derzeit mindestens Grundwissen über FTP-Programme erfordert, hat den Vorteil, dass die Funktionalität des eShops nicht eingeschränkt wird.

?> Damit diese Methode funktioniert, muss deine Wii U im selben Netzwerk wie dein Computer sein.
1. Stecke deine SD-Karte in deinen Computer.
1. Lade [ftpiiu_everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip) herunter und entpacke es in das Stammverzeichnis deiner SD Karte.
1. Lade einen FTP Clienten deiner Wahl herunter wie zum Beispiel [FileZilla](https://filezilla-project.org/download.php?show_all=1).
1. Stecke die SD-Karte in deine Wii U Konsole ein und schalte sie ein.
1. Starten die CFW deiner Wahl (Mocha, Haxchi/CBHC) und starte den Homebrew Launcher.
1. Navigiere durch den Homebrew Launcher und führe die ftpiiu_everywhere App aus.
1. Notiere dir die IP Adresse auf dem Wii U Bildschirm.
1. Führe deinen bevorzugten FTP Clienten auf deinem PC aus und öffne eine FTP Verbindung zu deiner Wii U. In FileZilla kann dies über den Site-Manager geschehen, stell aber sicher, dass du die IP-Adresse durch auf deinem Wii U Bildschirm angezeigte ersetzt: <br><img src="docs/assets/img/FTP.png" alt="FileZilla" />
1. Navigiere zu `/storage_mlc/sys`. Du solltest einen leeren Ordner mit dem Namen `update ` sehen.
1. Rechtsklicke auf den Ordner und lösche diesen.
1. Jetzt blockiert deine Konsole Updates.

### **DNS-Blockierung**
?> Diese Methode ist die einfachere Methode und wird weniger fortgeschrittenen Benutzern empfohlen. Es hindert den eShop jedoch daran, zu funktionieren. Dies kann durch das Ausführen von [NNUPatcher](http://www.wiiubru.com/appstore/zips/nnupatcher.zip) vor dem Start des eShops behoben werden.
1. Stecke deine SD-Karte in deinen Computer.
1. Entpacke die `nnupatcher.zip` Datei in das Stammverzeichnis deiner SD-Karte. Falls du gefragt wirst, überschreibe doppelte Dateien.
1. Stecke die SD-Karte in deine Wii U Konsole ein und schalte sie ein.
1. Öffne die Systemeinstellungen der Wii U ein und navigiere zu `Internet > Connect to the Internet > Connection List >` `Ihre Wii-Verbindung > Ändern Sie die Einstellungen > DNS` und setzen Sie die Option auf `Nicht automatisch erhalten`.
1. Du wirst aufgefordert, eine primäre und sekundäre DNS einzugeben. Gib die folgenden IP-Adressen ein:
 - Primäre DNS: 168.235.092.108
 - Sekundäre DNS: 081.004.127.020 <img src="docs/assets/img/DNS.png" alt="DNS-Block" />
1. Klicke auf Bestätigen
1. Jetzt blockiert deine Konsole Updates. Um auf den eShop zuzugreifen, musst du nnupatcher App aus dem Homebrew Launcher ausführen, bevor du den eShop startest


<!-- tabs:end -->