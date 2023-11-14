# Tiramisu {docsify-ignore-all}

## SD Preparation

We will now place the required CFW files and some additional homebrew files on the SD Card.

?> **Notice**
    Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) allocation unit size to format it. </br> **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

?> **If you have an existing legacy CFW setup** </br>
    For **CBHC** users: go to the [Uninstall CBHC](../uninstall-cbhc) page to uninstall CBHC. </br>
    For **Haxchi** users: uninstall the Haxchi app from Data Management in the System Settings app. </br>
    For **Mocha CFW (Indexiine)** users: go to the [Uninstall Indexiine](../uninstall-indexiine) page to uninstall Indexiine. </br>
    For **Mocha CFW (Online Exploit)** users: you do not need to do anything before following this guide.

### What You Need

- The latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Click on `Download Tiramisu`.
- The latest release of the [Sigpatches Module](https://github.com/marco-calautti/SigpatchesModuleWiiU/releases).
    - You will need to download the `01_sigpatches.rpx` file.

### Instructions

1. Insert your Wii U's SD Card into your PC.
1. **Extract** and copy the contents of the newly downloaded Tiramisu *`.zip`* file to the root of your SD Card.
1. Copy the `01_sigpatches.rpx` file to `/wiiu/environments/tiramisu/modules/setup` on your SD Card.

?> If your computer asks you to overwrite existing files on your SD Card, you will need to click yes. 
   
   If you're using a Mac, you have to select `Merge` instead of replace.

----------

### SD Card Layout {docsify-ignore}

<details>
<summary>Click here to show the final SD Card layout.</summary>

```
💾sd:
 ┗ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📂homebrew_launcher
   ┃ ┃ ┣ 📜homebrew_launcher.elf
   ┃ ┃ ┣ 📜icon.png
   ┃ ┃ ┗ 📜meta.xml
   ┃ ┣ 📜PayloadLoaderInstaller.wuhb
   ┃ ┗ (All other apps should be here too)
   ┣ 📂environments
   ┃ ┣ 📂installer
   ┃ ┃ ┗ 📂modules
   ┃ ┃   ┗ 📂setup
   ┃ ┃     ┣ 📜00_mocha.rpx
   ┃ ┃     ┗ 📜90_launch_installer.rpx
   ┃ ┗ 📂tiramisu
   ┃   ┣ 📂modules
   ┃   ┃ ┗ 📂setup
   ┃   ┃   ┣ 📜00_mocha.rpx
   ┃   ┃   ┣ 📜01_sigpatches.rpx
   ┃   ┃   ┣ 📜50_hbl_installer.rpx
   ┃   ┃   ┗ 📜99_autoboot.rpx
   ┃   ┗ 📜root.rpx
   ┣ 📂payloads
   ┃ ┣ 📂default
   ┃ ┃ ┗ 📜payload.elf
   ┃ ┣ 📂fw_img_loader 
   ┃ ┃ ┗ 📜payload.elf
   ┃ ┗ 📂nanddumper
   ┃   ┗ 📜payload.elf
   ┣ 📜payload.rpx
   ┗ 📜payload.elf
 ┗ 📜versions.json
```

</details>
