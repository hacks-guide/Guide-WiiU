# Tiramisu {docsify-ignore-all}

## Fullføre installasjon

Nå som PayloadLoader, Environment Loader og Tiramisu er installert, skal vi fullføre installasjonen.

Vi skal gjøre så Tiramisu environmentet starter automatisk når konsollen autobooter Heath and Safety Information Appen (eller når du manuelt kjører det hvis du velger å ikke autoboote det) og velge Wii U menu som default samt skaffe ekstra homebrew apper.

### Sette opp PayloadLoader, Environment Loader og Tiramisu

1. Slå på Wii U konsollen.
    - Environment Loader burde komme opp.
1. Ved å bruke D-Paden, naviger til `tiramisu` og trykk Y for å sette dette til default envrionment, så trykker du A for å kjøre Tiramisu.
    - You might get a red warning screen telling you that updates aren't blocked properly. Press A to continue anyways. We're going to block updates in the "Blocking Updates" section below.
    - To open the Environment Loader selector in the future, you have hold X while your Wii U is booting up.
1. På Tiramisu Boot Selector, `Wii U Menu` burde allerede være valgt, trykk Y for å sette det til default autobooting option, så trykker du A for å komme inn i Wii U Menu.
    - For å åpne Tiramisu Boot Selector i fremtiden, må du holde START (+) mens Wii U konsollen slår seg på.

?> Når du har kommet inn i Tiramisu environment, kan du åpne Mii Maker appen når som helst for å komme inn i Homebrew Launcher. <br>For å gå tilbake til Mii Maker, trykk HOME knappen mens du er i Homebrew Launcher.

### Blokkere Systemoppdateringer
While Tiramisu already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. If you get a red warning screen while booting into Tiramisu, the update folder still exists and it is recommended to delete it using [this guide](../block-updates).

### Additional Homebrew Apps

- **SaveMii Mod WUT Port** is a homebrew app that lets you manage your Wii U and vWii save data.
- **Bloopair** er en Tiramisu modul som lar deg koble trådløst til de mest populære Bluetooth kontrollene. Se [denne siden](https://gbatemp.net/threads/bloopair-connect-controllers-from-other-consoles-natively.594289/) for mer informasjon.
- **Homebrew Appstore** lar deg søke etter og laste ned homebrew apps direkte til Wii U konsollen.

### Additional Homebrew Apps - What You Need

- The latest version of [SaveMii Mod WUT Port](https://wiiubru.com/appstore/zips/SaveMiiModWUTPort.zip).
- Siste utgave av [Bloopair](https://github.com/GaryOderNichts/Bloopair/releases).
- `wiiu-extracttosd.zip` fra [HB Appstore](https://github.com/fortheusers/hb-appstore/releases/).

### Additional Homebrew Apps - Extracting Files to the SD Card

1. Copy the contents of the newly downloaded `SaveMiiModWUTPort.zip` file to the root of your SD Card.
1. Extract the contents of the newly downloaded `Bloopair_vX.X.X.zip` file.  
   Copy the `30_bloopair.rpx` to the `wiiu/environments/tiramisu/modules/setup/` folder on the root of your SD Card.  
   Copy the `wiiu` folder to the root of your SD Card.
1. Copy the contents of the newly downloaded `wiiu-extracttosd.zip` file to the root of your SD Card.
