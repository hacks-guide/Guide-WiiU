# Dumper vos Disques Wii U
---
Dumper vos disques vous permet d'installer une copie de votre jeu sur la NAND / un périphérique USB afin que vous puissiez y jouer sans avoir besoin du disque.

?> Le dumping et l'installation de jeux nécessitent une installation Homebrew fonctionnelle, donc assurez-vous de terminer le guide principal sur l'installation de CFW avant de le suivre.

### Instructions {docsify-ignore}

<!-- tabs:start -->

#### **Installer sur la NAND**

### Installer sur la NAND

?> Installer un jeu dans la mémoire système (NAND) n'est pas recommandé car elle est limitée à 8 Go ou 32 Go selon votre modèle, ce qui vous ferait manquer d'espace assez rapidement si vous souhaitez installer plusieurs jeux.

### What You Need {docsify-ignore}

- Votre carte SD a besoin de suffisamment d'espace pour stocker le jeu que vous voulez dumper.
- La dernière version de [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- L'application Homebrew [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip).

### Instructions {docsify-ignore}

1. Copiez le contenu du fichier `wup_installer_gx2.zip` vers la racine de votre carte SD.
1. Copiez le contenu du fichier `disc2app.zip` vers la racine de votre carte SD.
1. Sortez la carte SD de votre PC et insérez-la dans votre console Wii U.
1. Allumez votre Wii U.
1. Éjectez votre disque de jeu si vous en avez un.
1. Lancez l'Homebrew Launcher et lancez l'application disc2app.
1. Appuyez sur le bouton A pour démarrer le processus de dumping.
1. Lorsque vous y êtes invité, insérez le disque de jeu que vous voulez dumper.
1. Une fois le processus terminé, votre Wii U lancera le Menu Wii U.
1. Lancez le Homebrew Launcher et lancez l'application WUP Installer GX2.
1. Sélectionnez votre jeu (`WUP-X-XXXX`), appuyez sur `Install` et confirmez avec `Yes`.
1. Sélectionnez la NAND comme destination de l'installation.
1. Une fois le processus terminé, votre Wii U lancera le Menu Wii U.
1. Vous devriez voir votre jeu installé, prêt à être joué.
1. Sortez la carte SD de votre Wii U et branchez-la sur votre PC.
1. Supprimez le dossier `WUP-X-XXXX` dans le répertoire `install` de votre carte SD pour libérer de l'espace.

#### **Installer sur un périphérique USB**

### Installer sur un périphérique USB

?> Lors de l'installation d'un jeu sur un périphérique USB, nous vous recommandons d'utiliser un disque dur et non un lecteur flash, car ils ne sont pas optimisés pour la lecture et l'écriture constantes, ce qui les abîmeraient assez rapidement. Si votre disque dur n'est pas alimenté en externe, vous aurez besoin d'un câble en Y pour le connecter à deux ports USB sur la Wii U.

!> Afin d'installer sur un périphérique USB, celui-ci doit être formaté par la Wii U. Cela effacera tout le contenu et empêchera son utilisation sur un autre système, à moins que vous ne le reformatiez.

### What You Need {docsify-ignore}

- Votre carte SD a besoin de suffisamment d'espace pour stocker le jeu que vous voulez dumper.
- Un disque dur USB (+ un câble en Y si nécessaire)
- La dernière version de [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- L'application Homebrew [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip)

### Instructions {docsify-ignore}

1. Copiez le contenu du fichier `wup_installer_gx2.zip` vers la racine de votre carte SD.
1. Copiez le contenu du fichier `disc2app.zip` vers la racine de votre carte SD.
1. Sortez la carte SD de votre PC et insérez-la dans votre console Wii U.
1. Branchez votre disque dur USB à la Wii U.
1. Allumez votre Wii U.
1. Votre Wii U vous demandera de formater votre disque dur. Confirmez avec Oui.
1. Éjectez votre disque de jeu si vous en avez un
1. Lancez l'Homebrew Launcher et lancez l'application disc2app.
1. Appuyez sur le bouton A pour démarrer le processus de dumping.
1. Lorsque vous y êtes invité, insérez le disque de jeu que vous voulez dumper
1. Une fois le processus terminé, votre Wii U lancera le Menu Wii U.
1. Lancez le Homebrew Launcher et lancez l'application WUP Installer GX2.
1. Sélectionnez votre jeu (`WUP-X-XXXX`), appuyez sur `Install` et confirmez avec `Yes`.
1. Sélectionnez USB comme destination de l'installation.
1. Une fois le processus terminé, votre Wii U lancera le Menu Wii U.
1. Vous devriez voir votre jeu installé, prêt à être joué.
1. Sortez la carte SD de votre Wii U et branchez-la sur votre PC.
1. Supprimez le dossier `WUP-X-XXXX` dans le répertoire `install` de votre carte SD pour libérer de l'espace.

#### **Installer depuis l'USB**

### Installer depuis l'USB

?> If you do not have enough space on your SD Card, you can use an advanced technique to install dumps from a USB device. This is not the easiest thing to do and has the disadvantage of only being able to install the game onto your system memory (NAND).

### What You Need {docsify-ignore}

- Un périphérique de stockage USB (+un câble Y si nécessaire) avec suffisamment d'espace pour s'adapter au jeu que vous voulez dumper.
- La dernière version de [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- L'application Homebrew [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip).
- L'application Homebrew [Mocha FAT32](https://www.wiiubru.com/appstore/zips/mocha_fat32.zip).
- La version 1.4 de [l'Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - Vous devrez télécharger la version 1.4 `homebrew_launcher.v1.4.zip` de l'Homebrew Launcher.

### Instructions {docsify-ignore}

?> **Notice** Your USB device will need to be formatted as FAT32. If your USB is not formatted to FAT32, use [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it.

1. Extract the `homebrew_launcher.v.1.4.zip` file to the root of your USB device.
1. Extract the `wup_installer_gx2.zip` file to the root of your USB device.
1. Extract the `disc2app.zip` file to the root of your USB device.
1. Extract the `mocha_fat32.zip` file to the root of your SD Card.
1. Take the SD Card out of your PC and plug it into your Wii U console.
1. Allumez votre Wii U.
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
1. Lorsque vous y êtes invité, insérez le disque de jeu que vous voulez dumper.
1. Une fois le processus terminé, votre Wii U lancera le Menu Wii U.
1. Lancez le Homebrew Launcher et lancez l'application WUP Installer GX2.
1. Sélectionnez votre jeu (`WUP-X-XXXX`), appuyez sur `Install` et confirmez avec `Yes`.
1. Sélectionnez la NAND comme destination de l'installation.
1. Une fois le processus terminé, votre Wii U lancera le Menu Wii U.
1. Vous devriez voir votre jeu installé, prêt à être joué.
1. Take the USB device out of your Wii U and plug it into your PC.
2. Delete the `WUP-X-XXXX` folder in the `install` directory on your USB device to free up space.

<!-- tabs:end -->

### Moving Games To USB

?> If you don't want to keep the game installed on NAND, you can use the Wii U's data management to move the game to a USB device.

!> In order to move your game to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

1. Reboot your Wii U to remove the effect of MochaFAT32.
1. Plug your USB device into the Wii U.
1. Allumez votre Wii U.
1. Your Wii U will prompt you to format your USB device. Confirmez avec Oui.
1. Open the Wii U's System Settings.
1. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`
1. Select the game and move all data (including updates and DLC if any are installed) to your USB device.

### Move Updates To USB

?> If your disc game had DLC or updates installed, you will need to transfer the files over to your USB device. You can do this using the Wii U's data management.

1. Power on your Wii U
1. Open the Wii U's System Settings.
1. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
1. Select your game and move the update and DLC data to the USB device.