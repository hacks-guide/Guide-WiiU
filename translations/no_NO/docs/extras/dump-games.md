# Dumpe Wii U spill fra disk
---
Ved å Dumpe en Wii U Disk, kan du installere en kopi av spillet til system NAND, eller en USB-enhet, slik at du kan spille det uten å sette inn disken.

?> Det krever et fungerende Homebrew oppsett. Så sørg først for å fullføre guiden for å installere CFW før du går videre.

### Instruksjoner {docsify-ignore}

<!-- tabs:start -->

#### **Installere til NAND**

### Installere til NAND

?> Det anbefales ikke å installere et spill til systemminnet (NAND) siden lagringsplassen er begrenset til enten 8gb eller 32gb avhengig av modellen din, det blir fort fullt hvis du ønsker å installere flere spill.

### Dette Trenger Du {docsify-ignore}

- SD-kortet må ha nok plass til spillet du vil dumpe.
- Siste utgave av [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- Homebrew appen [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip).

### Instruksjoner {docsify-ignore}

1. Pakk ut `wup_installer_gx2.zip` til roten av SD-kortet.
1. Pakk ut `disc2app.zip` til roten av SD-kortet.
1. Ta SD-kortet ut av PCen og sett det inn i Wii U konsollen.
1. Slå på Wii U konsollen.
1. Ta ut spill-disken hvis du allerede har satt den inn.
1. Start Homebrew Launcher og kjør disc2app.
1. Trykk på A knappen for å starte dumpingen til SD-kortet.
1. Sett inn spill-disken du vil dumpe når du får beskjed om det.
1. Når den er ferdig, vil Wii U'en gå tilbake til Wii U menyen.
1. Start Homebrew Launcher og kjør WUP Installer GX2.
1. Velg spillet ditt (`WUP-X-XXXX`), trykk `Install` og bekreft med `Yes`.
1. Velg NAND som installasjonsdestinasjon.
1. Når den er ferdig, vil Wii U'en gå tilbake til Wii U menyen.
1. Nå er spillet ditt installert, og klart til å spille.
1. Ta SD-kortet ut av Wii U konsollen og den inn i PC'en din.
1. Slett `WUP-X-XXXX` mappen i `install` mappen på SD-kortet ditt for å frigjøre plass.

#### **Installere til USB**

### Installere til USB

?> Når du installerer et spill til en USB-enhet, anbefaler vi at du bruker en ekstern harddisk istedenfor en USB-penn, siden de ikke er laget for kontinuerlig lesing og skriving, og vil brenne ut minnet fort. Hvis den eksterne harddisken din ikke har eget strømadapter, trenger du en Y-kabel for å koble den til to USB-porter i Wii U konsollen din.

!> For å installere til en USB-enhet må den bli formatert av Wii U konsollen. Når du formaterer USB-enheten så slettes alt innhold og hindrer at enheten kan brukes med en annen Wii U konsoll eller PC ol. med mindre du formaterer den på nytt til ett annet format.

### Dette Trenger Du {docsify-ignore}

- SD-kortet må ha nok plass til spillet du vil dumpe.
- En USB-lagringsenhet (+ en Y-kabel hvis nødvendig)
- Siste utgave av [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- Homebrew appen [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip)

### Instruksjoner {docsify-ignore}

1. Pakk ut `wup_installer_gx2.zip` til roten av SD-kortet.
1. Pakk ut `disc2app.zip` til roten av SD-kortet.
1. Ta SD-kortet ut av PCen og sett det inn i Wii U konsollen.
1. Koble USB-lagringsenheten til Wii U konsollen din.
1. Slå på Wii U konsollen.
1. Wii U systemet vil spørre deg om å formatere USB-enheten din. Bekreft med "Yes".
1. Ta ut spill-disken hvis du allerede har satt den inn
1. Start Homebrew Launcher og kjør disc2app.
1. Trykk på A knappen for å dumpe til SD-kortet.
1. Sett inn spill-disken du vil dumpe når du blir bedt om det
1. Når den er ferdig, vil Wii U'en gå tilbake til Wii U menyen.
1. Start Homebrew Launcher og kjør WUP Installer GX2.
1. Velg spillet ditt (`WUP-X-XXXX`), trykk `Install` og bekreft med `Yes`.
1. Velg USB som installasjonsdestinasjon.
1. Når den er ferdig, vil Wii U'en gå tilbake til Wii U menyen.
1. Nå er spillet ditt installert, og klart til å spille.
1. Ta SD-kortet ut av Wii U konsollen og sett den inn i PC'en din.
1. Slett `WUP-X-XXXX` mappen i `install` mappen på SD-kortet ditt for å frigjøre plass.

#### **Installere fra USB**

### Installere fra USB

?> Hvis du ikke har nok plass på SD-kortet, så kan du bruke en avansert teknikk for å installere spill dumps fra en USB-penn. Dette er en tungvint metode og man kan bare installere spill til systemminnet (NAND).

### Dette Trenger Du {docsify-ignore}

- En USB-lagringsenhet (+en Y-kabel hvis nødvendig) med nok lagringsplass til å ta imot spillet du vil dumpe.
- Siste utgave av [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- Homebrew appen [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip).
- Homebrew appen [MochaFAT32](https://www.wiiubru.com/appstore/zips/mocha_fat32.zip).
- [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4) Versjon 1.4
  - Du må laste ned `homebrew_launcher.v.1.4.zip`.

### Instruksjoner {docsify-ignore}

?> **Merk** USB-lagringsenheten må formateres til FAT32. Hvis den ikke er formatert til FAT32, bruk [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) med 32k (32768) Allocation unit size for å formatere den.

1. Pakk ut `homebrew_launcher.v.1.4.zip` til roten av USB-pennen.
1. Pakk ut `wup_installer_gx2.zip` til roten av USB-pennen.
1. Pakk ut `disc2app.zip` til roten av USB-pennen.
1. Pakk ut `mocha_fat32.zip` til roten av SD-kortet.
1. Ta SD-kortet ut av PC'en og sett den inn i Wii U'en.
1. Slå på Wii U konsollen.
1. Koble til USB-pennen. Wii U'en vil spørre deg om å formatere den. Avbryt med å klikke "No"!
1. Start Homebrew Launcher og kjør MochaFAT32 appen.
1. Bruk disse instillingene i menyen:
  - Config view mode: default
  - Skip this menu on launch: on
  - Don't relaunch OS: off
  - Launch System Menu: on
  - RedNAND: off
1. Konsollen vil gå tilbake til Wii U-menyen og erstatte SD kortet med USB-pennen.
1. Start Homebrew Launcher og kjør disc2app.
1. Ta ut spill-disken hvis du allerede har satt den inn i konsollen og trykk på A knappen for å starte dumping-prosessen.
1. Sett inn spill-disken du vil dumpe når du får beskjed om det.
1. Når den er ferdig, vil Wii U'en gå tilbake til Wii U menyen.
1. Start Homebrew Launcher og kjør WUP Installer GX2.
1. Velg spillet ditt (`WUP-X-XXXX`), trykk `Install` og bekreft med `Yes`.
1. Velg NAND som installasjonsdestinasjon.
1. Når den er ferdig, vil Wii U'en gå tilbake til Wii U menyen.
1. Nå er spillet ditt installert, og klart til å spille.
1. Ta USB-pennen ut av Wii U konsollen og koble den til PC'en.
2. Slett `WUP-X-XXXXXX` mappen i `install` mappen på USB-pennen for å frigjøre plass.

<!-- tabs:end -->

### Flytte spill til USB

?> Hvis du ikke vil ha spillet installert på NAND, så kan du bruke Wii U konsollens databehandling for å flytte spillet til en USB-enhet.

!> For å flytte spillet til en USB-enhet, må den være formatert av Wii U konsollen. Når du formaterer USB-enheten så slettes alt innhold og hindrer enheten i å brukes med en annet Wii U konsoll eller PC ol. med mindre du formaterer det på nytt til ett annet format.

1. Start Wii U konsollen på nytt for å avløse MochaFAT32.
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