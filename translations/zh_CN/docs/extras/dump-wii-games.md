# 导出原版 Wii 光盘
---
导出你的光盘允许你：在 Wii 模拟器（即 Dolphin）中游玩它们，或使用 USB/SD 卡加载器（如Wiiflow）玩它们，亦或制作一个 VC （Virtual Console）模拟游戏并安装在 USB 设备或 NAND 中，允许它从 Wii U 菜单中启动。

?> 导出 Wii 游戏需要提前完成 vWii 的 Homebrew 设置，所以你需要先完成 [vWii 修改教程](vwii-modding) 再来关注这一部分的内容。

### 你需要准备点啥？

1. 最新版 [CleanRip](https://github.com/emukidid/cleanrip/releases/download/2.1.1/CleanRip-v2.1.1.zip)
1. [wii.dat](https://github.com/emukidid/cleanrip/releases/download/2.1.1/wii.dat) 文件

### 操作步骤

1. 将你的 Wii U SD 卡 插入你的电脑。
1. 从 `CleanRip-v2.1.1.zip` 中复制 `apps` 文件夹到你的 SD 卡根目录中
1. 复制 `wii.dat` 到你的 SD 卡根目录。
1. 把 SD 卡从电脑中弹出并插入 Wii U 主机。

### 导出光盘

1. 打开你的 Wii U，然后选中 Wii 菜单图标来启动至 vWii。
1. 启动 Homebrew Channel。
1. 启动 CleanRip。
1. 阅读免责声明，然后按下 A 键。
1. 选择 Yes 来启用校验计算。
1. 选择导出过程中你想使用的 USB 设备或 SD 卡。
 - 请注意，你选择的设备需要格式化为 FAT32 或 NTFS。
1. 按 A 继续。
1. 如果屏幕上提示是否从 redump.org 上下载 DAT 文件，选择 No。
1. 插入你的光盘，然后按下 A 键。
1. 在[这个页面](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games)中可以检查你的光盘是否是双层的。
1. 设定以下选项：
 - Dual Layer `Yes/No`（如果你的光盘是双层的，请选择 `Yes`）
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