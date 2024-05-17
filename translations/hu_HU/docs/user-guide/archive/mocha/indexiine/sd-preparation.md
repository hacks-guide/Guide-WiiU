# Archive - Mocha - Indexiine

!> **THIS METHOD IS NO LONGER SUPPORTED**  
**CURRENT METHOD IS AVAILABLE [HERE](../../../introduction)**

## SD kártya előkészítés {docsify-ignore}

A szükséges CFW fájlokat és néhány további homebrew fájlt rakunk majd az SD kártyára.

> **Fontos** Az SD kártyád FAT32-re kell legyen formázva. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it. **Ne** cimkézd az SD kártyát `wiiu`-nak, különben problémát okoz a homebrew-nak.

### Amire szükséged van {docsify-ignore}

- The Mocha <a href="docs/files/config.ini" download>config</a>.
- A [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest) legutolsó kiadása.
  - A `payload.zip` fájlt kell letöltened.
- A [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4) 1.4-es kiadása.
  - A The Homebrew Launcher v1.4 kiadását, a `homebrew_launcher.v1.4.zip` fájlt kell letöltened.
- A [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip) legutolsó kiadása.
- A [Wii U NAND Dumper](https://wiiubru.com/appstore/zips/nanddumper.zip) legutolsó kiadása.
- A [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest) legutolsó kiadása.
  - A `wiiu-extracttosd.zip` fájlt kell letöltened.
- The latest release of [Mocha](https://wiiubru.com/appstore/zips/mocha.zip).
- A legutolsó kiadása a <a href="docs/files/SaveMii_Mod.zip" download>SaveMii Mod</a>-nak.
- The latest release of [Indexiine-Installer](https://github.com/GaryOderNichts/indexiine-installer/releases/latest).

### Lépések {docsify-ignore}

?> **Megjegyzés** Az info.json és a manifest.install fájlok nem szükségesek a moddolási folyamathoz, így törölhetők.

1. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
1. Másold a `wup_installer_gx2.zip` fájl tartalmát az SD kártyád gyökerébe.
1. Másold a `nanddumper.zip` fájl tartalmát az SD kártyád gyökerébe.
1. Másold a `wiiu-extracttosd.zip` fájl tartalmát az SD kártyád gyökerébe.
1. Másold a `homebrew_launcher.v.1.4.zip` fájl tartalmát az SD kártyád gyökerébe.
1. Copy the contents of the `mocha.zip` file to the root of your SD Card.
1. Copy the contents of the `indexiine-installer.zip` file to the root of your SD Card.
1. Másold a `savemii_mod.zip` fájl tartalmát az SD kártyád gyökerébe.
1. Copy the `config.ini` file to the `/wiiu/apps/mocha` folder on your SD Card.
1. Másold a `payload.elf` fájlt a `payload.zip` fájlból a `wiiu` mappába az SD kártyádon.
----------

### SD kártya kiosztás

<details>
<summary>Kattints ide a végső SD kártya kiosztás megtekintéséhez.</summary>

```
💾sd:
 ┗ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📂homebrew_launcher
   ┃ ┃ ┣ 📜homebrew_launcher.elf
   ┃ ┃ ┣ 📜icon.png
   ┃ ┃ ┗ 📜meta.xml
   ┃ ┗ (All other apps like disc2app, nanddumper, etc. should be here too)
   ┗ 📜payload.elf
```

</details>
