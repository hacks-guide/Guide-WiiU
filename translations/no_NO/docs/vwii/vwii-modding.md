# vWii Modifiserings Guide
---
Denne siden vil hjelpe deg med å modifisere vWii.

Vi starter med å plassere Homebrew filene du trenger på SD-kortet ditt.

?> **Merk** SD-kortet ditt må formateres til FAT32. Hvis den ikke er formatert til FAT32, bør du bruke [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) med 32k (32768) "Allocation unit size" for å formatere den.

### What You Need {docsify-ignore}

- The latest release of [Wuphax](http://wiiubru.com/appstore/zips/wuphax.zip).
- The latest release of [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest).
- The latest release of [HackMii Installer](https://bootmii.org/download/).
- The <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>.
- The <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.
- The [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/download/1.4/homebrew_launcher.v1.4.zip).
- The latest release of the [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/download/v1.4/payload.zip).

### Instructions {docsify-ignore}

1. Sett SD-kortet ditt i PC'en din.
1. Pakk ut `wuphax.zip` til roten av SD-kortet.
1. Pakk ut `boot.elf` fra <code>hackmii_<wbr>installer_<wbr>v1.2<wbr>.zip</code> til roten av SD-kortet.
1. Pakk ut `apps` mappen fra <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> til roten av SD kortet.
1. Extract the <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> file to the root of your SD Card.
1. Pakk ut <code>homebrew_<wbr>launcher.<wbr>v1.4.zip</code> til roten av SD-kortet.
1. Pakk ut `payload.zip` til `wiiu` mappen på SD-kortet.
1. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.

### NAND Backup

Hvis noe går galt senere i prosessen og vWii "bricker", vil gjenoppretting av en NAND backup muligens fikse den.

1. Start [Homebrew Launcher](vwii/browser-exploit).
1. Launch the `Wii U NAND Dumper` application.
1. Use the Wii U GamePad's D-Pad to enter the following configuration:
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

### Wuphax

1. Start [Homebrew Launcher](vwii/browser-exploit).
1. Launch Wuphax.
1. Press `A` to backup the Mii Channel and inject the Hackmii Installer then wait until it says <code>Successfully <wbr>injected <wbr>wuphax!</code>.
 - You will be taken back to the Wii U Menu after a few seconds.
1. Launch vWii (the Wii Menu icon).
1. Launch the vWii Mii Channel.
 - If Wuphax has successfully been injected, you will now see the scam warning screen.
1. Wait until you see `Press 1 to continue` and then press the `1` button.
1. Select `continue`, <code>Install <wbr>The <wbr>Homebrew <wbr>Channel</code> and `Yes, continue`.
1. If The Homebrew Channel has successfully been installed, select `continue` and then `exit`.
1. Launch the Wii U Menu channel to return to the Wii U Menu.
1. Start [Homebrew Launcher](vwii/browser-exploit).
1. Launch Wuphax.
1. Press `B` to restore the Mii Channel then wait until it says <code>Mii <wbr>Channel <wbr>restored!</code>.
 - You will be taken back to the Wii U Menu after a few seconds.
 - If for some reason, you cannot restore your backup, you will need to [reinstall your Mii Channel](recover-vwii-ioses-channels).

### Installerer cIOS'er

!> sørg for at du ikke har noen `.wad` filer noe annet sted enn i `apps` mappen på SD-kortet ditt.

?> **Tips: ** Du kan holde inne `B` knappen på GamePadden når du slår på Wii U konsollen for å starte opp direkte til vWii.

1. Slå på Wii U konsollen og start vWii.
1. Start Homebrew Channel.
1. Kjør d2x cIOS Installer.
1. Velg følgende instillinger:
 - Select cIOS: `v10 d2x-v10-beta52-vWii`
 - Select cIOS base: `56`
 - Select cIOS slot: `249`
1. Trykk på `A`-knappen for å installere dem.
1. Velg følgende instillinger:
 - Select cIOS: `v10 d2x-v10-beta52-vWii`
 - Select cIOS base: `57`
 - Select cIOS slot: `250`
1. Trykk på `A`-knappen for å installere dem.
1. Velg følgende instillinger:
 - Select cIOS: `v10 d2x-v10-beta52-vWii`
 - Select cIOS base: `58`
 - Select cIOS slot: `251`
1. Trykk på `A`-knappen for å installere dem.
1. Trykk på `B`-knappen for å avslutte.

### Patche IOS 80

!> Hvis Wii U konsollen din slår seg av mens du patcher IOS 80, vil vWii bli "bricket". This can be fixed by either extracting the IOS 80 from your previously made NAND backup and then replacing it over FTP or by [reinstalling IOS 80](recover-vwii-ioses-channels).

1. Kjør Patched IOS 80 Installer for vWii.
1. Les advarselen og vent 30 sekunder.
1. Trykk en knapp for å installere.
1. Vent til det står <code>IOS80 <wbr>Installaton <wbr>is <wbr>complete!</code>.
1. Trykk en knapp for å avslutte.

!> Det er stor sjangse for å bricke vWii hvis man installerer en custom System Menu og du bør alltid ha en backup av systemet før du prøver å installerer en, men hvis du installerer det riktig så vil det ikke være noen risiko.

!> Installering av IOS (inkludert TED IOS'er) eller wads formattert for den originale Wii'en vil "bricke vWii'en din.

!> Installere Priiloader vil bricke vWii.