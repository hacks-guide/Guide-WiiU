# Tiramisu {docsify-ignore-all}

## Fullføre installasjon

Nå som PayloadLoader, Environment Loader og Tiramisu er installert, skal vi fullføre installasjonen.

Vi skal gjøre så Tiramisu environmentet starter automatisk når konsollen autobooter Heath and Safety Information Appen (eller når du manuelt kjører det hvis du velger å ikke autoboote det) og velge Wii U menu som default samt skaffe ekstra homebrew apper.

### Sette opp PayloadLoader, Environment Loader og Tiramisu

1. Slå på Wii U konsollen.
    - Environment Loader burde komme opp.
1. Ved å bruke D-Paden, naviger til `tiramisu` og trykk Y for å sette dette til default envrionment, så trykker du A for å kjøre Tiramisu.
    - Det kan hende du får ett rødt advarselvindu som forteller deg at oppdateringer ikke er blokkert ordentlig. Press A to continue anyway. Vi går gjennom hvordan man blokkerer oppdateringer i "Blokkere Systemoppdateringer" delen nedenfor.
    - To open the Environment Loader in the future, you have to hold X while your Wii U is booting up.
1. På Tiramisu Boot Selector, `Wii U Menu` burde allerede være valgt, trykk Y for å sette det til default autobooting option, så trykker du A for å komme inn i Wii U Menu.
    - For å åpne Tiramisu Boot Selector i fremtiden, må du holde START (+) mens Wii U konsollen slår seg på.

?> Når du har kommet inn i Tiramisu environment, kan du åpne Mii Maker appen når som helst for å komme inn i Homebrew Launcher. <br>Homebrew Launcher will be empty for first-time modders. Follow the rest of the guide to install apps into the Homebrew Launcher. <br>To get back into the Mii Maker, simply press the HOME button while in the Homebrew Launcher.

### Blokkere Systemoppdateringer
While Tiramisu's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. Hvis du får ett rødt advarselvindu mens du starter opp i Tiramisu, så betyr det at update mappen fortsatt er i systemet og det er anbefalt å slette den med [denne guiden](../block-updates).

### Ekstra Homebrew-apper

- **SaveMii Mod WUT Port** er en homebrew app som lar deg styre Wii-U og vWii save filer.
- **Bloopair** er en Tiramisu modul som lar deg koble trådløst til de mest populære Bluetooth kontrollene. Se [denne siden](https://gbatemp.net/threads/bloopair-connect-controllers-from-other-consoles-natively.594289/) for mer informasjon.
- **Homebrew Appstore** lar deg søke etter og laste ned homebrew apps direkte til Wii U konsollen.

### Ekstra Homebrew Apper - Dette Trenger Du

- Siste utgave av [SaveMii Mod WUT Port](https://wiiubru.com/appstore/zips/SaveMiiModWUTPort.zip).
- Siste utgave av [Bloopair](https://github.com/GaryOderNichts/Bloopair/releases).
- `wiiu-extracttosd.zip` fra [HB Appstore](https://github.com/fortheusers/hb-appstore/releases/).

### Ekstra Homebrew Apper - Pakke ut Filer to SD-Kortet

1. Pakk ut `SaveMiiModWUTPort.zip` fila til roten av SD-kortet.
1. Pakk ut `Bloopair_vX.X.X.zip` fila.  
   Kopier `30_bloopair.rpx` til `wiiu/environments/tiramisu/modules/setup/` mappen på roten av SD-kortet ditt.  
   Kopier `wiiu` mappa til roten av SD-kortet ditt.
1. Pakk ut `wiiu-extracttosd.zip` til roten av SD-kortet.

### Installing Aroma
Aroma is a work-in-progress environment with support for plugins, modules and homebrew bundles.  
Aroma can be installed additionally to Tiramisu, if you want to try out any of its features.

[**The Aroma guide can be found here**](../aroma/getting-started)
