# Archive - Haxchi

!> **TA METODA NIE JEST JUŻ WSPIERANA**  
**AKTUALNA METODA JEST DOSTĘPNA [TUTAJ](../../introduction)**

## Przygotowanie karty SD {docsify-ignore}

W tym punkcie umieścimy wymagane pliki CFW i dodatkowe pliki homebrew na karcie SD.

?> **Notice** Your SD Card will need to be formatted as FAT32. Jeśli Twoja karta SD nie jest sformatowana do FAT32, użyj [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) z 32k (32768) jednostek przydziału aby ją sformatować. **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

### What You Need {docsify-ignore}

- The latest release of [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest).
  - You will need to download the `payload.zip` file.
- The 1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4).
  - You will need to download the v1.4 `homebrew_launcher.v1.4.zip` release of The Homebrew Launcher.
- Najnowsze wydanie [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- The latest release of [The Homebrew Launcher Channel](https://github.com/GaryOderNichts/homebrew_launcher/releases/tag/v2.1_fix).
  - Będziesz musiał pobrać plik `homebrew_launcher_channel.v2.1_fix.zip`.
- Najnowsza wersja [Wii U NAND Dumper](https://wiiubru.com/appstore/zips/nanddumper.zip).
- The latest release of the [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest).
  - You will need to download the `wiiu-extracttosd.zip` file.
- Najnowsza wersja [Haxchi](https://wiiubru.com/appstore/zips/haxchi.zip).
- Najnowsza wersja <a href="docs/files/SaveMii_Mod.zip" download>SaveMii Mod</a>.

### Instrukcje {docsify-ignore}

?> **Uwaga** Pliki info.json i manifest.install nie są potrzebne do procesu modyfikacji i dlatego mogą zostać usunięte.

1. Włóż kartę SD Wii U do komputera.
1. Utwórz folder o nazwie `install` w katalogu głównym karty SD.
1. Skopiuj zawartość pliku `homebrew_launcher_channel.v2.1_fix.zip` do folderu `install`.
1. Skopiuj zawartość pliku `haxchi.zip` do katalogu głównego karty SD.
1. Skopiuj zawartość pliku `wup_installer_gx2.zi` do katalogu głównego karty SD.
1. Skopiuj zawartość pliku `nanddumper.zip` do katalogu głównego karty SD.
1. Skopiuj zawartość pliku `wiiu-extracttosd.zip` do katalogu głównego karty SD.
1. Skopiuj zawartość pliku `homebrew_launcher.v.1.4.zip` do katalogu głównego karty SD.
1. Skopiuj zawartość pliku `savemii_mod.zip` do katalogu głównego karty SD.
1. Copy the `payload.elf` from the `payload.zip` to the `wiiu` folder on your SD Card.
----------

### SD Card Layout {docsify-ignore}

<details>
<summary>Click here to show the final SD Card layout.</summary>

```
💾sd:
 ┣ 📂haxchi
 ┃ ┣ 📜bootDrcTex.tga
 ┃ ┣ 📜bootTvTex.tga
 ┃ ┣ 📜config.txt
 ┃ ┣ 📜iconTex.tga
 ┃ ┗ 📜title.txt
 ┣ 📂install
 ┃ ┗ 📂Homebrew Launcher Channel
 ┃   ┣ 📜00000000.app
 ┃   ┣ 📜00000003.h3
 ┃   ┣ ...
 ┃   ┣ 📜title.cert
 ┃   ┣ 📜title.tik
 ┃   ┗ 📜title.tmd
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
