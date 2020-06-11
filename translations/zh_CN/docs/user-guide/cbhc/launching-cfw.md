# CBHC

## 启动 CFW {docsify-ignore}

现在你应该有了你主机的 NAND 备份了，所以如果你之后遇到了任何错误你都可以使用 CFW 直接恢复。

与 DSi、Wii 或 3DS 不同的是，Wii U 的 CFW 是临时性的。 这代表在系统重启之后 CFW 就会失效，你必须重复下面的操作才能重新启动。 你可以选择安装 CBHC 来自动进入 Haxchi CFW 以跳过这些步骤。

!> 若安装 CBHC 时发生了操作错误会导致 Wii U 砖机。所以请确保你在安装 CBHC 时遵循以下规定： <br>- 使用的 DS 游戏必须是从 eShop 下载的正版游戏！ <br>- 安装完 CBHC 之后不要初始化系统！ <br>- 不要删除购买此 DS VC 游戏的用户账户！ <br>- 不要在 WUP Installer 或 eShop 中再次安装使用的同一游戏！ <br>- 不要通过 CBHC 安装 Haxchi！ <br>- 不要在[正确卸载 CBHC 之前](../uninstall-cbhc)卸载使用的 DS VC 游戏！ <br>- 不要将使用的 DS VC 游戏移动到 USB 设备中！

!> 若你想斗胆试试无视上述规定的规则，那么你就死掉了。

### 操作步骤

1. 将内存卡从电脑上拔出并插回 Wii U。
1. 若你还没有下载你的 DS VC 游戏，请从 eShop 上下载它。
1. 按照[先前](browser-exploit)的方法在你的系统中启动 Homebrew Launcher。
1. 启动 Homebrew Launcher 然后打开 Haxchi 程序。
1. 使用十字键来移动光标至你想要用来安装 Haxchi 的游戏，然后按下 A 键来安装它。
1. 一旦安装完成后，你的主机会自动启动至 Wii U 主菜单。 然后你就会看到你的游戏图标被 Haxchi 的所替代。
1. 然后打开那个被修改的 DS 游戏。 这将重启主机，然后打开 CFW。
1. 再次打开那个 DS 游戏，然后在启动后按住 A 键。 这将会启动 Homebrew Launcher。
1. 移动 Homebrew Launcher 至 CBHC，然后启动它。
1. 使用十字键来移动光标至你之前用来安装 Haxchi 的游戏，然后按下 A 键来安装 CBHC。
1. 一旦安装完成后，你的主机会自动启动至 Wii U 主菜单。
1. 重启你的主机。 If CBHC installed correctly, you should see a new boot menu.
1. Use the DPAD to navigate to `Autoboot: Disabled` and press the A button until it says `Autoboot: System Menu`.
1. Use the DPAD to navigate to `Boot System Menu` and press the A button. This will launch the Wii U Menu with CFW enabled.
1. Your console now automatically boots into CFW every reboot.
1. You can now re-attach any USB devices you had attached before starting the guide.