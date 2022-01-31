# Zrzucanie Zawartości Płyt Wii U
---
Zrzucanie zawartości twoich płyt pozwala na zainstalowanie kopii gry w pamięci NAND/USB, dzięki czemu możesz grać bez potrzeby wkładania płyty.

?> Zrzucanie i instalacja gier wymaga działającej konfiguracji Homebrew, więc upewnij się, że ukończyłeś główny poradnik na temat instalacji CFW zanim przejdziesz dalej.

!> **NIELEGALNE** jest udostępnianie plików zrzuconych za pomocą tego poradnika.  
Jeśli zamierzasz użyć tego przewodnika do dzielenia się twoimi zrzuconymi grami, nie rób tego.

### Instrukcje {docsify-ignore}

<!-- tabs:start -->

#### **Zainstaluj do NAND**

### Zainstaluj do NAND

?> Instalacja gry w pamięci systemowej (NAND) nie jest zalecana, ponieważ jest ona ograniczona do 8GB lub 32GB w zależności od modelu, co sprawia, że miejsce na gry skończy się bardzo szybko.

### Czego Potrzebujesz {docsify-ignore}

- Karta SD z odpowiednią ilością miejsca na gry, które będziesz zrzucał.
- Najnowsze wydanie [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- Aplikacja homebrew [disc2app](https://wiiubru.com/appstore/zips/disc2app.zip).

### Instrukcje {docsify-ignore}

1. Skopiuj zawartość pliku `wup_installer_gx2.zi` do katalogu głównego karty SD.
1. Skopiuj zawartość pliku `disc2app.zip` do katalogu głównego karty SD.
1. Wyciągnij kartę SD ze swojego komputera i podłącz ją do Wii U.
1. Włącz Wii U.
1. Wyjmij płytę z grą z czytnika, jeżeli masz jakąkolwiek włożoną.
1. Uruchom Homebrew Launcher i uruchom aplikację disc2App.
1. Naciśnij przycisk A, aby rozpocząć proces zrzucania na kartę SD.
1. Kiedy zostaniesz o to poproszony, włóż dysk z grą, którą chcesz zrzucić.
1. Po zakończeniu procesu, konsola Wii U uruchomi menu Wii U.
1. Uruchom Homebrew Launcher i uruchom aplikację WUP Installer GX2.
1. Wybierz swoją grę (`WUP-X-XXXX`), naciśnij `Install` oraz potwierdź `Yes`.
1. Wybierz NAND jako miejsce docelowe instalacji.
1. Po zakończeniu procesu, konsola Wii U uruchomi menu Wii U.
1. Powinieneś zobaczyć zainstalowaną grę, gotową do gry.
1. Wyjmij kartę SD ze swojego Wii U i podłącz ją do komputera.
1. Usuń folder `WUP-X-XXXX` w katalogu `Install` na karcie SD, aby zwolnić miejsce.

#### **Instalacja na USB**

### Instalacja na USB

?> Podczas instalacji gry na urządzeniu USB zalecamy użycie dysków HDD, a nie dysków flash/SSD, ponieważ nie są one zoptymalizowane do ciągłego odczytywania i zapisywania danych, co sprawia, że szybko się zużywają. Jeśli twój dysk HDD nie jest zasilany z zewnątrz, będziesz potrzebował kabla Y, aby podłączyć go do dwóch gniazd USB na Wii U.

!> Aby zainstalować grę na urządzeniu USB, musi być ono sformatowane przez Wii U. Wykonanie tego kroku spowoduje usunięcie całej zawartości dysku USB i uniemożliwi jego użycie w innym systemie, chyba że go zreformatujesz.

### Czego Potrzebujesz {docsify-ignore}

- Karta SD z odpowiednią ilością miejsca na gry, które będziesz zrzucał.
- Kabel HDD USB (+ kabel Y w razie potrzeby)
- Najnowsza wersja [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- Aplikacja homebrew [disc2app](https://wiiubru.com/appstore/zips/disc2app.zip)

### Instrukcje {docsify-ignore}

1. Skopiuj zawartość pliku `wup_installer_gx2.zi` do katalogu głównego karty SD.
1. Skopiuj zawartość pliku `disc2app.zip` do katalogu głównego karty SD.
1. Wyciągnij kartę SD ze swojego komputera i podłącz ją do Wii U.
1. Podłącz dysk HDD do portu USB Wii U.
1. Włącz Wii U.
1. Wii U poprosi Cię o sformatowanie dysku HDD. Potwierdź "Yes".
1. Wyjmij płytę z grą z czytnika, jeżeli masz jakąkolwiek włożoną
1. Uruchom Homebrew Launcher i uruchom aplikację disc2App.
1. Naciśnij przycisk A, aby rozpocząć proces zrzucania na kartę SD.
1. Kiedy zostaniesz o to poproszony, włóż dysk z grą, którą chcesz zrzucić
1. Po zakończeniu procesu, Wii U uruchomi menu Wii U.
1. Uruchom Homebrew Launcher i uruchom aplikację WUP Installer GX2.
1. Wybierz swoją grę (`WUP-X-XXXX`), naciśnij `Install` i potwierdź `Yes`.
1. Wybierz USB jako miejsce docelowe instalacji.
1. Po zakończeniu procesu Wii U uruchomi menu Wii U.
1. Powinieneś zobaczyć zainstalowaną grę, gotową do gry.
1. Wyjmij kartę SD ze swojego Wii U i podłącz ją do komputera.
1. Usuń folder `WUP-X-XXXX` w katalogu `Install` na karcie SD, aby zwolnić miejsce.

#### **Instalacja z USB**

### Instalacja z USB

?> Jeśli nie masz wystarczająco dużo miejsca na karcie SD, możesz użyć zaawansowanej techniki do instalacji zrzutów gier z urządzenia USB. To nie jest najprostsza rzecz do zrobienia i ma wadę, ponieważ jest tylko w stanie zainstalować grę w pamięci systemowej (NAND).

### Czego Potrzebujesz {docsify-ignore}

- Urządzenie pamięci na USB (+a kabel Y w razie potrzeby) z wystarczającą ilością miejsca, aby zmieścić grę, którą chcesz zrzucić.
- Najnowsza wersja [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- Aplikacja Homebrew [disc2app](https://wiiubru.com/appstore/zips/disc2app.zip).
- Aplikacja Homebrew [MochaFAT32](https://wiiubru.com/appstore/zips/mocha_fat32.zip).
- [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4) w wersji 1.4
  - Musisz pobrać wersję v1.4 `homebrew_launcher.v.1.4.zip`.

### Instrukcje {docsify-ignore}

?> **Uwaga** Twoje urządzenie USB będzie musiało być już sformatowane jako FAT32. Jeśli twoje urządzenie USB nie jest sformatowane do FAT32, użyj [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) z 32k (32768) rozmiarem jednostki alokacji do sformatowania.

1. Skopiuj zawartość pliku `homebrew_launcher.v.1.4.zip` do katalogu głównego urządzenia USB.
1. Skopiuj zawartość pliku `wup_installer_gx2.zip` do katalogu głównego urządzenia USB.
1. Skopiuj zawartość pliku `disc2app.zip` do katalogu głównego urządzenia USB.
1. Skopiuj zawartość pliku `mocha_fat32.zip` do katalogu głównego karty SD.
1. Wyciągnij kartę SD ze swojego komputera i podłącz ją do konsoli Wii U.
1. Włącz Wii U.
1. Podłącz swoje urządzenie USB. Wii U zapyta Cię o sformatowanie. Anuluj naciskając "No"!
1. Uruchom Homebrew Launcher i uruchom aplikację MochaFAT32.
1. W menu konfiguracji ustaw następujące ustawienia:
    - Config view mode: default
    - Skip this menu on launch: on
    - Don't relaunch OS: off
    - Launch System Menu: on
    - RedNAND: off
1. Twoja konsola załaduje menu Wii U za pomocą urządzenia USB zastępującego teraz kartę SD.
1. Uruchom Homebrew Launcher i otwórz aplikację disc2App.
1. Wyjmij jakikolwiek włożony dysk z grą i naciśnij przycisk A, aby rozpocząć proces dumpingu.
1. Kiedy zostaniesz o to poproszony, włóż dysk z grą, którą chcesz zrzucić.
1. Po zakończeniu procesu Wii U uruchomi menu Wii U.
1. Uruchom Homebrew Launcher i uruchom aplikację WUP Installer GX2.
1. Wybierz swoją grę (`WUP-X-XXXX`), naciśnij `Install` i potwierdź `Yes`.
1. Wybierz NAND jako miejsce docelowe instalacji.
1. Po zakończeniu procesu Wii U uruchomi menu Wii U.
1. Powinieneś zobaczyć zainstalowaną grę, gotową do gry.
1. Odłącz urządzenie USB z Wii U i podłącz je do komputera.
1. Usuń folder `WUP-X-XXXX` w katalogu `Install` na urządzeniu USB, aby zwolnić miejsce.

<!-- tabs:end -->

### Przenoszenie gier do USB

?> Jeśli nie chcesz zachować gry zainstalowanej na NAND, możesz użyć zarządzania danymi Wii U, aby przenieść grę na urządzenie USB.

!> Aby przenieść swoją grę na urządzenie pamięci USB, urządzenie musi zostać sformatowane przez Wii U. Wykonanie tego kroku spowoduje usunięcie całej zawartości tego urządzenia i uniemożliwi jego użycie w innym systemie, chyba że ponownie go zreformujesz.

1. Uruchom ponownie Wii U, aby wyłączyć działanie MochaFAT32.
1. Podłącz urządzenie USB do Wii U.
1. Włącz Wii U.
1. Twój Wii U poprosi Cię o sformatowanie urządzenia USB. Potwierdź "Yes".
1. Otwórz System Settings na Wii U.
1. Przejdź do `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`
1. Wybierz grę i przenieś wszystkie dane (w tym aktualizacje i DLC, jeśli są zainstalowane) na swoje urządzenie USB.

### Przenoszenie Aktualizacji Na USB

?> Jeśli twoja gra ma zainstalowane DLC lub aktualizacje, będziesz musiał przenieść te pliki na swoje urządzenie USB. Mozesz to zrobic korzystając z Data Management na Wii U.

1. Włącz Wii U
1. Otwórz System Settings na Wii U.
1. Przejdź do `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
1. Wybierz swoją grę i przenieś aktualizację i dane DLC do urządzenia USB.