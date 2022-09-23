# Najczęściej Zadawane Pytania {docsify-ignore-all}
---

### Czy homebrew niesie ze sobą jakieś zagrożenia?

Obecnie, uruchomienie oprogramowanie Homebrew nie naraża Cię na ryzyko zablokowania konsoli przez Nintendo, chyba że oszukujesz w gra lub w sklepie eShop. Zawsze jednak powinieneś zachować ostrożność podczas uruchamiania pobranego homebrew, zwłaszcza jeśli nie ufasz źródłom, ponieważ homebrew może potencjalnie uszkodzić twój system!

### Czym są exploity?

Exploity to punkty wejścia, które pozwalają na uruchamianie aplikacji homebrew. W głównym poradniku użyjesz exploitów takich jak exploity przeglądarki (http://wiiuexploit.xyz) i PayloadLoader (Health & Safety exploit). Wszystkie aktualne exploity ładują `SD:/wiiu/payload.elf`, który przejmuje dalsze ładowanie homebrew.

### Czym są payload'y?

Payload'y, o nazwie `payload.elf`, istnieją aby ułatwić ładowanie różnych exploitów, coz kolei umożliwia łatwiejszą konfigurację systemu pod swoje potrzeby. Nie ma znaczenia, jaki exploit ładuje payload, efekt jest zawsze taki sam. Możesz wybierać między róznymi Payload'ami za pomocą PayloadLoaderPayload. Payload używany w głównym przewodniku to CustomRPXLoader, który ładuje `SD:/wiiu/payload.rpx` a `payload.rpx` użyty w poradniku to EnvironmentLoader, który umożliwia ładowanie różnych środowisk.

### Czym są środowiska?

Środowisko jest kolekcją "modułów konfiguracji", które będą uruchamiane w określonej kolejności podczas uruchamiania środowiska. Jednym z takich środowisk jest Tiramisu. Moduły konfiguracyjne są małymi częściami homebrew/kodu, które są wykonywane w celu utworzenia środowiska.

### How to Delete Update Folder to Block Updates on Wii U

If you want to delete the update folder to block updates, see its tab in the [Blocking Updates guide](block-updates).

### What SD Card size is recommended?

 - **Instalacja kopii zapasowych gier:** 32GB (można użyć mniejszego rozmiaru, ale niektóre tytuły mają rozmiar 20GB)
 - **Uruchamianie modyfikacji gry:** 8GB (urządzenie FAT32 na USB może być również używane do modów)
 - **Uruchamianie tylko aplikacji homebrew** Dowolny rozmiar.

**Recommended brands:** SanDisk, Samsung or PNY

?> Note: Avoid class 4 SD Cards, and avoid eBay!

### Can I install homebrew on Wii U with a USB instead of SD Card?

No, you must have an SD Card for a first time setup. A USB can then be used to install game backups, Virtual Console injects, etc, but not to store homebrew applications which are required to set everything up.

### Podczas pobierania niektórych plików powstają duplikaty niektórych z nich o nazwie "info.json" & "manifest.install", co mam z nimi zrobić?

Nic specjalnego, możesz je tam zostawić, usunąć lub zastąpić nowymi. Those files are not used in the process, and therefore, won't have any impact by being or not being there.

### What is a Wii U formatted USB drive?

It's a USB drive that has been formatted by a Wii U console to its proprietary format.  
A Wii U formatted USB drive ***cannot be read by any other devices than the Wii U that originally formatted it.***  
If you ever want to use it with another Wii U console or any other devices, you will have to reformat it.
