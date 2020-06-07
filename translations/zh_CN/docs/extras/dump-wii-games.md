# 导出原版 Wii 光盘
---
导出你的光盘允许你：在 Wii 模拟器（即 Dolphin）中游玩它们，或使用 USB/SD 卡加载器（如Wiiflow）玩它们，亦或制作一个 VC （Virtual Console）模拟游戏并安装在 USB 设备或 NAND 中，允许它从 Wii U 菜单中启动。

?> 导出 Wii 游戏需要提前完成 vWii 的 Homebrew 设置，所以你需要先完成 [vWii 修改教程](vwii-modding) 再来关注这一部分的内容。

### 你需要准备点啥？

1. 最新版 [CleanRip](https://github.com/emukidid/cleanrip/releases/download/2.1.1/CleanRip-v2.1.1.zip)
1. [wii.dat](https://github.com/emukidid/cleanrip/releases/download/2.1.1/wii.dat) 文件

### 操作步骤

1. 将你的 Wii U SD 卡 插入你的电脑。
1. Copy the `apps` folder from the `CleanRip-v2.1.1.zip` file to the root of your SD Card
1. Copy the `wii.dat` file to the root of your SD Card
1. Take the SD Card out of your computer and plug it into your Wii U console.

### Dumping The Disc

1. Turn on your Wii U then choose the Wii Menu icon to boot up in vWii.
1. Launch the Homebrew Channel.
1. Launch CleanRip.
1. Read the Disclaimer then press A.
1. Select Yes to enable Checksum Calculations.
1. Select either USB or Front SD depending on which device you want to use for the dumping process.
 - Please note that the device you will choose needs to be formatted either in FAT32 or NTFS.
1. Press A to continue.
1. Select No on the screen that asks you to download redump.org DAT files.
1. Insert your disc then press A.
1. Go [on this page](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) to see if your disc is dual-layered.
1. Set everything to match the following:
 - Dual Layer `Yes/No` (Select `Yes` if your game's disc is dual-layered)
 - Chunk Size `Max`
 - New device per chunk `No`
1. If you want to dump multiple discs, select Yes to remember your settings. If not, select No.

?> Be prepared to wait a while. The dumping process can take 30 minutes to 1 hour depending on your SD Card's speeds.

### Joining Split Files

?> If you dumped the disc on a FAT32 formatted, device, you should've got at least 2 files that end with `.partX.iso`. They need to be joined up.

1. Copy all the files that share the same name and end with `.partX.iso` in a folder on your computer.
1. Open up a Command Prompt window.
1. Use the `cd <path>` command and replace `<path>` by the path to your `.partX.iso` files.
1. Use the following command as is: `copy /b *.part?.iso game.iso`.