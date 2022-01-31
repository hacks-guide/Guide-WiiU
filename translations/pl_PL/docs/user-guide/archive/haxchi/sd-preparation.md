# Archiwum - Haxchi

!> **TA METODA NIE JEST JUŻ WSPIERANA**  
**AKTUALNA METODA JEST DOSTĘPNA [TUTAJ](../../introduction)**

## Przygotowanie karty SD {docsify-ignore}

W tym punkcie umieścimy wymagane pliki CFW i dodatkowe pliki homebrew na karcie SD.

?> **Uwaga** Twoje urządzenie SD będzie musiało być już sformatowane jako FAT32. Jeśli Twoja karta SD nie jest sformatowana do FAT32, użyj [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) z 32k (32768) jednostek alokacji, aby ją sformatować. **Nie** oznaczaj karty SD jako `wiiu` bo spowoduje to problemy z homebrew.

### Czego Potrzebujesz {docsify-ignore}

- Najnowsza wersja [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest).
  - Będziesz musiał pobrać plik `payload.zip`.
- Wersja 1.4 [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4).
  - Musisz pobrać wersję v1.4 `homebrew_launcher.v.1.4.zip`.
- Najnowsze wydanie [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- Najnowsza wersja [The Homebrew Launcher Channel](https://github.com/GaryOderNichts/homebrew_launcher/releases/tag/v2.1_fix).
  - Będziesz musiał pobrać plik `homebrew_launcher_channel.v2.1_fix.zip`.
- Najnowsza wersja [Wii U NAND Dumper](https://wiiubru.com/appstore/zips/nanddumper.zip).
- Najnowsza wersja [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest).
  - Musisz pobrać plik `wiiu-extracttosd.zip`.
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
1. Skopiuj `payload.elf` z `payload.zip` do folderu `wiiu` na karcie SD.
----------

### Układ karty SD {docsify-ignore}

<details>
<summary>Kliknij tutaj, aby wyświetlić końcowy układ plików na karcie SD.</summary>

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
   ┃ ┗ (Wszystkie inne aplikacje jak disc2app, nanddumper, etc. powinny być tu)
   ┗ 📜payload.elf
```

</details>
