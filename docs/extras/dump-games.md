# Dumping Wii U Discs
---
Dumping your Discs allows you to install a copy of your game to the system NAND/a USB device so you can play it without needing the disc.

?> Dumping and installing games requires a working Homebrew setup, so make sure to finish the main guide on installing CFW first before following this.

### Instructions {docsify-ignore}

<!-- tabs:start -->

#### **Install To NAND**

### Install To NAND

?> Installing a game to the system memory (NAND) is not recommended as it's limited to either 8GB or 32GB depending on your model, making you run out of space pretty quickly if you want to install multiple games.  

### What You Need {docsify-ignore}

- Your SD Card needs to have enough space to fit the game you want to dump.
- The latest release of [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip).
- The [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) homebrew application.

### Instructions {docsify-ignore}

1. Copy the contents of the `wup_installer_gx2.zip` file to the root of your SD Card.
1. Copy the contents of the `disc2app.zip` file to the root of your SD Card.
1. Take the SD Card out of your PC and plug it into your Wii U.
1. Power on your Wii U.
1. Eject your game disc if you have one inserted.
1. Launch the Homebrew Launcher and start the disc2app app.
1. Press the A button to start the dumping process to the SD Card.
1. When prompted, insert the game disc you want to dump.
1. When the process is complete, your Wii U will launch the Wii U Menu.
1. Launch the Homebrew Launcher and start the WUP Installer GX2 app.
1. Select your game (`WUP-X-XXXX`), press `Install` and confirm with `Yes`.
1. Select NAND as the installation destination.
1. When the process is complete, your Wii U will launch the Wii U Menu.
1. You should see your game installed, ready to be played.
1. Take the SD Card out of your Wii U and plug it into your PC.
1. Delete the `WUP-X-XXXX` folder in the `install` directory on your SD Card to free up space.

#### **Install To USB**

### Install To USB

?> When installing a game to a USB device, we recommend that you use an HDD and not a flash drive, as those are not optimized for constant reading and writing, therefore making them fail quickly. If your HDD is not externally powered, you will need a Y-cable to connect it to two USB slots on the Wii U.

!> In order to install to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

### What You Need {docsify-ignore}

- Your SD Card needs to have enough space to fit the game you want to dump.
- A USB HDD (+ a Y-cable if needed)
- The latest release of [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- The [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) Homebrew app

### Instructions {docsify-ignore}

1. Copy the contents of the `wup_installer_gx2.zip` file to the root of your SD Card.
1. Copy the contents of the `disc2app.zip` file to the root of your SD Card.
1. Take the SD Card out of your PC and plug it into your Wii U.
1. Plug your USB HDD into the Wii U.
1. Power on your Wii U.
1. Your Wii U will prompt you to format your HDD. Confirm with Yes.
1. Eject your game disc if you have one inserted
1. Launch the Homebrew Launcher and start the disc2app app.
1. Press the A button to start the dumping process to the SD Card.
1. When prompted, insert the game disc you want to dump
1. When the process is complete, your Wii U will launch the Wii U Menu.
1. Launch the Homebrew Launcher and start the WUP Installer GX2 app.
1. Select your game (`WUP-X-XXXX`), press `Install` and confirm with `Yes`.
1. Select USB as the installation destination.
1. When the process is complete, your Wii U will launch the Wii U Menu.
1. You should see your game installed, ready to be played.
1. Take the SD Card out of your Wii U and plug it into your PC.
1. Delete the `WUP-X-XXXX` folder in the `install` directory on your SD Card to free up space.

#### **Install From USB**

### Install From USB

?> If you do not have enough space on your SD Card, you can use an advanced technique to install dumps from a USB device. This is not the easiest thing to do and has the disadvantage of only being able to install the game onto your system memory (NAND).

### What You Need {docsify-ignore}

- A USB storage device (+a Y-cable if needed) with enough space to fit the game you want to dump.
- The latest release of [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- The [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) Homebrew app.
- The [MochaFAT32](https://www.wiiubru.com/appstore/zips/mocha_fat32.zip) Homebrew app.
- The  1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - You will need to download the v1.4 `homebrew_launcher.v.1.4.zip` release.

### Instructions {docsify-ignore}

?> **Notice**
    Your USB device will need to be formatted as FAT32. If your USB is not formatted to FAT32, use [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it.

1. Copy the contents of the `homebrew_launcher.v.1.4.zip` file to the root of your USB device.
1. Copy the contents of the `wup_installer_gx2.zip` file to the root of your USB device.
1. Copy the contents of the `disc2app.zip` file to the root of your USB device.
1. Copy the contents of the `mocha_fat32.zip` file to the root of your SD Card.
1. Take the SD Card out of your PC and plug it into your Wii U console.
1. Power on your Wii U.
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
1. When the process is complete, your Wii U will launch the Wii U Menu.
1. Launch the Homebrew Launcher and start the WUP Installer GX2 app.
1. Select your game (`WUP-X-XXXX`), press `Install` and confirm with `Yes`.
1. Select NAND as the installation destination.
1. When the process is complete, your Wii U will launch the Wii U Menu.
1. You should see your game installed, ready to be played.
1. Take the USB device out of your Wii U and plug it into your PC.
2. Delete the `WUP-X-XXXX` folder in the `install` directory on your USB device to free up space.

<!-- tabs:end -->

### Moving Games To USB

?> If you don't want to keep the game installed on NAND, you can use the Wii U's data management to move the game to a USB device.

!> In order to move your game to a USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you reformat it.

1. Reboot your Wii U to remove the effect of MochaFAT32.
1. Plug your USB device into the Wii U.
1. Power on your Wii U.
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