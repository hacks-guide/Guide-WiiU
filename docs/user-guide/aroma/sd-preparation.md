# Aroma {docsify-ignore-all}

## SD Preparation

We will now place the required Aroma files on the SD Card.

?> **Notice**
    Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) allocation unit size to format it.  
    **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

### What You Need

- The latest files from the [Aroma download page](https://aroma.foryour.cafe).
    1. Scroll down to the **Download** section.
    1. Read through the steps and click on the checkboxes.
    1. Click on `Download Payloads` and `Download Base Aroma`.

### Instructions

1. Insert your Wii U's SD Card into your PC.
1. **Extract** and copy the `wiiu` folder of the two newly downloaded *`.zip`* files to the root of your SD Card.
    - The two `wiiu` folders should be merged if not done automatically.

?> If your computer asks you to overwrite existing files on your SD Card, you will need to click yes.
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
   ┃ ┣ 📜AromaUpdater.wuhb
   ┃ ┣ 📜PayloadLoaderInstaller.wuhb
   ┃ ┗ (All other apps should be here too)
   ┣ 📂environment
   ┃ ┣ 📂aroma
   ┃ ┃ ┣ 📂modules
   ┃ ┃ ┃ ┣ 📂setup
   ┃ ┃ ┃ ┃ ┣ 📜00_mocha.rpx
   ┃ ┃ ┃ ┃ ┣ 📜01_sigpatches.rpx
   ┃ ┃ ┃ ┃ ┣ 📜10_wums_loader.rpx
   ┃ ┃ ┃ ┃ ┗ 📜99_autoboot.rpx
   ┃ ┃ ┃ ┗ (All other Aroma modules ending with .wms should be here too)
   ┃ ┃ ┣ 📂plugins
   ┃ ┃ ┃ ┣ 📜AromaBasePlugin.wps
   ┃ ┃ ┃ ┣ 📜drc_region_free.wps
   ┃ ┃ ┃ ┣ 📜homebrew_on_menu.wps
   ┃ ┃ ┃ ┗ 📜99_autoboot.rpx
   ┃ ┃ ┗ 📜root.rpx
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
```

</details>
