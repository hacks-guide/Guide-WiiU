# Blokkere Systemoppdateringer
---
Alle Wii U exploits vi kjenner til i dag, i motsetning til for eksempel Nintendo Switch sin RCM exploit, kan bli patchet av en systemoppdatering. Selv om Wii U ikke lenger er offisielt støttet av Nintendo, kan de fortsatt plutselig komme med oppdateringer. For eksempel, firmware 5.5.3, 5.5.4 og 5.5.5 ble alle utgitt etter at Nintendo kuttet support, så det er fortsatt anbefalt at man blokkerer systemoppdateringer.

### Instruksjoner {docsify-ignore}

Currently, three ways exist to block updates on the Wii U system:
<!-- tabs:start -->

#### **Tiramisu Autoboot**

### Tiramisu Autoboot

?> When autobooting into the the PayloadLoader, updates are automatically blocked. To enable autobooting into the PayloadLoader follow [this](../docs/user-guide/tiramisu/autoboot).

#### **Deleting Update Folder**

### Deleting Update Folder

?> This method of update blocking is a bit more advanced than DNS Blocking and uses a homebrew app to modify system files. However, it has the advantage that the eShop's functionality will not be restricted.
1. Sett SD-kortet inn i PC'en din.
1. Last ned og pakk ut [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases) til roten av SD-kortet ditt.
1. Sett SD-kortet inn i Wii U konsollen og skru den på.
1. Start Homebrew Launcher.
1. I Homebrew Launcher, kjør UFDiine appen.
1. Trykk A på gamepadden for å slette update mappen.
1. Bekreft at det står `Update folder is deleted`. Du blokkerer nå systemoppdateringer.

#### **DNS Blocking**

### DNS Blocking

?> This method is the easier method and is recommended to less advanced users. It does, however, prevent the eShop from working. This can be worked around by running [NNUPatcher](https://wiiubru.com/appstore/zips/nnupatcher.zip) before starting the eShop.
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
