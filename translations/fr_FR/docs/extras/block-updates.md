# Blocage des mises à jour
---
Tous les exploits actuellement connus de la Wii U peuvent, contrairement par exemple à l'exploit du Nintendo Switch RCM, être corrigés par une mise à jour du système. Bien que la Wii U ne soit plus officiellement prise en charge, Nintendo peut toujours publier des mises à jour pour celle-ci. En effet, les mises à jour 5.5.3 et 5.5.4 ont toutes deux été publiées après l'abandon de la Wii U, donc le blocage des mises à jour est toujours une action recommandée.

### Instructions

Actuellement, il existe deux moyens de bloquer les mises à jour sur le système Wii U :
<!-- tabs:start -->

#### **Suppression du dossier de mise à jour**
?> This method of update blocking is a bit more advanced than DNS Blocking and uses a homebrew app to modify system files. However, it has the advantage that the eShop's functionality will not be restricted.
1. Insérez votre carte SD dans votre ordinateur.
1. Téléchargez et copiez le contenu de [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases) à la racine de votre carte SD.
1. Insérez la carte SD dans votre console Wii U et allumez-la.
1. Enter the Homebrew Launcher.
1. Naviguez dans le Homebrew Launcher et lancez l'application UFDiine.
1. Appuyez sur le bouton A pour supprimer le dossier update.
1. Confirm that it says `Update folder is deleted`. Vous bloquez maintenant les mises à jour.

### **Blocage par DNS**
?> This method is the easier method and is recommended to less advanced users. It does, however, prevent the eShop from working. On peut contourner ce problème en exécutant [NNUPatcher](http://www.wiiubru.com/appstore/zips/nnupatcher.zip) avant de lancer le Nintendo eShop.
1. Insérez votre carte SD dans votre ordinateur.
1. Téléchargez et copiez le contenu du fichier `nnupatcher.zip` vers la racine de votre carte SD. Si on vous le demande, écrasez les fichiers en double.
1. Insérez la carte SD dans votre console Wii U et allumez-la.
1. Entrez les paramètres du système de la Wii U et naviguez jusqu'à `Internet > Connexion à Internet > Liste des connexions >` `Votre connexion WiFi > Modifiez les paramètres > DNS` et réglez l'option sur `Ne pas obtenir automatiquement`.
1. Il vous sera demandé de saisir un DNS primaire et un DNS secondaire. Entrez les adresses IP suivantes :
 - DNS primaire: 168.235.092.108
 - DNS secondaire: 081.004.127.020 <img src="docs/assets/img/DNS.png" alt="Blocage par DNS" />
1. Click on confirm.
1. Vous avez maintenant bloqué les mises à jour. In order to access the eShop, run the NNUPatcher app from the Homebrew Launcher before launching the eShop.


<!-- tabs:end -->
