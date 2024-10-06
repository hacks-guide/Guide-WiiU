# Common Issues & Fixes

## Les erreurs courantes de Haxchi

- **-3:** No SD Card detected. Réinsérez la carte SD et essayez à nouveau. Assurez-vous que la carte SD est au format FAT32. Si l'erreur persiste, essayez de souffler dans le port carte SD car il peut y avoir de la poussière à l'intérieur.

- **-4:** SD detected but could not mount. Vérifiez si la carte SD utilise le MBR et non le GPT. Vérifiez également s'il existe d'autres partitions sur la carte SD et fusionnez-les en une seule partition primaire.

- **-5:** Missing files on the SD. Check to see if your SD has Homebrew Launcher located in <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>.

## Erreurs du navigateur

- **FSGetMountSource failed:** Same as -3 above, means no SD Card detected. Réinsérez la carte SD et réessayez. This could also mean that the SD card is locked (Slider is down instead of up) or the SD card label is "WIIU", which is stated in the guide causes conflict. If it's not any of these issues, refer to the last suggestion from -3.

- **FSOpenFile failed [...] payload.elf:** Missing payload file on SD. Make sure you have payload.elf in the wiiu folder, and the wiiu folder on the root.

- **FSOpenFile failed:** Missing `homebrew_launcher` on SD. Make sure you have `homebrew_launcher.elf` in the <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code> folder.

- **SD Mount Failed:** Similar to -4, the console recognizes the SD card but could not mount it. Make sure it is formatted properly, and it is not damaged. Also, your SD card is more compatible with reputable brands (i.e. SanDisk, Samsung, Lexar, etc.) and less likely to have issues.

## Le menu Gestion des données demande de supprimer les données inutiles, qu'est-ce que cela signifie ?

Il s'agit des fichiers restants, ce qui est dû à une ou plusieurs installations incomplètes. Choisissez toujours Oui pour supprimer ces données, car elles prennent de la place inutilement.
If it ever stays stuck on deleting the data in an infinite loop, you can manually delete the data yourself.\
Use FTPiiU Everywhere and browse to `/storage_mlc/usr/import` then delete any files in the folder if any exists. C'est là que se trouvent les installations partielles lorsque des installations échouent. It'll be `/storage_usb/usr/import` if installed to a USB.\
The `import` folder should always be kept empty.

## Mon disque dur ne fonctionne pas ou fait un bruit de clic bizarre, que dois-je faire ?

Cela est dû à une sous alimentation en électricité du disque dur car la Wii U n'en fournit pas assez au travers d'un seul port USB.

Vous pouvez régler ce problème en utilisant soit un disque dur alimenté par une source externe, soit un câble en Y pour connecter le disque dur à deux ports USB.

Si votre disque dur a fonctionné pendant un certain temps puis a cessé de fonctionner pour certains jeux/toutes les jeux, c'est le même problème et il peut être résolu avec les mêmes méthodes.

## When extracting some of the files there are duplicates of certain ones called "info.json" & "manifest.install", what do I do with those?

Rien de spécial, vous pouvez les laisser là, les supprimer ou les remplacer par ceux que vous essayez de copier. Ces dossiers ne sont pas utilisés dans le processus, par conséquent, n'auront pas d'impact en étant ou en n'étant pas là.

## Ma console a soudainement perdu sa connectivité en ligne et j'ai un disque dur posé sur le dessus de la console, que dois-je faire ?

The internal antenna may have been influenced by the hard drive magnet.\
You can move the HDD to a different position atop the Wii U, or move it off the Wii U entirely.
