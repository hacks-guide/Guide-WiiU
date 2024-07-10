# Aroma {docsify-ignore-all}

## Preparazione della SD

We will now place the required Aroma files on the SD Card.

?> **Nota Bene** La tua SD dovrà essere formattata in FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) allocation unit size to format it.  
**Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

### Istruzioni

1. On the [Aroma](https://aroma.foryour.cafe) site, scroll down to the **Download** section.
    - Read through the steps and click on the checkboxes. ![](../docs/assets/img/guide/Aroma_Box.png)
    - Click on `Download Payloads` and `Download Base Aroma`. ![](../docs/assets/img/guide/Aroma_DL.png)
1. Inserisci la SD della tua Wii U nel PC.
1. **Extract** and copy the `wiiu` folder of the two newly downloaded *`.zip`* files to the root of your SD Card.
    - The `wiiu` folders should be merged if not done automatically.

?> If your computer asks you to overwrite existing files on your SD Card, you will need to click yes.

?> If you're on a Mac machine, select `Merge` instead of replace. If the merge option does not show immediately, press and hold the `Option` key while moving files to the root.

----------
Extracting the contents of the zip to the root is done like so.
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
  <video style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" controls muted>
    <source src="docs/assets/img/guide/SD_Prep.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

### Layout scheda SD {docsify-ignore}

<details>
<summary>Clicca qui per mostrare il layout finale della scheda SD.</summary>

```
💾sd:
 ┗ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📂AromaUpdater
   ┃ ┃ ┗📜AromaUpdater.wuhb
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
