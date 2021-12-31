# Tiramisu

## Forberede SD-kortet {docsify-ignore}

Her vil vi plassere de nødvendige CFW-filene og noen ekstra homebrew filer på SD-kortet.

?> **Merk** SD-kortet ditt må formateres til FAT32. Hvis den ikke er formatert til FAT32, bør du bruke [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) med 32k (32768) "Allocation unit size" for å formatere den. </br> **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

?> **If you have an existing legacy CFW setup** </br> For **CBHC** users: go to the [Uninstall CBHC](../uninstall-cbhc) page to uninstall CBHC. </br> For **Haxchi** users: uninstall the Haxchi app from Data Management in the System Settings app. </br> For **Mocha CFW (Indexiine)** users: go to the [Uninstall Indexiine](../uninstall-indexiine) page to uninstall Indexiine. </br> For **Mocha CFW (Online Exploit)** users: you do not need to do anything before following this guide.

### Dette Trenger Du {docsify-ignore}

- The latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Select `Nanddumper`, `PayloadLoader Installer` and `Base-Tiramisu`.
- `wiiu-extracttosd.zip` of the [HB Appstore](https://gitlab.com/4TU/hb-appstore/-/releases)
- The [01_sigpatches.rpx](/docs/files/01_sigpatches.rpx ":ignore") file

### Instruksjoner {docsify-ignore}

1. Sett SD-kortet ditt i PC'en din.
1. Copy the contents of the newly downloaded `files.zip` file to the root of your SD Card.
1. Copy the contents of the newly downloaded `wiiu-extracttosd.zip` file to the root of your SD Card.
1. Copy the `01_sigpatches.rpx` file to `/wiiu/environments/tiramisu/modules/setup` on your SD Card

?> If your computer asks you to overwrite existing files on your SD Card, you will need to click yes.
