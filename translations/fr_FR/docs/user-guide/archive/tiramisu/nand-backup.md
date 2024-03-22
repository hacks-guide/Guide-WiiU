# Tiramisu {docsify-ignore-all}

## Faire une sauvegarde de la NAND

Au cas où quelque chose se passe mal dans le processus ultérieur et que votre Wii U se retrouve brickée, restaurer une sauvegarde de la NAND précédemment créée peut la faire fonctionner de nouveau.

### Instructions

?> La NAND d'une Wii U fait (selon votre modèle) soit 8 Go soit 32 Go. Par conséquent, pour créer une sauvegarde complète de la NAND de votre console, votre carte SD doit être plus grande que la taille de votre NAND. Si vous n'avez pas une carte SD assez grande, vous pouvez sauter la partie `MLC` qui est optionnelle et inclut des fichiers de sauvegarde et des données de jeu et par conséquent, n'est pas nécessaire pour récupérer la plupart des types de bricks.

?> La restauration d'une sauvegarde de la NAND sur la Wii U nécessite du matériel supplémentaire et des compétences en micro soudure. <br>Cependant, faire une sauvegarde de la NAND est **toujours** utile, donc ne l'ignorez pas. <br>Votre sauvegarde de la NAND est unique à votre système. Les sauvegardes des autres consoles **ne fonctionneront pas**.

1. Navigate to `nanddumper` using the GamePad and press A to launch it.
1. Utilisez la croix directionnelle du Wii U GamePad pour entrer la configuration suivante :
    - Dump SLC: **yes**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **optionnel**
    - Dump OTP: **yes**
    - Dump SEEPROM: **yes**
1. Appuyez sur le bouton A pour démarrer le processus de dumping.
1. When the process is completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
1. The files will appear on the root of the SD card.
1. To make sure you don't lose the files, copy the `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` (and if you chose to go with a full backup, `every mlc.bin.part`) file to your computer.
1. Supprimez les fichiers de votre carte SD pour libérer de l'espace.

?> **If the PayloadLoader is already installed into the Health and Safety Information app and your console is already autobooting it, you do not need to continue following the guide.**
