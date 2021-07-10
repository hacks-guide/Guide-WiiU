# vWii 破解教程
---
此页将会教你如何修改 vWii。

我们现在需要将 Homebrew 所需的文件放入 SD 卡中。

?> **注意** 你的 SD 卡需要被格式化为 FAT32。 如果你的 SD 卡的格式不是 FAT32，则你需要用 [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) 格式化，格式化时请将分配单元大小设置为 32k（32768）。 **不要**把 SD 卡分区命名为 `wiiu`，这样做会导致出现 homebrew 程序上的问题。

### 你需要准备些啥？ {docsify-ignore}

- 最新版 [Wuphax](https://wiiubru.com/appstore/zips/wuphax.zip)。
- 最新版 [Wii U NAND Dumper](https://www.wiiubru.com/appstore/zips/nanddumper.zip)。
- 最新版 [HackMii Installer](https://bootmii.org/download/)。
- vWii 的 <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer</a>。
- <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>。
- [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/download/1.4/homebrew_launcher.v1.4.zip)。
- 最新版 [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/download/v1.4/payload.zip)。

### 步骤 {docsify-ignore}

1. 将你的 Wii U SD 卡 插入你的电脑。
1. 复制 `wuphax.zip` 里的文件到你的 SD 卡根目录。
1. 从 <code>hackmii_<wbr>installer_<wbr>v1.2<wbr>.zip</code> 文件中解压 `boot.elf` 到 SD 卡根目录。
1. 从 <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> 解压 `apps` 文件夹到 SD 卡根目录。
1. 复制 <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> 里的文件到 SD 卡根目录。
1. 复制 `nanddumper.zip` 里的文件到你的 SD 卡根目录。
1. 复制 <code>homebrew_<wbr>launcher.<wbr>v1.4.zip</code> 里的文件到 SD 卡根目录。
1. 复制 `payload.zip` 里的文件到 SD 卡中的 `wiiu` 文件夹中。
1. 把 SD 卡从电脑中弹出并插入 Wii U 主机。

### NAND 备份

如果你在之后做错了什么导致 vWii 损坏了，恢复 NAND 备份就可以修复它。

1. 启动 [Homebrew Launcher](vwii/browser-exploit)。
1. 启动 `Wii U NAND Dumper`。
1. 使用 Wii U 游戏手柄上的十字键来配置以下内容：
    - Dump SLC: **可选**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **可选**
    - Dump OTP: **yes**
    - Dump SEEPROM: **可选**
1. 按下 A 键启动导出的进程。
1. 当完成后，将 Wii U 关机，然后把 SD 卡从 Wii U 上拔出并插入电脑。
1. 为了确保你不会丢掉某些文件，请复制 `slccmpt.bin` 和 `otp.bin` 到你的电脑上，如果你选择全部备份则还要复制 `seeprom.bin`、`slc.bin` 和`所有的 mlc.bin.part` 文件到电脑上。
1. 从 SD 卡中删除文件来腾出空间。
1. 把 SD 卡从电脑中弹出并插入 Wii U 主机。

### Wuphax

1. 启动 [Homebrew Launcher](vwii/browser-exploit)。
1. 启动 Wuphax。
1. 按下 `A` 键然后等一会来备份 Mii Channel 并注入 Hackmii Installer，直到屏幕上提示 <code>Successfully <wbr>injected <wbr>wuphax!</code>。
    - 你将会在几秒后回到 Wii U 主菜单。
1. 启动 vWii（Wii 菜单图标）。
1. 启动 vWii Mii Channel。
   - 如果 Wuphax 被成功注入，此时你将会看到警告提示。
1. 等一会，直到你看到 `Press 1 to continue` 后，按下 `1` 键。
1. 选择 `continue`，然后选择 <code>Install <wbr>The <wbr>Homebrew <wbr>Channel</code> 再然后选择 `Yes, continue`。
1. 如果 Homebrew Channel 被顺利安装，请选择 `continue`，然后选择 `exit`。
1. 启动 Wii U 主菜单 Channel 来回到 Wii U 主菜单。
1. 启动 [Homebrew Launcher](vwii/browser-exploit)。
1. 启动 Wuphax。
1. 按下 `B` 键后等一会来还原 Mii Channel，直到它提示 <code>Mii <wbr>Channel <wbr>restored!</code>。
   - 你将会在几秒后回到 Wii U 主菜单。
   - 如果由于一些原因你无法恢复备份，则你需要[重新安装你的 Mii Channel](recover-vwii-ioses-channels)。

### 安装 cIOS

!> 请确保你的 SD 卡中除了 `apps` 文件夹中有 `.wad` 文件外其他的地方都没有此后缀的文件。

?> **小贴士** 你可以在 Wii U 开机的时候按住游戏手柄中的 `B` 键来直接启动至 vWii。

1. 将 Wii U 开机，然后启动 vWii。
1. 启动 Homebrew Channel。
1. 启动 d2x cIOS Installer。
1. 设定以下选项：
    - Select cIOS: `v10 d2x-v10-beta52-vWii`
    - Select cIOS base: `56`
    - Select cIOS slot: `249`
1. 按下 `A` 键来安装。
1. 设定以下选项：
    - Select cIOS: `v10 d2x-v10-beta52-vWii`
    - Select cIOS base: `57`
    - Select cIOS slot: `250`
1. 按下 `A` 键来安装。
1. 设定以下选项：
    - Select cIOS: `v10 d2x-v10-beta52-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
1. 按下 `A` 键来安装。
1. 按下 `B` 键来退出。

### 为 IOS 80 打补丁

!> 在给 IOS 80 打补丁的时候如果出现一些情况导致 Wii U 被关机将导致 vWii 损坏。 这可以通过提取你 NAND 备份中的 IOS 80，然后通过 FTP 替换文件或 [重新安装 IOS 80](recover-vwii-ioses-channels) 来修复。

1. 启动 vWii 的 Patched IOS 80 Installer。
1. 阅读警告信息并等待 30 秒。
1. 按下任意键来安装。
1. 等一会，直到它提示 <code>IOS80 <wbr>Installation <wbr>is <wbr>complete!</code>。
1. 按下任意键来退出。

!> 安装自制系统菜单是一件绝对有损坏风险的事情，在你决定安装之前你需要有一份可用的备份。但是如果安装正确理应不会导致 vWii 损坏。

!> 在 vWii 中安装任何 IOS（包括 TED IOS）或为 Wii 制作的 wad 将会导致 vWii 损坏。

!> 安装 Priiloader 会导致 vWii 损坏。
