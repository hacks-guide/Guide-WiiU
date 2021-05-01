# Dumpe Wii U spill fra disk
---
Ved å Dumpe en Wii U Disk, kan du installere en kopi av spillet til system NAND, eller en USB-enhet, slik at du kan spille det uten å sette inn disken.

?> Det krever et fungerende Homebrew oppsett. Så sørg først for å fullføre guiden for å installere CFW før du går videre.

!> It is **ILLEGAL** to share the files dumped with this guide.  
If you intend to use this guide to share your dumped games, don't.

### Instruksjoner {docsify-ignore}

<!-- tabs:start -->

#### **Installere til NAND**

### Installere til NAND

?> Installing a game to the system memory (NAND) is not recommended as it's limited to either 8GB or 32GB depending on your model, making you run out of space pretty quickly if you want to install multiple games.

### Dette Trenger Du {docsify-ignore}

- SD-kortet må ha nok plass til spillet du vil dumpe.
- Siste utgave av [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- Homebrew appen [disc2app](https://www.wiiubru.com/appstore/zips/disc2app.zip).

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

?> When installing a game to a USB device, we recommend that you use an HDD and not a flash drive, as those are not optimized for constant reading and writing, therefore making them fail quickly. If your HDD is not externally powered, you will need a Y-cable to connect it to two USB slots on the Wii U.

!> In order to install to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

### Dette Trenger Du {docsify-ignore}

- SD-kortet må ha nok plass til spillet du vil dumpe.
- En USB-lagringsenhet (+ en Y-kabel hvis nødvendig)
- Siste utgave av [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- Homebrew appen [disc2app](https://www.wiiubru.com/appstore/zips/disc2app.zip)

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

?> If you do not have enough space on your SD Card, you can use an advanced technique to install dumps from a USB device. This is not the easiest thing to do and has the disadvantage of only being able to install the game onto your system memory (NAND).

### Dette Trenger Du {docsify-ignore}

- En USB-lagringsenhet (+en Y-kabel hvis nødvendig) med nok lagringsplass til å ta imot spillet du vil dumpe.
- Siste utgave av [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- Homebrew appen [disc2app](https://www.wiiubru.com/appstore/zips/disc2app.zip).
- Homebrew appen [MochaFAT32](https://www.wiiubru.com/appstore/zips/mocha_fat32.zip).
- [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4) Versjon 1.4
  - Du må laste ned `homebrew_launcher.v.1.4.zip`.

### Instruksjoner {docsify-ignore}

?> **Notice** Your USB device will need to be formatted as FAT32. If your USB is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it.

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
1. Slett `WUP-X-XXXXXX` mappen i `install` mappen på USB-pennen for å frigjøre plass.

<!-- tabs:end -->

### Flytte spill til USB

?> If you don't want to keep the game installed on NAND, you can use the Wii U's data management to move the game to a USB device.

!> In order to move your game to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

1. Start Wii U konsollen på nytt for å avløse MochaFAT32.
1. Koble USB-enheten til Wii U konsollen din.
1. Slå på Wii U konsollen.
1. Wii U systemet vil spørre deg om å formatere USB-enheten din. Bekreft med "Yes".
1. Gå inn på systeminnstillinger.
1. Gå til `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`
1. Velg spillet og flytt all data (inkludert oppdateringer og DLC hvis dette er installert) over til USB-enheten.

### Flytte oppdateringer til USB

?> If your disc game had DLC or updates installed, you will need to transfer the files over to your USB device. You can do this using the Wii U's data management.

1. Slå på Wii U konsollen
1. Gå inn på systeminnstillinger.
1. Gå til `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
1. Velg spillet ditt og flytt oppdateringen og DLC til USB-enheten.