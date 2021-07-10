# 导出 Wii 光盘
---
导出你的光盘允许你：在 Wii 模拟器（即 Dolphin）中游玩它们，或使用 USB/SD 卡加载器（如Wiiflow）玩它们，亦或制作一个 VC （Virtual Console）模拟游戏并安装在 USB 设备或 NAND 中，允许它从 Wii U 菜单中启动。

?> 导出 Wii 游戏需要提前完成 vWii 的 Homebrew 设置，所以你需要先完成 [vWii 修改教程](vwii-modding) 再来关注这一部分的内容。

!> 分享本教程导出的文件是 **非法的**。  
如果你想要使用这个教程导出游戏并分享出去，请不要这么做。

### 你需要准备些啥？ {docsify-ignore}

1. 最新版 [CleanRip](https://github.com/emukidid/cleanrip/releases/download/2.1.1/CleanRip-v2.1.1.zip)。
1. [wii.dat](https://github.com/emukidid/cleanrip/releases/download/2.1.1/wii.dat) 文件。

### 步骤 {docsify-ignore}

1. 将你的 Wii U 的 SD 卡插入你的电脑。
1. 从 `CleanRip-v2.1.1.zip` 中复制 `apps` 文件夹到你的 SD 卡根目录中。
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
    - Dual Layer: `Yes/No`（如果你的光盘是双层的，请选择 `Yes`）
    - Chunk Size: `Max`
    - New device per chunk: `No`
1. 如果你想要导出多个光盘，请选择 Yes 来保存你的设置。 反之，请选择 No。

?> 请等待一段时间。 导出过程可能要 30 分钟至 1 小时，这取决于你的 SD 卡速度。

### 合并拆分文件

?> 如果你选择将光盘的文件导入一个文件格式是 FAT32 的设备中，则你至少会得到两个名字尾部为 `.partX.iso` （X为数字）的文件。 它们需要被合并起来。

#### Windows {docsify-ignore}

1. 将以 `.partX.iso` 结尾文件名的文件复制到你的电脑上。
1. 打开命令提示符。
1. 使用 `cd <path>` 命令将路径移动至你的 `.partX.iso` 文件夹中。
1. 输入以下命令：`copy /b *.part?.iso game.iso` 来合并文件为 game.iso。

#### macOS/Linux {docsify-ignore}

1. 将以 `.partX.iso` 结尾文件名的文件复制到你的电脑上。
1. 打开一个终端窗口
1. 使用 `cd <path>` 命令将路径移动至你的 `.partX.iso` 文件夹中。
1. 输入以下命令：`cat *.part?.iso > game.iso`
