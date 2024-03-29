# Aroma {docsify-ignore-all}

## Przygotowanie SD

We will now place the required Aroma files on the SD Card.

?> **Uwaga** Twoje urządzenie SD będzie musiało być już sformatowane jako FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) allocation unit size to format it.  
**Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

### Instrukcje

1. On the [Aroma](https://aroma.foryour.cafe) site, scroll down to the **Download** section.
1. Read through the steps and click on the checkboxes.
1. Click on `Download Payloads` and `Download Base Aroma`.
1. Download the [PayloadLoader Installer](https://github.com/wiiu-env/PayloadLoaderInstaller/releases/download/v0.1/PayloadLoaderInstaller_20220905-105329.zip)
1. Włóż kartę SD Wii U do komputera.
1. **Extract** and copy the `wiiu` folder of the three newly downloaded *`.zip`* files to the root of your SD Card.
    - The three `wiiu` folders should be merged if not done automatically.

?> If your computer asks you to overwrite existing files on your SD Card, you will need to click yes.

?> If you're on a Mac machine, select `Merge` instead of replace. If the merge option does not show immediately, press and hold the `Option` key while moving files to the root.

----------

### Układ karty SD {docsify-ignore}

<details>
<summary>Kliknij tutaj, aby wyświetlić końcowy układ plików na karcie SD.</summary>

```
💾sd:
 ┗ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📜AromaUpdater.wuhb
   ┃ ┣ 📜PayloadLoaderInstaller.wuhb
   ┃ ┗ (All other apps should be here too)
   ┣ 📂environments
   ┃ ┗ 📂aroma
   ┃   ┣ 📂modules
   ┃   ┃ ┣ 📂setup
   ┃   ┃ ┃ ┣ 📜00_mocha.rpx
   ┃   ┃ ┃ ┣ 📜10_wums_loader.rpx
   ┃   ┃ ┃ ┗ 📜99_autoboot.rpx
   ┃   ┃ ┗ (All other Aroma modules ending with .wms should be here too)
   ┃   ┣ 📂plugins
   ┃   ┃ ┣ 📜AromaBasePlugin.wps
   ┃   ┃ ┣ 📜drc_region_free.wps
   ┃   ┃ ┣ 📜homebrew_on_menu.wps
   ┃   ┃ ┣ 📜regionfree.wps
   ┃   ┃ ┗ (All other Aroma plugins ending with .wps should be here too)
   ┃   ┗ 📜root.rpx
   ┣ 📂payloads
   ┃ ┣ 📂default
   ┃ ┃ ┗ 📜payload.elf
   ┃ ┗ 📂nanddumper
   ┃   ┗ 📜payload.elf
   ┣ 📜payload.rpx
   ┗ 📜payload.elf
```

</details>

?> If you already have the PayloadLoader installed, you may go directly to [Finalizing Setup](./finalizing-setup.md)
