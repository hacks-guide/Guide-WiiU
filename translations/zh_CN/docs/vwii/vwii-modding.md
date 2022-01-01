# vWii 破解教程
---
此页将会教你如何修改 vWii。

我们现在需要将 Homebrew 所需的文件放入 SD 卡中。

?> **注意** 你的 SD 卡需要被格式化为 FAT32。 如果你的 SD 卡的格式不是 FAT32，则你需要用 [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) 格式化，格式化时请将分配单元大小设置为 32k（32768）。 **不要**把 SD 卡分区命名为 `wiiu`，这样做会导致出现 homebrew 程序上的问题。

?> If you have hacked your Wii U in the past, you can use the same SD Card for this process.



### 你需要准备些啥？ {docsify-ignore}

- The latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
    - Select `Nanddumper` and `Base-Tiramisu`.
- The latest release of the [vwii-compat-installer](https://github.com/TheLordScruffy/vwii-compat-installer/releases).
- The <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>.
- The <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.

### 步骤 {docsify-ignore}

1. 将你的 Wii U SD 卡 插入你的电脑。
1. Copy the `apps` folder from the <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> file to the root of your SD Card.
1. Copy the contents of the <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> file to the root of your SD Card.
1. Copy the contents of the newly downloaded `files.zip` file to the root of your SD Card.
1. Copy the `compat_installer.elf` file to the `wiiu/apps` folder on the root of your SD Card.
1. 把 SD 卡从电脑中弹出并插入 Wii U 主机。

### NAND 备份

In case anything goes wrong in the later process and your vWii ends up bricked, restoring a previously made NAND backup can fix it.

?> If you have recently made a NAND backup that includes SLCCMPT and OTP, feel free to skip this step.

1. Launch the [Wii U NAND Dumper](vwii/browser-exploit).
1. 使用 Wii U 游戏手柄上的十字键来配置以下内容：
    - Dump SLC: **optional**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **可选**
    - Dump OTP: **yes**
    - Dump SEEPROM: **optional**
1. 按下 A 键启动导出的进程。
1. 当完成后，将 Wii U 关机，然后把 SD 卡从 Wii U 上拔出并插入电脑。
1. To make sure you don't lose the files, copy the `slccmpt.bin`, `otp.bin` and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file to your computer.
1. 从 SD 卡中删除文件来腾出空间。
1. 把 SD 卡从电脑中弹出并插入 Wii U 主机。

### Installing the Homebrew Channel

1. 启动 [Homebrew Launcher](vwii/browser-exploit)。
1. Launch the compat_installer.
1. Press `A` to install the Homebrew Channel and wait until you see `Install succeeded`. Then press the HOME button to return to the Wii U Menu.
1. Launch vWii (the Wii Menu icon).
   - If the installation has succeeded, you should see the Homebrew Channel in your Wii Menu.

### 安装 cIOS

!> Make sure you have no `.wad` files anywhere else than in the `apps` folder on your SD Card.

?> **Tip** You can hold the `B` button on the GamePad when turning on the Wii U to boot directly into vWii.

1. 将 Wii U 开机，然后启动 vWii。
1. 启动 Homebrew Channel。
1. 启动 d2x cIOS Installer。
1. 设定以下选项：
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `56`
    - Select cIOS slot: `249`
1. 按下 `A` 键来安装。
1. 设定以下选项：
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `57`
    - Select cIOS slot: `250`
1. 按下 `A` 键来安装。
1. 设定以下选项：
    - Select cIOS: `v10 beta52 d2x-v10-beta52-vWii`
    - Select cIOS base: `58`
    - Select cIOS slot: `251`
1. 按下 `A` 键来安装。
1. 按下 `B` 键来退出。

### 为 IOS 80 打补丁

!> If for any reason, the Wii U is turned off while patching IOS 80, your vWii will be bricked. This can be fixed by either extracting the IOS 80 from your previously made NAND backup and then replacing it over FTP or by [reinstalling IOS 80](recover-vwii-ioses-channels).

1. 启动 vWii 的 Patched IOS 80 Installer。
1. 阅读警告信息并等待 30 秒。
1. 按下任意键来安装。
1. 等一会，直到它提示 <code>IOS80 <wbr>Installation <wbr>is <wbr>complete!</code>。
1. 按下任意键来退出。

!> Installing custom System Menu is a definite brick risk and you should always have an effective backup before installing one but when done right, won't brick the vWii.

!> Installing any IOS (including TED IOSes) or wads made for the original Wii on your vWii will brick it.

!> Installing Priiloader will brick your vWii.
