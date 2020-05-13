# Fjerne blokkering av oppdateringer
---
Dette må du gjøre hvis du noen gang trenger en systemoppdatering.

### Instruksjoner

<!-- tabs:start -->

#### **Gjenopprette "update" mappen**

?> For å gjøre dette, må Wii U konsollen være på samme nettverk som PC'en din.
1. Sett SD-kortet inn i PC'en din.
1. Last ned og pakk ut [ftpiiu_everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip) til roten av SD-kortet ditt.
1. Last ned en FTP-klient, som for eksempel [FileZilla](https://filezilla-project.org/download.php?show_all=1).
1. Sett SD-kortet inn i Wii U konsollen og skru den på.
1. Start CFW (Mocha, Haxchi/CBHC) og start opp Homebrew Launcher.
1. I Homebrew Launcher, kjør ftpiiu_everywhere appen.
1. Noter IP-adressen på Wii U-skjermen.
1. På PC'en din starter du FTP-klienten din, og start en FTP-tilkobling til Wii U konsollen. I FileZilla skriver du bare IP-adressen fra Wii U'en inn i "Host" vindu under verktøylinja og trykker "Quickconnect": <br><img src="docs/assets/img/FTP.png" alt="FileZilla" />
1. Naviger til `/storage_mlc/sys`.
1. Opprett en mappe med navn `update`.
1. Du blokkerer ikke lenger systemoppdateringer.

### **Fjerne DNS-blokkeringen**

1. På Wii U konsollen, gå inn på systeminnstillinger og naviger til `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` og sett den på `Auto-obtain `.
1. Du blokkerer ikke lenger systemoppdateringer.

<!-- tabs:end -->