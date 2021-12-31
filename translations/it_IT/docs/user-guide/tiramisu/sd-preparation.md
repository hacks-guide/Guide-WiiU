# Tiramisu

## Preparazione Della SD {docsify-ignore}

Ora inseriremo i file del CFW richiesti e alcuni altri file homebrew sulla scheda SD.

?> **Nota Bene** La tua SD dovrà essere formattata in FAT32. Se la tua SD non è formattata in FAT32 usa [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) con 32k (32768) di Unità di allocazione per formattarla. </br> **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

?> **If you have an existing legacy CFW setup** </br> For **CBHC** users: go to the [Uninstall CBHC](../uninstall-cbhc) page to uninstall CBHC. </br> For **Haxchi** users: uninstall the Haxchi app from Data Management in the System Settings app. </br> For **Mocha CFW (Indexiine)** users: go to the [Uninstall Indexiine](../uninstall-indexiine) page to uninstall Indexiine. </br> For **Mocha CFW (Online Exploit)** users: you do not need to do anything before following this guide.

### Cosa ti servirà {docsify-ignore}

- The latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Select `Nanddumper`, `PayloadLoader Installer` and `Base-Tiramisu`.
- `wiiu-extracttosd.zip` of the [HB Appstore](https://gitlab.com/4TU/hb-appstore/-/releases)
- The [01_sigpatches.rpx](/docs/files/01_sigpatches.rpx ":ignore") file

### Istruzioni {docsify-ignore}

1. Inserisci la SD della tua Wii U nel PC.
1. Copy the contents of the newly downloaded `files.zip` file to the root of your SD Card.
1. Copy the contents of the newly downloaded `wiiu-extracttosd.zip` file to the root of your SD Card.
1. Copy the `01_sigpatches.rpx` file to `/wiiu/environments/tiramisu/modules/setup` on your SD Card

?> If your computer asks you to overwrite existing files on your SD Card, you will need to click yes.
