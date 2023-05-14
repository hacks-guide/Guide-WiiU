# Blocking Updates
---
All currently known Wii U exploits can, unlike e.g. the Nintendo Switch RCM exploit, be patched by a system update. Although the Wii U is no longer officially supported, Nintendo may still release updates for it. Namely, the updates 5.5.3 up to 5.5.6 were all released after the Wii U was discontinued, so blocking updates is still a recommended action.

While Tiramisu's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. If you get a red warning screen while booting into Tiramisu, the update folder still exists and it is recommended to delete it using the guide below.

### Instructions {docsify-ignore}

Currently, one way exists to effectively block updates on the Wii U system:

1. Plug your SD Card into your Computer.
1. Download and extract the contents of [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/tag/v1.1) to the root of your SD Card.
1. Plug the SD Card into your Wii U console and boot Tiramisu.
1. Enter the Homebrew Launcher.
1. Navigate the Homebrew Launcher and run the UFDiine app.
1. Press the A button to delete the update folder.
1. Confirm that it says `Update folder is deleted`.
1. Power off the console. You are now blocking updates.
