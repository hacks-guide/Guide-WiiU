# Récupération d'un IOS/Canal vWii
---
Cette page vous guidera dans le processus de récupération d'un IOS ou d'un canal sur votre vWii, qu'il ait été corrompu ou supprimé pour une raison quelconque.

<details>
<summary>Cliquez ici pour voir ce qui peut être récupéré avec cette méthode.</summary>

- Wii Menu Manual
- vWii System Channel
- Region Select
- System Menu
- Mii Channel
- Wii U Menu
- Wii Shop Channel
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

### Recovering Process

You will be provided with various options. It is recommended to first attempt restoring through the `Advanced options` menu if you know what to restore, or `Light mode` if you aren't sure. In extreme cases where no other option solves the issue, `Aggressive mode` should be chosen.

<!-- tabs:start -->

#### **Advanced options**

?> This mode will clear the specified IOSes and channels to reinstall them. All other data (including cIOSes) will be preserved.

1. Select `Advanced options` on the menu.
1. Use the D-Pad to toggle what you would like to be restored.
1. Press Start to initiate the restoration process.
1. When the application finishes, allow the application to launch the System Settings.
1. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

?> Vous pouvez maintenant réactiver votre méthode de [blocage des mises à jour du système](block-updates).

#### **Light mode**

?> This mode will clear the System Menu, Wii Message Board save data, IOSes, and other system titles to reinstall clean versions of them. Please note this will remove all cIOSes as well and must be reinstalled. All other data will be preserved.

1. Select `Light mode` on the menu.
1. Press Start to initiate the restoration process.
1. When the application finishes, allow the application to launch the System Settings.
1. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

?> Vous pouvez maintenant réactiver votre méthode de [blocage des mises à jour du système](block-updates).

#### **Aggressive mode**

!> This mode will clear **everything** to reinstall clean versions of the default IOSes and channels. Please note that all cIOSes, save data, and channels will be lost, and the vWii NAND will be returned to its stock form!

1. Select `Aggressive mode` on the menu.
1. Read the warning in its entirety. If you wish to proceed, press Start to initiate the restoration process.
1. When the application finishes, allow the application to launch the System Settings.
1. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

?> Vous pouvez maintenant réactiver votre méthode de [blocage des mises à jour du système](block-updates).

<!-- tabs:end -->

> If you receive Error Code 105-3102 when performing the system update, restart your console and reattempt the update.
