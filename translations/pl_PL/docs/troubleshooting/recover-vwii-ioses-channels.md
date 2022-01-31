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

!> This has the potential to destroy your vWii NAND if you are not careful! Please consider [backing up](mocha/online-exploit/nand-backup) your SLCCMPT and OTP if you do not yet have them backed up!

?> If you are using a system update blocking method, please [remove it](unblock-updates).

### Czego Potrzebujesz {docsify-ignore}

- A working [homebrew installation](introduction) on the Wii U side.
- The latest release of [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases).

### Instrukcje {docsify-ignore}

1. Copy the contents of the `decaffeinator.zip` file to the root of your SD Card.
1. Wyjmij kartę SD ze swojego komputera i podłącz ją do konsoli Wii U.
1. Power on your Wii U and launch the CFW of your choice (Mocha, Haxchi or CBHC).
1. Uruchom Homebrew Launcher.
1. Launch vWii Decaffeinator.

### Recovering Process

You will be provided with various options. It is recommended to first attempt restoring through the `Advanced options` menu if you know what to restore, or `Light mode` if you aren't sure. In extreme cases where no other option solves the issue, `Aggressive mode` should be chosen.

<!-- tabs:start -->

#### **Advanced options**

### Advanced options

?> This mode will clear the specified IOSes and channels to reinstall them. Wszystkie pozostałe dane (w tym cIOS'y) zostaną zachowane.

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

#### **Aggressive mode**

### Aggressive mode

!> Ten tryb wyczyści **wszystko** aby ponownie zainstalować czyste wersje domyślnych IOSes i kanałów. Please note that all cIOSes, save data, and channels will be lost, and the vWii NAND will be returned to its stock form!

1. Select `Aggressive mode` on the menu.
1. Read the warning in its entirety. If you wish to proceed, press Start to initiate the restoration process.
1. Kiedy proce się zakończy, zezwól aplikacji na uruchomienie System Settings.
1. Wykonaj [aktualizację systemu](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update), aby zakończyć proces przywracania.

?> Możesz teraz ponownie włączyć [blokadę aktualizacji systemu](block-updates).

> If you receive Error Code 160-0101 when booting up the system after using vWii Decaffeinator, take out the inserted disc and unplug any external drives and restart the system.

<!-- tabs:end -->

> If you receive Error Code 105-3102 when performing the system update, restart your console and reattempt the update.