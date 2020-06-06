# 导出 Wii U 光碟
---
导出你的光盘文件允许你安装游戏的副本到你主机的 NAND 或 USB 设备中，以便你可以在不用光盘的时候玩游戏。

?> 导出和安装游戏需要你先完成 Homebrew 的设置，所以你需要先完成关于安装自制固件的主要教程，然后再来关注下面的步骤。

### 操作步骤

<!-- tabs:start -->

#### **安装至 NAND**

?> 我们不建议将游戏安装到系统内存中（NAND），因为主机的内存容量为 8 GB 或 32 GB，如果你想安装好几个游戏，剩余空间会很快用完。

### 你需要准备点啥？

- 你的 SD 卡需要保存游戏的导出文件的足够的空间。
- 最新版 [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)。
- [Disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) homebrew 程序。

### 操作步骤

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
1. Take the SD Card out of your Wii U and plug it into your PC.
1. Delete the `WUP-X-XXXX` folder in the `install` directory on your SD Card to free up space.

#### **Install To USB**

?> When installing a game to a USB device, we recommend that you use an HDD and not a flash drive, as those are not optimized for constant reading and writing, therefore making them fail quickly. If your HDD is not externally powered, you will need a Y-cable to connect it to two USB slots on the Wii U.

!> In order to install to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

### What You Need

- 你的 SD 卡需要保存游戏的导出文件的足够的空间。
- A USB HDD (+ a Y-cable if needed)
- The latest release of [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- The [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) Homebrew app

### 操作步骤

1. 解压 `wup_installer_gx2.zip` 到你的 SD 卡根目录。
1. 解压 `disc2app.zip` 到你的 SD 卡根目录。
1. 将内存卡从电脑上拔出并插回 Wii U。
1. Plug your USB HDD into the Wii U.
1. 打开你的 Wii U。
1. Your Wii U will prompt you to format your HDD. Confirm with Yes.
1. Eject your game disc if you have one inserted
1. 启动 Homebrew Launcher 并启动 disc2app 应用。
1. 按下 A 键启动导出文件到 SD 卡的进程。
1. When prompted, insert the game disc you want to dump
1. 过程完成后，Wii U 将启动 Wii U 主菜单。
1. 启动 Homebrew Launcher 然后启动 WUP Installer GX2 应用。
1. 选择你的游戏（`WUP-X-XXXX`），按下 `Install` 然后 `Yes` 确认安装。
1. Select USB as the installation destination.
1. 过程完成后，Wii U 将启动 Wii U 主菜单。
1. 然后你就应该看到游戏已经安装好了，准备好玩吧。
1. Take the SD Card out of your Wii U and plug it into your PC.
1. Delete the `WUP-X-XXXX` folder in the `install` directory on your SD Card to free up space.

### Move Updates/DLC To USB

?> If your disc game had DLC or updates installed, you will need to transfer the files over to your USB device. You can do this using the Wii U's data management.

1. Power on your Wii U
1. Open the Wii U's System Settings.
1. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
1. Select your game and move the update and DLC data to the USB device.

#### **Install From USB**

?> If you do not have enough space on your SD Card, you can use an advanced technique to install dumps from a USB device. This is not the easiest thing to do and has the disadvantage of only being able to install the game onto your system memory (NAND).

### What You Need
- A USB storage device (+a Y-cable if needed) with enough space to fit the game you want to dump.
- The latest release of [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- The [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) Homebrew app.
- The [MochaFAT32](https://www.wiiubru.com/appstore/zips/mocha_fat32.zip) Homebrew app.
- The  1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - You will need to download the v1.4 `homebrew_launcher.v.1.4.zip` release.

### 操作步骤

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
1. When prompted, insert the game disc you want to dump.
1. 过程完成后，Wii U 将启动 Wii U 主菜单。
1. 启动 Homebrew Launcher 然后启动 WUP Installer GX2 应用。
1. 选择你的游戏（`WUP-X-XXXX`），按下 `Install` 然后 `Yes` 确认安装。
1. 选择 NAND 作为安装目标。
1. 过程完成后，Wii U 将启动 Wii U 主菜单。
1. 然后你就应该看到游戏已经安装好了，准备好玩吧。
1. Take the USB device out of your Wii U and plug it into your PC.
2. Delete the `WUP-X-XXXX` folder in the `install` directory on your USB device to free up space.

### Moving The Game To USB

?> If you don't want to keep the game installed on NAND, you can use the Wii U's data management to move the game to a USB device.

!> In order to move your game to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

1. Reboot your Wii U to remove the effect of MochaFAT32.
1. Plug your USB device into the Wii U.
1. 打开你的 Wii U。
1. Your Wii U will prompt you to format your USB device. Confirm with Yes.
1. Open the Wii U's System Settings.
1. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`
1. Select the game and move all data (including updates and DLC if any are installed) to your USB device.

<!-- tabs:end -->
