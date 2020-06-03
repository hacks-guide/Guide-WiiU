# Dumpe Wii Spill Fra Disk
---
Dumping av Wii diskene dine lar deg spille dem på en Wii-emulator (Dolphin), spille dem fra en USB/SD loader som for eksempel Wiiflow, lage Virtual Console Injects som kan installeres på en Wii U formatert USB-lagringsenhet eller NAND, eller kjøres fra Wii U-menyen.

?> Dumping av Wii spill krever et fungerende Homebrew oppsett på vWii, så fullfør [vWii Modifiserings guiden](vwii-modding) på forhånd.

### Dette trenger du

1. Siste utgave av [CleanRip](https://github.com/emukidid/cleanrip/releases/download/2.1.1/CleanRip-v2.1.1.zip)
1. Filen [wii.dat](https://github.com/emukidid/cleanrip/releases/download/2.1.1/wii.dat)

### Instruksjoner

1. Sett SD-kortet ditt i PC'en din
1. Kopier `apps` mappen fra `CleanRip-v2.1.1.zip` til roten av SD-kortet
1. Kopier `wii.dat` til roten av SD-kortet
1. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.

### Dumpe Wii Disken

1. Turn on your Wii U then choose the Wii Menu icon to boot up in vWii.
1. Launch the Homebrew Channel.
1. Launch CleanRip.
1. Read the Disclaimer then press A.
1. Select Yes to enable Checksum Calculations.
1. Select either USB or Front SD depending on which device you want to use for the dumping process.
 - Please note that the device you will choose needs to be formatted either in FAT32 or NTFS.
1. Press A to continue.
1. Select No on the screen that asks you to download redump.org DAT files.
1. Insert your disc then press A.
1. Go [on this page](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) to see if your disc is dual-layered.
1. Velg følgende instillinger:
 - Dual Layer `Yes/No` (Velg `Yes` hvis Wii disken din er dual-layered)
 - Chunk Size `Max`
 - New device per chunk `No`
1. Dersom du ønsker å dumpe flere Wii disker, velg "Yes" for å huske innstillingene dine. Hvis ikke, velg "No".

?> Vær forberedt på å vente en stund. Dumpeprosessen kan ta rundt 30 til 60 minutter avhengig av hastigheten på SD-kortet ditt.

### Slå sammen Split Filer

?> Hvis du dumpet Wii disken på en FAT32-formatert enhet, så burde du ha fått minst 2 filer som ender med `.partX.iso`. De må slåes sammen.

1. Copy all the files that share the same name and end with `.partX.iso` in a folder on your computer.
1. Open up a Command Prompt window.
1. Use the `cd <path>` command and replace `<path>` by the path to your `.partX.iso` files.
1. Use the following command as is: `copy /b *.part?.iso game.iso`.