---
prev: true
---

# Finaliser l'installation

Maintenant que PayloadLoader, Environment Loader et Aroma sont installés, nous allons finaliser l'installation.

## Applications Homebrew supplémentaires

::: tip

Toutes les applications Homebrew sont chargées depuis le menu Wii U sur Aroma.

:::

- **SaveMii mod WUT Port** est une appli homebrew qui vous laisse gérer vos données de sauvegarde Wii U et vWii.
- **Bloopair** est un module Aroma qui vous permet de connecter la plupart des manettes Bluetooth répandues. Regardez [cette page](https://gbatemp.net/threads/bloopair-connect-controllers-from-other-consoles-natively.594289/) pour plus de détails.
- Le **Homebrew Appstore** vous permet de naviguer et de télécharger des applications Homebrew directement depuis votre Wii U.

### Applications Homebrew supplémentaires - Ce dont vous avez besoin

- La dernière version de [SaveMii Mod WUT Port](https://wiiu.cdn.fortheusers.org/zips/SaveMiiModWUTPort.zip).
- `wiiu-extracttosd.zip` du [HB Appstore](https://github.com/fortheusers/hb-appstore/releases/).

### Applications Homebrew supplémentaires - Extraction des fichiers vers la carte SD

1. Copiez le contenu de l'archive récemment téléchargée `SaveMiiModWUTPort.zip` vers la racine de votre carte SD.
2. Copiez le contenu de l'archive récemment téléchargée `wiiu-extracttosd.zip` vers la racine de votre carte SD.

## Plugins recommandés

| Nom                                                                                                                                                      | Description                                                                                                      | Instructions d'installation                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [FTPiiU Plugin](https://github.com/wiiu-env/ftpiiu_plugin/) ([Télécharger](https://github.com/wiiu-env/ftpiiu_plugin/releases))       | Fait tourner un serveur FTP en arrière-plan.                                                     | 1. Extrayez l'archive `ftpiiu_vX_X.zip` téléchargée. <br> 2. Copiez le `ftpiiu.wps` vers le dossier `wiiu/environments/aroma/plugins` à la racine de votre carte SD.                                                                                                                                            |
| [SDCafiine](https://github.com/wiiu-env/sdcafiine_plugin/) ([Télécharger](https://github.com/wiiu-env/sdcafiine_plugin/releases))     | Vous permet de modder des jeux en redirigeant les fichiers vers la carte SD.                     | 1. Extrayez l'archive `sdcafiine_vX_X_X.zip` téléchargée. <br> 2. Copiez le `sdcafiine.wps` vers le dossier `wiiu/environments/aroma/plugins` à la racine de votre carte SD.                                                                                                                                    |
| [Bloopair](https://github.com/GaryOderNichts/Bloopair/) ([Télécharger](https://github.com/GaryOderNichts/Bloopair/releases))          | Permet la connexion sans-fil de la plupart des manettes répandues compatibles avec le Bluetooth. | 1. Extrayez le contenu de l'archive `Bloopair_vX.X.X.zip` récemment téléchargée. <br> 2. Copiez le `30_bloopair.rpx` vers le dossier `wiiu/environments/aroma/modules/setup/` à la racine de votre carte SD. <br> 3. Copiez le dossier `wiiu` vers la racine de votre carte SD. |
| [Screenshot Plugin](https://github.com/wiiu-env/ScreenshotWUPS/) ([Télécharger](https://github.com/wiiu-env/ScreenshotWUPS/releases)) | Permet de prendre des captures d'écran directement sur la carte SD.                              | 1. Extrayez l'archive `screenshot_plugin_vX_X.zip` téléchargée. <br> 2. Copiez le `screenshot.wps` vers le dossier `wiiu/environments/aroma/plugins` à la racine de votre carte SD.                                                                                                                             |

## Pretendo Network

Pretendo est un service de remplacement pour le Nintendo Network, qui rétablit les services en ligne qui sont désormais interrompus. Il relance également le service Miiverse, via juxtaposition. Le guide officiel peut être trouvé [ici](https://pretendo.network/docs/install/wiiu).

## Modder la vWii

La vWii est moddée séparément de la partie Wii U. Si vous souhaitez modder la vWii, le guide peut être trouvé [ici](https://wii.hacks.guide/vwii-homebrew-channel).

## Démarrage de Tiramisu (facultatif)

::: warning

Tiramisu est maintenant archivé, et a été succédé par Aroma et est considéré comme obsolète. Plus aucun Homebrew ne sera développé pour celui-ci, et des services comme Pretendo ont arrêté sa prise en charge.

:::

Cependant, si vous trouvez le besoin de démarrer dans Tiramisu, par exemple, pour utiliser une ancienne application Homebrew, faites ce qui suit :

1. Téléchargez les derniers fichiers depuis [Tiramisu for your café](https://tiramisu.foryour.cafe).
2. Copiez le dossier `wiiu` vers la racine de votre carte SD.
   - Le dossier devrait fusionner avec le dossier `wiiu` existant si ce n'est pas fait automatiquement.
3. Retirez la carte SD de votre ordinateur et insérez-la dans votre console Wii U.
4. Lancez l'EnvironmentLoader.
   - Si vous autodémarrez dessus, cela peut se faire en lançant votre console tout en maintenant X.
   - Vous n'avez pas besoin de réinstaller le PayloadLoader si vous l'avez déjà fait avec Aroma.
5. Mettez en surbrillance l'entrée dénommée `tiramisu` en utilisant la croix directionnelle.
6. Lancez Tiramisu en appuyant sur A.
7. Lancez le menu Wii U en appuyant sur A.
   - Pour que la console démarre automatiquement le menu Wii U lors du chargement de l'environnement Tiramisu, appuyez sur Y.
8. Le Homebrew Launcher peut être chargé en lançant l'appli Éditeur Mii.
