# Tiramisu {docsify-ignore-all}

## Forberede SD-kortet

Her vil vi plassere de nødvendige CFW-filene og noen ekstra homebrew filer på SD-kortet.

?> **Merk** SD-kortet ditt må formateres til FAT32. Hvis den ikke er formatert til FAT32, bør du bruke [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) med 32k (32768) "Allocation unit size" for å formatere den. </br> **Ikke** sett navnet på SD-kortet til `wiiu`, det vil skape problemer med noen homebrew apper.

?> **Hvis du allerede har en eldre CFW satt opp** </br> For **CBHC** brukere: gå til [Uninstall CBHC](../uninstall-cbhc) siden og avinstaller CBHC. </br> For **Haxchi** brukere: avinstaller Haxchi appen fra Data Management i System Settings. </br> For **Mocha CFW (Indexiine)** brukere: gå ttil [Uninstall Indexiine](../uninstall-indexiine) siden for å avinstallere Indexiine. </br> For **Mocha CFW (Online Exploit)** brukere: du trenger ikke gjøre noenting for å følge denne guiden.

### Dette trenger du

- Nyeste utgave av [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Velg `Nanddumper`, `PayloadLoader Installer` og `Base-Tiramisu`.
- Nyeste utgave av [Sigpatches Module](https://github.com/marco-calautti/SigpatchesModuleWiiU/releases).
    - Du må laste ned `01_sigpatches.rpx` filen.

### Instruksjoner

1. Sett SD-kortet ditt i PC'en din.
1. **Extract** and copy the contents of the newly downloaded Tiramisu *`.zip`* file to the root of your SD Card.
1. Kopier `01_sigpatches.rpx` fila til `/wiiu/environments/tiramisu/modules/setup` på SD-kortet.

?> Hvis pc'en din spør deg om å erstatte eksisterende filer på SD-kortet, skal du trykke ja.
