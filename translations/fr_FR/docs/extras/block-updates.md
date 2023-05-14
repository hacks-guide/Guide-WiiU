# Blocage des mises à jour
---
Tous les exploits actuellement connus de la Wii U peuvent, contrairement par exemple à l'exploit du Nintendo Switch RCM, être corrigés par une mise à jour du système. Bien que la Wii U ne soit plus officiellement prise en charge, Nintendo peut toujours publier des mises à jour pour celle-ci. Namely, the updates 5.5.3 up to 5.5.6 were all released after the Wii U was discontinued, so blocking updates is still a recommended action.

While Tiramisu's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. If you get a red warning screen while booting into Tiramisu, the update folder still exists and it is recommended to delete it using the guide below.

### Instructions {docsify-ignore}

Currently, one way exists to effectively block updates on the Wii U system:

1. Insérez votre carte SD dans votre ordinateur.
1. Download and extract the contents of [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/tag/v1.1) to the root of your SD Card.
1. Plug the SD Card into your Wii U console and boot Tiramisu.
1. Entrez dans le Homebrew Launcher.
1. Naviguez dans le Homebrew Launcher et lancez l'application UFDiine.
1. Appuyez sur le bouton A pour supprimer le dossier update.
1. Confirm that it says `Update folder is deleted`.
1. Power off the console. You are now blocking updates.
