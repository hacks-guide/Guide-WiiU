# Przywracanie Kanału/IOS na vWii
---
Ta strona poprowadzi Cię przez proces odzyskiwania IOS lub kanału na Twoim vWii, nie ważne czy został uszkodzony lub usunięty z jakiegokolwiek powodu.

<details>
<summary>Kliknij tutaj, aby zobaczyć, co można odzyskać za pomocą tej metody.</summary>

- Wii Menu Manual
- vWii System Channel
- Region Select
- System Menu
- Mii Channel
- Wii U Menu
- Wii Shop Channel
- IOS 9
- IOS 12
- IOS 13
- IOS 14
- IOS 15
- IOS 17
- IOS 21
- IOS 22
- IOS 28
- IOS 31
- IOS 33
- IOS 34
- IOS 35
- IOS 36
- IOS 37
- IOS 38
- IOS 41
- IOS 43
- IOS 45
- IOS 46
- IOS 48
- IOS 53
- IOS 55
- IOS 56
- IOS 57
- IOS 58
- IOS 59
- IOS 62
- IOS 80
- BC-NAND
- BC-WFS

</details>

!> Ten proces może zniszczyć pamięć NAND vWii, jeśli nie będziesz ostrożny! Please consider [backing up](vwii/nand-backup) your SLCCMPT and OTP if you do not yet have them backed up!

?> Jeśli używasz blokady aktualizacji systemu, proszę [zdejmi ją ](unblock-updates).

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
