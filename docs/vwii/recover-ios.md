# Recover a Corrupted IOS

This page will guide you through the process of recovering a corrupted IOS on your vWii.

!> Do not use this method for anything else than [recovering your Mii Channel](docs/vwii/recover-mii-channel) or the following page.

### What You Need

> - A working [Homebrew installation](docs/user-guide/introduction) on Wii U side
> - This release of [FTPiiU Everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip)
> - An FTP client such as [FileZilla](https://filezilla-project.org/download.php?type=client)
> - <a href="docs/files/overwrite-wiiu-titlehash.exe" download>overwrite-wiiu-titlehash.exe</a>

### Instructions

> 1. Extract the `fpiiu-cbhc.zip` file to the root of your SD Card
> 1. Install FileZilla on your computer

<!-- tabs:start -->

### **IOS 80**

!> If you are using a system update blocking method, please [remove it](docs/extras/unblock-updates).

1. Power on your Wii U and launch the CFW of your choice (Mocha, Haxchi or CBHC)
1. Launch the Homebrew Launcher and FTPiiU Everywhere
1. Launch FileZilla on your computer
1. In FileZilla, type in the IP address displayed by your Wii U in the `Host` field at the top of the window and click on `Quickconnect`
1. Navigate to `/slccmpt01/title/00000001`
1. Delete the `00000050` folder
1. Navigate to `/slccmpt01/ticket/00000001`
1. Delete the `00000050.tik` file
1. Launch the previously downloaded `overwrite-wiiu-titlehash.exe` file
1. Type in your Wii U's IP address and press Enter
1. Wait for it to finish what it's doing
  - If an `err.log` file has been generated, please visit us in **#wiiu-assistance** on [Nintendo Homebrew Discord](https://discord.gg/C29hYvh)
1. Exit FTPiiU Everywhere and the Homebrew Launcher
1. Launch the System Settings
1. Perform a System Update

?> You can now re-enable your [system update blocking method](docs/extras/block-updates).

### **Any IOS**

!> **Do not** attempt to delete multiple IOSes at a time.

!> If you are using a system update blocking method, please [remove it](docs/extras/unblock-updates).

1. Power on your Wii U and launch the CFW of your choice (Mocha, Haxchi or CBHC)
1. Launch the Homebrew Launcher
1. Launch FTPiiU Everywhere
1. Launch FileZilla
1. Type in the IP address displayed by your Wii U in the `Host` field at the top of the window and click on `Quickconnect`
1. In FileZilla, navigate to `/slccmpt01/title/00000001`
1. Go to [this page](docs/vwii/ios-folders) to see which folder/ticket you need to delete
1. Delete the corresponding folder of the IOS you want to recover
1. Navigate to `/slccmpt01/ticket/00000001`
1. Delete the corresponding `.tik` file of the IOS you want to recover
1. Launch the previously downloaded `overwrite-wiiu-titlehash.exe` file
1. Type in your Wii U's IP address and press Enter
1. Wait for it to finish what it's doing
 - If an `err.log` file has been generated, please visit us in **#wiiu-assistance** on [Nintendo Homebrew Discord](https://discord.gg/C29hYvh)
1. Exit FTPiiU Everywhere and the Homebrew Launcher
1. Launch the System Settings
1. Perform a System Update

?> You can now re-enable your [system update blocking method](docs/extras/block-updates).

<!-- tabs:end -->