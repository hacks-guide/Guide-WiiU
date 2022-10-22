# Blokowanie Aktualizacji
---
W przeciwieństwie do np. exploitów Nintendo Switch RCM, wszystkie obecnie znane exploity Wii U mogą być nadpisane przez aktualizację systemu. Chociaż Wii U nie jest już oficjalnie wspierane, Nintendo może nadal wydawać aktualizacje dla tej konsoli. Namely, the updates 5.5.3 up to 5.5.6 were all released after the Wii U was discontinued, so blocking updates is still a recommended action.

While Tiramisu's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. If you get a red warning screen while booting into Tiramisu, the update folder still exists and it is recommended to delete it using the guide below.

### Instrukcje {docsify-ignore}

Currently, two ways exist to effectively block updates on the Wii U system:
<!-- tabs:start -->

#### **Deleting Update Folder**

### Deleting Update Folder

?> This method of update blocking is a bit more advanced than DNS Blocking and uses a homebrew app to modify system files. However, it has the advantage that the eShop's functionality will not be restricted.
1. Podłącz kartę SD do swojego komputera.
1. Download and extract [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/tag/v1.1) to the root of your SD Card.
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
