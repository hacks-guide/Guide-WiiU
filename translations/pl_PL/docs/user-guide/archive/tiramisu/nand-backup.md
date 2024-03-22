# Tiramisu {docsify-ignore-all}

## Tworzenie kopii zapasowej NAND

W sytuacji, gdyby cokolwiek poszło nie tak w późniejszym procesie i Twoja Wii U zostanie uszkodzona, przywracanie poprzednio utworzonej kopii zapasowej NAND może ją naprawić.

### Instrukcje

?> Wii U NAND w zależności od modelu ma pojemność 8GB albo 32GB. W związku z tym, aby utworzyć pełną kopię zapasową NAND Twojej konsoli, Twoja karta SD musi być większa niż rozmiar Twojego NAND. Jeśli nie masz wystarczająco dużej karty SD, możesz pominąć opcjonalną sekcję `MLC`, która zawiera zapisane pliki i dane gry i nie jest potrzebna do odzyskania w przypadku większości uszkodzeń.

?> Przywracanie kopii zapasowej NAND na Wii U wymaga dodatkowych umiejętności sprzętowych i mikrolutowniczych. <br>Jednak tworzenie kopii zapasowej NAND jest **zawsze** przydatne, więc nie pomijaj tego etapu. <br>Twoja kopia zapasowa NAND jest unikalna dla Twojego systemu. Kopie zapasowe z innych konsoli **nie będą** działać.

1. Przejdź do `nanddumper` za pomocą GamePad i naciśnij A, aby go uruchomić.
1. Użyj D-Pada na Wii U GamePad'zie, aby ustawić następującą konfigurację:
    - Dump SLC: **yes**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **optional**
    - Dump OTP: **yes**
    - Dump SEEPROM: **yes**
1. Naciśnij przycisk A, aby rozpocząć proces zrzucania na kartę SD.
1. When the process is completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
1. The files will appear on the root of the SD card.
1. To make sure you don't lose the files, copy the `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` (and if you chose to go with a full backup, `every mlc.bin.part`) file to your computer.
1. Usuń pliki z karty SD aby zwolnić miejsce.

?> **Jeśli PayloadLoader jest już zainstalowany w aplikacji Health and Safety Information i uruchamia się przy starcie automatycznie, nie musisz kontynuwać dalej.**
