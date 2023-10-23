# Blokowanie Aktualizacji
---
W przeciwieństwie do np. exploitów Nintendo Switch RCM, wszystkie obecnie znane exploity Wii U mogą być nadpisane przez aktualizację systemu. Chociaż Wii U nie jest już oficjalnie wspierane, Nintendo może nadal wydawać aktualizacje dla tej konsoli. Namely, the updates 5.5.3 up to 5.5.6 were all released after the Wii U was discontinued, so blocking updates is still a recommended action.

While Tiramisu's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. If you get a red warning screen while booting into Tiramisu, the update folder still exists and it is recommended to delete it using the guide below.

### Instrukcje {docsify-ignore}

Currently, one way exists to effectively block updates on the Wii U system:

1. Podłącz kartę SD do swojego komputera.
1. Download and extract the contents of [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/tag/v1.1) to the root of your SD Card.
1. Plug the SD Card into your Wii U console and boot Tiramisu.
1. Wejdź do Homebrew Launcher.
1. Znajdź aplikację UFDiine i uruchom ją.
1. Naciśnij przycisk A, aby usunąć folder aktualizacji.
1. Confirm that it says `Update folder is deleted`.
1. Power off the console. You are now blocking updates.
