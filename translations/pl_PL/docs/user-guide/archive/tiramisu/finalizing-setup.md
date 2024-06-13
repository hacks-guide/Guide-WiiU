# Tiramisu {docsify-ignore-all}

## Finalizowanie konfiguracji

Teraz, gdy PayloadLoader, Environment Loader i Tiramisu są zainstalowane, zamierzamy zakończyć konfigurację.

Zamierzamy sprawić, by środowisko Tiramisu ładowało się automatycznie kiedy konsola autobootuje aplikację Health and Safety Information (lub gdy uruchamiasz ją ręcznie, jeśli nie wybierzesz jej do autoboot), ustawimy menu Wii U jako domyślne, a także uruchomimy dodatkowe aplikacje homebrew.

### Konfigurowanie PayloadLoader, Environment Loader i Tiramisu

1. Włącz Wii U.
    - Environment Loader powinien się pokazać.
1. Using the D-Pad, navigate to `tiramisu` and press Y to set this to your default environment, then press A to launch into Tiramisu.
    - You might get a red warning screen telling you that updates aren't blocked properly. Press A to continue anyway. We're going to block updates in the "Blocking Updates" section below.
    - To open the Environment Loader in the future, you have to hold X while your Wii U is booting up.
1. Będąc w Boot Selector, `Wii U Menu` powinno być już zaznaczone, Naciśnij Y, aby ustawić je jako domyślną opcję autobootingu, a następnie naciśnij A, aby uruchomić menu Wii U.
    - To open the Tiramisu Boot Selector in the future, you have to hold START (+) while your Wii U is booting up.

?> Po uruchomieniu się środowiska Tiramisu możesz otworzyć Mii Maker w dowolnym momencie, aby dostać się do Homebrew Launchera. <br>Homebrew Launcher will be empty for first-time modders. Follow the rest of the guide to install apps into the Homebrew Launcher. <br>To get back into the Mii Maker, simply press the HOME button while in the Homebrew Launcher.

### Blocking Updates
While Tiramisu's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. If you get a red warning screen while booting into Tiramisu, the update folder still exists and it is recommended to delete it using [this guide](../block-updates).

### Additional Homebrew Apps

- **SaveMii Mod WUT Port** is a homebrew app that lets you manage your Wii U and vWii save data.
- **Bloopair** jest modułem Tiramisu, który umożliwia bezprzewodowe podłączenie najbardziej popularnych kontrolerów Bluetooth do Wii U (np. pad od PS4/PS3). Zobacz [tę stronę](https://gbatemp.net/threads/bloopair-connect-controllers-from-other-consoles-natively.594289/), aby uzyskać więcej informacji.
- **Homebrew Appstore** pozwala przeglądać i pobierać aplikacje homebrew bezpośrednio z poziomu Wii U.

### Additional Homebrew Apps - What You Need

- The latest version of [SaveMii Mod WUT Port](https://wiiubru.com/appstore/zips/SaveMiiModWUTPort.zip).
- The latest version of [Bloopair](https://github.com/GaryOderNichts/Bloopair/releases).
- `wiiu-extracttosd.zip` z [HB Appstore](https://github.com/fortheusers/hb-appstore/releases/).

### Additional Homebrew Apps - Extracting Files to the SD Card

1. Copy the contents of the newly downloaded `SaveMiiModWUTPort.zip` file to the root of your SD Card.
1. Extract the contents of the newly downloaded `Bloopair_vX.X.X.zip` file.  
   Copy the `30_bloopair.rpx` to the `wiiu/environments/tiramisu/modules/setup/` folder on the root of your SD Card.  
   Copy the `wiiu` folder to the root of your SD Card.
1. Copy the contents of the newly downloaded `wiiu-extracttosd.zip` file to the root of your SD Card.
