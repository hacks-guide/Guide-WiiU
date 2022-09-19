# Tiramisu {docsify-ignore-all}

## Préparation de la carte SD

Nous allons maintenant placer les fichiers du CFW requis et quelques fichiers homebrew supplémentaires sur la carte SD.

?> **Remarque** Votre carte SD devra être formatée en FAT32. Si votre carte SD n'est pas formatée en FAT32, utilisez [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) avec 32k (32768) en Taille d'unité d'allocation pour la formater. </br> **Ne nommez pas** la carte SD en tant que `wiiu` ou cela causera des problèmes avec les homebrews.

?> **Si vous avez une ancienne installation existante d'un CFW** </br> Pour les utilisateurs de **CBHC** : allez à la page [Désinstaller CBHC](../uninstall-cbhc) pour désinstaller CBHC. </br> Pour les utilisateurs de **Haxchi** : désinstallez l'application Haxchi depuis le menu de Gestion des données dans l'application Paramètres de la console. </br> Pour les utilisateurs de **Mocha CFW (Indexiine)** : allez à la page [Désinstaller Indexiine](../uninstall-indexiine) pour désinstaller Indexiine. </br> Pour les utilisateurs de **Mocha CFW (Exploit en ligne)** : vous n'avez rien d'autre à faire avant de suivre ce guide.

### Ce dont vous avez besoin

- Les derniers fichiers de [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Click on `Download Tiramisu`.
- The latest release of the [Sigpatches Module](https://github.com/marco-calautti/SigpatchesModuleWiiU/releases).
    - You will need to download the `01_sigpatches.rpx` file.

### Instructions

1. Insérez la carte SD de votre Wii U dans votre PC.
1. **Extract** and copy the contents of the newly downloaded Tiramisu *`.zip`* file to the root of your SD Card.
1. Copy the `01_sigpatches.rpx` file to `/wiiu/environments/tiramisu/modules/setup` on your SD Card.

?> Si votre ordinateur vous demande d'écraser les fichiers existants sur votre carte SD, vous devrez cliquer sur Oui.
