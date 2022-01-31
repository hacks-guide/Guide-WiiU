# Tiramisu {docsify-ignore-all}

## Finalizowanie konfiguracji

Teraz, gdy PayloadLoader, Environment Loader i Tiramisu są zainstalowane, zamierzamy zakończyć konfigurację.

Zamierzamy sprawić, by środowisko Tiramisu ładowało się automatycznie kiedy konsola autobootuje aplikację Health and Safety Information (lub gdy uruchamiasz ją ręcznie, jeśli nie wybierzesz jej do autoboot), ustawimy menu Wii U jako domyślne, a także uruchomimy dodatkowe aplikacje homebrew.

### Konfigurowanie PayloadLoader, Environment Loader i Tiramisu

1. Włącz Wii U.
    - Environment Loader powinien się pokazać.
1. Korzystając z D-Pad, przejdź do `tiramisu` i naciśnij Y aby ustawić je jako domyślne środowisko, a następnie naciśnij A, aby uruchomić Tiramisu.
    - Aby otworzyć Environment Loader w przyszłości, przytrzymujesz X podczas uruchamiania Wii U.
1. Będąc w Boot Selector, `Wii U Menu` powinno być już zaznaczone, Naciśnij Y, aby ustawić je jako domyślną opcję autobootingu, a następnie naciśnij A, aby uruchomić menu Wii U.
    - Aby otworzyć Boot Selector Tiramisu w przyszłości, musisz przytrzymać START (+) podczas uruchamiania Wii U.

?> Po uruchomieniu się środowiska Tiramisu możesz otworzyć Mii Maker w dowolnym momencie, aby dostać się do Homebrew Launchera. <br>Aby wrócić do Mii Maker, po prostu naciśnij przycisk HOME będąc w Homebrew Launcher.

### Dodatkowe aplikacje Homebrew

- **SaveMii mod** to aplikacja homebrew pozwalająca zarządzać danymi Wii U i vWii, chodzi o tzw. save'y z gry.
- **Bloopair** jest modułem Tiramisu, który umożliwia bezprzewodowe podłączenie najbardziej popularnych kontrolerów Bluetooth do Wii U (np. pad od PS4/PS3). Zobacz [tę stronę](https://gbatemp.net/threads/bloopair-connect-controllers-from-other-consoles-natively.594289/), aby uzyskać więcej informacji.
- **Homebrew Appstore** pozwala przeglądać i pobierać aplikacje homebrew bezpośrednio z poziomu Wii U.

### Dodatkowe aplikacje Homebrew - czego potrzebujesz

- Najnowsza wersja [SaveMii Mod](https://wiiubru.com/appstore/zips/savemii_mod.zip).
- Najnowsza wersja [Bloopair - Tiramisu Edition](https://github.com/GaryOderNichts/Bloopair/releases).
- `wiiu-extracttosd.zip` z [HB Appstore](https://github.com/fortheusers/hb-appstore/releases/).

### Dodatkowe aplikacje Homebrew - Rozpakowywanie plików na kartę SD

1. Skopiuj zawartość pliku `savemii_mod.zip` do katalogu głównego karty SD.
1. Skopiuj zawartość nowo pobranego pliku `Bloopair_vX.X.X-tiramisu.zip` do katalogu głównego karty SD.
1. Skopiuj zawartość nowo pobranego pliku `wiu-extracttosd.zip` do katalogu głównego karty SD.