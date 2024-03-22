# Aroma {docsify-ignore-all}

## Lage en sikkerhetskopi av NAND

Hvis noe går galt senere i prosessen og Wii U konsollen "bricker", vil gjenoppretting av en NAND backup muligens fikse den.

### Instruksjoner

?> The Wii U NAND is (depending on your model) either 8GB or 32GB. På grunn av dette så må du bruke ett SD-kort som er større enn NAND størrelsen. If you do not have a large enough SD Card, you can skip the optional `MLC` section which includes save files and game data and is not needed to recover most types of bricks.

?> Restoring a NAND Backup on the Wii U requires additional hardware and micro soldering skills. <br>However, making a NAND Backup is **always** useful, so please do not skip it. <br>NAND backupen din er unik for ditt system. Backups from other consoles **won't** work.

1. Navigate to `nanddumper` using the GamePad and press A to launch it.
2. Bruk D-padden for å sette opp følgende konfigurasjon:
   - Dump SLC: **yes**
   - Dump SLCCMPT: **yes**
   - Dump MLC: **optional**
   - Dump OTP: **yes**
   - Dump SEEPROM: **yes**
3. Trykk på A knappen for å starte dumpingprosessen.
4. When the process is completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
5. To make sure you don't lose the files, copy the `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` and if you chose to go with a full backup, `every mlc.bin.part` file to your computer.
6. Slett filene fra SD-kortet for å frigjøre plass.
