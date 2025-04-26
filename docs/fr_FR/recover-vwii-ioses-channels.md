# Récupérer un·e IOS/Chaîne vWii

Cette page vous guidera dans le processus de récupération d'un IOS ou d'une chaîne sur votre vWii, qu'il/elle ait été corrompu·e ou supprimé·e pour une raison quelconque.

::: danger

This has the potential to destroy your vWii NAND if you are not careful! Please consider [backing up](aroma/nand-backup) your SLCCMPT and OTP if you do not yet have them backed up!

:::

::: tip

If you are using a system update blocking method, please [remove it](unblock-updates).

:::

::: tip

Due to mounting conflicts with this app, you need to also disable the FTPiiu plugin.

:::

## Ce dont vous avez besoin

- A working [homebrew installation](index) on the Wii U side.
- The latest release of [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases).

## Instructions

1. Copy the contents of the `decaffeinator.zip` file to the root of your SD Card.
2. Take the SD Card out of your computer and plug it into your Wii U console.
3. Power on your Wii U and launch Aroma.
4. Launch vWii Decaffeinator from the Wii U Menu.

## Processus de récupération

Différentes options vous seront proposées. It is recommended to first attempt restoring through the `Advanced options` menu if you know what to restore, or `Light mode` if you aren't sure. In extreme cases where no other option solves the issue, `Aggressive mode` should be chosen.

<!-- tabs:start -->

::::: tabs

:::: tab default Advanced options

### Advanced options

::: tip

This mode will clear the specified IOSes and channels to reinstall them. Toutes les autres données (y compris les cIOS) seront conservé·e·s.

:::

:::details Cliquez ici pour voir ce qui peut être récupéré avec cette méthode.

![Advanced options](/files/Advanced-options.jpg)
![Advanced options2](/files/Advanced-options2.jpg)
![Advanced options3](/files/Advanced-options3.jpg)

:::

1. Select `Advanced options` on the menu.
2. Utilisez les flèches pour séléctionner ce que vous souhaitez restaurer.
3. Appuyez sur Start pour lancer le processus de restauration.
4. Lorsque l'application a terminé, autorisez l'application à lancer les Paramètres de la console.
5. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::::

:::: tab Light mode

### Light mode

::: tip

This mode will clear the System Menu, Wii Message Board save data, IOSes, and other system titles to reinstall clean versions of them. Veuillez noter que cela supprimera également tous les cIOS et devront être réinstallés. Toutes les autres données seront conservées.

:::

1. Select `Light mode` on the menu.
2. Appuyez sur Start pour lancer le processus de restauration.
3. Lorsque l'application a terminé, autorisez l'application à lancer les Paramètres de la console.
4. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::: info

Si vous recevez le code d'erreur 160-0101 lorsque vous démarrez la console après avoir utilisé vWii Decaffeinator, retirez le disque inséré et débranchez tous les lecteurs externes et redémarrez la console.

:::

::::

:::: tab Aggressive mode

### Aggressive mode

::: danger

This mode will clear **everything** to reinstall clean versions of the default IOSes and channels. Veuillez noter que tous les cIOS, les données de sauvegarde et les chaînes seront perdu·e·s, et que la NAND de votre vWii sera comme en sortie d'usine !

:::

1. Select `Aggressive mode` on the menu.
2. Lisez l'avertissement dans son intégralité. Si vous souhaitez poursuivre, appuyez sur Start pour lancer le processus de restauration.
3. Lorsque l'application a terminé, autorisez l'application à lancer les Paramètres de la console.
4. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::: info

Si vous recevez le code d'erreur 160-0101 lorsque vous démarrez la console après avoir utilisé vWii Decaffeinator, retirez le disque inséré et débranchez tous les lecteurs externes et redémarrez la console.

:::

::::

:::::

::: tip

If you receive Error Code 105-3102 when performing the system update, restart your console and reattempt the update.

:::
