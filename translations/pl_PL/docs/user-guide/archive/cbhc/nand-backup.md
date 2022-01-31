# Archive - CBHC

!> **TA METODA NIE JEST JUŻ WSPIERANA**  
**AKTUALNA METODA JEST DOSTĘPNA [TUTAJ](../../introduction)**

## Making a NAND Backup {docsify-ignore}

In case anything should go wrong in the later process and your Wii U ends up bricked, restoring a previously made NAND backup can fix it.

### Instrukcje {docsify-ignore}

?> The Wii U NAND is (depending on your model) either 8GB or 32GB. As a result of this, to create a full backup of your console's NAND, your SD Card has to be larger than the size of your NAND. Jeśli nie masz wystarczająco dużej karty SD, możesz pominąć opcjonalną sekcję `MLC`, która zawiera zapisane pliki i dane gry i nie jest potrzebna do odzyskania w przypadku większości uszkodzeń.

?> Przywracanie kopii zapasowej NAND na Wii U wymaga dodatkowych umiejętności sprzętowych i mikrolutowniczych. <br>Jednak tworzenie kopii zapasowej NAND jest **zawsze** przydatne, więc nie pomijaj tego etapu. <br>Twoja kopia zapasowa NAND jest unikalna dla Twojego systemu. Kopie zapasowe z innych konsoli **nie będą** działać.

1. Przejdź do Homebrew Launcher i uruchom aplikację `Wii U NAND Dumper`.
1. Użyj D-Pada na Wii U GamePad'zie, aby ustawić następującą konfigurację:
    - Dump SLC: **yes**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **optional**
    - Dump OTP: **yes**
    - Dump SEEPROM: **yes**
1. Naciśnij przycisk A, aby rozpocząć proces zrzucania na kartę SD.
1. Po zakończeniu procesu, wyłącz Wii U, wyciągnij kartę SD z Wii U i podłącz ją do komputera.
1. Aby upewnić się, że nie utracisz plików, skopiuj `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` i jeśli zdecydowałeś się na pełną kopię zapasową, `również mlc.bin.part` na komputer.
1. Usuń pliki z karty SD aby zwolnić miejsce.