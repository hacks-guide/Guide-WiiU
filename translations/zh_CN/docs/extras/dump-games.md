# 导出 Wii U 光盘
---
导出你的光盘文件允许你安装游戏的副本到你主机的 NAND 或 USB 设备中，以便你可以在不用光盘的时候玩游戏。

?> 导出和安装游戏需要你先完成 Homebrew 的设置，所以你需要先完成关于安装自制固件的主要教程，然后再来关注下面的步骤。

### 步骤 {docsify-ignore}

<!-- tabs:start -->

#### **安装至 NAND**

### 安装至 NAND

?> 我们不建议将游戏安装到系统内存中（NAND），因为主机的内存容量为 8 GB 或 32 GB，如果你想安装好几个游戏，剩余空间会很快用完。

### 你需要准备些啥？ {docsify-ignore}

- 你的 SD 卡需要保存游戏的导出文件的足够的空间。
- 最新版 [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)。
- [Disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) homebrew 程序。

### 步骤 {docsify-ignore}

1. 复制 `wup_installer_gx2.zip` 里的文件到你的 SD 卡根目录。
1. 复制 `disc2app.zip` 里的文件到你的 SD 卡根目录。
1. 将内存卡从电脑上拔出并插回 Wii U。
1. 打开你的 Wii U。
1. 如果你的游戏光盘还插入在 Wii U 中，将其弹出。
1. 启动 Homebrew Launcher 并启动 disc2app 应用。
1. 按下 A 键启动导出文件到 SD 卡的进程。
1. 当提示时，插入你想要导出游戏的游戏光盘。
1. 过程完成后，Wii U 将启动 Wii U 主菜单。
1. 启动 Homebrew Launcher 然后启动 WUP Installer GX2 应用。
1. 选择你的游戏（`WUP-X-XXXX`），按下 `Install` 然后 `Yes` 确认安装。
1. 选择 NAND 作为安装目标。
1. 过程完成后，Wii U 将启动 Wii U 主菜单。
1. 然后你就应该看到游戏已经安装好了，准备好玩吧。
1. 将 SD 卡从 Wii U 上弹出，然后插入电脑。
1. 你可以删除 SD 卡的 `install` 文件夹里的 `WUP-X-XXXX` 文件夹来腾出一些空间。

#### **安装到 USB 设备**

### 安装到 USB 设备

?> 如果你需要将游戏安装到 USB 设备，我们建议你使用 HDD 而不要用闪存驱动器（U盘），闪存驱动器没有对读写文件的特别优化，导致它们会很快就无法正常使用。 如果你的 HDD 没有外接电源，则你需要一根硬盘 Y 形线将硬盘连接至 Wii U 上的两个 USB 接口上。

!> 要将游戏安装到的 USB 设备必须经过 Wii U 的格式化才能使用。格式化将会删除 USB 设备上的所有文件，且再被格式化之前你无法在 Wii U 以外的设备上继续使用这个 USB 设备。

### 你需要准备些啥？ {docsify-ignore}

- 你的 SD 卡需要保存游戏的导出文件的足够的空间。
- 一块 USB HDD（如果需要的话还需要准备 Y 型线）
- 最新版 [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- [Disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) Homebrew 程序

### 步骤 {docsify-ignore}

1. 复制 `wup_installer_gx2.zip` 里的文件到你的 SD 卡根目录。
1. 复制 `disc2app.zip` 里的文件到你的 SD 卡根目录。
1. 将内存卡从电脑上拔出并插回 Wii U。
1. 将你的 USB HDD 连接至 Wii U。
1. 打开你的 Wii U。
1. 你的 Wii U 会提示你需要格式化你的 HDD。 选择 Yes 确认。
1. 如果你的游戏光盘还插入在 Wii U 中，将其弹出。
1. 启动 Homebrew Launcher 并启动 disc2app 应用。
1. 按下 A 键启动导出文件到 SD 卡的进程。
1. 当提示时，插入你想要导出游戏的游戏光盘。
1. 过程完成后，Wii U 将启动 Wii U 主菜单。
1. 启动 Homebrew Launcher 然后启动 WUP Installer GX2 应用。
1. 选择你的游戏（`WUP-X-XXXX`），按下 `Install` 然后 `Yes` 确认安装。
1. 选择 USB 作为安装目标。
1. 过程完成后，Wii U 将启动 Wii U 主菜单。
1. 然后你就应该看到游戏已经安装好了，准备好玩吧。
1. 将 SD 卡从 Wii U 上弹出，然后插入电脑。
1. 你可以删除 SD 卡的 `install` 文件夹里的 `WUP-X-XXXX` 文件夹来腾出一些空间。

#### **从 USB 设备中安装**

### 从 USB 设备中安装

?> 如果你的 SD 卡中没有足够的空间，你可以使用高级技巧从 USB 设备中安装导出的文件。 这不是容易做的事情，且它的缺点是只能将游戏安装到系统内存中（NAND）。

### 你需要准备些啥？ {docsify-ignore}

- 一个有足够空间放进你的游戏导出文件的 USB 存储设备（如果需要的话还需要准备 Y 型线）。
- 最新版 [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- [Disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) Homebrew 程序。
- [MochaFAT32](https://www.wiiubru.com/appstore/zips/mocha_fat32.zip) Homebrew 程序。
- 1.4 版本的 [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - 你需要下载 `homebrew_launcher.v.1.4.zip` 版本。

### 步骤 {docsify-ignore}

?> **注意** 你的 USB 设备需要格式化为 FAT32。 如果你的 USB 设备没有格式化为 FAT32，则你需要用 [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) 格式化，并将分配单元大小设置为 32k（32768）。

1. 复制 `homebrew_launcher.v.1.4.zip` 里的文件到你 USB 设备的根目录中。
1. 复制 `wup_installer_gx2.zip` 里的文件到你 USB 设备的根目录。
1. 复制 `disc2app.zip` 里的文件到你的 USB 设备根目录。
1. 复制 `mocha_fat32.zip` 里的文件到你的 SD 卡根目录。
1. 把 SD 卡从电脑中弹出并插入 Wii U 主机。
1. 打开你的 Wii U。
1. 插入你的 USB 设备。 你的 Wii U 会提示你格式化它。 点击 No! 取消它。
1. 打开 Homebrew Launcher 并启动 MochaFAT32 程序。
1. 在配置菜单中，设置以下选项：
  - Config view mode: default
  - Skip this menu on launch: on
  - Don't relaunch OS: off
  - Launch System Menu: on
  - RedNAND: off
1. 你的设备将与 USB 设备一并加载 Wii U 菜单，并以 USB 设备代替 SD 卡。
1. 启动 Homebrew Launcher 并启动 disc2app 应用。
1. 弹出任何已插入的游戏光盘，然后按下 A 键开始导出进程。
1. 当提示时，插入你想要导出游戏的游戏光盘。
1. 过程完成后，Wii U 将启动 Wii U 主菜单。
1. 启动 Homebrew Launcher 然后启动 WUP Installer GX2 应用。
1. 选择你的游戏（`WUP-X-XXXX`），按下 `Install` 然后 `Yes` 确认安装。
1. 选择 NAND 作为安装目标。
1. 过程完成后，Wii U 将启动 Wii U 主菜单。
1. 然后你就应该看到游戏已经安装好了，准备好玩吧。
1. 将 USB 设备从 Wii U 上弹出，然后插入电脑。
2. 你可以删除 USB 设备的 `install` 文件夹里的 `WUP-X-XXXX` 文件夹来腾出一些空间。

<!-- tabs:end -->

### 移动游戏到 USB 设备

?> 如果你不想让你的游戏一直安装在 NAND 上，你可以使用 Wii U 的数据管理来将游戏移动到 USB 设备中。

!> 要将游戏移动到的 USB 设备必须经过 Wii U 的格式化才能使用。格式化将会删除 USB 设备上的所有文件，且再被格式化之前你无法在 Wii U 以外的设备上继续使用这个 USB 设备。

1. 重启 Wii U 来解除 MochaFAT32 的效果。
1. 将你的 USB 设备连接至 Wii U。
1. 打开你的 Wii U。
1. 你的 Wii U 会提示你需要格式化你的 USB 设备。 选择 Yes 确认。
1. 打开 Wii U 的系统设置。
1. 移动至 `Data Management（数据管理） > Copy/Move/Delete Data（复制/移动/删除数据） > System Memory（系统内存） > Move Items (X)（移动项目）`。
1. 选中游戏，然后移动所有数据（包括游戏更新和 DLC）到你的 USB 设备中。

### 将游戏更新移动至 USB

?> 如果你光盘的游戏中安装了更新或 DLC，你需要将这些文件传输至 USB 设备中。 你可以使用 Wii U 的数据管理来做到这点。

1. 将你的 Wii U 开机。
1. 打开 Wii U 的系统设置。
1. 移动至 `Data Management（数据管理） > Copy/Move/Delete Data（复制/移动/删除数据） > System Memory（系统内存） > Move Items (X)（移动项目）`。
1. 选中你的游戏，然后将 DLC 数据移动到 USB 设备中。