# Dumpe Wii U spill fra disk
---
Ved å Dumpe en Wii U Disk, kan du installere en kopi av spillet til system NAND, eller en USB-enhet, slik at du kan spille det uten å sette inn disken.

?> Det krever et fungerende Homebrew oppsett. Så sørg først for å fullføre guiden for å installere CFW før du går videre.

!> Det er **ULOVLIG** å dele filer dumpet med denne guiden.  
Ikke bruk denne guiden til å dele spillene dine.

### Dumping og installasjon av Wii U disker

?> Det anbefales ikke å installere et spill til systemminnet (NAND) siden lagringsplassen er begrenset til enten 8gb eller 32gb avhengig av modellen din, det blir fort fullt hvis du ønsker å installere flere spill.

?> Når du installerer et spill til en USB-enhet, anbefaler vi at du bruker en ekstern harddisk istedenfor en USB-penn, siden de ikke er laget for kontinuerlig lesing og skriving, og vil brenne ut minnet fort. Hvis den eksterne harddisken din ikke har eget strømadapter, trenger du en Y-kabel for å koble den til to USB-porter i Wii U konsollen din.

!> In order to install to a USB device, it has to be formatted by the Wii U. Doing this will erase (delete) all contents (documents, pictures, videos, PC data) off of it, and prevent it from being used on another system unless you reformat it. This *does* include the vWii, meaning you will not be able to run Wii and GameCube disc images off the USB using USB loaders. To format, plug your USB HDD into the Wii U, power on your Wii U, your Wii U will prompt you to format your HDD. Bekreft med "Yes".

#### Dette Trenger Du {docsify-ignore}

- SD-kortet må ha nok plass til spillet du vil dumpe.
- Hvis du ønsker å installere til USB, så trenger du en USB harddisk (+ en Y-kabel hvis det trengs).
- Siste utgave av [WUP Installer GX2](https://wiiu.cdn.fortheusers.org/zips/wup_installer_gx2_wuhb.zip).
- [Wudd](https://wiiu.cdn.fortheusers.org/zips/wudd.zip) homebrew appen.

#### Instruksjoner {docsify-ignore}

1. Pakk ut `wup_installer_gx2_wuhb.zip` fila til roten av SD-kortet.
1. Pakk ut `wudd.zip` til roten av SD-kortet.
1. Ta SD-kortet ut av PCen og sett det inn i Wii U konsollen.
1. Start opp Wii U'en og boot Aroma.
1. Start Wii U menyen og kjør wudd.
1. Velg `Dump partition as .app`
1. Velg `Game` partisjonen for å starte dumping.
1. Når det er ferdig, gå ut av wudd tilbake til Wii U-menyen.
1. Sett SD-kortet ditt i PC'en din.
1. Kopier `GMXXXXXXXXXXXXXXXX` mappen fra `sd:/wudump/WUP-X-XXXX` til `install` mappen på SD-kortet.
    - Hvis `install` mappen ikke finnes, så opprett en ny en.
1. Løs ut og sett SD-kortet inn i Wii U-en.
1. Start Wii U menyen og kjør WUP Installer GX2.
1. Velg spillet ditt (`GMXXXXXXXXXXXXXXXX`), trykk `Install` og bekreft med `Yes`.
1. Velg "USB" for å installere til USB og "NAND" for å installere til NAND
1. Gå ut av WUP Installer GX2 tilbake til Wii U Menyen.
1. Nå er spillet ditt installert, og klart til å spille.
1. Ta SD-kortet ut av Wii U konsollen og sett den inn i PC'en din.
1. Slett `GMXXXXXXXXXXXXXXXX` mappen i `install` mappen på SD-kortet ditt for å frigjøre plass.

### Flytte spill til USB

?> Hvis du ikke vil ha spillet installert på NAND, så kan du bruke Wii U konsollens databehandling for å flytte spillet til en USB-enhet.

!> For å flytte spillet til en USB-enhet, må den være formatert av Wii U konsollen. Når du formaterer USB-enheten så slettes alt innhold og hindrer enheten i å brukes med en annet Wii U konsoll eller PC ol. med mindre du formaterer det på nytt til ett annet format.

1. Koble USB-enheten til Wii U konsollen din.
1. Slå på Wii U konsollen.
1. Wii U systemet vil spørre deg om å formatere USB-enheten din. Bekreft med "Yes".
1. Gå inn på systeminnstillinger.
1. Gå til `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`
1. Velg spillet og flytt all data (inkludert oppdateringer og DLC hvis dette er installert) over til USB-enheten.

### Flytte oppdateringer til USB

?> Hvis spillet ditt hadde DLC eller oppdateringer installert, må du overføre filene over til USB-enheten din. Du kan gjøre dette ved å bruke Wii U konsollens "data management".

1. Slå på Wii U konsollen
1. Gå inn på systeminnstillinger.
1. Gå til `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
1. Velg spillet ditt og flytt oppdateringen og DLC til USB-enheten.
