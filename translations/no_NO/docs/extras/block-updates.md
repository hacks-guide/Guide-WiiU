# Blokkere Systemoppdateringer
---
Alle Wii U exploits vi kjenner til i dag, i motsetning til for eksempel Nintendo Switch sin RCM exploit, kan bli patchet av en systemoppdatering. Selv om Wii U ikke lenger er offisielt støttet av Nintendo, kan de fortsatt plutselig komme med oppdateringer. For eksempel, firmware 5.5.3 til 5.5.6 ble alle utgitt etter at Nintendo kuttet support, så det er fortsatt anbefalt at man blokkerer systemoppdateringer.

While Tiramisu's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. Hvis du får ett rødt advarselvindu mens du starter opp i Tiramisu, så betyr det at update mappen fortsatt er i systemet og det er anbefalt å slette den med en av disse metodene.

### Instruksjoner {docsify-ignore}

Currently, one way exists to effectively block updates on the Wii U system:

1. Sett SD-kortet inn i PC'en din.
1. Download and extract the contents of [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/tag/v1.1) to the root of your SD Card.
1. Plug the SD Card into your Wii U console and boot Tiramisu.
1. Start Homebrew Launcher.
1. I Homebrew Launcher, kjør UFDiine appen.
1. Trykk A på gamepadden for å slette update mappen.
1. Confirm that it says `Update folder is deleted`.
1. Power off the console. You are now blocking updates.
