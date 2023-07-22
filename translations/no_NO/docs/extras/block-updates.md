# Blokkere Systemoppdateringer
---
Alle Wii U exploits vi kjenner til i dag, i motsetning til for eksempel Nintendo Switch sin RCM exploit, kan bli patchet av en systemoppdatering. Selv om Wii U ikke lenger er offisielt støttet av Nintendo, kan de fortsatt plutselig komme med oppdateringer. For eksempel, firmware 5.5.3 til 5.5.6 ble alle utgitt etter at Nintendo kuttet support, så det er fortsatt anbefalt at man blokkerer systemoppdateringer.

Selv om Tiramisu's PayloadLoader allerede har en update block funksjon, så er det anbefalt å slette update mappen for være sikker på at systemet ikke oppdateres automatisk. Hvis du får ett rødt advarselvindu mens du starter opp i Tiramisu, så betyr det at update mappen fortsatt er i systemet og det er anbefalt å slette den med en av disse metodene.

### Instruksjoner {docsify-ignore}

For tiden finnes det en måte å blokkere systemoppdateringer på Wii U:

1. Sett SD-kortet inn i PC'en din.
1. Last ned og pakk ut innholdet i [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/tag/v1.1) til roten av SD-kortet ditt.
1. Sett SD-kortet inn i Wii U konsollen og boot Tiramisu.
1. Start Homebrew Launcher.
1. I Homebrew Launcher, kjør UFDiine appen.
1. Trykk A på gamepadden for å slette update mappen.
1. Bekreft at det står `Update folder is deleted`.
1. Slå av konsollen. Du blokkerer nå systemoppdateringer.
