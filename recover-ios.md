# Recover a corrupted or lost IOS

This page will guide you through the process of restoring a clean IOS on your vWii.

!> Do not use this method for anything else than [recovering your Mii Channel](recover-mii-channel) or the following page.

### What you need

> - A working [Homebrew installation](introduction) on Wii U side
> - This release of [FTPiiU Everywhere](http://wiiubru.com/appstore/#/app/fpiiu-cbhc)
> - The latest release of [Python](https://www.python.org/downloads/)
> - An FTP client such as [FileZilla](https://filezilla-project.org/download.php?type=client)
> - [This Python script](/file/overwrite-wiiu-titlehash.py)

### Instructions

> 1. Extract the `fpiiu-cbhc.zip` file to the root of your sd card
> 2. Install FileZilla on your computer
> 3. Install Python on your computer

<!-- tabs:start -->

### **Recover a corrupted IOS 80**

!> If you are using a system update blocking method, please [remove it](unblock-updates).

> 1. Power on your Wii U and run CFW
>  - If you don't know what CFW is, please read [this](introduction)
> 2. Launch the Homebrew Launcher
> 3. Launch FTPiiU Everywhere
> 4. Launch FileZilla
> 5. Type in the IP address displayed by your Wii U in the `Host` field at the top of the window and click on `Quickconnect`
> 6. In FileZilla, navigate to `/slccmpt01/title/00000001`
> 7. Delete the `00000050` folder
> 8. Navigate to `/slccmpt01/ticket/00000001`
> 9. Delete the `00000050.tik` file
> 10. Double click the previously downloaded `.py` file
> 11. Wait for it to finish what it's doing
>  - If an `err.log` file has been generated, please visit us in **#wiiu-assistance** on [Nintendo Homebrew Discord](https://discord.gg/C29hYvh)
> 12. Exit FTPiiU Everywhere and the Homebrew Launcher
> 13. Launch the System Settings
> 14. Perform a System Update

### **Recover any corrupted IOS**

!> **Do not** attempt to delete multiple IOSes at a time.

!> If you are using a system update blocking method, please [remove it](unblock-updates).

> 1. Power on your Wii U and run CFW
>  - If you don't know what CFW is, please read [this](introduction)
> 2. Launch the Homebrew Launcher
> 3. Launch FTPiiU Everywhere
> 4. Launch FileZilla
> 5. Type in the IP address displayed by your Wii U in the `Host` field at the top of the window and click on `Quickconnect`
> 6. In FileZilla, navigate to `/slccmpt01/title/00000001`
> 7. Go to [this page](ios-folders) to see which folder/ticket you need to delete
> 7. Delete the corresponding folder of the IOS you want to recover
> 8. Navigate to `/slccmpt01/ticket/00000001`
> 9. Delete the corresponding `.tik` file of the IOS you want to recover
> 10. Double click the previously downloaded `.py` file
> 11. Wait for it to finish what it's doing
>  - If an `err.log` file has been generated, please visit us in **#wiiu-assistance** on [Nintendo Homebrew Discord](https://discord.gg/C29hYvh)
> 12. Exit FTPiiU Everywhere and the Homebrew Launcher
> 13. Launch the System Settings
> 14. Perform a System Update

<!-- tabs:end -->