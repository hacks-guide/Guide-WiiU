#Poradnik Modyfikacji vWii
---
Ta strona poprowadzi Cię przez proces modyfikacji Twojego vWii.

Teraz umieścimy wymagane pliki Homebrew na karcie SD.

?> **Uwaga** Twoja karta SD będzie musiała być już sformatowana jako FAT32. Jeśli Twoja karta SD nie jest sformatowana do FAT32, użyj [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) z ustawieniem 32k (32768) jednostek alokacji aby ją sformatować. **Nie** oznaczaj karty SD jako `wiiu` bo spowoduje to problemy z homebrew.

?> Jeśli hakowałeś Wii U w przeszłości, możesz użyć tej samej karty SD w tym procesie.



### Czego Potrzebujesz {docsify-ignore}

- Najnowsze pliki z [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Click on `Download Tiramisu`.
- Najnowsza wersja [vwii-compat-installer-](https://github.com/TheLordScruffy/vwii-compat-installer/releases).
- The <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>. ([Source](https://github.com/Lazr1026/Patched-IOS80-Installer-for-vWii))
- Instalator <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS</a>.

### Instrukcje {docsify-ignore}

1. Włóż kartę SD Wii U do komputera.
1. Skopiuj folder `apps` z pliku <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> do katalogu głównego karty SD.
1. Skopiuj zawartość pliku <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> do katalogu głównego karty SD.
1. Skopiuj zawartość pobranego pliku Tiramisu *`.zip`* do katalogu głównego karty SD.
1. Skopiuj plik `compat_installer.elf` do folderu `wiiu/apps` w katalogu głównym karty SD.
1. Wyjmij kartę SD ze swojego komputera i podłącz ją do konsoli Wii U.

### Kopia zapasowa NAND

W sytuacji, gdyby cokolwiek poszło nie tak w późniejszym procesie i twoja Wii U zostanie uszkodzona, przywracanie poprzednio utworzonej kopii zapasowej NAND może ją naprawić.

?> Jeśli ostatnio wykonałeś kopię zapasową NAND zawierającą SLCCMPT i OTP, możesz pominąć ten krok.

1. Uruchom [Wii U NAND Dumper](vwii/browser-exploit).
1. Użyj D-Pada na Wii U GamePad'zie, aby ustawić następującą konfigurację:
    - Dump SLC: **optional**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **optional**
    - Dump OTP: **yes**
    - Dump SEEPROM: **optional**
1. Naciśnij przycisk A, aby rozpocząć proces zrzucania na kartę SD.
1. Po zakończeniu procesu, wyłącz Wii U, wyciągnij kartę SD z Wii U i podłącz ją do komputera.
1. Aby upewnić się, że nie utracisz plików, skopiuj `slccmpt.bin`, `otp.bin` i jeśli zdecydowałeś się na pełną kopię zapasową, `seeprom.bin`, `slc.bin`i `każdy plik mlc.bin.part` na twój komputer.
1. Usuń pliki z karty SD aby zwolnić miejsce.
1. Wyjmij kartę SD ze swojego komputera i podłącz ją do konsoli Wii U.

### Instalacja kanału Homebrew

1. Uruchom [Tiramisu](vwii/browser-exploit).
1. Uruchom Homebrew Launcher, otwierając Mii Maker.
1. Uruchom compat_installer.
1. Naciśnij `A`, aby zainstalować Kanał Homebrew i poczekaj aż zobaczysz komunikat `Install succeeded`. Następnie naciśnij przycisk HOME, aby powrócić do menu Wii U.
1. Uruchom vWii (ikonę Wii Menu).
   - Jeśli instalacja zakończyła się sukcesem, powinieneś zobaczyć Kanał Homebrew w Wii Menu.

### Instalacja cIOS

!> Upewnij się, że nie masz żadnych plików `.wad` gdziekolwiek indziej niż w folderze `aplikacji` na karcie SD.

1. Włącz Wii U i uruchom vWii.
1. Uruchom Kanał Homebrew Channel.
1. Uruchom instalator d2x cIOS.
1. Ustaw wszystko tak jak poniżej:
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `56`
    - Select cIOS slot: `249`
1. Naciśnij przycisk `A`, aby zainstalować.
1. Ustaw wszystko tak jak poniżej:
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `57`
    - Select cIOS slot: `250`
1. Naciśnij przycisk `A`, aby zainstalować.
1. Ustaw wszystko tak jak poniżej:
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
1. Naciśnij przycisk `A`, aby zainstalować.
1. Naciśnij przycisk `B`, aby wyjść.

### Patch'owanie IOS 80

!> If for any reason, the Wii U is turned off while patching IOS 80, your vWii will be bricked. This can be fixed by either extracting the IOS 80 from your previously made NAND backup and then replacing it over FTP or by [reinstalling IOS 80](recover-vwii-ioses-channels).

1. Uruchom spatch'owany instalator IOS 80 dla vWii.
1. Przeczytaj ekran z ostrzeżeniem i poczekaj 30 sekund.
1. Naciśnij dowolny przycisk, aby zainstalować.
1. Poczekaj aż pojawi się komunikat <code>IOS80 <wbr>Installation <wbr>is <wbr>complete!</code>.
1. Naciśnij dowolne przyciski, aby wyjść.

!> Installing custom System Menu is a definite brick risk and you should always have an effective backup before installing one but when done right, won't brick the vWii.

!> Installing any IOS (including TED IOSes) or wads made for the original Wii on your vWii will brick it.

!> Installing Priiloader will brick your vWii.
