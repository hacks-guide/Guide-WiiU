# Blocage des mises à jour
---
Tous les exploits actuellement connus de la Wii U peuvent, contrairement par exemple à l'exploit du Nintendo Switch RCM, être corrigés par une mise à jour du système. Bien que la Wii U ne soit plus officiellement prise en charge, Nintendo peut toujours publier des mises à jour pour celle-ci. Namely, the updates 5.5.3 up to 5.5.6 were all released after the Wii U was discontinued, so blocking updates is still a recommended action.

While Aromas's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. If you get a red warning screen while booting into Aroma, the update folder still exists and it is recommended to delete it using the guide below.

### Instructions {docsify-ignore}

Currently, one way exists to effectively block updates on the Wii U system:

1. Insérez votre carte SD dans votre ordinateur.
1. Download [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/) and copy the `UFDiine.wuhb` file to `sd:/wiiu/apps` on the root of your SD Card.
1. Plug the SD Card into your Wii U console and boot Aroma.
1. Navigate the Wii U Menu and run the UFDiine app.
1. Appuyez sur le bouton A pour supprimer le dossier update.
1. Confirm that it says `Update folder is deleted`.
1. Exit UFDiine. You are now blocking updates.
