# Récupération d'un IOS/d'une chaîne vWii
---
Cette page vous guidera dans le processus de récupération d'un IOS ou d'une chaîne sur votre vWii, qu'il/elle ait été corrompu·e ou supprimé·e pour une raison quelconque.

!> Cela peut détruire la NAND de votre vWii si vous ne faites pas attention ! Please consider [backing up](vwii/nand-backup) your SLCCMPT and OTP if you do not yet have them backed up!

?> Si vous utilisez une méthode de blocage de mise à jour du système, veuillez [la supprimer](unblock-updates).

?> Due to mounting conflicts with this app, you need to also disable the FTPiiu plugin.

### Ce dont vous avez besoin {docsify-ignore}

- Une installation [Homebrew fonctionnelle](introduction) sur le côté de la Wii U.
- La dernière version de [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases).

### Instructions {docsify-ignore}

1. Copiez le contenu du fichier `decaffeinator.zip` vers la racine de votre carte SD.
1. Retirez la carte SD de votre ordinateur et branchez-la sur votre console Wii U.
1. Allumez votre Wii U et lancez le CFW de votre choix (Mocha, Haxchi ou CBHC).
1. Lancez le Homebrew Launcher.
1. Lancez vWii Decaffeinator.

### Processus de récupération

Différentes options vous seront proposées. Il est recommandé de faire une première tentative de restauration en passant par le menu `Advanced options` si vous savez ce qu'il faut restaurer, ou `Light mode` si vous n'êtes pas sûr. Dans les cas extrêmes où aucune autre option ne résout le problème, il convient de choisir `Aggressive mode`.

<!-- tabs:start -->

#### **Advanced options**

### Advanced options

?> Ce mode efface les IOS et les chaînes spécifié·e·s pour les réinstaller. Toutes les autres données (y compris les cIOS) seront conservé·e·s.

<details>
<summary>Cliquez ici pour voir ce qui peut être récupéré avec cette méthode.</summary>

![Advanced options](docs/files/Advanced-options.jpg) ![Advanced options2](docs/files/Advanced-options2.jpg) ![Advanced options3](docs/files/Advanced-options3.jpg)

</details>

1. Sélectionnez `Advanced options` dans le menu.
1. Utilisez les flèches pour séléctionner ce que vous souhaitez restaurer.
1. Appuyez sur Start pour lancer le processus de restauration.
1. Lorsque l'application a terminé, autorisez l'application à lancer les Paramètres de la console.
1. Effectuez une [Mise à jour de la console](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) pour terminer le processus de restauration.

?> Vous pouvez maintenant réactiver votre méthode de [blocage des mises à jour du système](block-updates).

#### **Light mode**

### Light mode

?> Ce mode efface le Menu Système, les données sauvegardées sur le Bureau Wii, les IOS et autres titres du système pour en réinstaller des versions propres. Veuillez noter que cela supprimera également tous les cIOS et devront être réinstallés. Toutes les autres données seront conservées.

1. Sélectionnez `Light mode` dans le menu.
1. Appuyez sur Start pour lancer le processus de restauration.
1. Lorsque l'application a terminé, autorisez l'application à lancer les Paramètres de la console.
1. Effectuez une [Mise à jour de la console](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) pour terminer le processus de restauration.

?> Vous pouvez maintenant réactiver votre méthode de [blocage des mises à jour du système](block-updates).

> Si vous recevez le code d'erreur 160-0101 lorsque vous démarrez la console après avoir utilisé vWii Decaffeinator, retirez le disque inséré et débranchez tous les lecteurs externes et redémarrez la console.

#### **Aggressive mode**

### Aggressive mode

!> Ce mode efface **tout** pour réinstaller des versions propres des IOS et des chaînes par défaut. Veuillez noter que tous les cIOS, les données de sauvegarde et les chaînes seront perdu·e·s, et que la NAND de votre vWii sera comme en sortie d'usine !

1. Sélectionnez `Aggressive mode` dans le menu.
1. Lisez l'avertissement dans son intégralité. Si vous souhaitez poursuivre, appuyez sur Start pour lancer le processus de restauration.
1. Lorsque l'application se termine, autorisez l'application à lancer les Paramètres de la console.
1. Effectuez une [Mise à jour de la console](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) pour terminer le processus de restauration.

?> Vous pouvez maintenant réactiver votre méthode de [blocage des mises à jour du système](block-updates).

> Si vous recevez le code d'erreur 160-0101 lorsque vous démarrez la console après avoir utilisé vWii Decaffeinator, retirez le disque inséré et débranchez tous les lecteurs externes et redémarrez la console.

<!-- tabs:end -->

> If you receive Error Code 105-3102 when performing the system update, restart your console and reattempt the update.
