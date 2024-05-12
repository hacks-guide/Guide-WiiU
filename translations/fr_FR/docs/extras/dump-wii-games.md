# Dumper vos Disques Wii
---
Dumper vos diques vous permet de : les lire sur un émulateur Wii (à savoir Dolphin), les lire en utilisant un lanceur supportant les cartes SD et appareils USB tel que Wiiflow, faire des injections Console Virtuelle qui peuvent être installées sur une clé USB formatée par la Wii U ou sur la NAND et lancées depuis le menu Wii U.

?> Dumping Wii games requires a working homebrew setup on vWii, so make sure to finish the [vWii Modding guide](vwii/sd-preparation) beforehand.

!> Il est **ILLÉGAL** de partager les fichiers dumpés à l'aide de ce guide.  
Si vous avez l'intention d'utiliser ce guide pour ensuite partager vos jeux dumpés, ne le faites pas.

### Ce dont vous avez besoin {docsify-ignore}

1. La dernière version de [CleanRip](https://github.com/emukidid/cleanrip/releases/download/2.1.1/CleanRip-v2.1.1.zip).
1. Le fichier [wii.dat](https://github.com/emukidid/cleanrip/releases/download/2.1.1/wii.dat).

### Instructions {docsify-ignore}

1. Insérez la carte SD de votre Wii U dans votre ordinateur.
1. Copiez le dossier `apps` du fichier `CleanRip-v2.1.1.zip` à la racine de votre carte SD.
1. Copiez le fichier `wii.dat` vers la racine de votre carte SD.
1. Retirez la carte SD de votre ordinateur et branchez-la sur votre console Wii U.

### Dumping du disque

1. Allumez votre Wii U puis choisissez l'icône Menu Wii pour démarrer dans la vWii.
1. Lancez la Chaîne Homebrew.
1. Lancez CleanRip.
1. Lisez la clause de non-responsabilité puis appuyez sur A.
1. Sélectionnez Yes pour activer les calculs de la somme de contrôle.
1. Sélectionnez USB ou Front SD selon le périphérique que vous souhaitez utiliser pour le processus de dumping.
    - Please note that the device you choose needs to be formatted either in FAT32 or NTFS.
1. Appuyez sur A pour continuer.
1. Sélectionnez No sur l'écran qui vous demande de télécharger les fichiers DAT de redump.org.
1. Insérez votre disque puis appuyez sur A.
1. Allez [sur cette page](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) pour voir si votre disque est à double couche.
1. Faites en sorte que ce qui suit soit identique à ce qui est affiché sur votre console :
    - Dual Layer: `Yes/No` (Sélectionnez `Yes` si votre disque de jeu est de type double couche)
    - Chunk Size: `Max`
    - New device per chunk: `No`
1. Si vous souhaitez dumper plusieurs disques, sélectionnez Oui pour mémoriser vos paramètres. Si ce n'est pas le cas, sélectionnez Non.

?> Préparez-vous à attendre un moment. Le processus de dumping peut prendre de 30 minutes à 1 heure selon la vitesse de votre carte SD.

### Fusionner les fichiers scindés

?> If you dumped the disc on a FAT32 formatted device, you should've got at least 2 files that end with `.partX.iso`. Il faut les fusionner.

#### Windows {docsify-ignore}

1. Copiez tous les fichiers qui portent le même nom et qui se terminent par `.partX.iso` dans un dossier de votre ordinateur.
1. Right-click inside the folder while holding Shift and select `Open PowerShell Window Here`.
1. In the PowerShell window, run the following command as is: `cmd.exe /c "copy /b *.part?.iso game.iso"`.

#### macOS/Linux {docsify-ignore}

1. Copiez tous les fichiers qui portent le même nom et qui se terminent par `.partX.iso` dans un dossier de votre ordinateur.
1. Ouvrez un Terminal.
1. Utilisez la commande `cd <path>` et remplacez `<path>` par le chemin d'accès à vos fichiers `.partX.iso`.
1. Utilisez la commande suivante comme telle : `cat *.part?.iso > game.iso`.
