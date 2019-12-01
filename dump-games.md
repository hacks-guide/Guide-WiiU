# Dumping Wii U Discs

Dumping your Discs allows you to install a copy of your game to the system NAND/an USB device so you can play it without needing the disc.

?> Dumping and installing games requires a working Homebrew setup, so make sure to finish the main guide on installing CFW first before following this.

### Instructions

<!-- tabs:start -->

#### **Install to NAND**

?> Installing a game to the system memory (NAND) is not recommended as it's limited to either 8 or 32gb depending on your model, making you run out of space pretty quickly if you want to install multiple games.  

### What you need
- Your SD Card needs to have enough space to fit the game you want to dump.
- The [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) Homebrew app

### Instructions

> 1. Extract the `disc2app.zip` file to the root of your SD Card.
> 2. Take the SD Card out of your PC and plug it into your Wii U.
> 3. Power on your Wii U.
> 4. Eject your game disc if you have one inserted
> 5. Launch the Homebrew Launcher and start the disc2app app.
> 6. Press the A button to start the dumping process to the SD Card.
> 7. When prompted, insert the game disc you want to dump
> 8. When the process is complete, your Wii U will launch the Wii U Menu.
> 9. Launch the Homebrew Launcher and start the WUP Installer GX2 app.
> 10. Select your game (`WUP-XXXX`), press `Install` and confirm with `Yes`.
> 11. Select NAND as the installation destination.
> 12. When the process is complete, your Wii U will launch the Wii U Menu.
> 13. You should see your game installed, ready to be played.
> 13. Take the SD Card out of your Wii U and plug it into your PC.
> 14. Delete the `WUP-XXXX` folder in the `install` directory on your SD Card to free up space.

#### **Install to USB**

?> When installing a game to an USB device, we recommend that you use an HDD and not a flash drive, as those are not optimized for constant reading and writing, therefore making them fail quickly. If your HDD is not externally powered, you will need an Y-cable to connect it to two USB slots on the Wii U.

!> In order to install to an USB device, it has to be formatted by the Wii U. Doing this will erase all contents of it, and prevent it from being used on another system unless you re-format it.

### What you need
- Your SD Card needs to have enough space to fit the game you want to dump.
- An USB HDD (+ a Y-cable if needed)
- The [disc2app](http://www.wiiubru.com/appstore/zips/disc2app.zip) Homebrew app

### Instructions

> 1. Extract the `disc2app.zip` file to the root of your SD Card.
> 2. Take the SD Card out of your PC and plug it into your Wii U.
> 3. Plug your USB HDD into the Wii U.
> 3. Power on your Wii U.
> 5. Your Wii U will prompt you to format your HDD. Confirm with Yes.
> 6. Eject your game disc if you have one inserted
> 7. Launch the Homebrew Launcher and start the disc2app app.
> 8. Press the A button to start the dumping process to the SD Card.
> 9. When prompted, insert the game disc you want to dump
> 10. When the process is complete, your Wii U will launch the Wii U Menu.
> 11. Launch the Homebrew Launcher and start the WUP Installer GX2 app.
> 12. Select your game (`WUP-XXXX`), press `Install` and confirm with `Yes`.
> 13. Select USB as the installation destination.
> 14. When the process is complete, your Wii U will launch the Wii U Menu.
> 15. You should see your game installed, ready to be played.
> 16. Take the SD Card out of your Wii U and plug it into your PC.
> 17. Delete the `WUP-XXXX` folder in the `install` directory on your SD Card to free up space.

### Transfer updates/DLC to USB device

?> If your disc game had DLC or updates installed, you will need to transfer the files over to your USB device. You can do this using the Wii U's data management.

> 1. Power on your Wii U
> 2. Open the Wii U's System Settings.
> 3. Navigate to `Data Management > Copy/Move/Delete Data > System Memory > Move Items (X)`.
> 4. Select your game and move the update and DLC data to the USB device.

<!-- tabs:end -->
