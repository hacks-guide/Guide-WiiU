# Aroma {docsify-ignore-all}

## Fullføre installasjon

Nå som Aroma er på SD-kortet, er det noen flere ting vi må sette opp for å fullføre installasjonen.

### Boote inn i Aroma

1. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.
1. Start EnvironmentLoader.
    - Hvis du autobooter inn i Tiramisu, kan du gjøre dette ved å holde `X` inne mens konsollen slår seg på.
1. Highlight `aroma` ved å bruke D-Padden.
    - For å få konsollen til å autoboote Aroma trykk `Y`.
1. Start Aroma ved å trykke `A`.
    - Hvis ett rødt varselbilde forteller deg at du ikke har blokkert oppdateringer riktig, vil du kanskje blokkere oppdateringer ved å følge [denne guiden](../block-updates).
1. På Boot Selector, `Wii U Menu` burde allerede være valgt, trykk Y for å sette det til default autobooting option, så trykker du A for å komme inn i Wii U Menu.
    - For å åpne Boot Selector i fremtiden, må du holde START (+) mens Aroma booter.

Nå kjører Aroma. Eventuelle apper du har på SD-kortet vil vises på Wii U-menu.

?> **Aroma støtter ikke Homebrew Launcher**  
Start apper fra Wii U-menyen ved å bruke `homebrew_on_menu` plugin.

Du kan nå åpne Plugin Configuration Menu ved å trykke `L + Down + SELECT (-)` på GamePadden eller Pro Controller (eller `B + Down + Minus (-)` for WiiMotes).

### Installere apper, modules og plugins

Aroma kommer allerede med flere brukbare plugins og modules.  
Du kan også installere flere Aroma kompatible apper, modules og plugins. Under finner du en liste med forskjellige anbefalinger.

| Navn                                                                                                                               | Beskrivelse                                                               | Installasjons Instruksjoner                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [FTPiiU Plugin](https://github.com/wiiu-env/ftpiiu_plugin/) ([Download](https://github.com/wiiu-env/ftpiiu_plugin/releases))       | Kjører en FTP-server i bakgrunnen.                                        | 1. Pakk ut `ftpiiu_vX_X.zip`. <br> 2. Kopier `ftpiiu.wps` til `wiiu/environments/aroma/plugins` mappen på roten av SD-kortet.                                                                            |
| [SDCafiine](https://github.com/wiiu-env/sdcafiine_plugin/) ([Download](https://github.com/wiiu-env/sdcafiine_plugin/releases))     | Lar deg modde spill ved å omdirigere filer fra SD-kortet.                 | 1. Pakk ut `sdcafiine_vX_X_X.zip`. <br> 2. Kopier `sdcafiine.wps` til `wiiu/environments/aroma/plugins` mappen på roten av SD-kortet.                                                                    |
| [Bloopair](https://github.com/GaryOderNichts/Bloopair/) ([Download](https://github.com/GaryOderNichts/Bloopair/releases))          | Lar deg bruke mesteparten av populære Bluetooth kontrollere på konsollen. | 1. Pakk ut `Bloopair_vX.X.X.zip`. <br> 2. Kopier `30_bloopair.rpx` til `wiiu/environments/aroma/modules/setup/` mappen på roten av SD-kortet. <br> 3. Kopier `wiiu` mappen til roten av SD-kortet. |
| [Screenshot Plugin](https://github.com/wiiu-env/ScreenshotWUPS/) ([Download](https://github.com/wiiu-env/ScreenshotWUPS/releases)) | Lar deg ta skjermbilder og lagre dem direkte i SD-kortet.                 | 1. Pakk ut `screenshot_plugin_vX_X.zip`. <br> 2. Kopier `screenshot.wps` til `wiiu/environments/aroma/plugins` mappen til roten av SD-kortet.                                                            |

### Boote inn i Tiramisu

Hvis du trenger å boote inn i Tiramisu, for eksempel, for å kjøre homebrew apper som ikke støttes av Aroma, gjør du bare følgende:

1. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.
1. Start EnvironmentLoader.
    - Hvis du autobooter inn i det, kan du gjøre dette ved å holde `X` inne mens konsollen slår seg på.
1. Highlight `tiramisu` ved å bruke D-Padden.
    - For å få konsollen til å autoboote Tiramisu trykk `Y`.
1. Start Tiramisu ved å trykke `A`.
