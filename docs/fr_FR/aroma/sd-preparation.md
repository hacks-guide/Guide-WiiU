---
prev: true
next: true
---

# Préparation de la carte SD

Nous allons maintenant placer les fichiers d'Aroma requis sur la carte SD.

::: warning

Votre carte SD devra être formatée en FAT32. Si votre carte SD n'est pas formatée en FAT32, utilisez [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) avec une taille d'unité allocation de 32k (32768) pour la formater.  
Ne nommez **pas** la carte SD `wiiu` ou cela causera des problèmes avec les homebrew.

:::

## Instructions

1. Sur le site d'[Aroma](https://aroma.foryour.cafe), faites défiler vers le bas jusqu'à la section **Download**.
   - Lisez les étapes et cliquez sur les cases à cocher.
     ![](/assets/img/guide/Aroma_Box.png)
   - Cliquez sur `Download Payloads` et `Download Base Aroma`.
     ![](/assets/img/guide/Aroma_DL.png)
2. Insérez la carte SD de votre Wii U dans votre PC.
3. **Extrayez** et copiez le dossier `wiiu` des deux fichiers _`.zip`_ récemment téléchargés vers la racine de votre carte SD.
   - Les dossiers `wiiu` devraient être fusionnés si ce n'est pas fait automatiquement.

::: tip

Si votre ordinateur vous demande d'écraser les fichiers existants sur votre carte SD, vous devrez cliquer sur Oui.

:::

::: tip

Si vous êtes sur une machine sous Mac, extrayez le deuxième zip dans une deuxième fenêtre du Finder et faites glisser le contenu vers la première fenêtre avec le contenu du premier zip. Ensuite, lorsque vous y êtes invité, sélectionnez `Fusionner` au lieu de remplacer. Si l'option de fusion ne s'affiche pas immédiatement, appuyez et maintenez la touche `Option` enfoncée tout en déplaçant les fichiers vers la racine.

:::

----------

L'extraction du contenu du zip vers la racine est fait comme ceci.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
  <video style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" controls muted>
    <source src="/assets/img/guide/SD_Prep.mp4" type="video/mp4">
    
    Votre navigateur ne prend pas en charge la balise vidéo.
  </video>
</div>

## Disposition de la carte SD

:::details Cliquez ici pour afficher la disposition finale de la carte SD.

```
💾sd:
 ┗ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📂AromaUpdater
   ┃ ┃ ┗📜AromaUpdater.wuhb
   ┃ ┣ 📜PayloadLoaderInstaller.wuhb
   ┃ ┗ (Tous les autres applis devraient aussi être ici)
   ┣ 📂environments
   ┃ ┗ 📂aroma
   ┃   ┣ 📂modules
   ┃   ┃ ┣ 📂setup
   ┃   ┃ ┃ ┣ 📜00_mocha.rpx
   ┃   ┃ ┃ ┣ 📜10_wums_loader.rpx
   ┃   ┃ ┃ ┗ 📜99_autoboot.rpx
   ┃   ┃ ┗ (Tous les autres modules Aroma terminant par .wms devraient aussi être ici)
   ┃   ┣ 📂plugins
   ┃   ┃ ┣ 📜AromaBasePlugin.wps
   ┃   ┃ ┣ 📜drc_region_free.wps
   ┃   ┃ ┣ 📜homebrew_on_menu.wps
   ┃   ┃ ┣ 📜regionfree.wps
   ┃   ┃ ┗ (Tous les autres plugins Aroma terminant par .wps devraient aussi être ici)
   ┃   ┗ 📜root.rpx
   ┣ 📂payloads
   ┃ ┣ 📂default
   ┃ ┃ ┗ 📜payload.elf
   ┃ ┗ 📂nanddumper
   ┃   ┗ 📜payload.elf
   ┣ 📜payload.rpx
   ┗ 📜payload.elf
```

:::

::: tip

Si vous avez déjà le PayloadLoader d'installé, vous pouvez aller directement à [Finaliser l'installation](./finalizing-setup.md)

:::
