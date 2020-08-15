# vWii Modifiserings Guide
---
Denne siden vil hjelpe deg med å modifisere vWii.

Vi starter med å plassere Homebrew filene du trenger på SD-kortet ditt.

?> **Merk** SD-kortet ditt må formateres til FAT32. Hvis den ikke er formatert til FAT32, bør du bruke [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) med 32k (32768) "Allocation unit size" for å formatere den. Det anbefales at du ikke navngir SD kortet `wiiu` siden det kan forårsake problemer med noen apper.

### Dette Trenger Du {docsify-ignore}

- Siste utgave av [Wuphax](http://wiiubru.com/appstore/zips/wuphax.zip).
- Siste utgave av [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest).
- Siste utgave av [HackMii Installer](https://bootmii.org/download/).
- <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>.
- <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.
- [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/download/1.4/homebrew_launcher.v1.4.zip).
- Siste utgave av [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/download/v1.4/payload.zip).

### Instruksjoner {docsify-ignore}

1. Sett SD-kortet ditt i PC'en din.
1. Pakk ut `wuphax.zip` til roten av SD-kortet.
1. Pakk ut `boot.elf` fra <code>hackmii_<wbr>installer_<wbr>v1.2<wbr>.zip</code> til roten av SD-kortet.
1. Pakk ut `apps` mappen fra <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> til roten av SD-kortet.
1. Pakk ut <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> til roten av SD-kortet.
1. Pakk ut `nanddumper.zip` til roten av SD-kortet.
1. Pakk ut <code>homebrew_<wbr>launcher.<wbr>v1.4.zip</code> til roten av SD-kortet.
1. Pakk ut `payload.zip` til `wiiu` mappen på SD-kortet.
1. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.

### NAND Backup

Hvis noe går galt senere i prosessen og vWii "bricker", vil gjenoppretting av en NAND backup muligens fikse den.

1. Start [Homebrew Launcher](vwii/browser-exploit).
1. Kjør `Wii U NAND Dumper`.
1. Bruk D-padden for å sette opp følgende konfigurasjon:
 - Dump SLC: **optional**
 - Dump SLCCMPT: **yes**
 - Dump MLC: **optional**
 - Dump OTP: **yes**
 - Dump SEEPROM: **optional**
1. Trykk på A knappen for å starte dumpingprosessen.
1. Når prosessen er fullført, skru av Wii U konsollen, ta ut SD-kortet og sett den inn i PC-en din.
1. For å være sikker på at du ikke mister filene, kopier `slccmpt.bin`, `otp.bin` og hvis du velger å ta en full backup, `seeprom.bin`, `slc.bin`, og `alle mlc.bin.part` filene til pc'en din.
1. Slett filene fra SD-kortet for å frigjøre plass.
1. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.

### Wuphax

1. Start [Homebrew Launcher](vwii/browser-exploit).
1. Kjør Wuphax.
1. Trykk `A` for å lage en backup av "Mii Channel" så installer du Hackmii og venter til det står <code>Successfully <wbr>injected <wbr>wuphax!</code>.
 - Du vil bli sendt tilbake til Wii U menyen etter noen sekunder.
1. Start vWii (Wii meny ikonet).
1. Start vWii Mii Channel.
 - Hvis Wuphax ble installert riktig, vil du nå se en advarselskjerm om scamming.
1. Vent til du ser `Press 1 to continue` og trykk `1` knappen.
1. Trykk på `continue`, <code>Install <wbr>The <wbr>Homebrew <wbr>Channel</code> og `Yes, continue`.
1. Når Homebrew Channel har blitt installert, velger du `continue` og så `exit`.
1. Start Wii U Menu kanalen for å gå tilbake til Wii U menyen.
1. Start [Homebrew Launcher](vwii/browser-exploit).
1. Kjør Wuphax.
1. Trykk `B` for å gjenopprette "Mii Channel" og vent til det står <code>Mii <wbr>Channel <wbr>restored!</code>.
 - Du vil bli sendt tilbake til Wii U menyen etter noen sekunder.
 - Hvis du av en eller annen grunn ikke kan gjenopprette sikkerhetskopien, må du [reinstallere Mii Channel](recover-vwii-ioses-channels).

### Installerer cIOS'er

!> sørg for at du ikke har noen `.wad` filer noe annet sted enn i `apps` mappen på SD-kortet ditt.

?> **Tips: ** Du kan holde inne `B` knappen på GamePadden når du slår på Wii U konsollen for å starte opp direkte til vWii.

1. Slå på Wii U konsollen og start vWii.
1. Start Homebrew Channel.
1. Kjør d2x cIOS Installer.
1. Velg følgende instillinger:
 - Velg cIOS `v10 d2x-v10-beta52-vWii`
 - Velg cIOS base `56`
 - Velg cIOS slot `249`
1. Trykk på `A`-knappen for å installere dem.
1. Velg følgende instillinger:
 - Velg cIOS `v10 d2x-v10-beta52-vWii`
 - Velg cIOS base `57`
 - Velg cIOS slot `250`
1. Trykk på `A`-knappen for å installere dem.
1. Velg følgende instillinger:
 - Velg cIOS `v10 d2x-v10-beta52-vWii`
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
