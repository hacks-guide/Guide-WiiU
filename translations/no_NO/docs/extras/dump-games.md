# Dumpe Wii U spill fra disk
---
Ved å Dumpe en Wii U Disk, kan du installere en kopi av spillet til system NAND, eller en USB-enhet, slik at du kan spille det uten å sette inn disken.

?> Det krever et fungerende Homebrew oppsett. Så sørg først for å fullføre guiden for å installere CFW før du går videre.

!> Det er **ULOVLIG** å dele filer dumpet med denne guiden.  
Ikke bruk denne guiden til å dele spillene dine.

### Instruksjoner {docsify-ignore}

?> Det anbefales ikke å installere et spill til systemminnet (NAND) siden lagringsplassen er begrenset til enten 8gb eller 32gb avhengig av modellen din, det blir fort fullt hvis du ønsker å installere flere spill.

?> Når du installerer et spill til en USB-enhet, anbefaler vi at du bruker en ekstern harddisk istedenfor en USB-penn, siden de ikke er laget for kontinuerlig lesing og skriving, og vil brenne ut minnet fort. Hvis den eksterne harddisken din ikke har eget strømadapter, trenger du en Y-kabel for å koble den til to USB-porter i Wii U konsollen din.

!> In order to install to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it. To do this, plug your USB HDD into the Wii U, power on your Wii U, your Wii U will prompt you to format your HDD. Confirm with Yes.

### Dette Trenger Du {docsify-ignore}

- SD-kortet må ha nok plass til spillet du vil dumpe.
- If wanting to install to a USB, A USB HDD (+ a Y-cable if needed).
- Siste utgave av [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- The [wudd](https://github.com/wiiu-env/wudd/releases) homebrew application.

### Instruksjoner {docsify-ignore}

1. Pakk ut `wup_installer_gx2.zip` til roten av SD-kortet.
1. Copy the contents of the newly downloaded wudd `.zip` file to the root of your SD Card.
1. Take the SD Card out of your PC and insert it into your Wii U.
1. Slå på Wii U konsollen.
1. Launch the Homebrew Launcher and start the wudd app.
1. Change dump location to the SD Card.
1. Select `Dump partition as .app`
1. Select the `Game` partition to start dumping.
1. When finished, exit wudd and navigate back to the Wii U Menu.
1. Insert the SD Card into your computer.
1. Copy the `GMXXXXXXXXXXXXXXXX` folder from `sd:/wudump/WUP-X-XXXX` to the `install` folder on your SD Card.
1. Eject and insert the SD Card into your Wii U.
1. Open the Homebrew Launcher and then the WUP Installer GX2 app.
1. Select your game (`GMXXXXXXXXXXXXXXXX`), press `Install` and confirm with `Yes`.
1. Choose 'USB' to install to USB and 'NAND' to install to NAND
1. When the process is complete, press HOME to return to the Homebrew Launcher.
1. Exit the Homebrew Launcher to the Wii U Menu.
1. You should see your game installed, ready to be played.
1. Take the SD Card out of your Wii U and plug it into your PC.
1. Delete the `GMXXXXXXXXXXXXXXXX` folder in the `install` directory on your SD Card to free up space.

### Moving Games To USB

?> If you don't want to keep the game installed on NAND, you can use the Wii U's data management to move the game to a USB device.

!> In order to move your game to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

1. Reboot your Wii U to remove the effect of MochaFAT32.
1. Plug your USB device into the Wii U.
1. Slå på Wii U konsollen.
1. Your Wii U will prompt you to format your USB device. Confirm with Yes.
1. Open the Wii U's System Settings.
1. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`
1. Select the game and move all data (including updates and DLC if any are installed) to your USB device.

### Move Updates To USB

?> If your disc game had DLC or updates installed, you will need to transfer the files over to your USB device. You can do this using the Wii U's data management.

1. Power on your Wii U
1. Open the Wii U's System Settings.
1. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
1. Select your game and move the update and DLC data to the USB device.
