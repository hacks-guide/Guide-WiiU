# vWii Modding Guide {docsify-ignore-all}

## NAND Backup

In case anything goes wrong in the later process and your vWii ends up bricked, restoring a previously made NAND backup can fix it, or you can completely [reinstall the vWii](http://wiiu.hacks.guide/#/recover-vwii-ioses-channels).

?> If you have recently made a NAND backup that includes SLCCMPT and OTP, feel free to skip this step.

1. Launch the [Wii U NAND Dumper](browser-exploit).
2. Bruk D-padden for å sette opp følgende konfigurasjon:
   - Dump SLC: **optional**
   - Dump SLCCMPT: **yes**
   - Dump MLC: **optional**
   - Dump OTP: **yes**
   - Dump SEEPROM: **optional**
3. Trykk på A knappen for å starte dumpingprosessen.
4. Når prosessen er fullført, skru av Wii U konsollen, ta ut SD-kortet og sett den inn i PC-en din.
5. To make sure you don't lose the files, copy the `slccmpt.bin` and `otp.bin` files (and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file) to your computer.
6. Slett filene fra SD-kortet for å frigjøre plass.
7. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.
