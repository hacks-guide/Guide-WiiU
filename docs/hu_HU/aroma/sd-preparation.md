---
prev: true
next: true
---

# SD kártya előkészítés

We will now place the required Aroma files on the SD Card.

::: warning

Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) allocation unit size to format it.\
**Ne** cimkézd az SD kártyát `wiiu`-nak, különben problémát okoz a homebrew-nak.

:::

## Lépések

1. On the [Aroma](https://aroma.foryour.cafe) site, scroll down to the **Download** section.
   - Olvasd el a lépéseket, és kattintsd be a jelölő négyzeteket.
     ![](/assets/img/guide/Aroma_Box.png)
   - Kattints a `Download Payloads` és a `Download Base Aroma` opciókra.
     ![](/assets/img/guide/Aroma_DL.png)
2. Helyezd be a Wii U-d SD kártyáját a PC-dbe.
3. **Extract** and copy the `wiiu` folder of the two newly downloaded _`.zip`_ files to the root of your SD Card.
   - The `wiiu` folders should be merged if not done automatically.

::: tip

If your computer asks you to overwrite existing files on your SD Card, you will need to click yes.

:::

::: tip

If you're on a Mac machine, select `Merge` instead of replace. If the merge option does not show immediately, press and hold the `Option` key while moving files to the root.

:::

----------

A zip tartalmának gyökérbe kicsomagolása valahogy így kell kinézzen.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
  <video style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" controls muted>
    <source src="/assets/img/guide/SD_Prep.mp4" type="video/mp4">
    
    Your browser does not support the video tag.
  </video>
</div>

## SD Card Layout

:::details Kattints ide a végső SD kártya kiosztás megtekintéséhez.

```
💾sd:
 ┗ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📂AromaUpdater
   ┃ ┃ ┗📜AromaUpdater.wuhb
   ┃ ┣ 📜PayloadLoaderInstaller.wuhb
   ┃ ┗ (Minden egyéb appnak is itt kell lennie)
   ┣ 📂environments
   ┃ ┗ 📂aroma
   ┃   ┣ 📂modules
   ┃   ┃ ┣ 📂setup
   ┃   ┃ ┃ ┣ 📜00_mocha.rpx
   ┃   ┃ ┃ ┣ 📜10_wums_loader.rpx
   ┃   ┃ ┃ ┗ 📜99_autoboot.rpx
   ┃   ┃ ┗ (Minden más .wms végű Aroma modulnak is itt kell lennie)
   ┃   ┣ 📂plugins
   ┃   ┃ ┣ 📜AromaBasePlugin.wps
   ┃   ┃ ┣ 📜drc_region_free.wps
   ┃   ┃ ┣ 📜homebrew_on_menu.wps
   ┃   ┃ ┣ 📜regionfree.wps
   ┃   ┃ ┗ (Minden más .wps végű Aroma modulnak is itt kell lennie)
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
