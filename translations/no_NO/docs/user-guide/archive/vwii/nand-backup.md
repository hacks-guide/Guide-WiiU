# vWii Modifiserings Guide {docsify-ignore-all}

## NAND Backup

I tilfelle noe går galt og du ender opp med å bricke vWii, så kan du fikse det ved å restaurere en tidligere NAND backup, eller så kan du [installere hele vWii på nytt](http://wiiu.hacks.guide/#/recover-vwii-ioses-channels).

?> Hvis du nylig har laget en NAND sikkerhetskopi som inneholder SLCCMPT og OTP, kan du hoppe over dette trinnet.

1. Kjør [Wii U NAND Dumper](browser-exploit).
2. Bruk D-padden for å sette opp følgende konfigurasjon:
   - Dump SLC: **optional**
   - Dump SLCCMPT: **yes**
   - Dump MLC: **optional**
   - Dump OTP: **yes**
   - Dump SEEPROM: **optional**
3. Trykk på A knappen for å starte dumpingprosessen.
4. Når prosessen er fullført, skru av Wii U konsollen, ta ut SD-kortet og sett den inn i PC-en din.
5. For å være sikker på at du ikke mister filene, kopier `slccmpt.bin` og, `otp.bin`, (og hvis du velger å ta en full backup, `seeprom.bin`, `slc.bin`, og alle `mlc.bin.part` filene) til pc'en din.
6. Slett filene fra SD-kortet for å frigjøre plass.
7. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.
