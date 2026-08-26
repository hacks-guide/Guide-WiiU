# Désinstaller Indexiine

Cette page vous guidera tout au long du processus de désinstallation d'Indexiine de votre Wii U.

## Ce dont vous avez besoin

- La dernière version du [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/v1.5). (Le fichier `homebrew_launcher.v1.5.zip`)
- La dernière version du [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest). (Le fichier `payload.zip`)
- Le [Indexiine Installer](https://github.com/GaryOderNichts/indexiine-installer/releases/latest). (Le fichier `indexiine-installer.zip`)
- Le [fichier index.html](/files/backup-index.html){download} par défaut. (Vous obtiendrez un fichier nommé `backup-index.html`)

## Mise en place de la carte SD

D'abord, assurez-vous que votre carte SD est formatée en FAT32. Vous pouvez faire cela en utilisant [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm).

1. Extrayez le contenu de l'archive `homebrew_launcher.v1.5.zip` vers la racine de votre carte SD.
2. Extrayez le contenu de l'archive `indexiine-installer.zip` vers la racine de votre carte SD.
3. Extrayez le fichier `payload.elf` depuis l'archive `payload.zip` vers le dossier `wiiu` sur votre carte SD.
4. Copiez le fichier `backup-index.html` vers le dossier `SD > wiiu > apps > indexiine-installer` sur votre carte SD.

Vous pouvez maintenant éjecter, et insérer votre carte SD dans votre console.

## Instructions

1. Lancez le Homebrew Launcher en lançant le navigateur Internet puis en attendant quelques secondes.
2. Lancez Indexiine-Installer.
3. Appuyez sur le bouton B pour désinstaller Indexiine.
4. Redémarrez votre console, et vérifiez que votre Wii U ne lance désormais plus le Homebrew Launcher lorsque vous entrez dans le navigateur Internet.
