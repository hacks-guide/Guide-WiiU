# Dumping Wii Discs
---
Dumping av Wii diskene dine lar deg spille dem på en Wii-emulator (Dolphin), spille dem fra en USB/SD loader som for eksempel Wiiflow, lage Virtual Console Injects som kan installeres på en Wii U formatert USB-lagringsenhet eller NAND, eller kjøres fra Wii U-menyen.

?> Dumping Wii games require a working homebrew setup on vWii, so make sure to finish the [vWii Modding guide](vwii-modding) beforehand.

### What You Need {docsify-ignore}

1. The latest release of [CleanRip](https://github.com/emukidid/cleanrip/releases/download/2.1.1/CleanRip-v2.1.1.zip).
1. The [wii.dat](https://github.com/emukidid/cleanrip/releases/download/2.1.1/wii.dat) file.

### Instructions {docsify-ignore}

1. Insert your Wii U's SD Card into your computer.
1. Copy the `apps` folder from the `CleanRip-v2.1.1.zip` file to the root of your SD Card.
1. Copy the `wii.dat` file to the root of your SD Card.
1. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.

### Dumpe Wii Disken

1. Slå på Wii U konsollen og velg Wii menu ikonet for å starte opp vWii.
1. Start Homebrew Channel.
1. Kjør CleanRip.
1. Les ansvarsfraskrivelsen og trykk A.
1. Velg "Yes" for å aktivere Checksum kalkulasjoner.
1. Velg enten USB eller SD-kort avhengig av hvilken enhet du vil bruke for dumpeprosessen.
 - Merk at enheten du velger må være formatert som FAT32 eller NTFS.
1. Trykk A for å fortsette.
1. Velg "No" i vinduet som ber deg laste ned redump.org DAT-filer.
1. Sett inn Wii disken din og trykk A.
1. Gå til [denne siden](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) for å se om Wii disken din er dual-layered.
1. Velg følgende instillinger:
 - Dual Layer: `Yes/No` (Select `Yes` if your game's disc is dual-layered)
 - Chunk Size: `Max`
 - New device per chunk: `No`
1. Dersom du ønsker å dumpe flere Wii disker, velg "Yes" for å huske innstillingene dine. Hvis ikke, velg "No".

?> Vær forberedt på å vente en stund. Dumpeprosessen kan ta rundt 30 til 60 minutter avhengig av hastigheten på SD-kortet ditt.

### Slå sammen Split Filer

?> Hvis du dumpet Wii disken på en FAT32-formatert enhet, så burde du ha fått minst 2 filer som ender med `.partX.iso`. De må slåes sammen.

1. Kopier alle filene som deler samme navn og slutter med `.partX.iso` i en mappe på PC'en din.
1. Åpne opp et Command Prompt vindu.
1. Skriv `cd <path>` og erstatt `<path>` med adressen til `.partX.iso` filene.
1. Skriv `copy /b *.part?.iso game.iso`.