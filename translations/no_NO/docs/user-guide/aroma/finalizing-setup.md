# Aroma {docsify-ignore-all}

## Fullføre installasjon

Now that PayloadLoader, Environment Loader and Aroma are installed, we are going to finalize the setup.

### Blokkere Systemoppdateringer
While Aroma's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. Hvis du får ett rødt advarselvindu mens du starter opp i Tiramisu, så betyr det at update mappen fortsatt er i systemet og det er anbefalt å slette den med [denne guiden](../block-updates).

### Ekstra Homebrew-apper

?> All Homebrew applications are loaded from the Wii U Menu on Aroma.

- **SaveMii Mod WUT Port** er en homebrew app som lar deg styre Wii-U og vWii save filer.
- **Bloopair** is an Aroma module that lets you wirelessly connect most popular Bluetooth capable controllers. Se [denne siden](https://gbatemp.net/threads/bloopair-connect-controllers-from-other-consoles-natively.594289/) for mer informasjon.
- **Homebrew Appstore** lar deg søke etter og laste ned homebrew apps direkte til Wii U konsollen.

### Ekstra Homebrew Apper - Dette Trenger Du

- Siste utgave av [SaveMii Mod WUT Port](https://wiiubru.com/appstore/zips/SaveMiiModWUTPort.zip).
- `wiiu-extracttosd.zip` fra [HB Appstore](https://github.com/fortheusers/hb-appstore/releases/).

### Ekstra Homebrew Apper - Pakke ut Filer to SD-Kortet

1. Pakk ut `SaveMiiModWUTPort.zip` fila til roten av SD-kortet.
1. Pakk ut `wiiu-extracttosd.zip` til roten av SD-kortet.

### Recommended Plugins

| Navn                                                                                                                               | Beskrivelse                                                               | Installasjons Instruksjoner                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [FTPiiU Plugin](https://github.com/wiiu-env/ftpiiu_plugin/) ([Download](https://github.com/wiiu-env/ftpiiu_plugin/releases))       | Kjører en FTP-server i bakgrunnen.                                        | 1. Pakk ut `ftpiiu_vX_X.zip`. <br> 2. Kopier `ftpiiu.wps` til `wiiu/environments/aroma/plugins` mappen på roten av SD-kortet.                                                                            |
| [SDCafiine](https://github.com/wiiu-env/sdcafiine_plugin/) ([Download](https://github.com/wiiu-env/sdcafiine_plugin/releases))     | Lar deg modde spill ved å omdirigere filer fra SD-kortet.                 | 1. Pakk ut `sdcafiine_vX_X_X.zip`. <br> 2. Kopier `sdcafiine.wps` til `wiiu/environments/aroma/plugins` mappen på roten av SD-kortet.                                                                    |
| [Bloopair](https://github.com/GaryOderNichts/Bloopair/) ([Download](https://github.com/GaryOderNichts/Bloopair/releases))          | Lar deg bruke mesteparten av populære Bluetooth kontrollere på konsollen. | 1. Pakk ut `Bloopair_vX.X.X.zip`. <br> 2. Kopier `30_bloopair.rpx` til `wiiu/environments/aroma/modules/setup/` mappen på roten av SD-kortet. <br> 3. Kopier `wiiu` mappen til roten av SD-kortet. |
| [Screenshot Plugin](https://github.com/wiiu-env/ScreenshotWUPS/) ([Download](https://github.com/wiiu-env/ScreenshotWUPS/releases)) | Lar deg ta skjermbilder og lagre dem direkte i SD-kortet.                 | 1. Pakk ut `screenshot_plugin_vX_X.zip`. <br> 2. Kopier `screenshot.wps` til `wiiu/environments/aroma/plugins` mappen til roten av SD-kortet.                                                            |

### Pretendo Network

Pretendo is a replacement service for the Nintendo Network, which brings back online services as they are set to be discontinued. It also revives the Miiverse service, via juxtaposition. The official guide can be found [here](https://pretendo.network/docs/install/wiiu).

### Booting Tiramisu (optional)

?> Tiramisu is now archived, and was succeeded by Aroma and considered outdated. No more Homebrew will be developed for it, and services like Pretendo have ended support for it.

However, if you find the need to boot into Tiramisu, for example, to use a legacy Homebrew app, do the following:

1. Download the latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
1. Kopier `wiiu` mappen til roten av SD-kortet.
    - The folder should merge with the existing `wiiu` folder if not done automatically.
1. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.
1. Start EnvironmentLoader.
    - If you're autobooting into it, this can be done by powering on your console and holding X.
    - You do not need to reinstall the PayloadLoader if you already did so with Aroma.
1. Highlight `tiramisu` ved å bruke D-Padden.
1. Launch Tiramisu by pressing A.
1. Launch the Wii U Menu by pressing A.
    - To make the console autoboot the Wii U Menu when loading the Tiramisu environment, press Y.
1. Homebrew Launcher can be loaded by launching the Mii Maker app.
