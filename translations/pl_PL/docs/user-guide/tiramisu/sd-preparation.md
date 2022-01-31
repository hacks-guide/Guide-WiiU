# Tiramisu {docsify-ignore-all}

## Przygotowanie karty SD

Teraz umieścimy wymagane pliki CFW i dodatkowe pliki homebrew na karcie SD.

?> **Uwaga** Twoja karta SD będzie musiała być już sformatowana jako FAT32. Jeśli Twoja karta SD nie jest sformatowana do FAT32, użyj [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) z ustawieniem 32k (32768) jednostek alokacji aby ją sformatować. **Nie** oznaczaj karty SD jako `wiiu` bo spowoduje to problemy z homebrew.

?> **Jeśli masz już jakąś inną istniejącą konfigurację CFW** </br> Dla **użytkowników CBHC**: przejdź do strony [Odinstaluj CBHC](../uninstall-cbhc) aby odinstalować CBHC. </br> Dla **użytkowników Haxchi**: odinstaluj aplikację Haxchi z z poziomu Data Management w System Settings. </br> Dla użytkowników **Mocha CFW (Indexiine)**: przejdź do strony [Odinstaluj Indexiine](../uninstall-indexiine) aby odinstalować Indexiine. </br> Dla użytkowników **Mocha CFW (Online Exploit)**: nie musisz nic usuwać.

### Czego potrzebujesz

- Najnowsze pliki z [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Wybierz `Nanddumper`, `PayloadLoader Installer` i `Base-Tiramisu`.
- Plik [01_sigpatches.rpx](/docs/files/01_sigpatches.rpx ":ignore").

### Instrukcje

1. Włóż kartę SD Wii U do komputera.
1. Skopiuj zawartość nowo pobranego pliku Tiramisu *`.zip`* do katalogu głównego karty SD.
1. Skopiuj plik `01_sigpatches.rpx` do `/wiiu/environments/tiramisu/modules/setup` na karcie SD.

?> Jeśli twój komputer poprosi Cię o nadpisanie istniejących plików na karcie SD, musisz kliknąć Tak.
