# Blokkere Systemoppdateringer
---
Alle Wii U exploits vi kjenner til i dag, i motsetning til for eksempel Nintendo Switch sin RCM exploit, kan bli patchet av en systemoppdatering. Selv om Wii U ikke lenger er offisielt støttet av Nintendo, kan de fortsatt plutselig komme med oppdateringer. For eksempel, firmware 5.5.3 og 5.5.4 ble begge utgitt etter at Nintendo kuttet support, så det er fortsatt anbefalt at man blokkerer systemoppdateringer.

### Instruksjoner

For tiden finnes det to måter å blokkere systemoppdateringer på Wii U:
<!-- tabs:start -->

#### **Slette "Update" Mappen**
?> Denne metoden er litt mer avansert enn DNS-blokkering og krever litt grunnleggende kunnskap om FTP-programmer, men når det er satt opp så kan fortsatt eShop brukes som normalt.

?> For å gjøre dette, må Wii U konsollen være på samme nettverk som PC'en din.
1. Sett SD-kortet inn i PC'en din.
1. Last ned og pakk ut [ftpiiu_everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip) til roten av SD-kortet ditt.
1. Last ned en FTP-klient, som for eksempel [FileZilla](https://filezilla-project.org/download.php?show_all=1).
1. Sett SD-kortet inn i Wii U konsollen og skru den på.
1. Start CFW (Mocha, Haxchi/CBHC) og start opp Homebrew Launcher.
1. I Homebrew Launcher, kjør ftpiiu_everywhere appen.
1. Noter IP-adressen på Wii U-skjermen.
1. På PC'en din starter du FTP-klienten din, og start en FTP-tilkobling til Wii U konsollen. I FileZilla skriver du bare IP-adressen fra Wii U'en inn i "Host" vindu under verktøylinja og trykker "Quickconnect": <br><img src="docs/assets/img/FTP.png" alt="FileZilla" />
1. Naviger til `/storage_mlc/sys`. Der skal det være en tom mappe som heter `update`.
1. Høyreklikk mappen og slett den.
1. Du blokkerer nå systemoppdateringer.

### **DNS-blokkering**
?> Dette er den enkleste metoden og anbefales for de som er usikker på å slette "update" mappen. Den vil derimot forhindre at eShop fungerer. Men hvis du bruker [NNUPatcher](http://www.wiiubru.com/appstore/zips/nnupatcher.zip) så vil du ha tilgang til eShop igjen.
1. Sett SD-kortet inn i PC'en.
1. Pakk ut `nnupatcher.zip` til roten av SD-kortet. Hvis den sier at filene er der allerede, kan du overskrive disse.
1. Sett SD-kortet inn i Wii U konsollen din og skru den på.
1. På Wii U konsollen, gå inn på systeminnstillinger og naviger til `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` og sett den til `Do not auto-obtain`.
1. Du vil bli bedt om å legge inn en primær og sekundær DNS. Oppgi følgende IP adresser:
 - Primary DNS: 168.235.092.108
 - Secondary DNS: 081.004.127.020 <img src="docs/assets/img/DNS.png" alt="DNS-blokkering" />
1. Klikk på "confirm"
1. Du blokkerer nå systemoppdateringer. Men for å få tilgang til eShop igjen, må du starte nnu-patcher appen fra Homebrew Launcher før du starter eShop


<!-- tabs:end -->