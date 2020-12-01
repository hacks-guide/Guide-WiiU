# 可配置的 Payload
---
像 Haxchi 一样，这个 payload 是可以配置的。 这可能对使用 Mocha 的用户非常有用，因为它节省了一点从 Homebrew Launcher 启动 Mocha 的时间。

### 你需要准备些啥？ {docsify-ignore}

- <a href="docs/files/Configurable_Payload.zip" download>可配置的 payload</a>。
- 最新版 [The Homebrew Launcher Channel](https://github.com/GaryOderNichts/homebrew_launcher/releases/tag/v2.1_fix)。

### 步骤 {docsify-ignore}

1. 解压 `homebrew_launcher_channel.v2.1_fix.zip` 文件到 SD 卡根目录下的 `install` 文件夹。
1. 将 SD 卡插入 Wii U，然后启动 [Homebrew Launcher](mocha/online-exploit/browser-exploit)。
1. 移动 Homebrew Launcher 至 WUP Installer GX2 程序，然后打开它。
1. 选择 `Homebrew Launcher Channel`。 按下 `Install`，并选中 NAND 为安装目标。 这会将 Homebrew Launcher Channel 安装到 Wii U 主菜单中。
1. 一旦进程完成后，按下 Home 键来回到 Wii U 主菜单中。
1. 这时 channel 不会自动启动，因为它与你 SD 卡上使用的版本冲突。 重启 Wii U。
1. 从 Wii U 上拔出 SD 卡，然后插入电脑。
1. 解压 `Configurable_Payload.zip` 到你的 SD 卡中的根目录中。 如果弹出了需要覆盖文件的提示，请选择覆盖。
1. 将 SD 卡插入 Wii U，然后启动 Wii U 并打开 Wii U 的浏览器，然后访问 `wiiuexploit.xyz` 网站。
1. 点击 `Run Homebrew Launcher!`。 如果一切正常，系统将会自动回到 Wii U 主菜单。 Mocha 现在已被启用，且你可以使用你早前安装的 Homebrew Launcher Channel。
 - 如果你的 Wii U 卡住不动或白屏了，请等一会。 如果什么都没有发生，那就重启主机后[重置浏览器保存的数据](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history)，然后再来一次。
