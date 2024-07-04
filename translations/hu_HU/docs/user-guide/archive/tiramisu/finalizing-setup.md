# Tiramisu {docsify-ignore-all}

## Telepítés véglegesítése

Most, hogy a PayloadLoader, az Environment Loader and és az Tiramisu telepítésre került, véglegesítjük a telepítést.

Be fogjuk állítni a Tiramisu környezetet, hogy automatikusan induljon, amikor a konzol autobootolja a Health and Safety Information app-ot (vagy amikor kézzel indítod, mert nem lett autoboot beállítva) és kiválasztjuk a Wii U Menu-t alapértelmezettként, és néhány további homebrew appot telepítünk.

### A PayloadLoader, az Environment Loader és a Tiramisu telepítése

1. Kapcsold be a Wii U-d.
    - Az Environment Loader-nek kell megjelennie.
1. A D-Pad-et használva, navigálj az `tiramisu`-hoz és nyomj Y gombot, hogy beállítsd ezt az alapértelmezett környezetednek, majd nyomj A gombot a Tiramisu indításához.
    - Előfordulhat, hogy egy piros figyelmeztető képernyőt kapsz, hogy a frissítések nem lettek megfelelően blokkolva. Nyomj A gombot a folytatáshoz mindenképp. Blokkolni fogjuk a frissítéseket "A frissítések blokkolása" fejezetben később.
    - A Environment Loader megnyitásához a jövőben tartsd nyomva az X gombot, amíg a Wii U bebootol.
1. A Tiramisu Boot Selector-ban a `Wii U Menu`-nek kell beállítva lennie, nyomj Y-t, hogy beállítsd alapértelmezett autoboot opciónak, majd nyomj A gombot, hogy elindítsd a Wii U Menu-t.
    - A Tiramisu Boot Selector megnyitásához a jövőbn tartsd nyomva a START (+) gombot, amíg a Wii U bebootol.

?> Ha bebootoltált a Tiramisu környezetbe, megnyithatod a Mii Maker-t bármikor, hogy a Homebrew Launcher-be juss. <br>A Homebrew Launcher üres lesz az első alkalommal moddolók számára. Kövesd az útmutató többi részét arról, hogyan telepíthetsz alkalmazásokat a Homebrew Launcher-be. <br>A Mii Maker-hez visszatéréshez csak simán nyomd meg a HOME gombot a Homebrew Launcher-ben.

### Frissítések blokkolása
Habár a Tiramisu PayloadLoader-e már rendelkezik beépített blokkolás funkcionalitással, ajánlott, hogy töröld az update mappát, hogy effektíven blokkold a rendszer frissítéseket. Ha egy piros figyelmezető képernyőt kapsz, az Tiramisu-ra bootolás közben, akkor az update folder még mindig létezik, és ajánlott a törlése [ezen](../block-updates) útmutató alapján.

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
1. Csomagold ki a tartalmát a frissen letöltött `Bloopair_vX.X.X.zip` fájlnak.  
   Másold a `30_bloopair.rpx` fájlt a `/wiiu/environments/tiramisu/modules/setup/` mappába az SD kártyádon.  
   Másold a `wiiu` mappát az SD kártyád gyökerébe.
1. Másold a frissen letöltött `wiiu-extracttosd.zip` fájl tartalmát az SD kártyád gyökerébe.
