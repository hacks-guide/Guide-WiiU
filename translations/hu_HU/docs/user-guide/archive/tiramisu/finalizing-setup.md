# Tiramisu {docsify-ignore-all}

## Telepítés véglegesítése

Most, hogy a PayloadLoader, az Environment Loader and és az Tiramisu telepítésre került, véglegesítjük a telepítést.

We are going to make the Tiramisu environment start automatically when your console autoboots the Health and Safety Information app (or when manually launching it if you chose not to autoboot it) and select Wii U Menu as default as well as getting additional homebrew apps.

### Setting up PayloadLoader, Environment Loader and Tiramisu

1. Kapcsold be a Wii U-d.
    - Az Environment Loader-nek kell megjelennie.
1. A D-Pad-et használva, navigálj az `tiramisu`-hoz és nyomj Y gombot, hogy beállítsd ezt az alapértelmezett környezetednek, majd nyomj A gombot a Tiramisu indításához.
    - Előfordulhat, hogy egy piros figyelmeztető képernyőt kapsz, hogy a frissítések nem lettek megfelelően blokkolva. Nyomj A gombot a folytatáshoz mindenképp. Blokkolni fogjuk a frissítéseket "A frissítések blokkolása" fejezetben később.
    - To open the Environment Loader in the future, you have to hold X while your Wii U is booting up.
1. On the Tiramisu Boot Selector, the `Wii U Menu` should already be selected, press Y to set this to your default autobooting option, then press A to launch into the Wii U Menu.
    - To open the Tiramisu Boot Selector in the future, you have to hold START (+) while your Wii U is booting up.

?> Once you're booted into the Tiramisu environment, you can open the Mii Maker at any time to get into the Homebrew Launcher. <br>Homebrew Launcher will be empty for first-time modders. Follow the rest of the guide to install apps into the Homebrew Launcher. <br>To get back into the Mii Maker, simply press the HOME button while in the Homebrew Launcher.

### Frissítések blokkolása
While Tiramisu's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. Ha egy piros figyelmezető képernyőt kapsz, az Tiramisu-ra bootolás közben, akkor az update folder még mindig létezik, és ajánlott a törlése [ezen](../block-updates) útmutató alapján.

### További Homebrew Appok

- A **SaveMii Mod WUT Port** egy homebrew app ami lehetővé eszi a Wii U és vWii mentés adatok kezelését.
- A **Bloopair** egy Tiramisu modul, ami lehetővé teszi a vezetéknélküli csatlakoztatását a legnépszerűbb Bluetooth képes kontrollereknek. Tekintsd meg [ezt az oldalt](https://gbatemp.net/threads/bloopair-connect-controllers-from-other-consoles-natively.594289/) további részletekért.
- A **Homebrew Appstore** lehetővé teszi, hogy tallózd és letölts homebrew appokat követlenül a Wii U-dról.

### További Homebrew Appok - Amire szükséged van

- A [SaveMii Mod WUT Port](https://wiiubru.com/appstore/zips/SaveMiiModWUTPort.zip) legutolsó verziója.
- A [Bloopair](https://github.com/GaryOderNichts/Bloopair/releases) legutolsó verziója.
- A [HB Appstore](https://github.com/fortheusers/hb-appstore/releases/) `wiiu-extracttosd.zip`-je.

### További Homebrew appok - Fájlok kicsomagolása az SD kártyára

1. Másold a `SaveMiiModWUTPort.zip` fájl tartalmát az SD kártyád gyökerébe.
1. Extract the contents of the newly downloaded `Bloopair_vX.X.X.zip` file.  
   Copy the `30_bloopair.rpx` to the `wiiu/environments/tiramisu/modules/setup/` folder on the root of your SD Card.  
   Copy the `wiiu` folder to the root of your SD Card.
1. Másold a frissen letöltött `wiiu-extracttosd.zip` fájl tartalmát az SD kártyád gyökerébe.
