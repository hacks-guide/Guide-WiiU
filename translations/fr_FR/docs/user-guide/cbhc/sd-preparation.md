# CBHC

## Préparation de la carte SD {docsify-ignore}

Nous allons maintenant placer les fichiers du CFW requis et quelques fichiers homebrew supplémentaires sur la carte SD.

?> **Remarque** Votre carte SD devra être formatée en FAT32. Si votre carte SD n'est pas formatée en FAT32, utilisez [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) avec 32k (32768) en taille d'unité d'allocation pour la formater.

### Ce dont vous avez besoin

- Le <a href="docs/files/config.txt" download>fichier de configuration</a> de Haxchi
- La dernière version de [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest)
  - Vous devrez télécharger le fichier `payload.zip`.
- La version 1.4 de [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - Vous devrez télécharger la version 1.4 `homebrew_launcher.v1.4.zip` de The Homebrew Launcher
- La dernière version de [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- La dernière version de [The Homebrew Launcher Channel](https://github.com/GaryOderNichts/homebrew_launcher/releases/tag/v2.1_fix)
  - Vous devrez télécharger le fichier `homebrew_launcher_channel.v2.1_fix.zip`.
- La dernière version de [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest)
- La dernière version de l'[Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest)
  - Vous devrez télécharger le fichier `wiiu-extracttosd.zip`.
- La dernière version de [Haxchi et CBHC](https://github.com/FIX94/haxchi/releases/latest)
  - Téléchargez les fichiers Haxchi et CBHC .zip.
- La dernière version de <a href="docs/files/savemii_mod.zip" download>SaveMii Mod</a>

### Instructions

?> **Remarque** Les fichiers info.json et manifest.install ne sont pas nécessaires pour le processus de modding et peuvent donc être supprimés.

1. Insérez la carte SD de votre Wii U dans votre PC.
1. Créez un dossier appelé `install` à la racine de votre carte SD.
1. Copiez le contenu du fichier `homebrew_launcher_channel.v2.1_fix.zip` dans le dossier `install` que vous avez créé.
1. Copiez le contenu du fichier `Haxchi.zip` vers la racine de votre carte SD.
1. Copiez le contenu du fichier `CBHC.zip` vers la racine de votre carte SD.
1. Copiez le contenu du fichier `wup_installer_gx2.zip` vers la racine de votre carte SD.
1. Copiez le contenu du fichier `nanddumper.zip` vers la racine de votre carte SD.
1. Copiez le contenu du fichier `wiiu-extracttosd.zip` vers la racine de votre carte SD.
1. Copiez le contenu du fichier `homebrew_launcher.v.1.4.zip` vers la racine de votre carte SD.
1. Copiez le contenu du fichier `savemii_mod.zip` vers la racine de votre carte SD.
1. Copiez le fichier `config.txt` dans le dossier `haxchi` à la racine de votre carte SD. Écrasez les fichiers si demandé.
1. Copiez le fichier `payload.elf` du fichier `payload.zip` vers le dossier `wiiu` de votre carte SD.