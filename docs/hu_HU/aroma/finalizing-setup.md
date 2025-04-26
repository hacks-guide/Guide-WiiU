---
prev: true
---

# Telepítés véglegesítése

Most, hogy a PayloadLoader, az Environment Loader és az Aroma telepítésre került, véglegesítjük a telepítést.

## További Homebrew appok

::: tip

Minden homebrew alkalmazás a Wii U Menu-ből kerül betöltésre Aromán.

:::

- **A SaveMii Mod WUT Port** egy homebrew app ami lehetővé eszi a Wii U és vWii mentés adatok kezelését.
- **A Bloopair** egy Aroma modul, ami lehetővé teszi a vezetéknélküli csatlakoztatását a legnépszerűbb Bluetooth képes kontrollereknek. Tekintsd meg [ezt az oldalt](https://gbatemp.net/threads/bloopair-connect-controllers-from-other-consoles-natively.594289/) további részletekért.
- A **Homebrew Appstore** lehetővé teszi, hogy tallózz és letölts homebrew appokat követlenül a Wii U-dról.

### További Homebrew appok - Amire szükséged van

- A [SaveMii Mod WUT Port](https://wiiu.cdn.fortheusers.org/zips/SaveMiiModWUTPort.zip) legutolsó verziója.
- `wiiu-extracttosd.zip` fájl a [HB Appstore](https://github.com/fortheusers/hb-appstore/releases/)-ból.

### További Homebrew appok - Fájlok kicsomagolása az SD kártyára

1. Másold a frissen letöltött `SaveMiiModWUTPort.zip` fájl tartalmát az SD kártyád gyökerébe.
2. Másold a frissen letöltött `wiiu-extracttosd.zip` fájl tartalmát az SD kártyád gyökerébe.

## Ajánlott Plugin-ek

| Név                                                                                                                                                   | Leírás                                                                                                   | Telepítési lépések                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [FTPiiU Plugin](https://github.com/wiiu-env/ftpiiu_plugin/) ([Letöltés](https://github.com/wiiu-env/ftpiiu_plugin/releases))       | FTP szervert futtat a háttérben.                                                         | 1. Csomagold ki a letöltött `ftpiiu_vX_X.zip` fájlt. <br> 2. Másold a `ftpiiu.wps` fájlt a `wiiu/environments/aroma/plugins` útvonalra az SD kártyádon.                                                                                                                                        |
| [SDCafiine](https://github.com/wiiu-env/sdcafiine_plugin/) ([Letöltés](https://github.com/wiiu-env/sdcafiine_plugin/releases))     | Lehetővé teszi a játékok moddolását, a fájlok SD kártyára átirányításával.               | 1. Csomagold ki a letöltött `sdcafiine_vX_X_X.zip` fájlt. <br> 2. Másold a `sdcafiine.wps` fájlt a `wiiu/environments/aroma/plugins` útvonalra az SD kártyádon.                                                                                                                                |
| [Bloopair](https://github.com/GaryOderNichts/Bloopair/) ([Letöltés](https://github.com/GaryOderNichts/Bloopair/releases))          | Lehetővé teszi az elterjed Bluetooth képes kontrollerek vezeték nélküli csatlakozatását. | 1. Csomagold ki a tartalmát a frissen letöltött `Bloopair_vX.X.X.zip` fájlnak. <br> 2. Másold a `30_bloopair.rpx` fájlt a `wiiu/environments/aroma/modules/setup/` útvonalra az SD kártyádon. <br> 3. Másold a `wiiu` mappa tartalmát az SD kártyád gyökerébe. |
| [Screenshot Plugin](https://github.com/wiiu-env/ScreenshotWUPS/) ([Letöltés](https://github.com/wiiu-env/ScreenshotWUPS/releases)) | Lehetővé teszi a képernyőképed közvetlenül SD kártyára készítését.                       | 1. Csomagold ki a letöltött `screenshot_plugin_vX_X.zip` fájlt. <br> 2. Másold a `screenshot.wps` fájlt a `wiiu/environments/aroma/plugins` útvonalra az SD kártyádon.                                                                                                                         |

## Pretendo Network

A Pretendo a Nintendo Network helyettesítő szolgáltatása, amely a megszűnt online szolgáltatásokat hozza vissza. Emellett a Miiverse szolgáltatást is feléleszti a Juxtaposition-on keresztül. A hivatalos útmutató [itt található](https://pretendo.network/docs/install/wiiu).

## Tiramisu bootolása (opcionális)

::: warning

A Tiramisu már archivált, mert kiváltotta az Aroma és elavultnak tekinthető. Nem kerül hozzá új homebrew fejlesztésre, és a szolgáltatások, mint a Pretendo befejezték a támogatását.

:::

Azonban ha szükséged lenne arra, hogy Tiramisu-ra bootolj, például egy legacy homebrew app miatt, a következőket tedd:

1. Töltsd le a Az [Tiramisu for your café](https://tiramisu.foryour.cafe) oldalról a legutolsó fájlokat.
2. Másold a `wiiu` mappa tartalmát az SD kártyád gyökerébe.
    - A mappának egyesülnie (merge) kell a meglévő `wiiu` app tartalmával, ha ez nem történne meg automatikusan.
3. Vedd ki az SD kártyát a számítógépedből, és dubd be a Wii U konzolodba.
4. Indítsd el az EnvironmentLoader-t.
    - Ha autobootolsz bele, akkor ez megtehető az X gomb nyomva tartása mellett bekapcsolt konzollal.
    - Nincs szükséged a PayloadLoader újratelepítésére, ha már telepítetted az Aromával.
5. Válaszd ki a D-Pad-del a `tiramisu`-t.
6. Az A gomb megnyomásával indítsd el Tiramisu-t.
7. Az A gomb megnyomásával indítsd el a Wii U Menu-t.
    - Ha szeretnéd, hogy a konzol autobootoljon a Wii U Menu-be, amikor tölti a Tiramisu környezetet, nyomj Y-t.
8. Homebrew Launcher a Mii Maker app indításával tölthető be.
