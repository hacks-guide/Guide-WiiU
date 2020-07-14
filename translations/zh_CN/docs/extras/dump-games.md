# 导出 Wii U 光盘
---
导出你的光盘文件允许你安装游戏的副本到你主机的 NAND 或 USB 设备中，以便你可以在不用光盘的时候玩游戏。

?> 导出和安装游戏需要你先完成 Homebrew 的设置，所以你需要先完成关于安装自制固件的主要教程，然后再来关注下面的步骤。

### Instructions {docsify-ignore}

<!-- tabs:start -->

#### **安装至 NAND**

### 安装至 NAND

?> 我们不建议将游戏安装到系统内存中（NAND），因为主机的内存容量为 8 GB 或 32 GB，如果你想安装好几个游戏，剩余空间会很快用完。

### What You Need {docsify-ignore}

- 你的 SD 卡需要保存游戏的导出文件的足够的空间。
- 最新版 [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)。
- [Disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) homebrew 程序。

### Instructions {docsify-ignore}

1. 解压 `wup_installer_gx2.zip` 到你的 SD 卡根目录。
1. 解压 `disc2app.zip` 到你的 SD 卡根目录。
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

### What You Need {docsify-ignore}

- 你的 SD 卡需要保存游戏的导出文件的足够的空间。
- 一块 USB HDD（如果需要的话还需要准备 Y 型线）
- 最新版 [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- [Disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) Homebrew 程序

### Instructions {docsify-ignore}

1. 解压 `wup_installer_gx2.zip` 到你的 SD 卡根目录。
1. 解压 `disc2app.zip` 到你的 SD 卡根目录。
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

?> If you do not have enough space on your SD Card, you can use an advanced technique to install dumps from a USB device. This is not the easiest thing to do and has the disadvantage of only being able to install the game onto your system memory (NAND).

### What You Need {docsify-ignore}

- 一个有足够空间放进你的游戏导出文件的 USB 存储设备（如果需要的话还需要准备 Y 型线）。
- 最新版 [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- [Disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) Homebrew 程序。
- [MochaFAT32](https://www.wiiubru.com/appstore/zips/mocha_fat32.zip) Homebrew 程序。
- 1.4 版本的 [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - 你需要下载 `homebrew_launcher.v.1.4.zip` 版本。

### Instructions {docsify-ignore}

?> **Notice** Your USB device will need to be formatted as FAT32. If your USB is not formatted to FAT32, use [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it.

1. Extract the `homebrew_launcher.v.1.4.zip` file to the root of your USB device.
1. Extract the `wup_installer_gx2.zip` file to the root of your USB device.
1. Extract the `disc2app.zip` file to the root of your USB device.
1. Extract the `mocha_fat32.zip` file to the root of your SD Card.
1. Take the SD Card out of your PC and plug it into your Wii U console.
1. 打开你的 Wii U。
1. Plug in your USB device. The Wii U will ask you format it. Cancel with No!
1. Launch the Homebrew Launcher and start the MochaFAT32 app.
1. In the configuration menu, set the following settings:
  - Config view mode: default
  - Skip this menu on launch: on
  - Don't relaunch OS: off
  - Launch System Menu: on
  - RedNAND: off
1. Your console will load the Wii U menu with your USB device now replacing the SD Card.
1. Launch the Homebrew Launcher and open the disc2app app.
1. Eject any inserted game disc and press the A button to begin the dumping process.
1. 当提示时，插入你想要导出游戏的游戏光盘。
1. 过程完成后，Wii U 将启动 Wii U 主菜单。
1. 启动 Homebrew Launcher 然后启动 WUP Installer GX2 应用。
1. 选择你的游戏（`WUP-X-XXXX`），按下 `Install` 然后 `Yes` 确认安装。
1. 选择 NAND 作为安装目标。
1. 过程完成后，Wii U 将启动 Wii U 主菜单。
1. 然后你就应该看到游戏已经安装好了，准备好玩吧。
1. Take the USB device out of your Wii U and plug it into your PC.
2. Delete the `WUP-X-XXXX` folder in the `install` directory on your USB device to free up space.

<!-- tabs:end -->

### Moving Games To USB

?> If you don't want to keep the game installed on NAND, you can use the Wii U's data management to move the game to a USB device.

!> In order to move your game to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

1. Reboot your Wii U to remove the effect of MochaFAT32.
1. Plug your USB device into the Wii U.
1. 打开你的 Wii U。
1. Your Wii U will prompt you to format your USB device. 选择 Yes 确认。
1. Open the Wii U's System Settings.
1. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`
1. Select the game and move all data (including updates and DLC if any are installed) to your USB device.

### Move Updates To USB

?> If your disc game had DLC or updates installed, you will need to transfer the files over to your USB device. You can do this using the Wii U's data management.

1. Power on your Wii U
1. Open the Wii U's System Settings.
1. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
1. Select your game and move the update and DLC data to the USB device.