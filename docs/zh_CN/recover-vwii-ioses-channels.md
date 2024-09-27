# 恢复一个 vWii IOS/Channel

此页面将教你恢复因任何原因而被破坏或被删除的 vWii 上的一个 IOS 或 Channel。

::: danger

This has the potential to destroy your vWii NAND if you are not careful! Please consider [backing up](aroma/nand-backup) your SLCCMPT and OTP if you do not yet have them backed up!

:::

::: tip

If you are using a system update blocking method, please [remove it](unblock-updates).

:::

::: tip

Due to mounting conflicts with this app, you need to also disable the FTPiiu plugin.

:::

## 你需要准备点啥？

- A working [homebrew installation](index) on the Wii U side.
- The latest release of [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator/releases).

## 操作步骤

1. Copy the contents of the `decaffeinator.zip` file to the root of your SD Card.
2. 把 SD 卡从电脑中弹出，并插入 Wii U 主机。
3. 将 Wii U 开机，然后启动你选择的 CFW（Mocha、Haxchi 或 CBHC）。
4. 启动 Homebrew Launcher。
5. 启动 vWii Decaffeinator。

## 恢复过程

你将有几种不同的选择。 It is recommended to first attempt restoring through the `Advanced options` menu if you know what to restore, or `Light mode` if you aren't sure. In extreme cases where no other option solves the issue, `Aggressive mode` should be chosen.

<!-- tabs:start -->

::::: tabs

:::: tab default Advanced options

### Advanced options

::: tip

This mode will clear the specified IOSes and channels to reinstall them. 其他数据（包括 cIOS 的）将会保存。

:::

:::details 点击此处显示可以通过此方法恢复的内容。

![Advanced options](/files/Advanced-options.jpg)
![Advanced options2](/files/Advanced-options2.jpg)
![Advanced options3](/files/Advanced-options3.jpg)

:::

1. Select `Advanced options` on the menu.
2. 使用十字键来切换至你想恢复的内容。
3. 按下 Start 键来开始恢复进程。
4. 当应用程序完成后，请允许程序启动系统设置。
5. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::::

:::: tab Light mode

### Light mode

::: tip

This mode will clear the System Menu, Wii Message Board save data, IOSes, and other system titles to reinstall clean versions of them. 请注意这会移除所有的 cIOS，并且你必须重新安装它们。 将保存所有其他数据。

:::

1. Select `Light mode` on the menu.
2. 按下 Start 键来开始恢复进程。
3. 当应用程序完成后，请允许程序启动系统设置。
4. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::: info

如果你在使用完 vWii Decaffeinator 后启动系统时收到了 160-0101 错误代码，请弹出你插入的光盘并拔出所有的外接设备，然后重启系统。

:::

::::

:::: tab Aggressive mode

### Aggressive mode

::: danger

This mode will clear **everything** to reinstall clean versions of the default IOSes and channels. 请注意，这会清除所有的clOS、保存的数据和 Channel，然后 vWii NAND 会被还原至其出厂的模式！

:::

1. Select `Aggressive mode` on the menu.
2. 完整阅读警告。 如果你想要继续，请按下 Start 来开始此恢复过程。
3. 当应用程序完成后，请允许程序启动系统设置。
4. Perform a [System Update](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1136/~/how-to-perform-a-system-update) to finish the restoration process.

::: tip

You can now re-enable your [system update blocking method](block-updates).

:::

::: info

如果你在使用完 vWii Decaffeinator 后启动系统时收到了 160-0101 错误代码，请弹出你插入的光盘并拔出所有的外接设备，然后重启系统。

:::

::::

:::::

::: tip

If you receive Error Code 105-3102 when performing the system update, restart your console and reattempt the update.

:::
