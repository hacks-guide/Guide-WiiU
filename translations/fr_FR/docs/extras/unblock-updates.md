# Unblocking Updates
---
This is needed if you ever need to perform a System Update.

### Instructions

<!-- tabs:start -->

#### **Recreating The Update Folder**

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
1. Create a folder named `update`.
1. You are now no longer blocking system updates.

### **Suppression du blocage par DNS**

1. Enter the Wii U's system settings and navigate to `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` and set the option to `Auto-obtain`.
1. You are now no longer blocking system updates.

<!-- tabs:end -->