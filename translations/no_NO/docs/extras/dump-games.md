# Dumpe Wii U spill fra disk
---
Ved å Dumpe en Wii U Disk, kan du installere en kopi av spillet til system NAND, eller en USB-enhet, slik at du kan spille det uten å sette inn disken.

?> Det krever et fungerende Homebrew oppsett. Så sørg først for å fullføre hovedguiden om å installere CFW før du følger dette.

### Instruksjoner

<!-- tabs:start -->

#### **Installer til NAND**

?> Installere et spill til systemminnet (NAND) anbefales ikke ettersom lagringsplassen er begrenset til enten 8 eller 32 GB avhengig av modellen din, det blir fort fullt hvis du ønsker å installere flere spill.

### Dette trenger du

- SD-kortet må ha nok plass til spillet du vil dumpe.
- Siste utgave av [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- Homebrew appen [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip)

### Instruksjoner

1. Pakk ut `wup_installer_gx2.zip` til roten av SD-kortet.
1. Pakk ut `disc2app.zip` til roten av SD-kortet.
1. Ta SD-kortet ut av PCen og sett det inn i Wii U konsollen.
1. Slå på Wii U konsollen.
1. Ta ut spill-disken din hvis du har satt den inn
1. Start Homebrew Launcher og kjør disc2app appen.
1. Trykk på A knappen for å starte dumpingprosessen til SD-kortet.
1. Når du blir bedt om det, sett inn spill-disken du vil dumpe
1. Når prosessen er fullført, vil Wii U'en gå tilbake til Wii U-menyen.
1. Start Homebrew Launcher og kjør WUP Installer GX2 appen.
1. Velg spillet ditt (`WUP-X-XXXX`), trykk `Install` og bekreft med `Yes`.
1. Velg NAND som installasjonsdestinasjon.
1. Når prosessen er fullført, vil Wii U'en gå tilbake til Wii U-menyen.
1. Nå er spillet ditt installert, og klart til å spilles.
1. Ta SD-kortet ut av Wii U konsollen og den inn i PC'en din.
1. Slett `WUP-X-XXXXXX` mappen i `install` mappen på SD-kortet ditt for å frigjøre plass.

#### **Installer til USB**

?> Når du installerer et spill til en USB-enhet, anbefaler vi at du bruker en ekstern harddisk istedenfor en USB-penn, siden de ikke blir optimalisert for kontinuerlig lesing og skriving, og vil brenne ut minnet fort. Hvis den eksterne harddisken din ikke bruker strømadapter, trenger du en Y-kabel for å koble den til to USB-porter i Wii U konsollen.

!> For å installere til en USB-enhet må den bli formatert av Wii U konsollen. Når du formaterer USB-enheten så slettes alt innhold og hindrer enheten i å brukes med en annen Wii U konsoll eller PC ol. med mindre du formaterer det på nytt til ett tradisjonelt format.

### Dette trenger du

- SD-kortet må ha nok plass til spillet du vil dumpe.
- En USB-lagringsenhet (+ en Y-kabel hvis nødvendig)
- Siste utgave av [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- Homebrew appen [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip)

### Instruksjoner

1. Pakk ut `wup_installer_gx2.zip` til roten av SD-kortet.
1. Pakk ut `disc2app.zip` til roten av SD-kortet.
1. Ta SD-kortet ut av PCen og sett det inn i Wii U konsollen.
1. Koble USB-lagringsenheten til Wii U konsollen din.
1. Slå på Wii U konsollen.
1. Wii U systemet vil spørre deg om å formatere din HDD. Bekreft med "Yes".
1. Ta ut spill-disken din hvis du har satt den inn
1. Start Homebrew Launcher og kjør disc2app appen.
1. Trykk på A knappen for å starte dumpingprosessen til SD-kortet.
1. Når du blir bedt om det, sett inn spill-disken du vil dumpe
1. Når prosessen er fullført, vil Wii U'en gå tilbake til Wii U-menyen.
1. Start Homebrew Launcher og kjør WUP Installer GX2 appen.
1. Velg spillet ditt (`WUP-X-XXXX`), trykk `Install` og bekreft med `Yes`.
1. Velg USB som installasjonsdestinasjon.
1. Når prosessen er fullført, vil Wii U'en gå tilbake til Wii U-menyen.
1. Nå er spillet ditt installert, og klart til å spilles.
1. Ta SD-kortet ut av Wii U konsollen og den inn i PC'en din.
1. Slett `WUP-X-XXXXXX` mappen i `install` mappen på SD-kortet ditt for å frigjøre plass.

### Flytte oppdateringer/DLC til USB

?> Hvis spillet ditt hadde DLC eller oppdateringer installert, må du overføre filene over til USB-enheten din. Du kan gjøre dette ved å bruke Wii U konsollens "data management".

1. Slå på Wii U konsollen
1. Gå inn på systeminnstillinger.
1. Navigér til `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
1. Velg spillet ditt og flytt oppdateringen og DLC til USB-enheten.

#### **Installer fra USB**

?> Hvis du ikke har nok plass på SD-kortet, så kan du bruke en avansert teknikk for å installere spill dumper fra en USB-enhet. Dette er en tungvint metode og man kan bare installere spillet i systemminnet (NAND).

### Dette trenger du
- En USB-lagringsenhet (+en Y-kabel hvis nødvendig) med nok lagringsplass til å ta imot spillet du vil dumpe.
- Siste utgave av [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- Homebrew appen [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip).
- Homebrew appen [MochaFAT32](https://www.wiiubru.com/appstore/zips/mocha_fat32.zip).
- [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4) Versjon 1.4
  - Du må laste ned `homebrew_launcher.v.1.4.zip`.

### Instruksjoner

?> **Merk** USB-lagringsenheten må formateres som FAT32. Hvis den ikke er formatert til FAT32, bruk [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) med 32k (32768) Allocation unit size for å formatere den.

1. Pakk ut `homebrew_launcher.v.1.4.zip` til roten av din USB-enhet.
1. Pakk ut `wup_installer_gx2.zip` til roten av din USB-enhet.
1. Pakk ut `disc2app.zip` til roten av USB-enheten din.
1. Pakk ut `mocha_fat32.zip` til roten av SD-kortet.
1. Ta SD-kortet ut av PC'en og sett den inn i Wii U-konsollen.
1. Slå på Wii U konsollen.
1. Koble til din USB-lagringsenhet. Wii U konsollen vil spørre deg om å formatere. Avbryt med "No"!
1. Start Homebrew Launcher og kjør MochaFAT32 appen.
1. I konfigurasjonsmenyen setter du følgende innstillinger:
  - Config view mode: default
  - Skip this menu on launch: on
  - Don't relaunch OS: off
  - Launch System Menu: on
  - RedNAND: off
1. Konsollen vil gå tilbake til Wii U-menyen og erstatte SD-kortet med USB-enheten.
1. Start Homebrew Launcher og kjør disc2app appen.
1. Ta ut spill disken hvis du har satt den inn i konsollen og trykk på A knappen for å starte dumping-prosessen.
1. Når du blir bedt om det, sett inn spill-disken du vil dumpe.
1. Når prosessen er fullført, vil Wii U'en gå tilbake til Wii U-menyen.
1. Start Homebrew Launcher og kjør WUP Installer GX2 appen.
1. Velg spillet ditt (`WUP-X-XXXX`), trykk `Install` og bekreft med `Yes`.
1. Velg NAND som installasjonsdestinasjon.
1. Når prosessen er fullført, vil Wii U'en gå tilbake til Wii U-menyen.
1. Nå er spillet ditt installert, og klart til å spilles.
1. Ta USB-enheten ut av Wii U konsollen og koble den til PC'en.
2. Slett `WUP-X-XXXXXX` mappen i `install` mappen på USB-enheten din for å frigjøre plass.

### Flytte spill til USB

?> Hvis du ikke vil ha spillet installert på NAND, så kan du bruke Wii U konsollens databehandling for å flytte spillet til en USB-enhet.

!> For å flytte spillet til en USB-enhet, må den bli formatert av Wii U konsollen. Når du formaterer USB-enheten så slettes alt innhold og hindrer enheten i å brukes med en annet Wii U konsoll eller PC ol. med mindre du formaterer det på nytt til ett tradisjonelt format.

1. Start Wii U konsollen på nytt for å avløse MochaFAT32.
1. Koble USB-lagringsenheten til Wii U konsollen din.
1. Slå på Wii U konsollen.
1. Wii U systemet vil spørre deg om å formatere USB-enheten din. Bekreft med "Yes".
1. Gå inn på systeminnstillinger.
1. Navigér til `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`
1. Velg spillet og flytt all data (inkludert oppdateringer og DLC hvis dette er installert) over til USB-enheten.

<!-- tabs:end -->