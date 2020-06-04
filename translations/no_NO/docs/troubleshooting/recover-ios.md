# Gjenopprett en korrupt IOS
---
Denne siden vil hjelpe deg med å gjenopprette en korrupt IOS i vWii.

!> Ikke bruk denne guiden til noe annet enn å [Gjenopprette Mii Channel](recover-mii-channel) eller neste side.

### Dette trenger du

<!-- tabs:start -->

#### **Windows**

- En fungerende [Homebrew installasjon](introduction) på Wii U siden.
- Denne utgaven av [FTPiiU Everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip)
- En FTP-klient som for eksempel [FileZilla](https://filezilla-project.org/download.php?show_all=1)
- <a href="https://github.com/ihaveamac/overwrite-wiiu-titlehash/releases/download/v1.0/overwrite-wiiu-titlehash.exe" download>overwrite-wiiu-titlehash.exe</a>

#### **macOS & Linux**

- En fungerende [Homebrew installasjon](introduction) på Wii U siden
- Denne utgaven av [FTPiiU Everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip)
- Siste utgave av [Python](https://www.python.org/downloads/)
- En FTP-klient som for eksempel [FileZilla](https://filezilla-project.org/download.php?show_all=1)
- <a href="https://github.com/ihaveamac/overwrite-wiiu-titlehash/raw/master/overwrite-wiiu-titlehash.py" download>overwrite-wiiu-titlehash.py</a> **(Høyreklikk -> Lagre lenke som... -> Klikk Lagre).**

<!-- tabs:end -->

### Instruksjoner

<!-- tabs:start -->

#### **Windows**

1. Pakk ut `fpiiu-cbhc.zip` til roten av SD-kortet.
1. Installer FileZilla på PC'en din.

#### **macOS & Linux**

1. Pakk ut `fpiiu-cbhc.zip` til roten av SD-kortet.
1. Installer FileZilla på PC'en din.
1. Installer Python på PC'en din.

<!-- tabs:end -->

### Gjenoppretting av IOS'ene

!> **Ikke ** slett `00000002` mappen i `/slccmpt01/title/00000001` eller `00000002.tik` filen i `/slccmpt01/ticket/00000001`.

?> Hvis du bruker en blokkeringsmetode for systemoppdateringer, må du [tilbakestille den ](unblock-updates).

<!-- tabs:start -->

#### **Windows**

1. Slå på Wii U konsollen og start CFW (Mocha, Haxchi eller CBHC).
1. Start Homebrew Launcher.
1. Kjør FTPiiU Everywhere.
1. Start FileZilla.
1. Skriv inn IP-adressen som vist på Wii U skjermen, i feltet `Host` øverst i vinduet og klikk på `Quickconnect`.
1. I FileZilla, naviger til `/slccmpt01/title/00000001`.
1. Gå til [denne siden](ios-folders) for å se hvilken mappe/ticket du må slette.
1. Slett tilsvarende mapper av iOSene du ønsker å gjenvinne.
1. Naviger til `/slccmpt01/ticket/00000001`.
1. Slett tilsvarende `.tik` filer for IOS'ene du vil gjenopprette.
1. Start `overwrite-wiiu-titlehash.exe` filen som vi lasted ned tidligere.
1. Skriv inn Wii U konsollens IP-adresse og trykk Enter.
1. Vent til den er ferdig.
 - Hvis en `err.log` fil blir generert, vennligst gå til oss i **#wiiu-assistance** på [Nintendo Homebrew Discord](https://discord.gg/C29hYvh) kanalen og spør om hjelp på engelsk.
1. Gå ut av FTPiiU Everywhere og Homebrew Launcher.
1. Start System Innstillinger.
1. Utfør en [Systemoppdatering](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update).

?> Du kan nå reaktivere din [blokkeringsmetode mot systemoppdateringer](block-updates).

### **macOS & Linux**

1. Slå på Wii U konsollen og start CFW (Mocha, Haxchi eller CBHC).
1. Start Homebrew Launcher.
1. Kjør FTPiiU Everywhere.
1. Start FileZilla.
1. Skriv inn IP-adressen som vist på Wii U skjermen, i feltet `Host` øverst i vinduet og klikk på `Quickconnect`.
1. I FileZilla, naviger til `/slccmpt01/title/00000001`.
1. Gå til [denne siden](ios-folders) for å se hvilken mappe/ticket du må slette.
1. Slett tilsvarende mapper av iOSene du ønsker å gjenvinne.
1. Naviger til `/slccmpt01/ticket/00000001`.
1. Slett tilsvarende `.tik` filer for IOS'ene du vil gjenopprette.
1. Åpne opp et terminalvindu.
1. Skriv: `cd <directory>`.
 - På macOS er det vanligste stedet å finne nedlastede filer i `/Brukere/brukernavn/Nedlastninger`.
 - På Linux er det vanligste stedet å finne nedlastede filer i `/home/username/Downloads`.
1. Skriv: `python3 overwrite-wiiu-titlehash.py`.
1. Skriv inn Wii U konsollens IP-adresse og trykk Enter.
1. Vent til den er ferdig.
 - Hvis en `err.log` fil blir generert, vennligst gå til oss i **#wiiu-assistance** på [Nintendo Homebrew Discord](https://discord.gg/C29hYvh) kanalen og spør om hjelp på engelsk.
1. Gå ut av FTPiiU Everywhere og Homebrew Launcher.
1. Start System Innstillinger.
1. Utfør en [Systemoppdatering](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update).

?> Du kan nå reaktivere din [blokkeringsmetode mot systemoppdateringer](block-updates).

<!-- tabs:end -->