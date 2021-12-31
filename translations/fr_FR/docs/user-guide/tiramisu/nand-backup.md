# Tiramisu

## Faire une sauvegarde de la NAND {docsify-ignore}

Au cas où quelque chose se passe mal dans le processus ultérieur et que votre Wii U se retrouve brickée, restaurer une sauvegarde de la NAND précédemment créée peut la faire fonctionner de nouveau.

### Instructions {docsify-ignore}

?> La NAND d'une Wii U fait (selon votre modèle) soit 8 Go soit 32 Go. Par conséquent, pour créer une sauvegarde complète de la NAND de votre console, votre carte SD doit être plus grande que la taille de votre NAND. Si vous n'avez pas une carte SD assez grande, vous pouvez sauter la partie `MLC` qui est optionnelle et inclut des fichiers de sauvegarde et des données de jeu et par conséquent, n'est pas nécessaire pour récupérer la plupart des types de bricks.

?> La restauration d'une sauvegarde de la NAND sur la Wii U nécessite du matériel supplémentaire et des compétences en micro soudure. <br>Cependant, faire une sauvegarde de la NAND est **toujours** utile, donc ne l'ignorez pas. <br>Votre sauvegarde de la NAND est unique à votre système. Les sauvegardes des autres consoles **ne fonctionneront pas**.

1. Launch web browser exploit as [previously explained](browser-exploit) but this time, you will need to hold the B button.
1. Navigate to `nanddumper` using the Gamepad and press A to launch it.
1. Utilisez la croix directionnelle du Wii U GamePad pour entrer la configuration suivante :
    - Dump SLC: **yes**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **optionnel**
    - Dump OTP: **yes**
    - Dump SEEPROM: **yes**
1. Appuyez sur le bouton A pour démarrer le processus de dumping.
1. Une fois le processus terminé, éteignez votre Wii U, retirez votre carte SD de la Wii U et insérez-la dans votre PC.
1. Pour vous assurer de ne pas perdre les fichiers, copiez `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` et si vous avez choisi de faire une sauvegarde complète, `chaque fichier mlc.bin.part` sur votre ordinateur.
1. Supprimez les fichiers de votre carte SD pour libérer de l'espace.

?> **If the PayloadLoader is already installed into the Health and Safety Information app and your console is already autobooting it, you do not need to continue following the guide.**