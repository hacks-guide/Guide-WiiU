# CBHC

## Forberede SD-kortet {docsify-ignore}

Her vil vi plassere de nødvendige CFW-filene og noen ekstra homebrew filer på SD-kortet.

?> **Merk** SD-kortet ditt må formateres til FAT32. Hvis den ikke er formatert til FAT32, bør du bruke [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) med 32k (32768) "Allocation unit size" for å formatere den. Det anbefales at du ikke navngir SD kortet `wiiu` eller `cbhc` siden det kan forårsake problemer med noen apper.

### Dette Trenger Du {docsify-ignore}

- Siste utgave av [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest).
  - Du må laste ned `payload.zip` filen.
- [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4) Versjon 1.4.
  - Du må laste ned `homebrew_launcher.v.1.4.zip`.
- Siste utgave av [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- Siste utgave av [Homebrew Launcher Channel](https://github.com/GaryOderNichts/homebrew_launcher/releases/tag/v2.1_fix).
  - Du må laste ned `homebrew_launcher_channel.v2.1_fix.zip` filen.
- Siste utgave av [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest).
- Siste utgave av [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest).
  - Du må laste ned `wiiu-extracttosd.zip` filen.
- Siste utgave av [Haxchi](https://www.wiiubru.com/appstore/zips/haxchi.zip).
- Siste utgave av [CBHC](https://www.wiiubru.com/appstore/zips/cbhc.zip).
- Siste utgave av <a href="docs/files/SaveMii_Mod.zip" download>SaveMii Mod</a>.

### Instruksjoner {docsify-ignore}

?> **Merk** info.json og manifest.Install filene er ikke nødvendig for modifiseringsprosessen og kan slettes.

1. Sett SD-kortet ditt i PC'en din.
1. Opprett en mappe med navnet `install` på roten av SD-kortet.
1. Pakk ut `homebrew_launcher_channel.v2.1_fix.zip` til `install` mappen.
1. Pakk ut `haxchi.zip` til roten av SD-kortet.
1. Pakk ut `cbhc.zip` til roten av SD-kortet.
1. Pakk ut `wup_installer_gx2.zip` til roten av SD-kortet.
1. Pakk ut `nanddumper.zip` til roten av SD-kortet.
1. Pakk ut `wiiu-extracttosd.zip` til roten av SD-kortet.
1. Pakk ut `homebrew_launcher.v.1.4.zip` til roten av SD-kortet.
1. Pakk ut `savemii_mod.zip` til roten av SD-kortet.
1. Kopier `payload.elf` fila fra `payload.zip` til `wiiu` mappen på SD-kortet.