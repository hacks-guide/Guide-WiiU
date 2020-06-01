# Dumper des disques de la Wii originale
---
Dumper vos diques vous permet de : les lire sur un émulateur Wii (à savoir Dolphin), les lire en utilisant un lanceur supportant les cartes SD et appareils USB tel que Wiiflow, faire des injections Console Virtuelle qui peuvent être installées sur une clé USB formatée par la Wii U ou sur la NAND et lancées depuis le menu Wii U.

?> Dumper des jeux Wii nécessite une installation fonctionnelle de Homebrew sur la vWii, alors assurez-vous de terminer le [Modding de la vWii](vwii-modding) au préalable.

### Ce dont vous avez besoin

1. The latest release of [CleanRip](https://github.com/emukidid/cleanrip/releases/download/2.1.1/CleanRip-v2.1.1.zip)
1. The [wii.dat](https://github.com/emukidid/cleanrip/releases/download/2.1.1/wii.dat) file

### Instructions

1. Insert your Wii U's SD Card into your computer
1. Copy the `apps` folder from the `CleanRip-v2.1.1.zip` file to the root of your SD Card
1. Copiez le fichier `wii.dat` vers la racine de votre carte SD
1. Take the SD Card out of your computer and plug it into your Wii U console.

### Dumping du disque

1. Allumez votre Wii U puis choisissez l'icône Menu Wii pour démarrer dans la vWii
1. Lancez la Chaîne Homebrew
1. Lancez CleanRip
1. Read the Disclaimer then press A
1. Sélectionnez Yes pour activer les calculs de la somme de contrôle
1. Select either USB or Front SD depending on which device you want to use for the dumping process
 - Please note that the device you will choose needs to be formatted either in FAT32 or NTFS
1. Press A to continue
1. Select No on the screen that asks you to download redump.org DAT files
1. Insert your disc then press A
1. Go [on this page](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) to see if your disc is dual-layered
1. Set everything to match the following:
 - Dual Layer `Yes/No` (Select `Yes` if your game's disc is dual-layered)
 - Chunk Size `Max`
 - New device per chunk `No`
1. If you want to dump multiple discs, select Yes to remember your settings. If not, select No.

?> Be prepared to wait a while. The dumping process can take 30 minutes to 1 hour depending on your SD Card's speeds.

### Joining Split Files

?> If you dumped the disc on a FAT32 formatted, device, you should've got at least 2 files that end with `.partX.iso`. They need to be joined up.

1. Copy all the files that share the same name and end with `.partX.iso` in a folder on your computer
1. Open up a Command Prompt window
1. Use the `cd <path>` command and replace `<path>` by the path to your `.partX.iso` files
1. Use the following command as is: `copy /b *.part?.iso game.iso`
