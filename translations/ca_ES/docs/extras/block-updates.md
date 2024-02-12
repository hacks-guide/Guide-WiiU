# Blocking Updates
---
All currently known Wii U exploits can, unlike e.g. the Nintendo Switch RCM exploit, be patched by a system update. Although the Wii U is no longer officially supported, Nintendo may still release updates for it. Namely, the updates 5.5.3 up to 5.5.6 were all released after the Wii U was discontinued, so blocking updates is still a recommended action.

While Aromas's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. If you get a red warning screen while booting into Aroma, the update folder still exists and it is recommended to delete it using the guide below.

### Instructions {docsify-ignore}

Currently, one way exists to effectively block updates on the Wii U system:

1. Plug your SD Card into your Computer.
1. Download [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/) and copy the `UFDiine.wuhb` file to `sd:/wiiu/apps` on the root of your SD Card.
1. Plug the SD Card into your Wii U console and boot Aroma.
1. Navigate the Wii U Menu and run the UFDiine app.
1. Press the A button to delete the update folder.
1. Confirm that it says `Update folder is deleted`.
1. Exit UFDiine. You are now blocking updates.
