# Déblocage des mises à jour
---
Ceci est nécessaire si vous avez besoin d'effectuer une mise à jour du système.

### Instructions

<!-- tabs:start -->

#### **Recréer le dossier de mise à jour**

?> Pour que cette méthode fonctionne, votre Wii U doit être dans le même réseau que votre ordinateur.
1. Insérez votre carte SD dans votre ordinateur.
1. Téléchargez et copiez le contenu de [ftpiiu_everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip) vers la racine de votre carte SD.
1. Téléchargez un client FTP de votre choix tel que [FileZilla](https://filezilla-project.org/download.php?show_all=1).
1. Insérez la carte SD dans votre console Wii U et allumez-la.
1. Lancez le CFW de votre choix (Mocha, Haxchi/CBHC) et entrez dans le Homebrew Launcher.
1. Naviguez sur le Homebrew Launcher et lancez l'application ftpiiu_everywhere.
1. Prenez note de l'adresse IP sur l'écran de la Wii U.
1. Sur votre PC, exécutez votre client FTP préféré et ouvrez une connexion FTP à votre Wii U. Dans FileZilla, cela peut être fait à l'aide du Gestionnaire de Sites, mais assurez-vous de remplacer l'adresse IP par celle qui s'affiche sur l'écran de votre Wii U : <br><img src="docs/assets/img/FTP.png" alt="FileZilla" />
1. Naviguez vers `/storage_mlc/sys`.
1. Créez un dossier nommé `update`.
1. Vous ne bloquez plus les mises à jour du système.

### **Suppression du blocage par DNS**

1. Entrez dans les Paramètres de la console sur votre Wii U et naviguez jusqu'à `Internet > Connexion Internet > Liste des connexions > ` `Votre connexion WiFi > Modifier > DNS` et réglez l'option sur `Oui`.
1. Vous ne bloquez plus les mises à jour du système.

<!-- tabs:end -->