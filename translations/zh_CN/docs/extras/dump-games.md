# 导出 Wii U 光盘
---
导出你的光盘文件允许你安装游戏的副本到你主机的 NAND 或 USB 设备中，以便你可以在不用光盘的时候玩游戏。

?> 导出和安装游戏需要你先完成 Homebrew 的设置，所以你需要先完成关于安装自制固件的主要教程，然后再来关注下面的步骤。

!> 分享本教程导出的文件是 **非法的**。  
如果你想要使用这个教程导出游戏并分享出去，请不要这么做。

### Dumping and Installing Wii U Discs {docsify-ignore}

?> 我们不建议将游戏安装到系统内存中（NAND），因为主机的内存容量为 8 GB 或 32 GB，如果你想安装好几个游戏，剩余空间会很快用完。

?> 如果你需要将游戏安装到 USB 设备，我们建议你使用 HDD 而不要用闪存驱动器（U盘），闪存驱动器没有对读写文件的特别优化，导致它们会很快就无法正常使用。 如果你的 HDD 没有外接电源，则你需要一根硬盘 Y 形线将硬盘连接至 Wii U 上的两个 USB 接口上。

!> In order to install to a USB device, it has to be formatted by the Wii U. Doing this will erase (delete) all contents (documents, pictures, videos, PC data) off of it, and prevent it from being used on another system unless you reformat it. This *does* include the vWii, meaning you will not be able to run Wii and GameCube disc images off the USB using USB loaders. To format, plug your USB HDD into the Wii U, power on your Wii U, your Wii U will prompt you to format your HDD. Confirm with Yes.

#### 你需要准备些啥？ {docsify-ignore}

- 你的 SD 卡需要保存游戏的导出文件的足够的空间。
- If wanting to install to a USB, A USB HDD (+ a Y-cable if needed).
- The latest release of [WUP Installer GX2](https://wiiu.cdn.fortheusers.org/zips/wup_installer_gx2_wuhb.zip).
- The [wudd](https://wiiu.cdn.fortheusers.org/zips/wudd.zip) homebrew application.

#### 步骤 {docsify-ignore}

1. Copy the contents of the `wup_installer_gx2_wuhb.zip` file to the root of your SD Card.
1. Copy the contents of the newly downloaded wudd `.zip` file to the root of your SD Card.
1. Take the SD Card out of your PC and insert it into your Wii U.
1. Power on your Wii U and boot into Aroma.
1. Launch the Wii U Menu and start the wudd app.
1. Select `Dump partition as .app`
1. Select the `Game` partition to start dumping.
1. When finished, exit wudd to the Wii U Menu.
1. Insert the SD Card into your computer.
1. Copy the `GMXXXXXXXXXXXXXXXX` folder from `sd:/wudump/WUP-X-XXXX` to the `install` folder on your SD Card.
    - If the `install` folder does not exist, create it.
1. Eject and insert the SD Card into your Wii U.
1. Open the Wii U Menu and then the WUP Installer GX2 app.
1. Select your game (`GMXXXXXXXXXXXXXXXX`), press `Install` and confirm with `Yes`.
1. Choose 'USB' to install to USB and 'NAND' to install to NAND
1. Exit the WUP Installer GX2 to the Wii U Menu.
1. You should see your game installed, ready to be played.
1. Take the SD Card out of your Wii U and plug it into your PC.
1. Delete the `GMXXXXXXXXXXXXXXXX` folder in the `install` directory on your SD Card to free up space.

### Moving Games To USB

?> If you don't want to keep the game installed on NAND, you can use the Wii U's data management to move the game to a USB device.

!> In order to move your game to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

1. Plug your USB device into the Wii U.
1. 打开你的 Wii U。
1. Your Wii U will prompt you to format your USB device. Confirm with Yes.
1. Open the Wii U's System Settings.
1. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`
1. Select the game and move all data (including updates and DLC if any are installed) to your USB device.

### Move Updates To USB

?> If your disc game had DLC or updates installed, you will need to transfer the files over to your USB device. You can do this using the Wii U's data management.

1. Power on your Wii U
1. Open the Wii U's System Settings.
1. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
1. Select your game and move the update and DLC data to the USB device.
