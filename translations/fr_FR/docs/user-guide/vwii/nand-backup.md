# vWii Modding Guide {docsify-ignore-all}

## Sauvegarde de la NAND

In case anything goes wrong in the later process and your vWii ends up bricked, restoring a previously made NAND backup can fix it, or you can completely [reinstall the vWii](http://wiiu.hacks.guide/#/recover-vwii-ioses-channels).

?> If you have recently made a NAND backup that includes SLCCMPT and OTP, feel free to skip this step.

1. Launch the [Wii U NAND Dumper](browser-exploit).
2. Utilisez la croix directionnelle du Wii U GamePad pour entrer la configuration suivante :
   - Dump SLC: **optional**
   - Dump SLCCMPT: **yes**
   - Dump MLC: **optional**
   - Dump OTP: **yes**
   - Dump SEEPROM: **optional**
3. Appuyez sur le bouton A pour démarrer le processus de dumping.
4. Une fois le processus terminé, éteignez votre Wii U, retirez votre carte SD de la Wii U et insérez-la dans votre PC.
5. To make sure you don't lose the files, copy the `slccmpt.bin` and `otp.bin` files (and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file) to your computer.
6. Supprimez les fichiers de votre carte SD pour libérer de l'espace.
7. Retirez la carte SD de votre ordinateur et branchez-la sur votre console Wii U.
