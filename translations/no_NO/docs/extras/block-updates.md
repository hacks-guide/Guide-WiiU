# Blokkere oppdateringer
---
Alle kjente Wii U exploits, i motsetning til for eksempel Nintendo Switch sin RCM exploit, kan bli ødelagt av en systemoppdatering. Selv om Wii U ikke lenger er offisielt støttet, kan Nintendo fortsatt komme med oppdateringer. For eksempel, oppdateringene 5.5.3 og 5.5.4 ble begge utgitt etter at Wii U ble avviklet, så det er fortsatt anbefalt at man blokkerer oppdateringene.

### Instruksjoner

For tiden finnes det to måter å blokkere oppdateringer på Wii U konsollen:
<!-- tabs:start -->

#### **Slette "update" mappen**
?> Selv om denne metoden er litt mer avansert enn DNS-blokkering og krever litt grunnleggende kunnskap om FTP-programmer, har det den fordelen at eShop fortsatt vil fungere normalt.

?> For å gjøre dette, må Wii U konsollen være på samme nettverk som datamaskinen din.
1. Sett SD-kortet inn i datamaskinen.
1. Last ned og pakk ut [ftpiiu_everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip) til roten av SD-kortet ditt.
1. Last ned en FTP-klient, for eksempel [FileZilla](https://filezilla-project.org/download.php?show_all=1).
1. Sett SD-kortet inn i Wii U konsollen og skru den på.
1. Start CFW (Mocha, Haxchi/CBHC) og gå inn i Homebrew Launcher.
1. I Homebrew Launcher, kjør ftpiiu_everywhere appen.
1. Noter IP-adressen på Wii U-skjermen.
1. På PC'en din starter du FTP-klienten din, og start en FTP-tilkobling til Wii U konsollen. I FileZilla kan dette gjøres under verktøylinja, men husk å erstatte IP-adressen med den som er vist på Wii U-skjermen: <br><img src="docs/assets/img/FTP.png" alt="FileZilla" />
1. Naviger til `/storage_mlc/sys`. Der skal det være en tom mappe kalt `update`.
1. Høyreklikk mappen og slett den.
1. Du blokkerer nå oppdateringer.

### **DNS-blokkering**
?> Denne metoden er den enklere metoden og anbefales for mindre avanserte brukere. Den vil derimot forhindre at eShop fungerer. Dette kan løses ved å kjøre [NNUPatcher](http://www.wiiubru.com/appstore/zips/nnupatcher.zip) før du starter eShop.
1. Sett SD-kortet inn i datamaskinen.
1. Pakk ut `nnupatcher.zip` til roten av SD-kortet. Hvis den klager på at filene er der fra før, kan du overskrive disse.
1. Sett SD-kortet inn i Wii U konsollen og skru den på.
1. På Wii U konsollen, gå inn på systeminnstillinger og naviger til `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` og sett den på `Do not auto-obtain `.
1. Du vil bli bedt om å legge inn en primær og sekundær DNS. Oppgi følgende IP adresser:
 - Primary DNS: 168.235.092.108
 - Secondary DNS: 081.004.127.020 <img src="docs/assets/img/DNS.png" alt="DNS-blokkering" />
1. Klikk på "confirm"
1. Du blokkerer nå oppdateringer. For å få tilgang til eShop igjen, må du starte nnu-patcher appen fra Homebrew Launcher før du starter eShop


<!-- tabs:end -->