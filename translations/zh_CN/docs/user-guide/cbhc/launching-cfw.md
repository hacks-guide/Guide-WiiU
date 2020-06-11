# CBHC

## 启动 CFW {docsify-ignore}

现在你应该有了你主机的 NAND 备份了，所以如果你之后遇到了任何错误你都可以使用 CFW 直接恢复。

与 DSi、Wii 或 3DS 不同的是，Wii U 的 CFW 是临时性的。 这代表在系统重启之后 CFW 就会失效，你必须重复下面的操作才能重新启动。 你可以选择安装 CBHC 来自动进入 Haxchi CFW 以跳过这些步骤。

!> 若安装 CBHC 时发生了操作错误会导致 Wii U 砖机。所以请确保你在安装 CBHC 时遵循以下规定： <br>- 使用的 DS 游戏必须是从 eShop 下载的正版游戏！ <br>- 安装完 CBHC 之后不要初始化系统！ <br>- 不要删除购买此 DS VC 游戏的用户账户！ <br>- 不要在 WUP Installer 或 eShop 中再次安装使用的同一游戏！ <br>- 不要通过 CBHC 安装 Haxchi！ <br>- 不要在[正确卸载 CBHC 之前](../uninstall-cbhc)卸载使用的 DS VC 游戏！ <br>- 不要将使用的 DS VC 游戏移动到 USB 设备中！

!> 如果你在上述规定之间来回试探，然后你就死掉了。

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