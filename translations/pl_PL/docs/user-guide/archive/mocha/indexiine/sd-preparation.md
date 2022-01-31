# Archive - Mocha - Indexiine

!> **TA METODA NIE JEST JUŻ WSPIERANA**  
**AKTUALNA METODA JEST DOSTĘPNA [TUTAJ](../../../introduction)**

## Przygotowanie karty SD {docsify-ignore}

W tym punkcie umieścimy wymagane pliki CFW i dodatkowe pliki homebrew na karcie SD.

?> **Notice** Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it. **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

### What You Need {docsify-ignore}

- The Mocha <a href="docs/files/config.ini" download>config</a>.
- The latest release of [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest).
  - You will need to download the `payload.zip` file.
- The 1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4).
  - You will need to download the v1.4 `homebrew_launcher.v1.4.zip` release of The Homebrew Launcher.
- Najnowsze wydanie [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- Najnowsza wersja [Wii U NAND Dumper](https://wiiubru.com/appstore/zips/nanddumper.zip).
- The latest release of the [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest).
  - You will need to download the `wiiu-extracttosd.zip` file.
- The latest release of [Mocha](https://wiiubru.com/appstore/zips/mocha.zip).
- Najnowsza wersja <a href="docs/files/SaveMii_Mod.zip" download>SaveMii Mod</a>.
- The latest release of [Indexiine-Installer](https://github.com/GaryOderNichts/indexiine-installer/releases/latest).

### Instrukcje {docsify-ignore}

?> **Uwaga** Pliki info.json i manifest.install nie są potrzebne do procesu modyfikacji i dlatego mogą zostać usunięte.

1. Włóż kartę SD Wii U do komputera.
1. Skopiuj zawartość pliku `wup_installer_gx2.zi` do katalogu głównego karty SD.
1. Skopiuj zawartość pliku `nanddumper.zip` do katalogu głównego karty SD.
1. Skopiuj zawartość pliku `wiiu-extracttosd.zip` do katalogu głównego karty SD.
1. Skopiuj zawartość pliku `homebrew_launcher.v.1.4.zip` do katalogu głównego karty SD.
1. Copy the contents of the `mocha.zip` file to the root of your SD Card.
1. Copy the contents of the `indexiine-installer.zip` file to the root of your SD Card.
1. Skopiuj zawartość pliku `savemii_mod.zip` do katalogu głównego karty SD.
1. Copy the `config.ini` file to the `/wiiu/apps/mocha` folder on your SD Card.
1. Copy the `payload.elf` from the `payload.zip` to the `wiiu` folder on your SD Card.
----------

### SD Card Layout {docsify-ignore}

<details>
<summary>Click here to show the final SD Card layout.</summary>

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
