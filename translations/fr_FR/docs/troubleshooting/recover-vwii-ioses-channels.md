# Récupération d'un IOS/Canal vWii
---
Cette page vous guidera dans le processus de récupération d'un IOS ou d'un canal sur votre vWii, qu'il ait été corrompu ou supprimé pour une raison quelconque.

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

!> Cela risque de détruire votre vWii NAND si vous ne faites pas attention ! Veuillez envisager de [sauvegarder](mocha/online-exploit/nand-backup) vos SLCCMPT et OTP si vous ne les avez pas encore sauvegardés !

?> Si vous utilisez une méthode de blocage de mise à jour du système, veuillez [la supprimer](unblock-updates).

### Ce dont vous avez besoin

- Une installation [Homebrew fonctionnelle](introduction) sur le côté de la WiiU.
- La dernière version de [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases).

### Instructions

1. Extrayez le fichier `decaffeinator.zip` à la racine de votre carte SD.
1. Retirez la carte SD de votre ordinateur et branchez-la sur votre console Wii U.
1. Allumez votre Wii U et lancez le CFW de votre choix (Mocha, Haxchi ou CBHC).
1. Lancez le Homebrew Launcher.
1. Lancer vWii Decaffeinator.

### Récupération du processus

Différentes options vous seront proposées. Il est recommandé de faire une première tentative de restauration par le menu `Advanced options` si vous savez ce qu'il faut restaurer, ou `Light mode` si vous n'êtes pas sûr. Dans les cas extrêmes où aucune autre option ne résout le problème, il convient de choisir `Aggressive mode`.

<!-- tabs:start -->

#### **Advanced options**

?> Ce mode efface les IOS et les canaux spécifiés pour les réinstaller. Toutes les autres données (y compris les cIOS) seront conservées.

1. Sélectionnez `Advanced options` dans le menu.
1. Utilisez les flèches pour basculer ce que vous aimeriez voir restauré.
1. Appuyez sur Start pour lancer le processus de restauration.
1. Lorsque l'application se termine, autorisez l'application à lancer les paramètres du système.
1. Effectuez une [Mise à jour du système](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) pour terminer le processus de restauration.

?> Vous pouvez maintenant réactiver votre méthode de [blocage des mises à jour du système](block-updates).

#### **Light mode**

?> Ce mode efface le menu système, les données sauvegardées sur le bureau Wii, les IOS et autres titres du système pour en réinstaller des versions propres. Veuillez noter que cela supprimera également tous les cIOS et devra être réinstallé. Toutes les autres données seront conservées.

1. Sélectionnez `Light mode` dans le menu.
1. Appuyez sur Start pour lancer le processus de restauration.
1. Lorsque l'application se termine, autorisez l'application à lancer les paramètres du système.
1. Effectuez une [Mise à jour du système](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) pour terminer le processus de restauration.

?> Vous pouvez maintenant réactiver votre méthode de [blocage des mises à jour du système](block-updates).

#### **Aggressive mode**

!> Ce mode efface **tout** pour réinstaller des versions propres des IOS et des canaux par défaut. Veuillez noter que tous les cIOS, les données de sauvegarde et les canaux seront perdus, et que la vWii NAND sera renvoyée à sa forme d'origine !

1. Sélectionnez `Aggressive mode` dans le menu.
1. Lisez l'avertissement dans son intégralité. Si vous souhaitez poursuivre, appuyez sur Démarrer pour lancer le processus de restauration.
1. Lorsque l'application se termine, autorisez l'application à lancer les paramètres du système.
1. Effectuez une [Mise à jour du système](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) pour terminer le processus de restauration.

?> Vous pouvez maintenant réactiver votre méthode de [blocage des mises à jour du système](block-updates).

<!-- tabs:end -->

> Si vous recevez le code d'erreur 105-3102 lors de la mise à jour du système, redémarrez votre console et réessayez la mise à jour.
