# vWii Modifiserings Guide
---
Denne siden vil hjelpe deg med å modifisere vWii.

Vi starter med å plassere Homebrew filene du trenger på SD-kortet ditt.

?> **Merk** SD-kortet ditt må formateres til FAT32. Hvis den ikke er formatert til FAT32, bør du bruke [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) med 32k (32768) "Allocation unit size" for å formatere den. **Ikke** sett navnet på SD kortet til `wiiu`, det vil skape problemer med noen homebrew apper.

?> Hvis du har hacket Wii U'en din tidligere, kan du bruke det samme SD-kortet i denne prosessen.



### Dette Trenger Du {docsify-ignore}

- The latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Select `Nanddumper` and `Base-Tiramisu`.
- The latest release of the [vwii-compat-installer](https://github.com/TheLordScruffy/vwii-compat-installer/releases).
- <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>.
- <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.

### Instruksjoner {docsify-ignore}

1. Sett SD-kortet ditt i PC'en din.
1. Pakk ut `apps` mappen fra <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> til roten av SD kortet.
1. Pakk ut <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> til roten av SD-kortet.
1. Copy the contents of the newly downloaded `files.zip` file to the root of your SD Card.
1. Copy the `compat_installer.elf` file to the `wiiu/apps` folder on the root of your SD Card.
1. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.

### NAND Backup

Hvis noe går galt senere i prosessen og vWii "bricker", vil gjenoppretting av en NAND backup muligens fikse den.

?> Hvis du nylig har laget en NAND sikkerhetskopi som inneholder SLCCMPT og OTP, kan du hoppe over dette trinnet.

1. Launch the [Wii U NAND Dumper](vwii/browser-exploit).
1. Bruk D-padden for å sette opp følgende konfigurasjon:
    - Dump SLC: **optional**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **optional**
    - Dump OTP: **yes**
    - Dump SEEPROM: **optional**
1. Trykk på A knappen for å starte dumpingprosessen.
1. Når prosessen er fullført, skru av Wii U konsollen, ta ut SD-kortet og sett den inn i PC-en din.
1. To make sure you don't lose the files, copy the `slccmpt.bin`, `otp.bin` and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file to your computer.
1. Slett filene fra SD-kortet for å frigjøre plass.
1. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.

### Installere Homebrew Channel

1. Start [Homebrew Launcher](vwii/browser-exploit).
1. Start compat_installer.
1. Trykk `A` for å installere Homebrew Channel og vent til du ser `Install succeeded`. Så trykker du HOME-knappen for å gå tilbake til Wii U menyen.
1. Start vWii (Wii meny ikonet).
   - Hvis installasjonen ble ferdig, bør du se Homebrew Channel kanalen i Wii Menyen.

### Installerer cIOS'er

!> sørg for at du ikke har noen `.wad` filer noe annet sted enn i `apps` mappen på SD-kortet ditt.

?> **Tips: ** Du kan holde inne `B` knappen på GamePadden når du slår på Wii U konsollen for å starte opp direkte til vWii.

1. Slå på Wii U konsollen og start vWii.
1. Start Homebrew Channel.
1. Kjør d2x cIOS Installer.
1. Velg følgende instillinger:
    - Velg cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Velg cIOS base `56`
    - Velg cIOS slot `249`
1. Trykk på `A`-knappen for å installere dem.
1. Velg følgende instillinger:
    - Velg cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Velg cIOS base `57`
    - Velg cIOS slot `250`
1. Trykk på `A`-knappen for å installere dem.
1. Velg følgende instillinger:
    - Velg cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Velg cIOS base `58`
    - Velg cIOS slot `251`
1. Trykk på `A`-knappen for å installere dem.
1. Trykk på `B`-knappen for å avslutte.

### Patche IOS 80

!> Hvis Wii U konsollen din slår seg av mens du patcher IOS 80, vil vWii bli "bricket". Dette kan du fikse ved å enten pakke ut IOS 80 fila fra NAND backupen din og erstatte den over FTP, eller ved å [reinstalle IOS 80](recover-vwii-ioses-channels) på nytt.

1. Kjør Patched IOS 80 Installer for vWii.
1. Les advarselen og vent 30 sekunder.
1. Trykk en knapp for å installere.
1. Vent til det står <code>IOS80 <wbr>Installaton <wbr>is <wbr>complete!</code>.
1. Trykk en knapp for å avslutte.

!> Det er stor sjangse for å bricke vWii hvis man installerer en custom System Menu og du bør alltid ha en backup av systemet før du prøver å installerer en, men hvis du installerer det riktig så vil det ikke være noen risiko.

!> Installering av IOS (inkludert TED IOS'er) eller wads formattert for den originale Wii'en vil "bricke vWii'en din.

!> Installere Priiloader vil bricke vWii.
