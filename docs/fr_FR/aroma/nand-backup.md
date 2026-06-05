---
prev: true
next: true
---

# Faire une sauvegarde de la NAND

Au cas où quelque chose se passe mal dans le processus ultérieur et que votre Wii U se retrouve brickée, restaurer une sauvegarde de la NAND précédemment créée peut la faire fonctionner de nouveau.

## Instructions

::: tip

La MLC d'une Wii U fait (selon votre modèle) soit 8 Go soit 32 Go. Par conséquent, pour créer une sauvegarde complète de la NAND de votre console, votre carte SD doit être plus grande que la taille de votre MLC. Si vous n'avez pas une carte SD assez grande, vous pouvez sauter la section `MLC` optionelle qui inclut des fichiers de sauvegarde et des données de jeu et n'est nécessaire pour réparer aucun type de brick.

:::

::: tip

La restauration d'une sauvegarde de la NAND sur la Wii U nécessite ISFShax ou du matériel supplémentaire et des compétences en microsoudure.

Cependant, faire une sauvegarde de la NAND est **toujours** utile, donc ne la passez pas.

Votre sauvegarde de la NAND est unique à votre système. Les sauvegardes des autres consoles ne fonctionneront **pas** sans les connaissances requises.

:::

1. Naviguez vers `nanddumper` en utilisant le GamePad et appuyez sur le bouton A pour le lancer.
2. Utilisez la croix directionnelle du GamePad Wii U pour entrer la configuration suivante :
   ![SLC: Yes, SLCCMPT: Yes, MLC: Yes ou No, OTP: Yes, SEEPROM: Yes](/assets/img/guide/NAND.png)
   - la MLC est **OPTIONNELLE**, si vous ne voulez pas la sauvegarder, laissez-la sur `No`. Si vous souhaitez la sauvegarder, assurez-vous d'avoir une carte SD assez grande pour celle-ci et réglez-la sur `Yes`.
3. Appuyez sur le bouton A pour démarrer le processus de dumping.
4. Une fois le processus terminé, éteignez votre Wii U, retirez votre carte SD de la Wii U et insérez-la dans votre PC.
5. Pour vous assurer de ne pas perdre les fichiers, copiez les fichiers `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` (et si vous avez choisi de faire une sauvegarde complète, `chaque mlc.bin.part`) vers un endroit sûr (Documents, Google Drive, OneDrive, etc.) sur votre ordinateur.
   - Ils apparaîtront à la racine de la carte SD.
6. Supprimez les fichiers que vous venez de copier de votre carte SD pour libérer de l'espace.
