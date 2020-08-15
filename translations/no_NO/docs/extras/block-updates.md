# Blokkere Systemoppdateringer
---
Alle Wii U exploits vi kjenner til i dag, i motsetning til for eksempel Nintendo Switch sin RCM exploit, kan bli patchet av en systemoppdatering. Selv om Wii U ikke lenger er offisielt støttet av Nintendo, kan de fortsatt plutselig komme med oppdateringer. For eksempel, firmware 5.5.3 og 5.5.4 ble begge utgitt etter at Nintendo kuttet support, så det er fortsatt anbefalt at man blokkerer systemoppdateringer.

### Instruksjoner {docsify-ignore}

For tiden finnes det to måter å blokkere systemoppdateringer på Wii U:
<!-- tabs:start -->

#### **Slette "Update" Mappen**

### Slette "Update" Mappen

?> Denne metoden for å blokkere systemoppdateringer er litt mer avansert enn DNS blokkering og bruker en homebrew app for å modifisere systemfiler. Men fordelen ved å bruke denne metoden er at man blandt annet kan bruke eShop som vanlig.
1. Sett SD-kortet inn i PC'en din.
1. Last ned og pakk ut [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases) til roten av SD-kortet ditt.
1. Sett SD-kortet inn i Wii U konsollen og skru den på.
1. Start Homebrew Launcher.
1. I Homebrew Launcher, kjør UFDiine appen.
1. Trykk A på gamepadden for å slette update mappen.
1. Bekreft at det står `Update folder is deleted`. Du blokkerer nå systemoppdateringer.

#### **DNS-blokkering**

### DNS-blokkering

?> Dette er den enkleste metoden og anbefales for de som er usikker på å slette "update" mappen. Den vil derimot gjøre sånn at eShop ikke fungerer normalt. Men hvis du bruker [NNUPatcher](http://www.wiiubru.com/appstore/zips/nnupatcher.zip) så vil du ha tilgang til eShop igjen.
1. Sett SD-kortet inn i PC'en.
1. Pakk ut `nnupatcher.zip` til roten av SD-kortet. Hvis den sier at filene er der allerede, kan du overskrive disse.
1. Sett SD-kortet inn i Wii U konsollen din og skru den på.
1. På Wii U konsollen, gå inn på systeminnstillinger og naviger til `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` og sett den til `Do not auto-obtain`.
1. Du vil bli bedt om å legge inn en primær og sekundær DNS. Oppgi følgende IP adresser:
 - Primary DNS: 168.235.092.108
 - Secondary DNS: 081.004.127.020 <img src="docs/assets/img/DNS.png" alt="DNS-blokkering" />
1. Klikk på "confirm".
1. Du blokkerer nå systemoppdateringer. Men for å få tilgang til eShop igjen, må du starte nnu-patcher appen fra Homebrew Launcher før du starter eShop.

<!-- tabs:end -->
