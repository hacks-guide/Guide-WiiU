# Blokkere Systemoppdateringer
---
Alle Wii U exploits vi kjenner til i dag, i motsetning til for eksempel Nintendo Switch sin RCM exploit, kan bli patchet av en systemoppdatering. Selv om Wii U ikke lenger er offisielt støttet av Nintendo, kan de fortsatt plutselig komme med oppdateringer. For eksempel, firmware 5.5.3 til 5.5.6 ble alle utgitt etter at Nintendo kuttet support, så det er fortsatt anbefalt at man blokkerer systemoppdateringer.

While Aromas's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. If you get a red warning screen while booting into Aroma, the update folder still exists and it is recommended to delete it using the guide below.

### Instruksjoner {docsify-ignore}

For tiden finnes det en måte å blokkere systemoppdateringer på Wii U:

1. Sett SD-kortet inn i PC'en din.
1. Download [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/) and copy the `UFDiine.wuhb` file to `sd:/wiiu/apps` on the root of your SD Card.
1. Plug the SD Card into your Wii U console and boot Aroma.
1. Navigate the Wii U Menu and run the UFDiine app.
1. Trykk A på gamepadden for å slette update mappen.
1. Bekreft at det står `Update folder is deleted`.
1. Exit UFDiine. Du blokkerer nå systemoppdateringer.
