# Mocha - Indexiine

## Préparation de la carte SD {docsify-ignore}

Nous allons maintenant placer les fichiers du CFW requis et quelques fichiers homebrew supplémentaires sur la carte SD.

?> **Remarque** Votre carte SD devra être formatée en FAT32. Si votre carte SD n'est pas formatée en FAT32, utilisez [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) avec 32k (32768) en taille d'unité d'allocation pour la formater. It is advised that you do not label the SD Card as `wiiu` as it may cause issues with some applications.

### What You Need {docsify-ignore}

- The Mocha <a href="docs/files/config.ini" download>config</a>.
- The latest release of [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest).
  - Vous devrez télécharger le fichier `payload.zip`.
- The 1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4).
  - You will need to download the v1.4 `homebrew_launcher.v1.4.zip` release of The Homebrew Launcher.
- La dernière version de [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- The latest release of [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest).
- The latest release of the [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest).
  - Vous devrez télécharger le fichier `wiiu-extracttosd.zip`.
- The latest release of [Mocha](https://www.wiiubru.com/appstore/zips/mocha.zip).
- The latest release of <a href="docs/files/SaveMii_Mod.zip" download>SaveMii Mod</a>.
- The latest release of [Indexiine-Installer](https://github.com/GaryOderNichts/indexiine-installer/releases/latest).

### Instructions {docsify-ignore}

?> **Remarque** Les fichiers info.json et manifest.install ne sont pas nécessaires pour le processus de modding et peuvent donc être supprimés.

1. Insérez la carte SD de votre Wii U dans votre PC.
1. Copiez le contenu du fichier `wup_installer_gx2.zip` vers la racine de votre carte SD.
1. Copiez le contenu du fichier `nanddumper.zip` vers la racine de votre carte SD.
1. Copiez le contenu du fichier `wiiu-extracttosd.zip` vers la racine de votre carte SD.
1. Copiez le contenu du fichier `homebrew_launcher.v.1.4.zip` vers la racine de votre carte SD.
1. Copiez le contenu du fichier `mocha.zip` vers la racine de votre carte SD.
1. Copiez le contenu du fichier `indexiine-installer.zip` vers la racine de votre carte SD.
1. Copiez le contenu du fichier `savemii_mod.zip` vers la racine de votre carte SD.
1. Copiez le fichier `config.ini` dans le dossier `/wiiu/apps/mocha` de votre carte SD.
1. Copiez le fichier `payload.elf` du fichier `payload.zip` vers le dossier `wiiu` de votre carte SD.
