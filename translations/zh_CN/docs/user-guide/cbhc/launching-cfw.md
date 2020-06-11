# CBHC

## 启动 CFW {docsify-ignore}

现在你应该有了你主机的 NAND 备份了，所以如果遇到了任何错误你都可以使用 CFW 直接恢复。

Unlike systems such as the DSi, Wii, or 3DS, Wii U CFW is temporary. This means that as soon as your system reboots, you will lose CFW and have to follow these instructions again. This can be skipped by installing CBHC to a Haxchi CFW installation.

!> Installing CBHC incorrectly can brick your Wii U. Make sure to follow the following rules when installing CBHC: <br>- The DS game has to be legitimately installed from the eShop! <br>- Don't format the system while CBHC is installed! <br>- Don't delete the user account that bought the DS Virtual Console game! <br>- Don't re-install the same game using WUP Installer or from the eShop! <br>- Don't install Haxchi over CBHC! <br>- Don't uninstall the DS Virtual Console game without [properly uninstalling CBHC first](../uninstall-cbhc)! <br>- Don't move the DS Virtual Console game to a USB drive!

!> Breaking one of the above rules will result in a brick.

### 操作步骤

1. 将内存卡从电脑上拔出并插回 Wii U。
1. If you haven't already, now download your DS Virtual Console game of choice from the eShop.
1. Launch the Homebrew Launcher on your system as [previously explained](browser-exploit).
1. Navigate the Homebrew Launcher and open the Haxchi app.
1. Use the DPAD to navigate the cursor to the game you want to install Haxchi to and press the A button to install it.
1. Once the installation has finished, your console will launch the Wii U Menu. You will see your game replaced by a Haxchi icon.
1. Run the modified DS game. This will reboot the console and enable CFW.
1. Run the modified DS game again and hold the A button after launching it. This will run the Homebrew Launcher.
1. Navigate the Homebrew launcher and run the CBHC app.
1. Use the DPAD to navigate the cursor to the game you previously installed Haxchi to and press the A button to install CBHC.
1. Once the installation has finished, your console will launch the Wii U Menu.
1. Reboot your console. If CBHC installed correctly, you should see a new boot menu.
1. Use the DPAD to navigate to `Autoboot: Disabled` and press the A button until it says `Autoboot: System Menu`.
1. Use the DPAD to navigate to `Boot System Menu` and press the A button. This will launch the Wii U Menu with CFW enabled.
1. Your console now automatically boots into CFW every reboot.
1. You can now re-attach any USB devices you had attached before starting the guide.