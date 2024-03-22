# Tiramisu {docsify-ignore-all}

## Lage en sikkerhetskopi av NAND

Hvis noe går galt senere i prosessen og Wii U konsollen "bricker", vil gjenoppretting av en NAND backup muligens fikse den.

### Instruksjoner

?> Størrelsen på Wii U NAND er (avhengig av modellen) enten 8gb eller 32gb. På grunn av dette så må du bruke ett SD-kort som er større enn NAND størrelsen. Hvis SD-kortet ditt ikke er stort nok, så kan du hoppe over `MLC` delen hvor spilldata og saves er lagret, den er ikke nødvendig for å gjenopprette de fleste bricke-tilfellene.

?> Å gjenopprette en NAND backup på Wii U konsollen krever litt kunskap om maskinvare og loddeferdigheter av mikro elektronikk. <br>Men å lage en NAND backup er **alltid** lurt, så du burde ikke hoppe over det. <br>NAND backupen din er unik for ditt system. backups fra andre konsoller vil **ikke** fungere.

1. Naviger til `nanddumper` ved å bruke GamePaden og trykk A for å kjøre den.
1. Bruk D-padden for å sette opp følgende konfigurasjon:
    - Dump SLC: **yes**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **optional**
    - Dump OTP: **yes**
    - Dump SEEPROM: **yes**
1. Trykk på A knappen for å starte dumpingprosessen.
1. When the process is completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
1. Filene vil vises på roten av SD-kortet.
1. For å forsikre deg om at du ikke mister filene, kopier `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp. ` (og hvis du valgte å gå for full sikkerhetskopi, `hver mlc.bin.part`) til PC'en din.
1. Slett filene fra SD-kortet for å frigjøre plass.

?> **Hvis PayloadLoader allerede er installert over Health and Safety Information appen og konsollen din allerede autobooter det, trenger du ikke følge denne guiden mer.**
