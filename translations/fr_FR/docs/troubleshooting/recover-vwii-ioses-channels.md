# Récupération d'un IOS/d'une chaîne vWii
---
Cette page vous guidera dans le processus de récupération d'un IOS ou d'une chaîne sur votre vWii, qu'il/elle ait été corrompu·e ou supprimé·e pour une raison quelconque.

<details>
<summary>Cliquez ici pour voir ce qui peut être récupéré avec cette méthode.</summary>

- Manuel du menu Wii
- Chaîne système vWii
- Sélection de la région
- Menu Système
- Chaîne Mii
- Menu Wii U
- Chaîne Boutique Wii
- IOS 9
- IOS 12
- IOS 13
- IOS 14
- IOS 15
- IOS 17
- IOS 21
- IOS 22
- IOS 28
- IOS 31
- IOS 33
- IOS 34
- IOS 35
- IOS 36
- IOS 37
- IOS 38
- IOS 41
- IOS 43
- IOS 45
- IOS 46
- IOS 48
- IOS 53
- IOS 55
- IOS 56
- IOS 57
- IOS 58
- IOS 59
- IOS 62
- IOS 80
- BC-NAND
- BC-WFS

</details>

!> Cela peut détruire la NAND de votre vWii si vous ne faites pas attention ! Veuillez [sauvegarder](mocha/online-exploit/nand-backup) vos SLCCMPT et OTP si vous ne les avez pas encore sauvegardés !

?> Si vous utilisez une méthode de blocage de mise à jour du système, veuillez [la supprimer](unblock-updates).

### What You Need {docsify-ignore}

- A working [homebrew installation](introduction) on the Wii U side.
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

#### **Aggressive mode**

### Aggressive mode

!> Ce mode efface **tout** pour réinstaller des versions propres des IOS et des chaînes par défaut. Veuillez noter que tous les cIOS, les données de sauvegarde et les chaînes seront perdu·e·s, et que la NAND de votre vWii sera comme en sortie d'usine !

1. Sélectionnez `Aggressive mode` dans le menu.
1. Lisez l'avertissement dans son intégralité. Si vous souhaitez poursuivre, appuyez sur Start pour lancer le processus de restauration.
1. Lorsque l'application se termine, autorisez l'application à lancer les Paramètres de la console.
1. Effectuez une [Mise à jour de la console](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) pour terminer le processus de restauration.

?> Vous pouvez maintenant réactiver votre méthode de [blocage des mises à jour du système](block-updates).

> If you receive Error Code 160-0101 when booting up the system after using vWii Decaffeinator, take out the inserted disc and unplug any external drives and restart the system.

<!-- tabs:end -->

> If you receive Error Code 105-3102 when performing the system update, restart your console and reattempt the update.