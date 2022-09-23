# Dumpare dischi del Wii U
---
Dumpare i tuoi dischi ti permette di installare una copia del tuo gioco sulla NAND/dispositivo USB così da poterci giocare senza disco.

?> Dumpare e installare giochi richiede una console modificata, quindi assicurati di aver seguito la guida principale sull'installazione di CFW prima di seguire questa guida.

!> E' **ILLEGALE** condividere i file dumpati con questa guida.  
Se hai intenti di utilizzare questa guida per condividere i tuoi giochi dumpati, non farlo.

### Dumping and Installing Wii U Discs {docsify-ignore}

?> Installare un gioco sulla memoria di sistema (NAND) non è consigliato poiché è limitata a soli 8GB o 32GB a dipendenza del tuo modello, facendoti finire lo spazio in fretta se vuoi installare più giochi.

?> Quando si installa un gioco su un dispositivo USB, consigliamo di usare un HDD e non una chiave USB, poiché queste ultime non sono ottimizzate per una costante lettura e scrittura, e portano quindi a errori frequenti. Se il tuo HDD non è alimentato esternamente, ti servirà un cavo a Y per collegarlo alle due porte USB del Wii U.

!> In order to install to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it. To do this, plug your USB HDD into the Wii U, power on your Wii U, your Wii U will prompt you to format your HDD. Confirm with Yes.

#### Cosa ti servirà {docsify-ignore}

- La tua scheda SD ha bisogno di spazio sufficiente da contenere il gioco che vuoi dumpare.
- If wanting to install to a USB, A USB HDD (+ a Y-cable if needed).
- La versione più recente di [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- The [wudd](https://wiiubru.com/appstore/zips/wudd.zip) homebrew application.

#### Istruzioni {docsify-ignore}

1. Copia i contenuti di `wup_installer_gx2.zip` nella root della tua scheda SD.
1. Copy the contents of the newly downloaded wudd `.zip` file to the root of your SD Card.
1. Take the SD Card out of your PC and insert it into your Wii U.
1. Accendi il tuo Wii U.
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

1. Plug your USB device into the Wii U.
1. Accendi il tuo Wii U.
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
