# Problèmes courants & Corrige {docsify-ignore-all}
---
### Les erreurs courantes de Haxchi

 - **-3:** Aucune carte SD détectée. Réinsérez la carte SD et essayez à nouveau. Assurez-vous que la carte SD est au format FAT32. Si l'erreur persiste, essayez de souffler dans la fente SD car elle peut être poussiéreuse à l'intérieur.

 - **-4:** SD détecté mais n'a pas pu être monté. Vérifiez si la carte SD utilise le MBR et non le GPT. Vérifiez également s'il existe d'autres partitions sur la carte SD et fusionnez-les en une seule partition primaire.

 - **-5:** Fichiers manquants sur la carte SD. Vérifiez si votre carte SD a le Homebrew Launcher situé dans <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>.

### Erreurs du navigateur

 - **FSGetMountSource failed:** Même chose que -3 ci-dessus, signifie qu'aucune carte SD n'a été détectée. Réinsérer la carte SD et réessayer.

 - **FSOpenFile failed [...] payload.elf:** Fichier payload manquant sur la carte SD. Vérifiez que vous avez bien le fichier payload.elf dans le dossier wiiu.

 - **FSOpenFile failed:** Manque le `homebrew_launcher` sur la carte SD. Assurez-vous que vous avez `homebrew_launcher.elf` dans le dossier <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code>.

### La gestion des données demande de supprimer les données inutiles, qu'est-ce que cela signifie ?

Il s'agit des fichiers restants des installations incomplètes. Choisissez toujours Oui pour supprimer ces données, car elles prennent de la place sans raison valable. Si jamais il reste bloqué sur la suppression des données dans une boucle infinie, vous pouvez supprimer manuellement les données vous-même.  
Utilisez FTPiiU Everywhere et naviguez jusqu'à `/storage_mlc/usr/import` puis supprimez tous les fichiers du dossier s'il en existe. C'est là que les installations partielles existent après les installations incomplètes. Ce sera `/storage_usb/usr/import` si installé sur un périphérique USB.  
Le dossier `import` doit toujours être vide.

### Mon disque dur ne fonctionne pas ou émet un clic bizarre, que dois-je faire ?

La raison en est que la Wii U ne donne pas assez de puissance via un port USB pour utiliser le disque dur.

Vous pouvez régler ce problème en utilisant soit un disque dur alimenté, soit un câble en Y pour connecter le disque dur à deux ports USB.

Si votre disque dur a fonctionné pendant un certain temps puis a cessé de fonctionner pour certains jeux/toutes les jeux, c'est le même problème et il peut être résolu avec les mêmes méthodes.

### Lors de l'extraction de certains fichiers, il y a des doublons de certains fichiers appelés "info.json" & "manifest.install", que dois-je faire avec ceux-ci ?

Rien de spécial, vous pouvez les laisser là, les supprimer ou les remplacer par ceux que vous essayez de copier. Ces dossiers ne sont pas utilisés dans le processus, par conséquent, n'auront pas d'impact en étant ou en n'étant pas là.

### Ma console a soudainement perdu sa connectivité en ligne et j'ai un disque dur posé sur le dessus de la console, que dois-je faire ?

L'antenne interne peut avoir été influencée par l'aimant du disque dur.  
Vous pouvez déplacer le disque dur vers une autre position au sommet de la Wii U, ou le déplacer entièrement hors de la Wii U.