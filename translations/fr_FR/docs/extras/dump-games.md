# Dumper vos Disques Wii U
---
Dumper vos disques vous permet d'installer une copie de votre jeu sur la NAND / un périphérique USB afin que vous puissiez y jouer sans avoir besoin du disque.

?> Le dumping et l'installation de jeux nécessitent une installation Homebrew fonctionnelle, donc assurez-vous de terminer le guide principal sur l'installation de CFW avant de le suivre.

!> Il est **ILLÉGAL** de partager les fichiers dumpés à l'aide de ce guide.  
Si vous avez l'intention d'utiliser ce guide pour ensuite partager vos jeux dumpés, ne le faites pas.

### Dumping and Installing Wii U Discs {docsify-ignore}

?> Installer un jeu dans la mémoire interne de la console (NAND) n'est pas recommandé car elle est limitée à 8 Go ou 32 Go selon le modèle de votre console, ce qui vous ferait manquer d'espace assez rapidement si vous souhaitez installer plusieurs jeux.

?> Lors de l'installation d'un jeu sur un périphérique USB, nous vous recommandons d'utiliser un disque dur plutôt qu'un périphérique à mémoire flash (comme par exemple, une clé USB), car ils ne sont pas optimisés pour la lecture et l'écriture constantes, ce qui les uses rapidement. Si votre disque dur n'est pas alimenté par une source externe, vous aurez besoin d'un câble en Y pour le connecter à deux ports USB sur la Wii U.

!> In order to install to a USB device, it has to be formatted by the Wii U. Doing this will erase (delete) all contents (documents, pictures, videos, PC data) off of it, and prevent it from being used on another system unless you reformat it. This *does* include the vWii, meaning you will not be able to run Wii and GameCube disc images off the USB using USB loaders. To format, plug your USB HDD into the Wii U, power on your Wii U, your Wii U will prompt you to format your HDD. Confirm with Yes.

#### Ce dont vous avez besoin {docsify-ignore}

- Votre carte SD a besoin de suffisamment d'espace pour stocker le jeu que vous voulez dumper.
- If wanting to install to a USB, A USB HDD (+ a Y-cable if needed).
- The latest release of [WUP Installer GX2](https://wiiu.cdn.fortheusers.org/zips/wup_installer_gx2_wuhb.zip).
- The [wudd](https://wiiu.cdn.fortheusers.org/zips/wudd.zip) homebrew application.

#### Instructions {docsify-ignore}

1. Copy the contents of the `wup_installer_gx2_wuhb.zip` file to the root of your SD Card.
1. Copy the contents of the newly downloaded wudd `.zip` file to the root of your SD Card.
1. Take the SD Card out of your PC and insert it into your Wii U.
1. Power on your Wii U and boot into Aroma.
1. Launch the Wii U Menu and start the wudd app.
1. Select `Dump partition as .app`
1. Select the `Game` partition to start dumping.
1. When finished, exit wudd to the Wii U Menu.
1. Insert the SD Card into your computer.
1. Copy the `GMXXXXXXXXXXXXXXXX` folder from `sd:/wudump/WUP-X-XXXX` to the `install` folder on your SD Card.
    - If the `install` folder does not exist, create it.
1. Eject and insert the SD Card into your Wii U.
1. Open the Wii U Menu and then the WUP Installer GX2 app.
1. Select your game (`GMXXXXXXXXXXXXXXXX`), press `Install` and confirm with `Yes`.
1. Choose 'USB' to install to USB and 'NAND' to install to NAND
1. Exit the WUP Installer GX2 to the Wii U Menu.
1. You should see your game installed, ready to be played.
1. Take the SD Card out of your Wii U and plug it into your PC.
1. Delete the `GMXXXXXXXXXXXXXXXX` folder in the `install` directory on your SD Card to free up space.

### Moving Games To USB

?> If you don't want to keep the game installed on NAND, you can use the Wii U's data management to move the game to a USB device.

!> In order to move your game to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

1. Plug your USB device into the Wii U.
1. Allumez votre Wii U.
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
