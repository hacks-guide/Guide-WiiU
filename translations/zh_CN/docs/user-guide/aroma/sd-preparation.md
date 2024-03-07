# Aroma {docsify-ignore-all}

## SD 卡准备

We will now place the required Aroma files on the SD Card.

?> **注意** 你的 SD 卡需要被格式化为 FAT32。 If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) allocation unit size to format it.  
**Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

### 你需要准备点啥？

- The latest files from the [Aroma download page](https://aroma.foryour.cafe).
    1. Scroll down to the **Download** section.
    1. Read through the steps and click on the checkboxes.
    1. Click on `Download Payloads` and `Download Base Aroma`.
- The latest release of the [PayloadLoader Installer](https://github.com/wiiu-env/PayloadLoaderInstaller/releases).

### 操作步骤

1. 将你的 Wii U SD 卡 插入你的电脑。
1. **Extract** and copy the `wiiu` folder of the three newly downloaded *`.zip`* files to the root of your SD Card.
    - The three `wiiu` folders should be merged if not done automatically.

?> If your computer asks you to overwrite existing files on your SD Card, you will need to click yes.

?> If you're on a Mac machine, select `Merge` instead of replace. If the merge option does not show immediately, press and hold the `Option` key while moving files to the root.

----------

### SD Card Layout {docsify-ignore}

<details>
<summary>Click here to show the final SD Card layout.</summary>

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
