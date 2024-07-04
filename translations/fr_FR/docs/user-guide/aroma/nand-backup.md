# Aroma {docsify-ignore-all}

## Faire une sauvegarde de la NAND

Au cas où quelque chose se passe mal dans le processus ultérieur et que votre Wii U se retrouve brickée, restaurer une sauvegarde de la NAND précédemment créée peut la faire fonctionner de nouveau.

### Instructions

?> The Wii U NAND is (depending on your model) either 8GB or 32GB. Par conséquent, pour créer une sauvegarde complète de la NAND de votre console, votre carte SD doit être plus grande que la taille de votre NAND. If you do not have a large enough SD Card, you can skip the optional `MLC` section which includes save files and game data and is not needed to recover most types of bricks.

?> Restoring a NAND Backup on the Wii U requires additional hardware and micro soldering skills. <br>However, making a NAND Backup is **always** useful, so please do not skip it. <br>Votre sauvegarde de la NAND est unique à votre système. Backups from other consoles **won't** work.

1. Navigate to `nanddumper` using the GamePad and press A to launch it.
2. Utilisez la croix directionnelle du Wii U GamePad pour entrer la configuration suivante :
   - Dump SLC: **yes**
   - Dump SLCCMPT: **yes**
   - Dump MLC: **optional**
   - Dump OTP: **yes**
   - Dump SEEPROM: **yes**
3. Appuyez sur le bouton A pour démarrer le processus de dumping.
4. When the process is completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
5. To make sure you don't lose the files, copy the `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` (and if you chose to go with a full backup, `every mlc.bin.part` file) to somewhere safe (Documents, Google Drive, OneDrive, etc.) on your computer.
   - They will appear on the root of the SD Card.
6. Delete the files you just copied from your SD Card to free up space.
