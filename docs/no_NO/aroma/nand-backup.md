---
prev: true
next: true
---

# Lage en sikkerhetskopi av NAND

Hvis noe går galt senere i prosessen og Wii U konsollen "bricker", vil gjenoppretting av en NAND backup muligens fikse den.

## Instruksjoner

::: tip

The Wii U MLC is (depending on your model) either 8GB or 32GB. På grunn av dette så må du bruke ett SD-kort som er større enn størrelsen på MLC. Hvis SD-kortet ditt ikke er stort nok, så kan du hoppe over `MLC` delen hvor spilldata og saves er lagret, den er ikke nødvendig for å gjenopprette bricke-tilfeller.

:::

::: tip

Restoring a NAND Backup on the Wii U requires ISFShax or additional hardware and microsoldering skills.

However, making a NAND Backup is **always** useful, so please do not skip it.

Your NAND Backup is unique to your system. Backups fra andre konsoller **vil ikke** virke uten nødvendig kunnskap.

:::

1. Naviger til `nanddumper` ved å bruke GamePaden og trykk A for å kjøre den.
2. Use the Wii U GamePad's D-Pad to enter the following configuration:
   ![SLC: Yes, SLCCMPT: Yes, MLC: Yes or No, OTP: Yes, SEEPROM: Yes](/assets/img/guide/NAND.png)
   - MLC er **VALGFRITT**, hvis du ikke vil dumpe det, la det stå på `No`. Hvis du vil dumpe det, så må SD-kortet ha plass nok til det og så trykke på `Yes`.
3. Trykk på A knappen for å starte dumpingprosessen.
4. Når prosessen er fullført, skru av Wii U konsollen, ta ut SD-kortet og sett den inn i PC-en din.
5. For å forsikre deg om at du ikke mister filene, kopier `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` (og hvis du valgte å gå for full sikkerhetskopi, `hver mlc.bin.part` fil) til ett trygt sted (som Dokumenter, Google drive, OneDrive, osv.) på pc'en din.
   - Filene havner på roten av SD-kortet.
6. Slett filene fra SD-kortet etter du har kopiert dem for å frigjøre plass.
