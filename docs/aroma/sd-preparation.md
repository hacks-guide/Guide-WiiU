---
prev: true
next: true
---

# SD Preparation

We will now place the required Aroma files on the SD Card.

::: warning

Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [Rufus on Windows](https://github.com/pbatard/rufus/releases/latest).
**Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

:::

## Instructions

1. On the [Aroma](https://aroma.foryour.cafe) site, scroll down to the **Download** section.
    - Read through the steps and click on the checkboxes.
    ![](/assets/img/guide/Aroma_Box.png)
    - Click on `Download Payloads` and `Download Base Aroma`.
    ![](/assets/img/guide/Aroma_DL.png)
1. Insert your Wii U's SD Card into your PC.
1. **Extract** and copy the `wiiu` folder of the two newly downloaded *`.zip`* files to the root of your SD Card.
    - The `wiiu` folders should be merged if not done automatically.

::: tip

If your computer asks you to overwrite existing files on your SD Card, you will need to click yes. 

:::

::: tip

If you're on a Mac machine, extract the second zip in a second finder window and drag the contents into the first window with the first zip's contents. Then when prompted, select `Merge` instead of replace. If the merge option does not show immediately, press and hold the `Option` key while moving files to the root.

:::

----------

Extracting the contents of the zip to the root is done like so.
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
  <video style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" controls muted>
    <source src="/assets/img/guide/SD_Prep.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

## SD Card Layout

::: details Click here to show the final SD Card layout.

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

:::

::: tip

If you already have the PayloadLoader installed, you may go directly to [Finalizing Setup](./finalizing-setup.md)

:::
