# Aroma {docsify-ignore-all}

## Tworzenie kopii zapasowej NAND

W sytuacji, gdyby cokolwiek poszło nie tak w późniejszym procesie i Twoja Wii U zostanie uszkodzona, przywracanie poprzednio utworzonej kopii zapasowej NAND może ją naprawić.

### Instrukcje

?> The Wii U NAND is (depending on your model) either 8GB or 32GB. W związku z tym, aby utworzyć pełną kopię zapasową NAND Twojej konsoli, Twoja karta SD musi być większa niż rozmiar Twojego NAND. If you do not have a large enough SD Card, you can skip the optional `MLC` section which includes save files and game data and is not needed to recover most types of bricks.

?> Restoring a NAND Backup on the Wii U requires additional hardware and micro soldering skills. <br>However, making a NAND Backup is **always** useful, so please do not skip it. <br>Twoja kopia zapasowa NAND jest unikalna dla Twojego systemu. Backups from other consoles **won't** work.

1. Navigate to `nanddumper` using the GamePad and press A to launch it.
2. Użyj D-Pada na Wii U GamePad'zie, aby ustawić następującą konfigurację:
   - Dump SLC: **yes**
   - Dump SLCCMPT: **yes**
   - Dump MLC: **optional**
   - Dump OTP: **yes**
   - Dump SEEPROM: **yes**
3. Naciśnij przycisk A, aby rozpocząć proces zrzucania na kartę SD.
4. When the process is completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
5. To make sure you don't lose the files, copy the `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` and if you chose to go with a full backup, `every mlc.bin.part` file to your computer.
6. Usuń pliki z karty SD aby zwolnić miejsce.
