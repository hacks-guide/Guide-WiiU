# Problèmes courants & solutions {docsify-ignore-all}
---
### Les erreurs courantes de Haxchi

 - **-3:** Aucune carte SD détectée. Réinsérez la carte SD et essayez à nouveau. Assurez-vous que la carte SD est au format FAT32. Si l'erreur persiste, essayez de souffler dans le port carte SD car il peut y avoir de la poussière à l'intérieur.

 - **-4:** carte SD détectée mais n'a pas pu être montée. Vérifiez si la carte SD utilise le MBR et non le GPT. Vérifiez également s'il existe d'autres partitions sur la carte SD et fusionnez-les en une seule partition primaire.

 - **-5:** Fichiers manquants sur la carte SD. Vérifiez si votre carte SD contient l'Homebrew Launcher situé dans <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>.

### Erreurs du navigateur

 - **FSGetMountSource failed:** Même chose que -3 ci-dessus, cela signifie qu'aucune carte SD n'a été détectée. Réinsérez la carte SD et réessayez.

 - **FSOpenFile failed [...] payload.elf:** Fichier payload manquant sur la carte SD. Vérifiez que vous avez bien le fichier payload.elf dans le dossier wiiu.

 - **FSOpenFile failed:** `homebrew_launcher` manquant sur la carte SD. Assurez-vous que vous avez `homebrew_launcher.elf` dans le dossier <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code>.

### Le menu Gestion des données demande de supprimer les données inutiles, qu'est-ce que cela signifie ?

Il s'agit des fichiers restants, ce qui est dû à une ou plusieurs installations incomplètes. Choisissez toujours Oui pour supprimer ces données, car elles prennent de la place inutilement. Si jamais le processus de suppression des données semble ne pas fonctionner et tourne indéfiniment, vous pouvez supprimer manuellement les données vous-même.  
Utilisez FTPiiU Everywhere et naviguez jusqu'à `/storage_mlc/usr/import` puis supprimez tous les fichiers du dossier s'il y en a. C'est là que se trouvent les installations partielles lorsque des installations échouent. Ce sera `/storage_usb/usr/import` si installé sur un périphérique USB.  
Le dossier `import` doit toujours être vide.

### Mon disque dur ne fonctionne pas ou fait un bruit de clic bizarre, que dois-je faire ?

Cela est dû à une sous alimentation en électricité du disque dur car la Wii U n'en fournit pas assez au travers d'un seul port USB.

Vous pouvez régler ce problème en utilisant soit un disque dur alimenté par une source externe, soit un câble en Y pour connecter le disque dur à deux ports USB.

Si votre disque dur a fonctionné pendant un certain temps puis a cessé de fonctionner pour certains jeux/toutes les jeux, c'est le même problème et il peut être résolu avec les mêmes méthodes.

### Lors de l'extraction de certains fichiers, il y a des doublons de certains fichiers appelés "info.json" & "manifest.install", que dois-je faire avec ceux-ci ?

Rien de spécial, vous pouvez les laisser là, les supprimer ou les remplacer par ceux que vous essayez de copier. Ces dossiers ne sont pas utilisés dans le processus, par conséquent, n'auront pas d'impact en étant ou en n'étant pas là.

### Ma console a soudainement perdu sa connectivité en ligne et j'ai un disque dur posé sur le dessus de la console, que dois-je faire ?

L'antenne interne peut avoir été influencée par l'aimant du disque dur.
Vous pouvez déplacer le disque dur à une position différente sur la Wii U, ou l'enlever complètement du dessus de la Wii U.
----------

# Disposition de la carte SD
Voici un exemple de ce à quoi devrait ressembler votre carte SD après l'avoir configurée. Si vous avez une erreur `-5` ou l'erreur `FSOpenFile failed`, la disposition des fichiers peut être incorrecte.
```
💾sd:
 ┣ 📂cbhc                             (Seulement pour CBHC)
 ┃ ┣ 📜bootDrcTex.tga
 ┃ ┣ 📜bootTvTex.tga
 ┃ ┣ 📜iconTex.tga
 ┃ ┗ 📜title.txt
 ┣ 📂haxchi                           (Seulement pour Haxchi et CBHC)
 ┃ ┣ 📜bootDrcTex.tga
 ┃ ┣ 📜bootTvTex.tga
 ┃ ┣ 📜config.txt
 ┃ ┣ 📜iconTex.tga
 ┃ ┗ 📜title.txt
 ┣ 📂install
 ┃ ┗ 📂Homebrew Launcher Channel      (Seulement pour Haxchi et CBHC)
 ┃   ┣ 📜00000000.app
 ┃   ┣ 📜00000003.h3
 ┃   ┣ ...
 ┃   ┣ 📜title.cert
 ┃   ┣ 📜title.tik
 ┃   ┗ 📜title.tmd
 ┗ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📂homebrew_launcher
   ┃ ┃ ┣ 📜homebrew_launcher.elf
   ┃ ┃ ┣ 📜icon.png
   ┃ ┃ ┗ 📜meta.xml
   ┃ ┗ (Toutes les autres applications comme disc2app, nanddumper, etc. devraient être ici aussi)
   ┗ 📜payload.elf
```
