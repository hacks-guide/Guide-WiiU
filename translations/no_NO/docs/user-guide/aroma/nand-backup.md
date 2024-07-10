# Aroma {docsify-ignore-all}

## Lage en sikkerhetskopi av NAND

Hvis noe går galt senere i prosessen og Wii U konsollen "bricker", vil gjenoppretting av en NAND backup muligens fikse den.

### Instruksjoner

?> The Wii U MLC is (depending on your model) either 8GB or 32GB. As a result of this, to create a full backup of your console's NAND, your SD Card has to be larger than the size of your MLC. If you do not have a large enough SD Card, you can skip the optional `MLC` section which includes save files and game data and is not needed to recover any type of brick.

?> Restoring a NAND Backup on the Wii U requires ISFShax or additional hardware and microsoldering skills. <br>Men å lage en NAND backup er **alltid** lurt, så du burde ikke hoppe over det. <br>NAND backupen din er unik for ditt system. Backups from other consoles **won't** work without the required knowledge.

1. Naviger til `nanddumper` ved å bruke GamePaden og trykk A for å kjøre den.
2. Use the Wii U GamePad's D-Pad to enter the following configuration:
   ![SLC: Yes, SLCCMPT: Yes, MLC: Yes or No, OTP: Yes, SEEPROM: Yes](../docs/assets/img/guide/NAND.png)
   - MLC is **OPTIONAL**, if you do not want to dump it, leave it on `No`. If you do want to dump it, make sure you have a SD Card big enough for it and put it on `Yes`.
3. Trykk på A knappen for å starte dumpingprosessen.
4. Når prosessen er fullført, skru av Wii U konsollen, ta ut SD-kortet og sett den inn i PC-en din.
5. To make sure you don't lose the files, copy the `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` (and if you chose to go with a full backup, `every mlc.bin.part` file) to somewhere safe (Documents, Google Drive, OneDrive, etc.) on your computer.
   - They will appear on the root of the SD Card.
6. Delete the files you just copied from your SD Card to free up space.
