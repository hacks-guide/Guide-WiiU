# Unblocking Updates
---
This is needed if you ever need to perform a System Update.

### Anleitungen

<!-- tabs:start -->

#### **Recreating The Update Folder**

?> Damit diese Methode funktioniert, muss deine Wii U im selben Netzwerk wie dein Computer sein.
1. Stecke deine SD-Karte in deinen Computer.
1. Lade [ftpiiu_everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip) herunter und entpacke es in das Stammverzeichnis deiner SD Karte.
1. Lade einen FTP Clienten deiner Wahl herunter wie zum Beispiel [FileZilla](https://filezilla-project.org/download.php?show_all=1).
1. Stecke die SD-Karte in deine Wii U Konsole ein und schalte sie ein.
1. Starten die CFW deiner Wahl (Mocha, Haxchi/CBHC) und starte den Homebrew Launcher.
1. Navigiere durch den Homebrew Launcher und führe die ftpiiu_everywhere App aus.
1. Notiere dir die IP Adresse auf dem Wii U Bildschirm.
1. Führe deinen bevorzugten FTP Clienten auf deinem PC aus und öffne eine FTP Verbindung zu deiner Wii U. In FileZilla kann dies über den Site-Manager geschehen, stell aber sicher, dass du die IP-Adresse durch auf deinem Wii U Bildschirm angezeigte ersetzt: <br><img src="docs/assets/img/FTP.png" alt="FileZilla" />
1. Navigiere zu `/storage_mlc/sys`.
1. Create a folder named `update`.
1. You are now no longer blocking system updates.

### **Removing The DNS Blocks**

1. Enter the Wii U's system settings and navigate to `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` and set the option to `Auto-obtain`.
1. You are now no longer blocking system updates.

<!-- tabs:end -->