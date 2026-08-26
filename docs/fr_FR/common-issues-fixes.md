# Problèmes courants et solutions

## Les erreurs courantes de Haxchi

- **-3:** Aucune carte SD détectée. Réinsérez la carte SD et essayez à nouveau. Assurez-vous que la carte SD est au format FAT32. Si l'erreur persiste, essayez de souffler de l 'air comprimé dans l'emplacement SD car il peut devenir poussiéreux. **Ne soufflez pas dans l'emplacement SD avec votre bouche, car cela peut introduire de l'humidité qui peut ENDOMMAGER l'emplacement.**

- **-4:** SD détectée mais n'a pas pu être montée. Vérifiez si la SD utilise le MBR et non le GPT. Vérifiez également s'il existe d'autres partitions sur la carte SD et fusionnez-les en une seule partition primaire.

- **-5:** Fichiers manquants sur la SD. Vérifiez si votre carte SD a le Homebrew Launcher situé à <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>.

## Erreurs du navigateur

- **FSGetMountSource failed:** Identique au -3 ci-dessus, signifie que la carte SD n'est pas détectée. Réinsérez la carte SD et réessayez. Cela pourrait également signifier que la carte SD est verrouillée (le loquet de verrouillage est en bas au lieu d'être en haut) ou que la carte SD est nommée "WIIU", ce qui est indiqué dans le guide que cela provoque des conflits. Si ce n'est pas un de ces problèmes, reportez-vous à la dernière suggestion de -3.

- **FSOpenFile failed [...] payload.elf:** Fichier payload manquant sur la SD. Vérifiez que vous avez payload.elf dans le dossier wiiu, et le dossier wiiu à la racine.

- **FSOpenFile failed:** `homebrew_launcher` manquant sur la SD. Assurez-vous que vous avez `homebrew_launcher.elf` dans le dossier <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code>.

- **SD Mount Failed:** Similaire à -4, la console reconnaît la carte SD mais n'a pas pu la monter. Assurez-vous qu'elle est correctement formatée et qu'elle n'est pas endommagée. De plus, votre carte SD est plus susceptible d'être compatible avec des marques réputées (par exemple. SanDisk, Samsung, Lexar, etc.) et a moins de chances d'avoir des problèmes.

## Le menu Gestion des données demande de supprimer les données inutiles, qu'est-ce que cela signifie ?

Il s'agit des fichiers restants provenant d'installations incomplètes. Choisissez toujours Oui pour supprimer ces données, car elles prennent de la place inutilement.
Si cela reste bloqué sur la suppression des données dans une boucle infinie, vous pouvez supprimer manuellement les données vous-même.  
Utilisez FTPiiU Everywhere et naviguez vers `/storage_mlc/usr/import` puis supprimez tous les fichiers dans le dossier s'il en existe. C'est là que se trouvent les installations partielles lorsque des installations échouent. Ce sera `/storage_usb/usr/import` si installé vers un USB.  
Le dossier `import` devrait toujours être gardé vide.

## Mon disque dur ne fonctionne pas ou fait un bruit de clic bizarre, que dois-je faire ?

Cela est dû à une sous-alimentation en électricité du disque dur car la Wii U n'en fournit pas assez au travers d'un seul port USB.

Vous pouvez régler ceci en utilisant soit un disque dur alimenté par une source externe, soit un câble en Y pour connecter le disque dur à deux ports USB.

Si votre disque dur a fonctionné pendant un certain temps puis a cessé de fonctionner pour certains jeux/toutes les jeux, c'est le même problème et il peut être résolu avec les mêmes méthodes.

## Ma console a soudainement perdu sa connectivité en ligne et j'ai un disque dur posé sur le dessus de la console, que dois-je faire ?

L'antenne interne pourrait avoir été influencée par l'aimant du disque dur.  
Vous pouvez déplacer le disque dur à une position différente sur le dessus de la Wii U, ou l'enlever complètement du dessus de la Wii U.
