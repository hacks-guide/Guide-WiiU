# Réparer un IOS corrompu
---
Cette page vous guidera à travers le processus de récupération d'un IOS corrompu sur votre vWii.

> N'utilisez pas cette méthode pour autre chose que [Récupération de votre chaîne Mii](recover-mii-channel) ou la page suivante.

### Ce dont vous avez besoin

<!-- tabs:start -->

#### **Windows**

- Une installation [Homebrew fonctionnelle](introduction) sur le côté de la WiiU.
- Cette version de [FTPiiU Everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip)
- Un client FTP tel que [FileZilla](https://filezilla-project.org/download.php?show_all=1)
- <a href="https://github.com/ihaveamac/overwrite-wiiu-titlehash/releases/download/v1.0/overwrite-wiiu-titlehash.exe" download>overwrite-wiiu-titlehash.exe</a>

#### **macOS & Linux**

- Une installation [Homebrew fonctionnelle](introduction) sur le côté de la WiiU
- Cette version de [FTPiiU Everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip)
- La dernière version de [Python](https://www.python.org/downloads/)
- Un client FTP tel que [FileZilla](https://filezilla-project.org/download.php?show_all=1)
- <a href="https://github.com/ihaveamac/overwrite-wiiu-titlehash/raw/master/overwrite-wiiu-titlehash.py" download>overwrite-wiiu-titlehash.py</a> **(clic droit -> Enregistrer le lien sous... -> Cliquez sur Enregistrer).**

<!-- tabs:end -->

### Instructions

<!-- tabs:start -->

#### **Windows**

1. Copiez le contenu du fichier `fpiiu-cbhc.zip` vers la racine de votre carte SD.
1. Installez FileZilla sur votre ordinateur.

#### **macOS & Linux**

1. Copiez le contenu du fichier `fpiiu-cbhc.zip` vers la racine de votre carte SD.
1. Installez FileZilla sur votre ordinateur.
1. Installez Python sur votre ordinateur.

<!-- tabs:end -->

### Récupérer les IOS

!> **Ne pas** tenter de supprimer le dossier `00000002` dans `/slccmpt01/title/00000001` ni le fichier `00000002.tik` dans `/slccmpt01/ticket/00000001`.

?> Si vous utilisez une méthode de blocage de mise à jour du système, veuillez [la supprimer](unblock-updates).

<!-- tabs:start -->

#### **Windows**

1. Allumez votre Wii U et lancez le CFW de votre choix (Mocha, Haxchi ou CBHC).
1. Lancer le Homebrew Launcher.
1. Lancer FTPiiU Everywhere.
1. Lancer FileZilla.
1. Dans FileZilla, saisissez l'adresse IP affichée par votre Wii U dans le champ `Hôte` en haut de la fenêtre et cliquez sur `Connexion Rapide`.
1. Dans FileZilla, accédez à `/slccmpt01/title/00000001`.
1. Allez à [cette page](ios-folders) pour voir quel dossier/ticket vous devez supprimer.
1. Supprimez les dossiers correspondants des IOS que vous souhaitez récupérer.
1. Naviguez vers `/slccmpt01/ticket/00000001`.
1. Supprimez les fichiers `.tik` correspondants des IOS que vous souhaitez récupérer.
1. Lancez le fichier ` overwrite-wiiu-titlehash.exe` précédemment téléchargé.
1. Saisissez l'adresse IP de votre Wii U et appuyez sur la touche Entrée.
1. Attendez qu'il finisse ce qu'il fait.
 - Si un fichier `err.log` a été généré, veuillez nous rendre visite dans **#wiiu-assistance** sur [Nintendo Homebrew Discord](https://discord.gg/C29hYvh) et demander, en anglais, de l'aide.
1. Quitter FTPiiU Everywhere et le Homebrew Launcher.
1. Lancez les paramètres de la console.
1. Effectuez une [Mise à jour système](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update).

?> Vous pouvez maintenant réactiver votre méthode de [blocage des mises à jour du système](block-updates).

### **macOS & Linux**

1. Allumez votre Wii U et lancez le CFW de votre choix (Mocha, Haxchi ou CBHC).
1. Lancer le Homebrew Launcher.
1. Lancer FTPiiU Everywhere.
1. Lancer FileZilla.
1. Dans FileZilla, saisissez l'adresse IP affichée par votre Wii U dans le champ `Hôte` en haut de la fenêtre et cliquez sur `Connexion Rapide`.
1. Dans FileZilla, accédez à `/slccmpt01/title/00000001`.
1. Allez à [cette page](ios-folders) pour voir quel dossier/ticket vous devez supprimer.
1. Supprimez les dossiers correspondants des IOS que vous souhaitez récupérer.
1. Naviguez vers `/slccmpt01/ticket/00000001`.
1. Supprimez les fichiers `.tik` correspondants des IOS que vous souhaitez récupérer.
1. Ouvrez une fenêtre du Terminal.
1. Utilisez la commande suivante : `cd <directory>`.
 - Sur macOS, l'endroit le plus courant pour trouver vos fichiers téléchargés est `/Users/username/Downloads`.
 - Sous Linux, l'endroit le plus courant pour trouver vos fichiers téléchargés est `/home/username/Downloads`.
1. Utilisez la commande suivante : `python3 overwiiu-titlehash.py`.
1. Saisissez l'adresse IP de votre Wii U et appuyez sur la touche Entrée.
1. Attendez qu'il finisse ce qu'il fait.
 - Si un fichier `err.log` a été généré, veuillez nous rendre visite dans **#wiiu-assistance** sur [Nintendo Homebrew Discord](https://discord.gg/C29hYvh) et demander, en anglais, de l'aide.
1. Quitter FTPiiU Everywhere et le Homebrew Launcher.
1. Lancez les paramètres de la console.
1. Effectuez une [Mise à jour système](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update).

?> Vous pouvez maintenant réactiver votre méthode de [blocage des mises à jour du système](block-updates).

<!-- tabs:end -->