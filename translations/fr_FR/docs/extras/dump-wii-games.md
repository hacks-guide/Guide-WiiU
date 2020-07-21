# Dumping Wii Discs
---
Dumper vos diques vous permet de : les lire sur un émulateur Wii (à savoir Dolphin), les lire en utilisant un lanceur supportant les cartes SD et appareils USB tel que Wiiflow, faire des injections Console Virtuelle qui peuvent être installées sur une clé USB formatée par la Wii U ou sur la NAND et lancées depuis le menu Wii U.

?> Dumping Wii games require a working homebrew setup on vWii, so make sure to finish the [vWii Modding guide](vwii-modding) beforehand.

### What You Need {docsify-ignore}

1. The latest release of [CleanRip](https://github.com/emukidid/cleanrip/releases/download/2.1.1/CleanRip-v2.1.1.zip).
1. The [wii.dat](https://github.com/emukidid/cleanrip/releases/download/2.1.1/wii.dat) file.

### Instructions {docsify-ignore}

1. Insert your Wii U's SD Card into your computer.
1. Copy the `apps` folder from the `CleanRip-v2.1.1.zip` file to the root of your SD Card.
1. Copy the `wii.dat` file to the root of your SD Card.
1. Retirez la carte SD de votre ordinateur et branchez-la sur votre console Wii U.

### Dumping du disque

1. Allumez votre Wii U puis choisissez l'icône Menu Wii pour démarrer dans la vWii.
1. Lancez la Chaîne Homebrew.
1. Lancez CleanRip.
1. Lisez la clause de non-responsabilité puis appuyez sur A.
1. Sélectionnez Yes pour activer les calculs de la somme de contrôle.
1. Sélectionnez USB ou Front SD selon le périphérique que vous souhaitez utiliser pour le processus de dumping.
 - Veuillez noter que l'appareil que vous choisirez doit être formaté soit en FAT32 soit en NTFS.
1. Appuyez sur A pour continuer.
1. Sélectionnez No sur l'écran qui vous demande de télécharger les fichiers DAT de redump.org.
1. Insérez votre disque puis appuyez sur A.
1. Allez [sur cette page](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) pour voir si votre disque est à double couche.
1. Faites en sorte que ce qui suit soit identique à ce qui est affiché sur votre console :
 - Dual Layer: `Yes/No` (Select `Yes` if your game's disc is dual-layered)
 - Chunk Size: `Max`
 - New device per chunk: `No`
1. Si vous souhaitez dumper plusieurs disques, sélectionnez Oui pour mémoriser vos paramètres. Si ce n'est pas le cas, sélectionnez Non.

?> Soyez prêts à attendre un moment. Le processus de dumping peut prendre de 30 minutes à 1 heure selon la vitesse de votre carte SD.

### Fusionner les fichiers scindés

?> Si vous avez dumpé le disque sur un appareil formaté en FAT32, vous devriez avoir au moins 2 fichiers qui se terminent par `.partX.iso`. Il faut les fusionner.

1. Copiez tous les fichiers qui portent le même nom et qui se terminent par `.partX.iso` dans un dossier de votre ordinateur.
1. Ouvrez une fenêtre d'invite de commande.
1. Utilisez la commande `cd <path>` et remplacez `<path>` par le chemin d'accès à vos fichiers `.partX.iso`.
1. Utilisez la commande suivante comme telle : `copie /b *.part ?.iso game.iso`.