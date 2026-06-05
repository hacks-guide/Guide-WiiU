# Récupérer un IOS/Chaîne vWii

Cette page vous guidera dans le processus de récupération d'un IOS ou d'une chaîne sur votre vWii, qu'il ait été corrompu ou supprimé pour une raison quelconque.

::: danger

Ceci a la possibilité de détruire la NAND de votre vWii si vous ne faites pas attention ! Veuillez envisager la [sauvegarde](aroma/nand-backup) de votre SLCCMPT et OTP si vous ne les avez pas déjà sauvegardées !

:::

::: tip

Si vous utilisez une méthode de blocage des mises à jour du système, veuillez [la retirer](unblock-updates).

:::

::: tip

À cause de conflits de montage avec cette appli, vous devez aussi désactiver le plugin FTPiiu.

:::

## Ce dont vous avez besoin

- Une [installation homebrew](index) fonctionnelle du côté de la Wii U.
- La dernière version de [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases).

## Instructions

1. Copiez le contenu du fichier `decaffeinator.zip` vers la racine de votre carte SD.
2. Retirez la carte SD de votre ordinateur et insérez-la dans votre console Wii U.
3. Allumez votre Wii U et lancez Aroma.
4. Lancez vWii Decaffeinator depuis le menu Wii U.

## Processus de récupération

Différentes options vous seront proposées. Il est recommandé de faire d'abord une première tentative de restauration avec le menu `Advanced options` si vous savez quoi restaurer, ou `Light mode` si vous n'êtes pas sûr. Dans les cas extrêmes où aucune autre option ne résout le problème, `Aggressive mode` devrait être choisi.

<!-- tabs:start -->

::::: tabs

:::: tab default Advanced options

### Advanced options

::: tip

Ce mode supprimera les IOS et chaînes spécifiés pour les réinstaller. Toutes les autres données (y compris les cIOS) seront conservées.

:::

:::details Cliquez ici pour voir ce qui peut être récupéré avec cette méthode.

![Advanced options](/files/Advanced-options.jpg)
![Advanced options2](/files/Advanced-options2.jpg)
![Advanced options3](/files/Advanced-options3.jpg)

:::

1. Sélectionnez `Advanced options` dans le menu.
2. Utilisez la croix directionnelle pour sélectionner ce que vous souhaitez restaurer.
3. Appuyez sur Start pour lancer le processus de restauration.
4. Lorsque l'application a terminé, autorisez l'application à lancer les Paramètres de la console.
5. Effectuez une [mise à jour du système](https://fr-americas-support.nintendo.com/app/answers/detail/a_id/13707/~/comment-effectuer-une-mise-%C3%A0-jour-du-syst%C3%A8me-sur-wii-u) pour terminer le processus de restauration.

::: tip

Vous pouvez maintenant réactiver votre [méthode de blocage des mises à jour du système](block-updates).

:::

::::

:::: tab Light mode

### Light mode

::: tip

Ce mode efface le Menu système, les données sauvegardées sur le Bureau Wii, les IOS et autres titres du système pour en réinstaller des versions propres. Veuillez noter que cela supprimera également tous les cIOS et devront être réinstallés. Toutes les autres données seront conservées.

:::

1. Sélectionnez `Light mode` dans le menu.
2. Appuyez sur Start pour lancer le processus de restauration.
3. Lorsque l'application a terminé, autorisez l'application à lancer les Paramètres de la console.
4. Effectuez une [mise à jour du système](https://fr-americas-support.nintendo.com/app/answers/detail/a_id/13707/~/comment-effectuer-une-mise-%C3%A0-jour-du-syst%C3%A8me-sur-wii-u) pour terminer le processus de restauration.

::: tip

Vous pouvez maintenant réactiver votre [méthode de blocage des mises à jour du système](block-updates).

:::

::: info

Si vous recevez le code d'erreur 160-0101 lorsque vous démarrez la console après avoir utilisé vWii Decaffeinator, retirez le disque inséré et débranchez tous les lecteurs externes et redémarrez la console.

:::

::::

:::: tab Aggressive mode

### Aggressive mode

::: danger

Ce mode effacera **tout** pour réinstaller des versions propres des IOS et des chaînes par défaut. Veuillez noter que tous les cIOS, les données de sauvegarde et les chaînes seront perdues, et que la NAND de votre vWii sera comme en sortie d'usine !

:::

1. Sélectionnez `Aggressive mode` dans le menu.
2. Lisez l'avertissement dans son intégralité. Si vous souhaitez poursuivre, appuyez sur Start pour lancer le processus de restauration.
3. Lorsque l'application a terminé, autorisez l'application à lancer les Paramètres de la console.
4. Effectuez une [mise à jour du système](https://fr-americas-support.nintendo.com/app/answers/detail/a_id/13707/~/comment-effectuer-une-mise-%C3%A0-jour-du-syst%C3%A8me-sur-wii-u) pour terminer le processus de restauration.

::: tip

Vous pouvez maintenant réactiver votre [méthode de blocage des mises à jour du système](block-updates).

:::

::: info

Si vous recevez le code d'erreur 160-0101 lorsque vous démarrez la console après avoir utilisé vWii Decaffeinator, retirez le disque inséré et débranchez tous les lecteurs externes et redémarrez la console.

:::

::::

:::::

::: tip

Si vous recevez le code d'erreur 105-3102 lors de la mise à jour du système, redémarrez votre console et réessayez la mise à jour.

:::
