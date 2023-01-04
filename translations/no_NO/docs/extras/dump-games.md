# Dumpe Wii U spill fra disk
---
Ved å Dumpe en Wii U Disk, kan du installere en kopi av spillet til system NAND, eller en USB-enhet, slik at du kan spille det uten å sette inn disken.

?> Det krever et fungerende Homebrew oppsett. Så sørg først for å fullføre guiden for å installere CFW før du går videre.

!> Det er **ULOVLIG** å dele filer dumpet med denne guiden.  
Ikke bruk denne guiden til å dele spillene dine.

### Dumping og installasjon av Wii U disker

?> Det anbefales ikke å installere et spill til systemminnet (NAND) siden lagringsplassen er begrenset til enten 8gb eller 32gb avhengig av modellen din, det blir fort fullt hvis du ønsker å installere flere spill.

?> Når du installerer et spill til en USB-enhet, anbefaler vi at du bruker en ekstern harddisk istedenfor en USB-penn, siden de ikke er laget for kontinuerlig lesing og skriving, og vil brenne ut minnet fort. Hvis den eksterne harddisken din ikke har eget strømadapter, trenger du en Y-kabel for å koble den til to USB-porter i Wii U konsollen din.

!> For å installere spillet til en USB-enhet, må den være formatert av Wii U konsollen. Når du formaterer USB-enheten så slettes alt innhold og hindrer enheten i å brukes med en annet Wii U konsoll eller PC ol. med mindre du formaterer det på nytt til ett annet format. For å gjøre dette, plugg inn USB harddisken i Wii U konsollen, og så slå på konsollen, du vil da få beskjed om å formatere harddisken. Bekreft med "Yes".

#### Dette Trenger Du {docsify-ignore}

- SD-kortet må ha nok plass til spillet du vil dumpe.
- Hvis du ønsker å installere til USB, så trenger du en USB harddisk (+ en Y-kabel hvis det trengs).
- Siste utgave av [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- Homebrew appen [wudd](https://wiiubru.com/appstore/zips/wudd.zip).

#### Instruksjoner {docsify-ignore}

1. Pakk ut `wup_installer_gx2.zip` til roten av SD-kortet.
1. Pakk ut `wudd.zip` til roten av SD-kortet.
1. Ta SD-kortet ut av PCen og sett det inn i Wii U konsollen.
1. Power on your Wii U and boot into Tiramisu.
1. Start Homebrew Launcher og kjør wudd.
1. Endre dump plassering til SD-kortet.
1. Velg `Dump partition as .app`
1. Velg `Game` partisjonen for å starte dumping.
1. Når det er ferdig, gå ut av wudd og gå tilbake til Wii U-menyen.
1. Sett SD-kortet ditt i PC'en din.
1. Copy the `GMXXXXXXXXXXXXXXXX` folder from `sd:/wudump/WUP-X-XXXX` to the `install` folder on your SD Card.
    - If the `install` folder does not exist, create it.
1. Løs ut og sett SD-kortet inn i Wii U-en.
1. Start Homebrew Launcher og kjør WUP Installer GX2.
1. Velg spillet ditt (`GMXXXXXXXXXXXXXXXX`), trykk `Install` og bekreft med `Yes`.
1. Velg "USB" for å installere til USB og "NAND" for å installere til NAND
1. Når prosessen er fullført, trykk på HOME for å gå tilbake til Homebrew Launcher.
1. Avslutt Homebrew Launcher og gå til Wii U-menyen.
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
