---
prev: true
---

# Telepítés véglegesítése

Now that PayloadLoader, Environment Loader and Aroma are installed, we are going to finalize the setup.

## További Homebrew appok

::: tip

All Homebrew applications are loaded from the Wii U Menu on Aroma.

:::

- **SaveMii Mod WUT Port** is a homebrew app that lets you manage your Wii U and vWii save data.
- **Bloopair** is an Aroma module that lets you wirelessly connect most popular Bluetooth capable controllers. See [this page](https://gbatemp.net/threads/bloopair-connect-controllers-from-other-consoles-natively.594289/) for more details.
- The **Homebrew Appstore** lets you browse and download homebrew apps directly from your Wii U.

### További Homebrew appok - Amire szükséged van

- The latest version of [SaveMii Mod WUT Port](https://wiiubru.com/appstore/zips/SaveMiiModWUTPort.zip).
- `wiiu-extracttosd.zip` of the [HB Appstore](https://github.com/fortheusers/hb-appstore/releases/).

### További Homebrew appok - Fájlok kicsomagolása az SD kártyára

1. Copy the contents of the newly downloaded `SaveMiiModWUTPort.zip` file to the root of your SD Card.
2. Copy the contents of the newly downloaded `wiiu-extracttosd.zip` file to the root of your SD Card.

## Ajánlott Plugin-ek

| Név                                                                                                                                                   | Leírás                                                                                                   | Telepítési lépések                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [FTPiiU Plugin](https://github.com/wiiu-env/ftpiiu_plugin/) ([Download](https://github.com/wiiu-env/ftpiiu_plugin/releases))       | FTP szervert futtat a háttérben.                                                         | 1. Extract the downloaded `ftpiiu_vX_X.zip` file. <br> 2. Copy the `ftpiiu.wps` to the `wiiu/environments/aroma/plugins` folder on the root of your SD Card.                                                                                                                                   |
| [SDCafiine](https://github.com/wiiu-env/sdcafiine_plugin/) ([Download](https://github.com/wiiu-env/sdcafiine_plugin/releases))     | Lehetővé teszi a játékok moddolását, a fájlok SD kártyára átirányításával.               | 1) Extract the downloaded `sdcafiine_vX_X_X.zip` file. <br> 2. Copy the `sdcafiine.wps` to the `wiiu/environments/aroma/plugins` folder on the root of your SD Card.                                                                                                                           |
| [Bloopair](https://github.com/GaryOderNichts/Bloopair/) ([Download](https://github.com/GaryOderNichts/Bloopair/releases))          | Lehetővé teszi az elterjed Bluetooth képes kontrollerek vezeték nélküli csatlakozatását. | 1. Extract the contents of the newly downloaded `Bloopair_vX.X.X.zip` file. <br> 2. Copy the `30_bloopair.rpx` to the `wiiu/environments/aroma/modules/setup/` folder on the root of your SD Card. <br> 3. Copy the `wiiu` folder to the root of your SD Card. |
| [Screenshot Plugin](https://github.com/wiiu-env/ScreenshotWUPS/) ([Download](https://github.com/wiiu-env/ScreenshotWUPS/releases)) | Lehetővé teszi a képernyőképed közvetlenül SD kártyára készítését.                       | 1) Extract the downloaded `screenshot_plugin_vX_X.zip` file. <br> 2. Copy the `screenshot.wps` to the `wiiu/environments/aroma/plugins` folder on the root of your SD Card.                                                                                                                    |

## Pretendo Network

A Pretendo a Nintendo Network helyettesítő szolgáltatása, amely a megszűnt online szolgáltatásokat hozza vissza. Emellett a Miiverse szolgáltatást is feléleszti a Juxtaposition-on keresztül. The official guide can be found [here](https://pretendo.network/docs/install/wiiu).

## Tiramisu bootolása (opcionális)

::: warning

Tiramisu is now archived, and was succeeded by Aroma and considered outdated. Nem kerül hozzá új homebrew fejlesztésre, és a szolgáltatások, mint a Pretendo befejezték a támogatását.

:::

Azonban ha szükséged lenne arra, hogy Tiramisu-ra bootolj, például egy legacy homebrew app miatt, a következőket tedd:

1. Download the latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
2. Copy the `wiiu` folder to the root of your SD Card.
   - The folder should merge with the existing `wiiu` folder if not done automatically.
3. Vedd ki az SD kártyát a számítógépedből, és dubd be a Wii U konzolodba.
4. Indítsd el az EnvironmentLoader-t.
   - Ha autobootolsz bele, akkor ez megtehető az X gomb nyomva tartása mellett bekapcsolt konzollal.
   - Nincs szükséged a PayloadLoader újratelepítésére, ha már telepítetted az Aromával.
5. Highlight the entry called `tiramisu` using the D-Pad.
6. Az A gomb megnyomásával indítsd el Tiramisu-t.
7. Az A gomb megnyomásával indítsd el a Wii U Menu-t.
   - Ha szeretnéd, hogy a konzol autobootoljon a Wii U Menu-be, amikor tölti a Tiramisu környezetet, nyomj Y-t.
8. Homebrew Launcher a Mii Maker app indításával tölthető be.
