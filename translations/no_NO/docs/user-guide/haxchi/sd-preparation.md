# Haxchi

## Forberede SD-kortet {docsify-ignore}

Her vil vi plassere de nødvendige CFW-filene og noen ekstra homebrew filer på SD-kortet.

?> **Merk** SD-kortet ditt må formateres til FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) with 32k (32768) allocation unit size to format it.

### What You Need {docsify-ignore}

- Haxchi <a href="docs/files/config.txt" download>config</a> fila
- The latest release of [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest).
  - Du må laste ned `payload.zip` filen.
- The 1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4).
  - You will need to download the v1.4 `homebrew_launcher.v1.4.zip` release of The Homebrew Launcher.
- The latest release of [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- The latest release of [The Homebrew Launcher Channel](https://github.com/GaryOderNichts/homebrew_launcher/releases/tag/v2.1_fix).
  - Du må laste ned `homebrew_launcher_channel.v2.1_fix.zip` filen.
- The latest release of [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest).
- The latest release of the [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest).
  - Du må laste ned `wiiu-extracttosd.zip` filen.
- The latest release of [Haxchi](https://github.com/FIX94/haxchi/releases/latest).
  - Du må laste ned `Haxchi.zip`-filen.
- The latest release of <a href="docs/files/SaveMii_Mod.zip" download>SaveMii Mod</a>.

### Instructions {docsify-ignore}

?> **Merk** info.json og manifest.Install filene er ikke nødvendig for modifiseringsprosessen og kan slettes.

1. Sett SD-kortet ditt i PC'en din.
1. Opprett en mappe med navnet `install` på roten av SD-kortet.
1. Pakk ut `homebrew_launcher_channel.v2.1_fix.zip` til `install` mappen.
1. Pakk ut `Haxchi.zip` til roten av SD-kortet.
1. Pakk ut `wup_installer_gx2.zip` til roten av SD-kortet.
1. Pakk ut `nanddumper.zip` til roten av SD-kortet.
1. Pakk ut `wiiu-extracttosd.zip` til roten av SD-kortet.
1. Pakk ut `homebrew_launcher.v.1.4.zip` til roten av SD-kortet.
1. Pakk ut `savemii_mod.zip` til roten av SD-kortet.
1. Kopier `config.txt` fila til `haxchi` mappen i roten av SD-kortet. Overskriv filene hvis du blir spurt.
1. Kopier `payload.elf` fila fra `payload.zip` til `wiiu` mappen på SD-kortet.