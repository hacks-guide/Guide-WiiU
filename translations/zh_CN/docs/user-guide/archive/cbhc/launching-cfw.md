# Archive - CBHC

!> **THIS METHOD IS NO LONGER SUPPORTED**  
**CURRENT METHOD IS AVAILABLE [HERE](../../introduction)**

## 启动 CFW {docsify-ignore}

若一切都无误操作，则你就能在之后得到你的 NAND 备份并在系统中运行 CFW 了。

与 DSi、Wii 或 3DS 不同的是，Wii U 的 CFW 是临时性的。 这代表在系统重启之后 CFW 就会失效，你必须重复下面的操作才能重新启动 CFW。 你可以选择安装 CBHC 来自动进入 Haxchi CFW 以跳过这些步骤。

!> Installing CBHC incorrectly can brick your Wii U. Make sure to follow the following rules when installing CBHC: <br>- The DS game has to be legitimately installed from the eShop! <br>- 安装完 CBHC 之后不要初始化系统！ <br>- 不要删除购买此 DS VC 游戏的用户账户！ <br>- 不要在 WUP Installer 或 eShop 中再次安装使用的同一游戏！ <br>- 不要通过 CBHC 安装 Haxchi！ <br>- Don't uninstall the DS Virtual Console game without [properly uninstalling CBHC first](../uninstall-cbhc)! <br>- 不要将使用的 DS VC 游戏移动到 USB 设备中！

!> Breaking one of the above rules will result in a brick.

> 如果你担心你会不小心做了上面的其中一件事，请考虑对你的账户设置家长控制！ 阻止使用`数据管理（Data Management）`并设置`游戏评级（Game Rating）`为最高可防止你在使用 CBHC 的时候犯了错误。 点击[这里](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1081/~/how-to-change-parental-controls)来了解如何更改家长控制的更多信息。

### 步骤 {docsify-ignore}

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
1. 重启你的主机。 如果 CBHC 正确安装了，那么你就应该会看到一个新的启动菜单。 （CBHC 与快速启动不兼容。 如果你正在使用快速启动菜单，请关闭它。)
1. 使用十字键移动至 `Autoboot: Disabled` 按几下 A 键，直到那一行变成 `Autoboot: System Menu` 为止。
1. 使用十字键移动至 `Boot System Menu`，然后按下 A 键。 这将启动启用 CFW 的 Wii U 菜单。
1. 你的主机现在应该每次重启都会自动进入至 CFW 了。
1. 你现在可以重新插入你在开启做手册时拔出的 USB 设备了。