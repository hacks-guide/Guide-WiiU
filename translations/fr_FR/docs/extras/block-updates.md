# Blocage des mises à jour
---
Tous les exploits actuellement connus de la Wii U peuvent, contrairement par exemple à l'exploit du Nintendo Switch RCM, être corrigés par une mise à jour du système. Bien que la Wii U ne soit plus officiellement prise en charge, Nintendo peut toujours publier des mises à jour pour celle-ci. En effet, les mises à jour 5.5.3 et 5.5.4 ont toutes deux été publiées après l'abandon de la Wii U, donc le blocage des mises à jour est toujours une action recommandée.

### Instructions {docsify-ignore}

Actuellement, il existe deux moyens de bloquer les mises à jour sur le système Wii U :
<!-- tabs:start -->

#### **Suppression du dossier update**

### Suppression du dossier update

?> Cette méthode de blocage des mises à jour est un peu plus avancée que le blocage du DNS et utilise une application homebrew pour modifier les fichiers système. Toutefois, elle présente l'avantage de ne pas restreindre les fonctionnalités du eShop.
1. Insérez votre carte SD dans votre ordinateur.
1. Téléchargez et copiez le contenu de [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases) à la racine de votre carte SD.
1. Insérez la carte SD dans votre console Wii U et allumez-la.
1. Entrez dans le Homebrew Launcher.
1. Naviguez dans le Homebrew Launcher et lancez l'application UFDiine.
1. Appuyez sur le bouton A pour supprimer le dossier update.
1. Confirmez qu'il est indiqué `Update folder is deleted`. Vous bloquez maintenant les mises à jour.

#### **Blocage par DNS**

### Blocage par DNS

?> Cette méthode est la plus simple et est recommandée aux utilisateurs moins avancés. Elle empêche toutefois le fonctionnement du Nintendo eShop. On peut contourner ce problème en exécutant [NNUPatcher](http://www.wiiubru.com/appstore/zips/nnupatcher.zip) avant de lancer le Nintendo eShop.
1. Insérez votre carte SD dans votre ordinateur.
1. Copiez le contenu du fichier `nnupatcher.zip` vers la racine de votre carte SD. Si on vous le demande, écrasez les fichiers en double.
1. Insérez la carte SD dans votre console Wii U et allumez-la.
1. Entrez les paramètres du système de la Wii U et naviguez jusqu'à `Internet > Connexion à Internet > Liste des connexions >` `Votre connexion WiFi > Modifiez les paramètres > DNS` et réglez l'option sur `Ne pas obtenir automatiquement`.
1. Il vous sera demandé de saisir un DNS primaire et un DNS secondaire. Entrez les adresses IP suivantes :
 - DNS primaire: 168.235.092.108
 - DNS secondaire: 081.004.127.020 <img src="docs/assets/img/DNS.png" alt="Blocage par DNS" />
1. Cliquez sur OK.
1. Vous avez maintenant bloqué les mises à jour. Pour accéder à l'eShop, lancez l'application NNUPatcher à partir de l'Homebrew Launcher avant de lancer le Nintendo eShop.

<!-- tabs:end -->
