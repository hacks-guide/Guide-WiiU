# Zrzucanie Zawartości Płyt z Grami Wii
---
Zrzucanie zawartości płyt z grami pozwala na: granie na emulatorze Wii (mianowicie Dolphin), odtwarzanie ich przy użyciu aplikacji Homebrew dla Wii takich jak np. Wiiflow, instalowanie ich bezpośrednio na Wii U na sformatowanym dysku USB Wii U lub w pamięci NAND i uruchomione z menu Wii U.

?> Dumping Wii games requires a working homebrew setup on vWii, so make sure to finish the [vWii Modding guide](vwii/sd-preparation) beforehand.

!> **NIELEGALNE** jest udostępnianie plików zrzuconych za pomocą tego poradnika.  
Jeśli zamierzasz użyć tego poradnika do dzielenia się twoimi zrzuconymi grami, nie rób tego.

### Czego Potrzebujesz {docsify-ignore}

1. Najnowsza wersja [CleanRip](https://github.com/emukidid/cleanrip/releases/download/2.1.1/CleanRip-v2.1.1.zip).
1. Plik [wii.dat](https://github.com/emukidid/cleanrip/releases/download/2.1.1/wii.dat).

### Instrukcje {docsify-ignore}

1. Włóż kartę SD Wii U do komputera.
1. Skopiuj folder `apps` z pliku `CleanRip-v2.1.1.zip` do katalogu głównego Twojej karty SD.
1. Skopiuj plik `wii.dat` do katalogu głównego karty SD.
1. Wyjmij kartę SD ze swojego komputera i podłącz ją do konsoli Wii U.

### Zrzucanie Zawartości Płyt z Grami Wii

1. Włącz Wii U, następnie wybierz ikonę Wii Menu do uruchomienia vWii.
1. Uruchom kanał Homebrew.
1. Uruchom CleanRip.
1. Przeczytaj zastrzeżenie, a następnie naciśnij przycisk A.
1. Wybierz "Yes", aby włączyć Checksum Calculations.
1. Wybierz USB lub SD w zależności od urządzenia, którego chcesz użyć do procesu zrzucania.
    - Please note that the device you choose needs to be formatted either in FAT32 or NTFS.
1. Naciśnij A, aby kontynuować.
1. Zaznacz "No" na ekranie, który prosi Cię o pobranie plików redump.org DAT.
1. Włóż płytę, a następnie naciśnij przycisk A.
1. Wejdź [na tą stronę](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games), aby sprawdzić, czy twoja płytka jest dwuwarstwowa.
1. Ustaw wszystko tak jak poniżej:
    - Dual Layer: `Yes/No` (Select `Yes` jeżeli twoja płyta jest dwuwarstwowa)
    - Chunk Size: `Max`
    - New device per chunk: `No`
1. Jeśli chcesz zrzucić więcej płyt, wybierz Yes, aby zapamiętać swoje ustawienia. Jeśli nie, wybierz "No".

?> Przygotuj się na chwilę oczekiwania. Proces zrzucania może potrwać od 30 minut do 1 godziny w zależności od prędkości twojej karty SD.

### Łączenie Podzielonych Plików

?> If you dumped the disc on a FAT32 formatted device, you should've got at least 2 files that end with `.partX.iso`. Należy je połączyć.

#### Windows {docsify-ignore}

1. Skopiuj wszystkie pliki, które mają tę samą nazwę i kończą się na `.partX.iso` do jednego folderu na komputerze.
1. Right-click inside the folder while holding Shift and select `Open PowerShell Window Here`.
1. In the PowerShell window, run the following command as is: `cmd.exe /c "copy /b *.part?.iso game.iso"`.

#### macOS/Linux {docsify-ignore}

1. Skopiuj wszystkie pliki, które mają tę samą nazwę i kończą się na `.partX.iso` do jednego folderu na komputerze.
1. Otwórz terminal.
1. Użyj polecenia `cd <path>` i zastąp `<path>` ścieżką do plików `.partX.iso`.
1. Użyj następnie polecenia: `cat *.part?.iso > game.iso`.
