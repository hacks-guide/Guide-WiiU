# 恢复一个 vWii IOS/Channel
---
此页面将教你恢复因任何原因而被破坏或被删除的 vWii 上的一个 IOS 或 Channel。

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

### 你需要准备些啥？ {docsify-ignore}

- Wii U 的[破解](introduction)正常运作。
- 最新版 [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases)。

### 步骤 {docsify-ignore}

1. 复制 `decaffeinator.zip` 里的文件到你的 SD 卡根目录。
1. 把 SD 卡从电脑中弹出并插入 Wii U 主机。
1. 将 Wii U 开机，然后启动你选择的 CFW（Mocha、Haxchi 或 CBHC）。
1. 启动 Homebrew Launcher。
1. 启动 vWii Decaffeinator。

### 恢复过程

你将有几种不同的选择。 如果你知道你要恢复什么东西，建议先尝试通过 `Advanced options` 菜单进行恢复。如果不确定，请使用 `Light mode`。 如果那两个方法都没有解决这个问题，则你应该使用 `Aggressive mode`。

<!-- tabs:start -->

#### **Advanced options**

### Advanced options

?> 此模式将清空特定的 IOS 和 Channel 来重新安装它们。 其他数据（包括 cIOS 的）将会保存。

1. 在菜单中选择 `Advanced options`。
1. 使用十字键来切换至你想恢复的内容。
1. 按下 Start 键来开始恢复进程。
1. 当应用程序完成后，请允许程序启动系统设置。
1. [升级系统](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update)来完成恢复进程。

?> 你现在可以重新打开[阻止更新](block-updates)。

#### **Light mode**

### Light mode

?> 这种方法将会清除系统菜单、Wii 留言板保存数据、IOS和其他的系统程序以重新安装它们的干净版本。 请注意这会移除所有的 cIOS，并且你必须重新安装它们。 将保存所有其他数据。

1. 在菜单中选择 `Light mode`。
1. 按下 Start 键来开始恢复进程。
1. 当应用程序完成后，请允许程序启动系统设置。
1. [升级系统](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update)来完成恢复进程。

?> 你现在可以重新打开[阻止更新](block-updates)。

#### **Aggressive mode**

### Aggressive mode

!> 此模式将会清空 **所有** 内容来重新安装默认的 IOS 和 Channel。 请注意，这会清除所有的clOS、保存的数据和 Channel，然后 vWii NAND 会被还原至其出厂的模式！

1. 在菜单中选择 `Aggressive mode`。
1. 完整阅读警告。 如果你想要继续，请按下 Start 来开始此恢复过程。
1. 当应用程序完成后，请允许程序启动系统设置。
1. [升级系统](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update)来完成恢复进程。

?> 你现在可以重新打开[阻止更新](block-updates)。

> 如果你在使用完 vWii Decaffeinator 后启动系统时收到了 160-0101 错误代码，请弹出你插入的光盘并拔出所有的外接设备，然后重启系统。

<!-- tabs:end -->

> 如果你在进行系统升级的时候遇到了 105-3102 错误代码，则请重新启动主机然后再次更新。