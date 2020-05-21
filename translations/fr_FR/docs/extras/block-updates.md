# Blocage des mises à jour
---
Tous les exploits actuellement connus de la Wii U peuvent, contrairement par exemple à l'exploit du Nintendo Switch RCM, être corrigés par une mise à jour du système. Bien que la Wii U ne soit plus officiellement prise en charge, Nintendo peut toujours publier des mises à jour pour celle-ci. En effet, les mises à jour 5.5.3 et 5.5.4 ont toutes deux été publiées après l'abandon de la Wii U, donc le blocage des mises à jour est toujours une action recommandée.

### Instructions

Actuellement, il existe deux moyens de bloquer les mises à jour sur le système Wii U :
<!-- tabs:start -->

#### **Suppression du dossier de mise à jour**
?> Bien que cette méthode de blocage des mises à jour soit un peu plus avancée que le blocage DNS et nécessite actuellement au moins des connaissances de base sur les programmes FTP, elle présente l'avantage de ne pas restreindre les fonctionnalités du eShop.

?> Pour que cette méthode fonctionne, votre Wii U doit être dans le même réseau que votre ordinateur.
1. Insérez votre carte SD dans votre ordinateur.
1. Téléchargez et copiez le contenu de [ftpiiu_everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip) vers la racine de votre carte SD.
1. Téléchargez un client FTP de votre choix tel que [FileZilla](https://filezilla-project.org/download.php?show_all=1).
1. Insérez la carte SD dans votre console Wii U et allumez-la.
1. Lancez le CFW de votre choix (Mocha, Haxchi/CBHC) et entrez dans le Homebrew Launcher.
1. Naviguez sur le Homebrew Launcher et lancez l'application ftpiiu_everywhere.
1. Prenez note de l'adresse IP sur l'écran de la Wii U.
1. Sur votre PC, exécutez votre client FTP préféré et ouvrez une connexion FTP à votre Wii U. Dans FileZilla, cela peut être fait à l'aide du Gestionnaire de Sites, mais assurez-vous de remplacer l'adresse IP par celle qui s'affiche sur l'écran de votre Wii U : <br><img src="docs/assets/img/FTP.png" alt="FileZilla" />
1. Naviguez vers `/storage_mlc/sys`. Vous devriez voir un dossier vide appelé `update`.
1. Faites un clic droit sur le dossier et supprimez-le.
1. Vous avez maintenant bloqué les mises à jour.

### **Blocage par DNS**
?> Cette méthode est la plus simple et est recommandée aux utilisateurs moins avancés. Elle empêche toutefois le fonctionnement du Nintendo eShop. On peut contourner ce problème en exécutant [NNUPatcher](http://www.wiiubru.com/appstore/zips/nnupatcher.zip) avant de lancer le Nintendo Eshop.
1. Insérez votre carte SD dans votre ordinateur.
1. Téléchargez et copiez le contenu du fichier `nnupatcher.zip` vers la racine de votre carte SD. Si on vous le demande, écrasez les fichiers en double.
1. Insérez la carte SD dans votre console Wii U et allumez-la.
1. Entrez les paramètres du système de la Wii U et naviguez jusqu'à `Internet > Connexion à Internet > Liste des connexions >` `Votre connexion WiFi > Modifiez les paramètres > DNS` et réglez l'option sur `Ne pas obtenir automatiquement`.
1. Il vous sera demandé de saisir un DNS primaire et un DNS secondaire. Entrez les adresses IP suivantes :
 - DNS primaire: 168.235.092.108
 - DNS secondaire: 081.004.127.020 <img src="docs/assets/img/DNS.png" alt="Blocage par DNS" />
1. Cliquez sur confirmer
1. Vous avez maintenant bloqué les mises à jour. Pour accéder à l'eShop, lancez l'application nnupatcher à partir de l'Homebrew Launcher avant de lancer le Nintendo eShop


<!-- tabs:end -->