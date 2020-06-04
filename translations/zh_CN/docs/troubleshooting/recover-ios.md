# Recover a Corrupted IOS
---
This page will guide you through the process of recovering a corrupted IOS on your vWii.

!> Do not use this method for anything else than [Recovering your Mii Channel](recover-mii-channel) or the following page.

### What You Need

<!-- tabs:start -->

#### **Windows**

- A working [Homebrew installation](introduction) on Wii U side.
- This release of [FTPiiU Everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip)
- An FTP client such as [FileZilla](https://filezilla-project.org/download.php?show_all=1)
- <a href="https://github.com/ihaveamac/overwrite-wiiu-titlehash/releases/download/v1.0/overwrite-wiiu-titlehash.exe" download>overwrite-wiiu-titlehash.exe</a>

#### **macOS & Linux**

- A working [Homebrew installation](introduction) on Wii U side
- This release of [FTPiiU Everywhere](http://wiiubru.com/appstore/zips/fpiiu-cbhc.zip)
- The latest release of [Python](https://www.python.org/downloads/)
- An FTP client such as [FileZilla](https://filezilla-project.org/download.php?show_all=1)
- <a href="https://github.com/ihaveamac/overwrite-wiiu-titlehash/raw/master/overwrite-wiiu-titlehash.py" download>overwrite-wiiu-titlehash.py</a> **(right-click -> Save link as... -> Click Save).**

<!-- tabs:end -->

### 说明

<!-- tabs:start -->

#### **Windows**

1. 解压 `fpiiu-cbhc.zip` 到你的 SD 卡根目录。
1. Install FileZilla on your computer.

#### **macOS & Linux**

1. 解压 `fpiiu-cbhc.zip` 到你的 SD 卡根目录。
1. Install FileZilla on your computer.
1. Install Python on your computer.

<!-- tabs:end -->

### Recovering The IOSes

!> **Do not** attempt to delete the `00000002` folder in `/slccmpt01/title/00000001` nor the `00000002.tik` file in `/slccmpt01/ticket/00000001`.

?> If you are using a system update blocking method, please [remove it](unblock-updates).

<!-- tabs:start -->

#### **Windows**

1. Power on your Wii U and launch the CFW of your choice (Mocha, Haxchi or CBHC).
1. 启动Homebrew Launcher.
1. Launch FTPiiU Everywhere.
1. Launch FileZilla.
1. Type in the IP address displayed by your Wii U in the `Host` field at the top of the window and click on `Quickconnect`.
1. In FileZilla, navigate to `/slccmpt01/title/00000001`.
1. Go to [this page](ios-folders) to see which folder/ticket you need to delete.
1. Delete the corresponding folders of the IOSes you want to recover.
1. Navigate to `/slccmpt01/ticket/00000001`.
1. Delete the corresponding `.tik` files of the IOSes you want to recover.
1. Launch the previously downloaded `overwrite-wiiu-titlehash.exe` file.
1. Type in your Wii U's IP address and press Enter.
1. Wait for it to finish what it's doing.
 - If an `err.log` file has been generated, please visit us in **#wiiu-assistance** on [Nintendo Homebrew Discord](https://discord.gg/C29hYvh) and ask, in English, for assistance.
1. Exit FTPiiU Everywhere and the Homebrew Launcher.
1. Launch the System Settings.
1. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update).

?> You can now re-enable your [system update blocking method](block-updates).

### **macOS & Linux**

1. Power on your Wii U and launch the CFW of your choice (Mocha, Haxchi or CBHC).
1. 启动Homebrew Launcher.
1. Launch FTPiiU Everywhere.
1. Launch FileZilla.
1. Type in the IP address displayed by your Wii U in the `Host` field at the top of the window and click on `Quickconnect`.
1. In FileZilla, navigate to `/slccmpt01/title/00000001`.
1. Go to [this page](ios-folders) to see which folder/ticket you need to delete.
1. Delete the corresponding folders of the IOSes you want to recover.
1. Navigate to `/slccmpt01/ticket/00000001`.
1. Delete the corresponding `.tik` files of the IOSes you want to recover.
1. Open up a Terminal window.
1. Use the following command: `cd <directory>`.
 - On macOS, the most common place to find your downloaded files is `/Users/username/Downloads`.
 - On Linux, the most common place to find your downloaded files is `/home/username/Downloads`.
1. Use the following command: `python3 overwrite-wiiu-titlehash.py`.
1. Type in your Wii U's IP address and press Enter.
1. Wait for it to finish what it's doing.
 - If an `err.log` file has been generated, please visit us in **#wiiu-assistance** on [Nintendo Homebrew Discord](https://discord.gg/C29hYvh) and ask, in English, for assistance.
1. Exit FTPiiU Everywhere and the Homebrew Launcher.
1. Launch the System Settings.
1. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update).

?> You can now re-enable your [system update blocking method](block-updates).

<!-- tabs:end -->