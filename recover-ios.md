# Recover a corrupted or lost IOS

This page will guide you through the process of recovering a corrupted IOS on your vWii.

!> Do not use this method for anything else than [recovering your Mii Channel](recover-mii-channel) or the following page.

### What you need

> - A working [Homebrew installation](introduction) on Wii U side
> - This release of [FTPiiU Everywhere](http://wiiubru.com/appstore/#/app/fpiiu-cbhc)
> - The latest release of [Python](https://www.python.org/downloads/)
> - An FTP client such as [FileZilla](https://filezilla-project.org/download.php?type=client)
> - [This Python script](/file/overwrite-wiiu-titlehash.py)

### Instructions

> 1. Extract the `fpiiu-cbhc.zip` file to the root of your SD Card
> 2. Install FileZilla on your computer
> 3. Install Python on your computer

<!-- tabs:start -->

### **Recover a corrupted IOS 80**

!> If you are using a system update blocking method, please [remove it](unblock-updates).

> 1. Power on your Wii U and launch the CFW of your choice (Mocha, Haxchi or CBHC)
> 2. Launch the Homebrew Launcher and FTPiiU Everywhere
> 3. Launch FileZilla on your computer
> 4. In FileZilla, type in the IP address displayed by your Wii U in the `Host` field at the top of the window and click on `Quickconnect`
> 5. Navigate to `/slccmpt01/title/00000001`
> 6. Delete the `00000050` folder
> 7. Navigate to `/slccmpt01/ticket/00000001`
> 8. Delete the `00000050.tik` file
> 9. On your computer, double click the previously downloaded `.py` file
> 10. Type in your Wii U's IP address and press Enter
> 11. Wait for it to finish what it's doing
>  - If an `err.log` file has been generated, please visit us in **#wiiu-assistance** on [Nintendo Homebrew Discord](https://discord.gg/C29hYvh)
> 12. Exit FTPiiU Everywhere and the Homebrew Launcher
> 13. Launch the System Settings
> 14. Perform a System Update

?> You can now re-enable your [system update blocking method](block-updates).

### **Recover any corrupted IOS**

!> **Do not** attempt to delete multiple IOSes at a time.

!> If you are using a system update blocking method, please [remove it](unblock-updates).

> 1. Power on your Wii U and launch the CFW of your choice (Mocha, Haxchi or CBHC)
> 2. Launch the Homebrew Launcher
> 3. Launch FTPiiU Everywhere
> 4. Launch FileZilla
> 5. Type in the IP address displayed by your Wii U in the `Host` field at the top of the window and click on `Quickconnect`
> 6. In FileZilla, navigate to `/slccmpt01/title/00000001`
> 7. Go to [this page](ios-folders) to see which folder/ticket you need to delete
> 8. Delete the corresponding folder of the IOS you want to recover
> 9. Navigate to `/slccmpt01/ticket/00000001`
> 10. Delete the corresponding `.tik` file of the IOS you want to recover
> 11. Double click the previously downloaded `.py` file
> 12. Type in your Wii U's IP address and press Enter
> 13. Wait for it to finish what it's doing
>  - If an `err.log` file has been generated, please visit us in **#wiiu-assistance** on [Nintendo Homebrew Discord](https://discord.gg/C29hYvh)
> 14. Exit FTPiiU Everywhere and the Homebrew Launcher
> 15. Launch the System Settings
> 16. Perform a System Update

?> You can now re-enable your [system update blocking method](block-updates).

<!-- tabs:end -->