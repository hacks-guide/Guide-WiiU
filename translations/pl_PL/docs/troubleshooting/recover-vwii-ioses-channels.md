# Przywracanie Kanału/IOS na vWii
---
Ta strona poprowadzi Cię przez proces odzyskiwania IOS lub kanału na Twoim vWii, nie ważne czy został uszkodzony lub usunięty z jakiegokolwiek powodu.

!> Ten proces może zniszczyć pamięć NAND vWii, jeśli nie będziesz ostrożny! Please consider [backing up](vwii/nand-backup) your SLCCMPT and OTP if you do not yet have them backed up!

?> Jeśli używasz blokady aktualizacji systemu, proszę [zdejmi ją ](unblock-updates).

?> Due to mounting conflicts with this app, you need to also disable the FTPiiu plugin.

### Czego Potrzebujesz {docsify-ignore}

- Działająca [instalacja homebrew](introduction) po stronie Wii U.
- Najnowsze wydanie [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases).

### Instrukcje {docsify-ignore}

1. Skopiuj zawartość pliku `decaffeinator.zip` do katalogu głównego karty SD.
1. Wyjmij kartę SD ze swojego komputera i podłącz ją do konsoli Wii U.
1. Włącz Wii U i uruchom wybrane przez siebie CFW (Mocha, Haxchi lub CBHC).
1. Uruchom Homebrew Launcher.
1. Uruchom vWii Decaffeinator.

### Proces odzyskiwania

Masz kilka opcji. Jeśli wiesz, co przywrócić, zaleca się pierwszą próbę przywrócenia za pomocą menu `Advanced options`, lub `Light mode` jeśli nie jesteś pewien. W skrajnych przypadkach, w których żadna inna opcja nie rozwiązuje problemu, należy wybrać `Aggressive mode`.

<!-- tabs:start -->

#### **Opcje zaawansowane**

### Opcje zaawansowane

?> Ten tryb wyczyści określone IOS'y i kanały w celu ich ponownej instalacji. Wszystkie pozostałe dane (w tym cIOS'y) zostaną zachowane.

<details>
<summary>Kliknij tutaj, aby zobaczyć, co można odzyskać za pomocą tej metody.</summary>

![Opcje zaawansowane](docs/files/Advanced-options.jpg) ![Advanced options2](docs/files/Advanced-options2.jpg) ![Advanced options3](docs/files/Advanced-options3.jpg)

</details>

1. Wybierz `Advanced options` w menu.
1. Użyj D-Pada, aby przełączyć się na to, co chcesz przywrócić.
1. Naciśnij Start, aby rozpocząć proces przywracania.
1. Kiedy proce się zakończy, zezwól aplikacji na uruchomienie System Settings.
1. Wykonaj [aktualizację systemu](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update), aby zakończyć proces przywracania.

?> Możesz teraz ponownie włączyć [blokadę aktualizacji systemu](block-updates).

#### **Light mode**

### Light mode

?> Ten tryb wyczyści System Menu, zapisane dane Wii Message Board, IOS i inne aplikacje systemowe, aby ponownie zainstalować ich czyste wersje. Pamiętaj, że to również usunie wszystkie cIOSy i muszą one zostać ponownie zainstalowane. Wszystkie pozostałe dane zostaną zachowane.

1. Wybierz `Light mode` w menu.
1. Naciśnij Start, aby rozpocząć proces przywracania.
1. Kiedy proces się zakończy, zezwól aplikacji na uruchomienie System Settings.
1. Wykonaj [aktualizację systemu](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update), aby zakończyć proces przywracania.

?> Możesz teraz ponownie włączyć [blokadę aktualizacji systemu](block-updates).

> Jeśli otrzymasz kod błędu 160-0101 podczas uruchamiania systemu po użyciu vWii Decaffeinator, wyjmij z czytnika płytę i odłącz wszelkie zewnętrzne napędy oraz uruchom ponownie system.

#### **Aggressive mode**

### Aggressive mode

!> Ten tryb wyczyści **wszystko** aby ponownie zainstalować czyste wersje domyślnych IOSes i kanałów. Pamiętaj, że wszystkie cIOS, zapisane dane i kanały zostaną utracone, a vWii NAND zostanie przywrócony do stanu fabrycznego!

1. Wybierz `Aggressive mode` w menu.
1. Przeczytaj ostrzeżenie w całości. Jeśli chcesz kontynuować, naciśnij przycisk Start, aby rozpocząć proces przywracania.
1. Kiedy proces się zakończy, zezwól aplikacji na uruchomienie System Settings.
1. Wykonaj [aktualizację systemu](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update), aby zakończyć proces przywracania.

?> Możesz teraz ponownie włączyć [blokadę aktualizacji systemu](block-updates).

> Jeśli otrzymasz kod błędu 160-0101 podczas uruchamiania systemu po użyciu vWii Decaffeinator, wyjmij z czytnika płytę i odłącz wszelkie zewnętrzne napędy oraz uruchom ponownie system.

<!-- tabs:end -->

> If you receive Error Code 105-3102 when performing the system update, restart your console and reattempt the update.
