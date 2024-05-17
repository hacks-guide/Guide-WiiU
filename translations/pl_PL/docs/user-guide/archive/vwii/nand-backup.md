# vWii Modding Guide {docsify-ignore-all}

## Kopia zapasowa NAND

In case anything goes wrong in the later process and your vWii ends up bricked, restoring a previously made NAND backup can fix it, or you can completely [reinstall the vWii](http://wiiu.hacks.guide/#/recover-vwii-ioses-channels).

?> If you have recently made a NAND backup that includes SLCCMPT and OTP, feel free to skip this step.

1. Launch the [Wii U NAND Dumper](browser-exploit).
2. Użyj D-Pada na Wii U GamePad'zie, aby ustawić następującą konfigurację:
   - Dump SLC: **optional**
   - Dump SLCCMPT: **yes**
   - Dump MLC: **optional**
   - Dump OTP: **yes**
   - Dump SEEPROM: **optional**
3. Naciśnij przycisk A, aby rozpocząć proces zrzucania na kartę SD.
4. Po zakończeniu procesu, wyłącz Wii U, wyciągnij kartę SD z Wii U i podłącz ją do komputera.
5. To make sure you don't lose the files, copy the `slccmpt.bin` and `otp.bin` files (and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file) to your computer.
6. Usuń pliki z karty SD aby zwolnić miejsce.
7. Wyjmij kartę SD ze swojego komputera i podłącz ją do konsoli Wii U.
