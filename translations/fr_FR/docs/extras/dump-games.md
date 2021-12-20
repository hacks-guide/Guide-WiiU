# Dumper vos Disques Wii U
---
Dumper vos disques vous permet d'installer une copie de votre jeu sur la NAND / un périphérique USB afin que vous puissiez y jouer sans avoir besoin du disque.

?> Le dumping et l'installation de jeux nécessitent une installation Homebrew fonctionnelle, donc assurez-vous de terminer le guide principal sur l'installation de CFW avant de le suivre.

!> Il est **ILLÉGAL** de partager les fichiers dumpés à l'aide de ce guide.  
Si vous avez l'intention d'utiliser ce guide pour ensuite partager vos jeux dumpés, ne le faites pas.

### Instructions {docsify-ignore}

<!-- tabs:start -->

#### **Installer sur la NAND**

### Installer sur la NAND

?> Installer un jeu dans la mémoire interne de la console (NAND) n'est pas recommandé car elle est limitée à 8 Go ou 32 Go selon le modèle de votre console, ce qui vous ferait manquer d'espace assez rapidement si vous souhaitez installer plusieurs jeux.

### Ce dont vous avez besoin {docsify-ignore}

- Votre carte SD a besoin de suffisamment d'espace pour stocker le jeu que vous voulez dumper.
- La dernière version de [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- The [disc2app](https://wiiubru.com/appstore/zips/disc2app.zip) homebrew application.

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

?> Lors de l'installation d'un jeu sur un périphérique USB, nous vous recommandons d'utiliser un disque dur plutôt qu'un périphérique à mémoire flash (comme par exemple, une clé USB), car ils ne sont pas optimisés pour la lecture et l'écriture constantes, ce qui les uses rapidement. Si votre disque dur n'est pas alimenté par une source externe, vous aurez besoin d'un câble en Y pour le connecter à deux ports USB sur la Wii U.

!> Afin d'installer sur un périphérique USB, celui-ci doit être formaté par la Wii U. Cela effacera tout le contenu et empêchera son utilisation sur un autre système, à moins que vous ne le reformatiez.

### Ce dont vous avez besoin {docsify-ignore}

- Votre carte SD a besoin de suffisamment d'espace pour stocker le jeu que vous voulez dumper.
- Un disque dur USB (+ un câble en Y si nécessaire)
- La dernière version de [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- The [disc2app](https://wiiubru.com/appstore/zips/disc2app.zip) Homebrew app

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

?> Si vous n'avez pas assez de place sur votre carte SD, vous pouvez utiliser une technique avancée pour installer des dumps à partir d'un périphérique USB. Ce n'est pas la chose la plus facile à faire et a le désavantage de ne pouvoir installer le jeu que sur la mémoire interne de la console (NAND).

### Ce dont vous avez besoin {docsify-ignore}

- Un périphérique de stockage USB (+un câble Y si nécessaire) avec suffisamment d'espace pour s'adapter au jeu que vous voulez dumper.
- La dernière version de [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- The [disc2app](https://wiiubru.com/appstore/zips/disc2app.zip) Homebrew app.
- The [MochaFAT32](https://wiiubru.com/appstore/zips/mocha_fat32.zip) Homebrew app.
- La version 1.4 de [l'Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - Vous devrez télécharger la version 1.4 `homebrew_launcher.v1.4.zip` de l'Homebrew Launcher.

### Instructions {docsify-ignore}

?> **Notice** Votre périphérique USB devra être formaté en FAT32. Si votre périphérique USB n'est pas formaté en FAT32, utilisez [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) avec 32k (32768) en Taille d'unité d'allocation pour le formater.

1. Copiez le contenu du fichier `homebrew_launcher.v.1.4.zip` vers la racine de votre périphérique USB.
1. Copiez le contenu du fichier `wup_installer_gx2.zip` vers la racine de votre périphérique USB.
1. Copiez le contenu du fichier `disc2app.zip` vers la racine de votre périphérique USB.
1. Copiez le contenu du fichier `mocha_fat32.zip` vers la racine de votre carte SD.
1. Retirez la carte SD de votre ordinateur et branchez-la sur votre console Wii U.
1. Allumez votre Wii U.
1. Branchez votre périphérique USB. La Wii U vous demandera de le formater. Sélectionnez Annuler !
1. Lancez l'Homebrew Launcher et lancez l'application MochaFAT32.
1. Dans le menu de configuration, définissez les paramètres suivants :
    - Config view mode: default
    - Skip this menu on launch: on
    - Don't relaunch OS: off
    - Launch System Menu: on
    - RedNAND: off
1. Votre console va charger le Menu Wii U avec votre périphérique USB qui remplace maintenant la carte SD.
1. Lancez l'Homebrew Launcher et lancez l'application disc2app.
1. Éjectez tout disque de jeu inséré et appuyez sur le bouton A pour commencer le processus de dumping.
1. Lorsque vous y êtes invité, insérez le disque de jeu que vous voulez dumper.
1. Une fois le processus terminé, votre Wii U lancera le Menu Wii U.
1. Lancez le Homebrew Launcher et lancez l'application WUP Installer GX2.
1. Sélectionnez votre jeu (`WUP-X-XXXX`), appuyez sur `Install` et confirmez avec `Yes`.
1. Sélectionnez la NAND comme destination de l'installation.
1. Une fois le processus terminé, votre Wii U lancera le Menu Wii U.
1. Vous devriez voir votre jeu installé, prêt à être joué.
1. Sortez le périphérique USB de votre Wii U et branchez-le sur votre PC.
1. Supprimez le dossier `WUP-X-XXXX` dans le répertoire `install` de votre périphérique USB pour libérer de l'espace.

<!-- tabs:end -->

### Déplacement du jeu vers le périphérique USB

?> Si vous ne voulez pas garder le jeu installé sur la NAND, vous pouvez utiliser le menu Gestion des données de la Wii U pour déplacer le jeu vers un périphérique USB.

!> Afin de déplacer votre jeu sur un périphérique USB, celui-ci doit être formaté par la Wii U. Cela effacera tout le contenu et empêchera son utilisation sur un autre système, à moins que vous ne le reformatiez.

1. Redémarrez votre Wii U pour supprimer l'effet de MochaFAT32.
1. Branchez votre périphérique USB dans la Wii U.
1. Allumez votre Wii U.
1. Votre Wii U vous demandera de formater votre périphérique USB. Confirmez avec Oui.
1. Ouvrez les Paramètres de la console.
1. Naviguez vers `Gestion des données > Copier, déplacer ou supprimer des données > Mémoire de la console > Copier/Déplacer des données (X)`
1. Sélectionnez le jeu et déplacez toutes les données (y compris les mises à jour et les DLC si ils sont installés) vers votre périphérique USB.

### Déplacer les mises à jour vers le périphérique USB

?> Si le DLC ou les mises à jour de votre disque de jeu ont été installés, vous devrez transférer les fichiers sur votre périphérique USB. Vous pouvez le faire en utilisant le menu Gestion des données de la Wii U.

1. Allumez votre Wii U
1. Ouvrez les Paramètres de la console.
1. Naviguez vers `Gestion des données > Copier, déplacer ou effacer des données > Mémoire de la console > Copier/Déplacer des données (X)`.
1. Sélectionnez votre jeu et déplacez les données de mise à jour et de DLC vers le périphérique USB.