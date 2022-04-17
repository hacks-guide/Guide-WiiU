# Tiramisu {docsify-ignore-all}

## SD 卡准备

我们现在需要把一些 CFW 需要使用到的文件放进你的 SD 卡。

?> **注意** 你的 SD 卡需要被格式化为 FAT32。 如果你的 SD 卡的格式不是 FAT32，则你需要用 [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) 格式化，格式化时请将分配单元大小设置为 32k（32768）。 </br> **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

?> **If you have an existing legacy CFW setup** </br> For **CBHC** users: go to the [Uninstall CBHC](../uninstall-cbhc) page to uninstall CBHC. </br> For **Haxchi** users: uninstall the Haxchi app from Data Management in the System Settings app. </br> For **Mocha CFW (Indexiine)** users: go to the [Uninstall Indexiine](../uninstall-indexiine) page to uninstall Indexiine. </br> For **Mocha CFW (Online Exploit)** users: you do not need to do anything before following this guide.

### 你需要准备点啥？

- The latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Select `Nanddumper`, `PayloadLoader Installer` and `Base-Tiramisu`.
- The latest release of the [Sigpatches Module](https://github.com/marco-calautti/SigpatchesModuleWiiU/releases).
    - You will need to download the `01_sigpatches.rpx` file.

### 操作步骤

1. 将你的 Wii U SD 卡 插入你的电脑。
1. Copy the contents of the newly downloaded Tiramisu *`.zip`* file to the root of your SD Card.
1. Copy the `01_sigpatches.rpx` file to `/wiiu/environments/tiramisu/modules/setup` on your SD Card.

?> If your computer asks you to overwrite existing files on your SD Card, you will need to click yes.
