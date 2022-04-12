# Blocage des mises à jour
---
Tous les exploits actuellement connus de la Wii U peuvent, contrairement par exemple à l'exploit du Nintendo Switch RCM, être corrigés par une mise à jour du système. Bien que la Wii U ne soit plus officiellement prise en charge, Nintendo peut toujours publier des mises à jour pour celle-ci. En effet, les mises à jour 5.5.3, 5.5.4 et 5.5.5 ont toutes été publiées après l'abandon commercial de la Wii U, donc le blocage des mises à jour est toujours recommandé.

### Instructions {docsify-ignore}

Currently, three ways exist to block updates on the Wii U system:
<!-- tabs:start -->

#### **Tiramisu Autoboot**

### Tiramisu Autoboot

?> When autobooting into the the PayloadLoader, updates are automatically blocked. To enable autobooting into the PayloadLoader follow [this](../docs/user-guide/tiramisu/autoboot).

#### **Deleting Update Folder**

### Deleting Update Folder

?> This method of update blocking is a bit more advanced than DNS Blocking and uses a homebrew app to modify system files. However, it has the advantage that the eShop's functionality will not be restricted.
1. Insérez votre carte SD dans votre ordinateur.
1. Téléchargez et copiez le contenu de [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases) à la racine de votre carte SD.
1. Insérez la carte SD dans votre console Wii U et allumez-la.
1. Entrez dans le Homebrew Launcher.
1. Naviguez dans le Homebrew Launcher et lancez l'application UFDiine.
1. Appuyez sur le bouton A pour supprimer le dossier update.
1. Confirmez qu'il est indiqué `Update folder is deleted`. Vous bloquez maintenant les mises à jour.

#### **DNS Blocking**

### DNS Blocking

?> This method is the easier method and is recommended to less advanced users. It does, however, prevent the eShop from working. This can be worked around by running [NNUPatcher](https://wiiubru.com/appstore/zips/nnupatcher.zip) before starting the eShop.
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
