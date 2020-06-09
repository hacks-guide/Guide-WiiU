# 恢复一个 vWii IOS/频道
---
此页面将教你恢复因任何原因而被破坏或被删除的 vWii 上的一个 IOS 或频道。

<details>
<summary>点击此处显示可以通过此方法恢复的内容。</summary>

- Wii Menu Manual
- vWii System Channel
- Region Select
- System Menu
- Mii Channel
- Wii U Menu
- Wii Shop Channel
- IOS 9
- IOS 12
- IOS 13
- IOS 14
- IOS 15
- IOS 17
- IOS 21
- IOS 22
- IOS 28
- IOS 31
- IOS 33
- IOS 34
- IOS 35
- IOS 36
- IOS 37
- IOS 38
- IOS 41
- IOS 43
- IOS 45
- IOS 46
- IOS 48
- IOS 53
- IOS 55
- IOS 56
- IOS 57
- IOS 58
- IOS 59
- IOS 62
- IOS 80
- BC-NAND
- BC-WFS

</details>

!> 小心点，这东西可能在你大意的时候会破坏你 vWii 的 NAND！ 如果你还没有备份东西的话，请在做这些东西之前 [备份](mocha/online-exploit/nand-backup)好你的 SLCCMPT 和 OTP！

?> 如果你正在阻止系统更新，请[关闭阻止更新](unblock-updates)。

### 你需要准备点啥？

- Wii U 的[破解](introduction)正常运作。
- 最新版 [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases)。

### 操作步骤

1. 解压 `decaffeinator.zip` 到你的 SD 卡根目录。
1. 把 SD 卡从电脑中弹出并插入 Wii U 主机。
1. 将 Wii U 开机，然后启动你选择的 CFW（Mocha、Haxchi 或 CBHC）。
1. 启动 Homebrew Launcher。
1. 启动 vWii Decaffeinator。

### 恢复过程

你将有几种不同的选择。 如果你知道你要恢复什么东西，建议先尝试通过 `Advanced options` 菜单进行恢复。如果不确定，请使用 `Light mode`。 如果那两个方法都没有解决这个问题，则你应该使用 `Aggressive mode`。

<!-- tabs:start -->

#### **Advanced options**

?> 此模式将清空特定的 IOS 和频道来重新安装它们。 其他数据（包括 cIOS 的）将会保存。

1. 在菜单中选择 `Advanced options`。
1. 使用十字键来切换至你想恢复的内容。
1. 按下 Start 键来开始恢复进程。
1. 当应用程序完成后，请允许程序启动系统设置。
1. [升级系统](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) 来完成恢复进程。

?> 你现在可以重新打开[阻止更新](block-updates)。

#### **Light mode**

?> This mode will clear the System Menu, Wii Message Board save data, IOSes, and other system titles to reinstall clean versions of them. Please note this will remove all cIOSes as well and must be reinstalled. All other data will be preserved.

1. Select `Light mode` on the menu.
1. 按下 Start 键来开始恢复进程。
1. 当应用程序完成后，请允许程序启动系统设置。
1. [升级系统](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) 来完成恢复进程。

?> 你现在可以重新打开[阻止更新](block-updates)。

#### **Aggressive mode**

!> This mode will clear **everything** to reinstall clean versions of the default IOSes and channels. Please note that all cIOSes, save data, and channels will be lost, and the vWii NAND will be returned to its stock form!

1. Select `Aggressive mode` on the menu.
1. Read the warning in its entirety. If you wish to proceed, press Start to initiate the restoration process.
1. 当应用程序完成后，请允许程序启动系统设置。
1. [升级系统](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) 来完成恢复进程。

?> 你现在可以重新打开[阻止更新](block-updates)。

<!-- tabs:end -->

> If you receive Error Code 105-3102 when performing the system update, restart your console and reattempt the update.
