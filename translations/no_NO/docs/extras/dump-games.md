# Dumpe Wii U spill fra disk
---
Ved å Dumpe en Wii U Disk, kan du installere en kopi av spillet til system NAND, eller en USB-enhet, slik at du kan spille det uten å sette inn disken.

?> Det krever et fungerende Homebrew oppsett. Så sørg først for å fullføre guiden for å installere CFW før du går videre.

### Instructions {docsify-ignore}

<!-- tabs:start -->

#### **Installere til NAND**

### Installere til NAND

?> Det anbefales ikke å installere et spill til systemminnet (NAND) siden lagringsplassen er begrenset til enten 8gb eller 32gb avhengig av modellen din, det blir fort fullt hvis du ønsker å installere flere spill.

### What You Need {docsify-ignore}

- SD-kortet må ha nok plass til spillet du vil dumpe.
- The latest release of [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- The [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) homebrew application.

### Instructions {docsify-ignore}

1. Copy the contents of the `wup_installer_gx2.zip` file to the root of your SD Card.
1. Copy the contents of the `disc2app.zip` file to the root of your SD Card.
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

### What You Need {docsify-ignore}

- SD-kortet må ha nok plass til spillet du vil dumpe.
- En USB-lagringsenhet (+ en Y-kabel hvis nødvendig)
- Siste utgave av [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- Homebrew appen [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip)

### Instructions {docsify-ignore}

1. Copy the contents of the `wup_installer_gx2.zip` file to the root of your SD Card.
1. Copy the contents of the `disc2app.zip` file to the root of your SD Card.
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

### What You Need {docsify-ignore}

- En USB-lagringsenhet (+en Y-kabel hvis nødvendig) med nok lagringsplass til å ta imot spillet du vil dumpe.
- Siste utgave av [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- Homebrew appen [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip).
- Homebrew appen [MochaFAT32](https://www.wiiubru.com/appstore/zips/mocha_fat32.zip).
- [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4) Versjon 1.4
  - Du må laste ned `homebrew_launcher.v.1.4.zip`.

### Instructions {docsify-ignore}

?> **Notice** Your USB device will need to be formatted as FAT32. If your USB is not formatted to FAT32, use [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it.

1. Copy the contents of the `homebrew_launcher.v.1.4.zip` file to the root of your USB device.
1. Copy the contents of the `wup_installer_gx2.zip` file to the root of your USB device.
1. Copy the contents of the `disc2app.zip` file to the root of your USB device.
1. Copy the contents of the `mocha_fat32.zip` file to the root of your SD Card.
1. Take the SD Card out of your PC and plug it into your Wii U console.
1. Slå på Wii U konsollen.
1. Plug in your USB device. The Wii U will ask you format it. Cancel with No!
1. Launch the Homebrew Launcher and start the MochaFAT32 app.
1. In the configuration menu, set the following settings:
  - Config view mode: default
  - Skip this menu on launch: on
  - Don't relaunch OS: off
  - Launch System Menu: on
  - RedNAND: off
1. Your console will load the Wii U menu with your USB device now replacing the SD Card.
1. Launch the Homebrew Launcher and open the disc2app app.
1. Eject any inserted game disc and press the A button to begin the dumping process.
1. Sett inn spill-disken du vil dumpe når du får beskjed om det.
1. Når den er ferdig, vil Wii U'en gå tilbake til Wii U menyen.
1. Start Homebrew Launcher og kjør WUP Installer GX2.
1. Velg spillet ditt (`WUP-X-XXXX`), trykk `Install` og bekreft med `Yes`.
1. Velg NAND som installasjonsdestinasjon.
1. Når den er ferdig, vil Wii U'en gå tilbake til Wii U menyen.
1. Nå er spillet ditt installert, og klart til å spille.
1. Take the USB device out of your Wii U and plug it into your PC.
2. Delete the `WUP-X-XXXX` folder in the `install` directory on your USB device to free up space.

<!-- tabs:end -->

### Moving Games To USB

?> If you don't want to keep the game installed on NAND, you can use the Wii U's data management to move the game to a USB device.

!> In order to move your game to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

1. Reboot your Wii U to remove the effect of MochaFAT32.
1. Plug your USB device into the Wii U.
1. Slå på Wii U konsollen.
1. Your Wii U will prompt you to format your USB device. Bekreft med "Yes".
1. Open the Wii U's System Settings.
1. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`
1. Select the game and move all data (including updates and DLC if any are installed) to your USB device.

### Move Updates To USB

?> If your disc game had DLC or updates installed, you will need to transfer the files over to your USB device. You can do this using the Wii U's data management.

1. Power on your Wii U
1. Open the Wii U's System Settings.
1. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
1. Select your game and move the update and DLC data to the USB device.