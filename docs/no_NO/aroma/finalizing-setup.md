---
prev: true
---

# Fullføre installasjon

Now that PayloadLoader, Environment Loader and Aroma are installed, we are going to finalize the setup.

## Ekstra Homebrew-apper

::: tip

All Homebrew applications are loaded from the Wii U Menu on Aroma.

:::

- **SaveMii Mod WUT Port** is a homebrew app that lets you manage your Wii U and vWii save data.
- **Bloopair** is an Aroma module that lets you wirelessly connect most popular Bluetooth capable controllers. See [this page](https://gbatemp.net/threads/bloopair-connect-controllers-from-other-consoles-natively.594289/) for more details.
- The **Homebrew Appstore** lets you browse and download homebrew apps directly from your Wii U.

### Ekstra Homebrew Apper - Dette Trenger Du

- The latest version of [SaveMii Mod WUT Port](https://wiiu.cdn.fortheusers.org/zips/SaveMiiModWUTPort.zip).
- `wiiu-extracttosd.zip` of the [HB Appstore](https://github.com/fortheusers/hb-appstore/releases/).

### Ekstra Homebrew Apper - Pakke ut Filer to SD-Kortet

1. Copy the contents of the newly downloaded `SaveMiiModWUTPort.zip` file to the root of your SD Card.
2. Copy the contents of the newly downloaded `wiiu-extracttosd.zip` file to the root of your SD Card.

## Anbefalte Plugins

| Navn                                                                                                                                                  | Beskrivelse                                                                               | Installasjons Instruksjoner                                                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [FTPiiU Plugin](https://github.com/wiiu-env/ftpiiu_plugin/) ([Download](https://github.com/wiiu-env/ftpiiu_plugin/releases))       | Kjører en FTP-server i bakgrunnen.                                        | 1. Extract the downloaded `ftpiiu_vX_X.zip` file. <br> 2. Copy the `ftpiiu.wps` to the `wiiu/environments/aroma/plugins` folder on the root of your SD Card.                                                                                                                                   |
| [SDCafiine](https://github.com/wiiu-env/sdcafiine_plugin/) ([Download](https://github.com/wiiu-env/sdcafiine_plugin/releases))     | Lar deg modde spill ved å omdirigere filer fra SD-kortet.                 | 1) Extract the downloaded `sdcafiine_vX_X_X.zip` file. <br> 2. Copy the `sdcafiine.wps` to the `wiiu/environments/aroma/plugins` folder on the root of your SD Card.                                                                                                                           |
| [Bloopair](https://github.com/GaryOderNichts/Bloopair/) ([Download](https://github.com/GaryOderNichts/Bloopair/releases))          | Lar deg bruke mesteparten av populære Bluetooth kontrollere på konsollen. | 1. Extract the contents of the newly downloaded `Bloopair_vX.X.X.zip` file. <br> 2. Copy the `30_bloopair.rpx` to the `wiiu/environments/aroma/modules/setup/` folder on the root of your SD Card. <br> 3. Copy the `wiiu` folder to the root of your SD Card. |
| [Screenshot Plugin](https://github.com/wiiu-env/ScreenshotWUPS/) ([Download](https://github.com/wiiu-env/ScreenshotWUPS/releases)) | Lar deg ta skjermbilder og lagre dem direkte i SD-kortet.                 | 1) Extract the downloaded `screenshot_plugin_vX_X.zip` file. <br> 2. Copy the `screenshot.wps` to the `wiiu/environments/aroma/plugins` folder on the root of your SD Card.                                                                                                                    |

## Pretendo Network

Pretendo er ett uoffisielt alternativ til Nintendo Network, som gir tilbake online funksjoner som er på vei til å gå bort. Den reaktiverer også Miiverse service, via sidestilling. The official guide can be found [here](https://pretendo.network/docs/install/wiiu).

## Boote Tiramisu (valgfritt)

::: warning

Tiramisu is now archived, and was succeeded by Aroma and considered outdated. Det blir ikke mer Homebrew utviklet for det, og tjenester som Pretendo har sluttet å støtte det.

:::

Derimot, hvis du finner ett behov for å fortsatt bruke Tiramisu, for eksempel, for å bruke eldre Homebrew apper, så kan du gjøre følgende:

1. Download the latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
2. Copy the `wiiu` folder to the root of your SD Card.
   - The folder should merge with the existing `wiiu` folder if not done automatically.
3. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.
4. Start EnvironmentLoader.
   - Hvis du autobooter inn i det, kan du gjøre dette ved å holde X inne mens konsollen slår seg på.
   - Du trenger ikke installere PayloadLoader på nytt hvis du allerede har gjort det med Aroma.
5. Highlight the entry called `tiramisu` using the D-Pad.
6. Start Tiramisu ved å trykke A.
7. Start Wii U Menyen ved å trykke A.
   - For å få konsollen til å autoboote Wii U Menyen mens den åpner Tiramisu environmentet, trykk Y.
8. Du kan starte Homebrew Launcher ved å kjøre Mii Maker appen.
