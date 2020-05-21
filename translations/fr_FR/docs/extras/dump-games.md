# Dumper vos Disques Wii U
---
Dumper vos disques vous permet d'installer une copie de votre jeu sur la NAND / un périphérique USB afin que vous puissiez y jouer sans avoir besoin du disque.

?> Le dumping et l'installation de jeux nécessitent une installation Homebrew fonctionnelle, donc assurez-vous de terminer le guide principal sur l'installation de CFW avant de le suivre.

### Instructions

<!-- tabs:start -->

#### **Install To NAND**

?> Installer un jeu dans la mémoire système (NAND) n'est pas recommandé car elle est limitée à 8 ou 32 Go selon votre modèle, ce qui vous ferait manquer d'espace assez rapidement si vous souhaitez installer plusieurs jeux.

### What You need

- Votre carte SD a besoin de suffisamment d'espace pour stocker le jeu que vous voulez dumper.
- The latest release of [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- The [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) Homebrew app

### Instructions

1. Extract the `wup_installer_gx2.zip` file to the root of your SD Card.
1. Copiez le contenu du fichier `disc2app.zip` vers la racine de votre carte SD.
1. Take the SD Card out of your PC and plug it into your Wii U.
1. Power on your Wii U.
1. Eject your game disc if you have one inserted
1. Launch the Homebrew Launcher and start the disc2app app.
1. Appuyez sur le bouton A pour démarrer le processus de dumping.
1. When prompted, insert the game disc you want to dump
1. When the process is complete, your Wii U will launch the Wii U Menu.
1. Launch the Homebrew Launcher and start the WUP Installer GX2 app.
1. Sélectionnez votre jeu (`WUP-X-XXXX`), appuyez sur `Install` et confirmez avec `Yes`.
1. Select NAND as the installation destination.
1. When the process is complete, your Wii U will launch the Wii U Menu.
1. You should see your game installed, ready to be played.
1. Take the SD Card out of your Wii U and plug it into your PC.
1. Delete the `WUP-X-XXXX` folder in the `install` directory on your SD Card to free up space.

#### **Install To USB**

?> Lors de l'installation d'un jeu sur un périphérique USB, nous vous recommandons d'utiliser un disque dur et non un lecteur flash, car ils ne sont pas optimisés pour la lecture et l'écriture constantes, ce qui les abîmeraient assez rapidement. Si votre disque dur n'est pas alimenté en externe, vous aurez besoin d'un câble en Y pour le connecter à deux ports USB sur la Wii U.

!> Afin d'installer sur un périphérique USB, celui-ci doit être formaté par la Wii U. Cela effacera tout le contenu et empêchera son utilisation sur un autre système, à moins que vous ne le reformatiez.

### What You Need

- Votre carte SD a besoin de suffisamment d'espace pour stocker le jeu que vous voulez dumper.
- Un disque dur USB (+ un câble en Y si nécessaire)
- The latest release of [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- The [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) Homebrew app

### Instructions

1. Extract the `wup_installer_gx2.zip` file to the root of your SD Card.
1. Copiez le contenu du fichier `disc2app.zip` vers la racine de votre carte SD.
1. Take the SD Card out of your PC and plug it into your Wii U.
1. Plug your USB HDD into the Wii U.
1. Power on your Wii U.
1. Your Wii U will prompt you to format your HDD. Confirmez avec Oui.
1. Eject your game disc if you have one inserted
1. Launch the Homebrew Launcher and start the disc2app app.
1. Appuyez sur le bouton A pour démarrer le processus de dumping.
1. When prompted, insert the game disc you want to dump
1. When the process is complete, your Wii U will launch the Wii U Menu.
1. Launch the Homebrew Launcher and start the WUP Installer GX2 app.
1. Sélectionnez votre jeu (`WUP-X-XXXX`), appuyez sur `Install` et confirmez avec `Yes`.
1. Select USB as the installation destination.
1. When the process is complete, your Wii U will launch the Wii U Menu.
1. You should see your game installed, ready to be played.
1. Take the SD Card out of your Wii U and plug it into your PC.
1. Delete the `WUP-X-XXXX` folder in the `install` directory on your SD Card to free up space.

### Move Updates/DLC To USB

?> If your disc game had DLC or updates installed, you will need to transfer the files over to your USB device. You can do this using the Wii U's data management.

1. Power on your Wii U
1. Open the Wii U's System Settings.
1. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
1. Select your game and move the update and DLC data to the USB device.

#### **Install From USB**

?> If you do not have enough space on your SD Card, you can use an advanced technique to install dumps from a USB device. This is not the easiest thing to do and has the disadvantage of only being able to install the game onto your system memory (NAND).

### What You Need
- A USB storage device (+a Y-cable if needed) with enough space to fit the game you want to dump.
- The latest release of [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- The [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) Homebrew app.
- The [MochaFAT32](https://www.wiiubru.com/appstore/zips/mocha_fat32.zip) Homebrew app.
- The  1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - You will need to download the v1.4 `homebrew_launcher.v.1.4.zip` release.

### Instructions

?> **Notice** Your USB device will need to be formatted as FAT32. If your USB is not formatted to FAT32, use [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it.

1. Extract the `homebrew_launcher.v.1.4.zip` file to the root of your USB device.
1. Extract the `wup_installer_gx2.zip` file to the root of your USB device.
1. Extract the `disc2app.zip` file to the root of your USB device.
1. Extract the `mocha_fat32.zip` file to the root of your SD Card.
1. Take the SD Card out of your PC and plug it into your Wii U console.
1. Power on your Wii U.
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
1. When prompted, insert the game disc you want to dump.
1. When the process is complete, your Wii U will launch the Wii U Menu.
1. Launch the Homebrew Launcher and start the WUP Installer GX2 app.
1. Sélectionnez votre jeu (`WUP-X-XXXX`), appuyez sur `Install` et confirmez avec `Yes`.
1. Select NAND as the installation destination.
1. When the process is complete, your Wii U will launch the Wii U Menu.
1. You should see your game installed, ready to be played.
1. Take the USB device out of your Wii U and plug it into your PC.
2. Delete the `WUP-X-XXXX` folder in the `install` directory on your USB device to free up space.

### Moving The Game To USB

?> If you don't want to keep the game installed on NAND, you can use the Wii U's data management to move the game to a USB device.

!> In order to move your game to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

1. Reboot your Wii U to remove the effect of MochaFAT32.
1. Plug your USB device into the Wii U.
1. Power on your Wii U.
1. Your Wii U will prompt you to format your USB device. Confirmez avec Oui.
1. Open the Wii U's System Settings.
1. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`
1. Select the game and move all data (including updates and DLC if any are installed) to your USB device.

<!-- tabs:end -->