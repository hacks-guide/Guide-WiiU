# Débloquer les mises à jour

Ceci est nécessaire si vous avez besoin d'effectuer une mise à jour du système.

::: tip

Si vous faites tourner Aroma et avez supprimé le dossier de mise à jour, vous devez désactiver les deux autodémarrages et recréer le dossier de mise à jour.

:::

::: tip

Les utilisateurs avec ISFShax doivent avoir au miminum la v4 du plugin stroopwafel `wafel_isfshax_patch.ipx`/`5isfshax.ipx` sur la carte SD ou la SLC pour pouvoir mettre à jour.

:::

## Instructions

::::: tabs

:::: tab default Recréation du dossier de mise à jour

### Recréation du dossier de mise à jour

1. Assurez-vous d'avoir la dernière bêta d'Aroma.
2. Démarrez Aroma tout en maintenant + (Plus).
3. Maintenez + (Plus) **et** - (Moins) jusqu'à ce qu'il indique "Updates not blocked!".

::::

:::: tab Suppression de l'autodémarrage d'Aroma

### Désactiver le démarrage automatique d'Aroma

::: tip

Lorsque vous démarrez automatiquement sur le PayloadLoader, les mises à jour sont automatiquement bloquées. Suivez le guide ci-dessous pour le désactiver.

:::

::: tip

Les utilisateurs avec ISFShax devront supprimer les `wafel_payloader.ipx`/`5payldr.ipx` (si utilisé) de la carte SD (`sd:/wiiu/ios_plugins`) ou la SLC (`slc:/sys/hax/ios_plugins`) pour arrêter le démarrage automatique dans Aroma.

:::

1. Ouvrez le PayloadLoader Installer à partir du menu Wii U.
2. Appuyez sur A pour sélectionner `Check`.
3. Sélectionnez `Boot options`.
4. Vous serez invité à choisir si vous souhaitez modifier le titre qui sera lancé lors du démarrage de la console. Appuyez sur A pour sélectionner `Switch back to Wii U Menu`.
5. Une fois le processus terminé, appuyez sur A pour éteindre la console.
6. Effectuez la mise à jour du système.
7. Suivez [ceci](aroma/autobooting) pour réactiver le démarrage automatique.

::::

:::: tab Suppression du blocage DNS

### Suppression du blocage DNS

1. Entrez dans les Paramètres de la console de la Wii U et naviguez jusqu'à `Internet > Connexion Internet > Liste des connexions >`
   `Votre connexion WiFi > Modifier > DNS` et réglez l'option d'obtention automatique sur Oui.
2. Vous ne bloquez désormais plus les mises à jour du système.

::::

:::::
