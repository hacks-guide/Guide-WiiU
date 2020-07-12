# vWii 破解教程
---
此页将会教你如何修改 vWii。

我们现在需要将 Homebrew 所需的文件放入 SD 卡中。

?> **注意** 你的 SD 卡需要被格式化为 FAT32。 如果你的 SD 卡没有格式化为 FAT32，则你需要用 [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) 格式化，并将分配单元大小设置为 32k（32768）

### 你需要准备点啥？

- 最新版 [Wuphax](http://wiiubru.com/appstore/zips/wuphax.zip)。
- 最新版 [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest)。
- The latest release of [HackMii Installer](https://bootmii.org/download/).
- The <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>.
- The <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.
- The [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/download/1.4/homebrew_launcher.v1.4.zip).
- The latest release of the [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/download/v1.4/payload.zip).

### 操作步骤

1. 将你的 Wii U SD 卡 插入你的电脑。
1. 解压 `wuphax.zip` 到你的 SD 卡根目录。
1. 从 <code>hackmii_<wbr>installer_<wbr>v1.2<wbr>.zip</code> 文件中解压 `boot.elf` 到 SD 卡根目录。
1. 从 <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> 解压 `apps` 文件夹到 SD 卡根目录。
1. Extract the <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> file to the root of your SD Card.
1. 解压 <code>homebrew_<wbr>launcher.<wbr>v1.4.zip</code> 到 SD 卡根目录
1. 解压 `payload.zip` 到 SD 卡中的 `wiiu` 文件夹中。
1. 把 SD 卡从电脑中弹出并插入 Wii U 主机。

### NAND Backup

如果你在之后做错了什么导致 vWii 损坏了，恢复 NAND 备份就可以修复它。

1. 启动 [Homebrew Launcher](vwii/browser-exploit)。
1. Launch the `Wii U NAND Dumper` application.
1. 使用 Wii U 游戏手柄上的十字键来配置以下内容：
 - Dump SLC: **optional**
 - Dump SLCCMPT: **yes**
 - Dump MLC: **optional**（可选）
 - Dump OTP: **yes**
 - Dump SEEPROM: **optional**
1. 按下 A 键启动导出的进程。
1. 当完成后，将 Wii U 关机，然后把 SD 卡从 Wii U 上拔出并插入电脑。
1. To make sure you don't lose the files, copy the `slccmpt.bin`, `otp.bin` and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file to your computer.
1. 从 SD 卡中删除文件来腾出空间。
1. 把 SD 卡从电脑中弹出并插入 Wii U 主机。

### Wuphax

1. 启动 [Homebrew Launcher](vwii/browser-exploit)。
1. Launch Wuphax.
1. Press `A` to backup the Mii Channel and inject the Hackmii Installer then wait until it says <code>Successfully <wbr>injected <wbr>wuphax!</code>.
 - You will be taken back to the Wii U Menu after a few seconds.
1. Launch vWii (the Wii Menu icon).
1. Launch the vWii Mii Channel.
 - If Wuphax has successfully been injected, you will now see the scam warning screen.
1. Wait until you see `Press 1 to continue` and then press the `1` button.
1. Select `continue`, <code>Install <wbr>The <wbr>Homebrew <wbr>Channel</code> and `Yes, continue`.
1. If The Homebrew Channel has successfully been installed, select `continue` and then `exit`.
1. Launch the Wii U Menu channel to return to the Wii U Menu.
1. 启动 [Homebrew Launcher](vwii/browser-exploit)。
1. Launch Wuphax.
1. Press `B` to restore the Mii Channel then wait until it says <code>Mii <wbr>Channel <wbr>restored!</code>.
 - You will be taken back to the Wii U Menu after a few seconds.
 - If for some reason, you cannot restore your backup, you will need to [reinstall your Mii Channel](recover-vwii-ioses-channels).

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