# Mocha - Indexiine

## Forberede SD-kortet {docsify-ignore}

Her vil vi plassere de nødvendige CFW-filene og noen ekstra homebrew filer på SD-kortet.

?> **Merk** SD-kortet ditt må formateres til FAT32. Hvis den ikke er formatert til FAT32, bør du bruke [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) med 32k (32768) "Allocation unit size" for å formatere den. It is advised that you do not label the SD Card as `wiiu` as it may cause issues with some applications.

### What You Need {docsify-ignore}

- The Mocha <a href="docs/files/config.ini" download>config</a>.
- The latest release of [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest).
  - Du må laste ned `payload.zip` filen.
- The 1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4).
  - You will need to download the v1.4 `homebrew_launcher.v1.4.zip` release of The Homebrew Launcher.
- The latest release of [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- The latest release of [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest).
- The latest release of the [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest).
  - Du må laste ned `wiiu-extracttosd.zip` filen.
- The latest release of [Mocha](https://www.wiiubru.com/appstore/zips/mocha.zip).
- The latest release of <a href="docs/files/SaveMii_Mod.zip" download>SaveMii Mod</a>.
- The latest release of [Indexiine-Installer](https://github.com/GaryOderNichts/indexiine-installer/releases/latest).

### Instructions {docsify-ignore}

?> **Merk** info.json og manifest.Install filene er ikke nødvendig for modifiseringsprosessen og kan slettes.

1. Sett SD-kortet ditt i PC'en din.
1. Copy the contents of the `wup_installer_gx2.zip` file to the root of your SD Card.
1. Copy the contents of the `nanddumper.zip` file to the root of your SD Card.
1. Copy the contents of the `wiiu-extracttosd.zip` file to the root of your SD Card.
1. Copy the contents of the `homebrew_launcher.v.1.4.zip` file to the root of your SD Card.
1. Copy the contents of the `mocha.zip` file to the root of your SD Card.
1. Copy the contents of the `indexiine-installer.zip` file to the root of your SD Card.
1. Copy the contents of the `savemii_mod.zip` file to the root of your SD Card.
1. Kopier `config.ini` fila til `/wiiu/apps/mocha` mappen på SD-kortet.
1. Kopier `payload.elf` fila fra `payload.zip` til `wiiu` mappen på SD kortet.
