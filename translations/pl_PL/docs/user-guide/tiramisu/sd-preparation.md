# Tiramisu {docsify-ignore-all}

## Przygotowanie karty SD

Teraz umieścimy wymagane pliki CFW i dodatkowe pliki homebrew na karcie SD.

?> **Uwaga** Twoja karta SD będzie musiała być już sformatowana jako FAT32. Jeśli Twoja karta SD nie jest sformatowana do FAT32, użyj [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) z ustawieniem 32k (32768) jednostek alokacji aby ją sformatować. **Nie** oznaczaj karty SD jako `wiiu` bo spowoduje to problemy z homebrew.

?> **Jeśli masz już jakąś inną istniejącą konfigurację CFW** </br> Dla **użytkowników CBHC**: przejdź do strony [Odinstaluj CBHC](../uninstall-cbhc) aby odinstalować CBHC. </br> Dla **użytkowników Haxchi**: odinstaluj aplikację Haxchi z z poziomu Data Management w System Settings. </br> Dla użytkowników **Mocha CFW (Indexiine)**: przejdź do strony [Odinstaluj Indexiine](../uninstall-indexiine) aby odinstalować Indexiine. </br> Dla użytkowników **Mocha CFW (Online Exploit)**: nie musisz nic usuwać.

### Czego potrzebujesz

- Najnowsze pliki z [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Click on `Download Tiramisu`.
- The latest release of the [Sigpatches Module](https://github.com/marco-calautti/SigpatchesModuleWiiU/releases).
    - You will need to download the `01_sigpatches.rpx` file.

### Instrukcje

1. Włóż kartę SD Wii U do komputera.
1. **Extract** and copy the contents of the newly downloaded Tiramisu *`.zip`* file to the root of your SD Card.
1. Skopiuj plik `01_sigpatches.rpx` do `/wiiu/environments/tiramisu/modules/setup` na karcie SD.

?> If your computer asks you to overwrite existing files on your SD Card, you will need to click yes.

   If you're using a Mac, you have to select `Merge` instead of replace.

----------

### Układ karty SD {docsify-ignore}

<details>
<summary>Kliknij tutaj, aby wyświetlić końcowy układ plików na karcie SD.</summary>

```
💾sd:
 ┣ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📂homebrew_launcher
   ┃ ┃ ┣ 📜homebrew_launcher.elf
   ┃ ┃ ┣ 📜icon.png
   ┃ ┃ ┗ 📜meta.xml
   ┃ ┣ 📜PayloadLoaderInstaller.wuhb
   ┃ ┗ (All other apps should be here too)
   ┣ 📂environments
   ┃ ┣ 📂installer
   ┃ ┃ ┗ 📂modules
   ┃ ┃   ┗ 📂setup
   ┃ ┃     ┣ 📜00_mocha.rpx
   ┃ ┃     ┗ 📜90_launch_installer.rpx
   ┃ ┗ 📂tiramisu
   ┃   ┣ 📂modules
   ┃   ┃ ┗ 📂setup
   ┃   ┃   ┣ 📜00_mocha.rpx
   ┃   ┃   ┣ 📜01_sigpatches.rpx
   ┃   ┃   ┣ 📜50_hbl_installer.rpx
   ┃   ┃   ┗ 📜99_autoboot.rpx
   ┃   ┗ 📜root.rpx
   ┣ 📂payloads
   ┃ ┣ 📂default
   ┃ ┃ ┗ 📜payload.elf
   ┃ ┣ 📂fw_img_loader 
   ┃ ┃ ┗ 📜payload.elf
   ┃ ┗ 📂nanddumper
   ┃   ┗ 📜payload.elf
   ┣ 📜payload.rpx
   ┗ 📜payload.elf
 ┗ 📜versions.json
```

</details>
