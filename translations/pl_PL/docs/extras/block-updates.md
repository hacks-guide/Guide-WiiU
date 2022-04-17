# Blokowanie Aktualizacji
---
W przeciwieństwie do np. exploitów Nintendo Switch RCM, wszystkie obecnie znane exploity Wii U mogą być nadpisane przez aktualizację systemu. Chociaż Wii U nie jest już oficjalnie wspierane, Nintendo może nadal wydawać aktualizacje dla tej konsoli. Aktualizacje 5.5.3, 5.5.4 i 5.5.5 zostały opublikowane już po zakończeniu wsparcia dla Wii U, więc blokowanie aktualizacji jest nadal zalecane.

### Instrukcje {docsify-ignore}

Currently, three ways exist to block updates on the Wii U system:
<!-- tabs:start -->

#### **Tiramisu Autoboot**

### Tiramisu Autoboot

?> When autobooting into the the PayloadLoader, updates are automatically blocked. To enable autobooting into the PayloadLoader follow [this](../docs/user-guide/tiramisu/autoboot).

#### **Deleting Update Folder**

### Deleting Update Folder

?> This method of update blocking is a bit more advanced than DNS Blocking and uses a homebrew app to modify system files. However, it has the advantage that the eShop's functionality will not be restricted.
1. Podłącz kartę SD do swojego komputera.
1. Pobierz i rozpakuj [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases) do katalogu głównego karty SD.
1. Podłącz kartę SD do swojej konsoli Wii U i włącz ją.
1. Wejdź do Homebrew Launcher.
1. Znajdź aplikację UFDiine i uruchom ją.
1. Naciśnij przycisk A, aby usunąć folder aktualizacji.
1. Powinien pojawić się napis `Update folder is deleted`. Od teraz blokujesz aktualizacje systemu.

#### **DNS Blocking**

### DNS Blocking

?> This method is the easier method and is recommended to less advanced users. It does, however, prevent the eShop from working. This can be worked around by running [NNUPatcher](https://wiiubru.com/appstore/zips/nnupatcher.zip) before starting the eShop.
1. Podłącz kartę SD do swojego komputera.
1. Skopiuj zawartość pliku `nnupatcher.zip` do katalogu głównego karty SD. Jeśli zostaniesz o to poproszony, nadpisz duplikaty plików.
1. Podłącz kartę SD do swojej konsoli Wii U i włącz ją.
1. Wejdź w ustawienia systemu WiiU i przejdź do `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` oraz ustaw opcję na `Do not auto-obtain`.
1. Zostaniesz poproszony o wprowadzenie pierwotnego i drugorzędnego adresu DNS. Wprowadź następujące adresy IP:
    - Pierwotny DNS: 168.235.092.108
    - Drugorzędny DNS: 081.004.127.020 <img src="docs/assets/img/DNS.png" alt="Blokowanie DNS" />
1. Kliknij aby potwierdźić.
1. Od teraz blokujesz aktualizacje systemu. Aby uzyskać dostęp do eShop, uruchom aplikację NNUPatcher z Homebrew Launcher przed uruchomieniem eShop.

<!-- tabs:end -->
