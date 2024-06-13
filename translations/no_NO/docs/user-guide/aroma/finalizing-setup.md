# Aroma {docsify-ignore-all}

## Fullføre installasjon

Nå som PayloadLoader, Environment Loader og Aroma er installert, skal vi fullføre installasjonen.

### Ekstra Homebrew-apper

?> Alle Homebrew appene startes fra Wii U Menyen i Aroma.

- **SaveMii Mod WUT Port** er en homebrew app som lar deg endre Wii-U og vWii save filer.
- **Bloopair** er en Aroma modul som lar deg koble trådløst til de mest populære Bluetooth kontrollene. Se [denne siden](https://gbatemp.net/threads/bloopair-connect-controllers-from-other-consoles-natively.594289/) for mer informasjon.
- **Homebrew Appstore** lar deg søke etter og laste ned homebrew apps direkte til Wii U konsollen.

### Ekstra Homebrew Apper - Dette Trenger Du

- Siste utgave av [SaveMii Mod WUT Port](https://wiiubru.com/appstore/zips/SaveMiiModWUTPort.zip).
- `wiiu-extracttosd.zip` fra [HB Appstore](https://github.com/fortheusers/hb-appstore/releases/).

### Ekstra Homebrew Apper - Pakke ut Filer to SD-Kortet

1. Pakk ut `SaveMiiModWUTPort.zip` fila til roten av SD-kortet.
1. Pakk ut `wiiu-extracttosd.zip` til roten av SD-kortet.

### Anbefalte Plugins

| Navn                                                                                                                               | Beskrivelse                                                               | Installasjons Instruksjoner                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [FTPiiU Plugin](https://github.com/wiiu-env/ftpiiu_plugin/) ([Download](https://github.com/wiiu-env/ftpiiu_plugin/releases))       | Kjører en FTP-server i bakgrunnen.                                        | 1. Pakk ut `ftpiiu_vX_X.zip`. <br> 2. Kopier `ftpiiu.wps` til `wiiu/environments/aroma/plugins` mappen på roten av SD-kortet.                                                                            |
| [SDCafiine](https://github.com/wiiu-env/sdcafiine_plugin/) ([Download](https://github.com/wiiu-env/sdcafiine_plugin/releases))     | Lar deg modde spill ved å omdirigere filer fra SD-kortet.                 | 1. Pakk ut `sdcafiine_vX_X_X.zip`. <br> 2. Kopier `sdcafiine.wps` til `wiiu/environments/aroma/plugins` mappen på roten av SD-kortet.                                                                    |
| [Bloopair](https://github.com/GaryOderNichts/Bloopair/) ([Download](https://github.com/GaryOderNichts/Bloopair/releases))          | Lar deg bruke mesteparten av populære Bluetooth kontrollere på konsollen. | 1. Pakk ut `Bloopair_vX.X.X.zip`. <br> 2. Kopier `30_bloopair.rpx` til `wiiu/environments/aroma/modules/setup/` mappen på roten av SD-kortet. <br> 3. Kopier `wiiu` mappen til roten av SD-kortet. |
| [Screenshot Plugin](https://github.com/wiiu-env/ScreenshotWUPS/) ([Download](https://github.com/wiiu-env/ScreenshotWUPS/releases)) | Lar deg ta skjermbilder og lagre dem direkte i SD-kortet.                 | 1. Pakk ut `screenshot_plugin_vX_X.zip`. <br> 2. Kopier `screenshot.wps` til `wiiu/environments/aroma/plugins` mappen til roten av SD-kortet.                                                            |

### Pretendo Network

Pretendo er ett uoffisielt alternativ til Nintendo Network, som gir tilbake online funksjoner som er på vei til å gå bort. Den reaktiverer også Miiverse service, via sidestilling. Den offisielle guiden kan du lese gjennom [her](https://pretendo.network/docs/install/wiiu).

### Boote Tiramisu (valgfritt)

?> Tiramisu er arkivert, og Aroma har tatt over. Det blir ikke mer Homebrew utviklet for det, og tjenester som Pretendo har sluttet å støtte det.

Derimot, hvis du finner ett behov for å fortsatt bruke Tiramisu, for eksempel, for å bruke eldre Homebrew apper, så kan du gjøre følgende:

1. last ned nyeste utgave av [Tiramisu for your café](https://tiramisu.foryour.cafe).
1. Kopier `wiiu` mappen til roten av SD-kortet.
    - Mappen burde merge med `wiiu` mappen hvis det ikke blir gjort automatisk.
1. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.
1. Start EnvironmentLoader.
    - Hvis du autobooter inn i det, kan du gjøre dette ved å holde X inne mens konsollen slår seg på.
    - Du trenger ikke installere PayloadLoader på nytt hvis du allerede har gjort det med Aroma.
1. Highlight `tiramisu` ved å bruke D-Padden.
1. Start Tiramisu ved å trykke A.
1. Start Wii U Menyen ved å trykke A.
    - For å få konsollen til å autoboote Wii U Menyen mens den åpner Tiramisu environmentet, trykk Y.
1. Du kan starte Homebrew Launcher ved å kjøre Mii Maker appen.
