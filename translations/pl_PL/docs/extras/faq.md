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

### Czy mogę zainstalować gry z mojego USB zamiast SD?

Tak. Jest to jednak nieco bardziej skomplikowane niż instalowanie z karty SD. Szczegółowe instrukcje znajdują się na stronie `Instalacja z USB` w [Poradniku zrzucania gry z płyt](dump-games).

### Jak usunąć folder "Update", aby zablokować aktualizacje na Wii U

Jeśli chcesz usunąć folder aktualizacji, aby zablokować aktualizacje, sprawdź stronę [Instrukcja blokowania aktualizacji](block-updates).

### Jaki rozmiar karty SD jest zalecany?

 - **Instalacja kopii zapasowych gier:** 32GB (można użyć mniejszego rozmiaru, ale niektóre tytuły mają rozmiar 20GB)
 - **Uruchamianie modyfikacji gry:** 8GB (urządzenie FAT32 na USB może być również używane do modów)
 - **Uruchamianie tylko aplikacji homebrew** Dowolny rozmiar.

**Rekomendowane marki:** SanDisk, Samsung lub PNY

?> Uwaga: Unikaj kart SD klasy 4 i unikaj eBay!

### Czy mogę zainstalować homebrew na Wii U za pomocą urządzenia USB zamiast karty SD?

Nie, musisz mieć kartę SD do pierwszej konfiguracji. USB może być używane do instalowania kopii zapasowych gier, na Wii U, w konsoli wirtualnej vWii itp., ale nie do przechowywania aplikacji homebrew które są wymagane do skonfigurowania systemu/środowiska.

### Podczas pobierania niektórych plików istnieją duplikaty niektórych z nich o nazwie "info.json" & "manifest.install", co z nimi robię?

Nic specjalnego, możesz je tam zostawić, usunąć lub zastąpić nowymi. Pliki te nie są używane, a zatem nie jest ważne czy istnieją czy też nie.

### Czym jest sformatowany dysk USB Wii U?

To jest dysk USB, który został sformatowany przez konsolę Wii U do jej własnego formatu.  
Dysk USB sformatowany przez Wii U ***nie może być odczytany przez żadne inne urządzenia niż Wii U, które pierwotnie go sformatowało.***  
Jeśli chcesz użyć go z inną konsolą Wii U lub innymi urządzeniami, będzie musiał go zreformatować.
