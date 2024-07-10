# vWii Modifiserings Guide {docsify-ignore-all}

---&#x20;

## SD Forberedelser

Denne siden vil hjelpe deg med å modifisere vWii.

Vi starter med å plassere Homebrew filene du trenger på SD-kortet ditt.

?> **Merk**
SD-kortet må være FAT32 formatert. Hvis SD-kortet ikke er FAT32 formatert, bruk [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) med 32k (32768) Allocation unit size til å formatere det riktig. **Ikke** sett navnet på SD-kortet til `wiiu`, det vil skape problemer med noen homebrew apper.

?> Hvis du har hacket Wii U'en din tidligere, kan du bruke det samme SD-kortet i denne prosessen.

?> I motsetning til Wii U homebrew, vWii apper skal inn i en separat `apps` mappe på roten av SD-kortet. Compat Installer er den **eneste** Wii U appen her.

### Dette trenger du

- Siste utgave av [Aroma for your café](https://aroma.foryour.cafe).
  - Trykk på `Download Payloads` og `Download Base Aroma`.
  - Les gjennom trinnene og marker checkboksene.
  - Hvis du allerede har installert Aroma, trenger du ikke å laste den ned på nytt.
- Siste utgave av [Compat Title Installer](https://hbas-frontend.b-cdn.net/wiiu/CompatTitleInstaller).
- <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>. ([Kilde](https://github.com/Lazr1026/Patched-IOS80-Installer-for-vWii))
- <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.

## Instruksjoner

1. Sett SD-kortet ditt i PC'en din.
2. Pakk ut `apps` mappen fra `Patched_IOS80_Installer_for_vWii.zip` til roten av SD kortet.
3. Pakk ut `d2x-cios-installer` fra `d2x_cIOS_Installer.zip` fila til apps mappen på roten av SD-kortet.
4. Pakk ut Base Aroma og payloads `.zip` filene til roten av SD-kortet.
5. Pakk ut `CompatTitleInstaller.zip` fila til roten av SD-kortet.
6. Ta SD-kortet ut av PC'en og sett den inn i Wii U konsollen.
