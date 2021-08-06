# Haxchi

## SD 卡准备 {docsify-ignore}

我们现在需要把一些 CFW 需要使用到的文件放进你的 SD 卡。

?> **注意** 你的 SD 卡需要被格式化为 FAT32。 如果你的 SD 卡的格式不是 FAT32，则你需要用 [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) 格式化，格式化时请将分配单元大小设置为 32k（32768）。 **不要**把 SD 卡分区命名为 `wiiu`，这样做会导致出现 homebrew 程序上的问题。

### 你需要准备些啥？ {docsify-ignore}

- 最新版 [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest)。
  - 你需要下载 `payload.zip` 文件。
- 1.4 版的 [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)。
  - 你需要下载 v1.4 `homebrew_launcher.v1.4.zip` 的 Homebrew Launcher。
- 最新版 [WUP Installer GX2](https://wiiubru.com/appstore/zips/wup_installer_gx2.zip)。
- 最新版 [The Homebrew Launcher Channel](https://github.com/GaryOderNichts/homebrew_launcher/releases/tag/v2.1_fix)。
  - 你需要下载 `homebrew_launcher_channel.v2.1_fix.zip` 文件。
- 最新版 [Wii U NAND Dumper](https://www.wiiubru.com/appstore/zips/nanddumper.zip)。
- 最新版 [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest)。
  - 你需要下载 `wiiu-extracttosd.zip` 文件。
- 最新版 [Haxchi](https://www.wiiubru.com/appstore/zips/haxchi.zip)。
- 最新版 <a href="docs/files/SaveMii_Mod.zip" download>SaveMii Mod</a>。

### 步骤 {docsify-ignore}

?> **注意** info.json 和 manifest.install 文件在破解过程中是不需要的，可以删除。

1. 将你的 Wii U SD 卡 插入你的电脑。
1. 在 SD 卡根目录下创建一个名为 `install` 的文件夹。
1. 复制 `homebrew_launcher_channel.v2.1_fix.zip` 里的文件到你创建的 `install` 文件夹。
1. 复制 `haxchi.zip` 里的文件到你的 SD 卡根目录。
1. 复制 `wup_installer_gx2.zip` 里的文件到你的 SD 卡根目录。
1. 复制 `nanddumper.zip` 里的文件到你的 SD 卡根目录。
1. 复制 `wiiu-extracttosd.zip` 里的文件到你的 SD 卡根目录。
1. 复制 `homebrew_launcher.v.1.4.zip` 里的文件到你 SD 卡的根目录中。
1. 复制 `savemii_mod.zip` 里的文件到你的 SD 卡根目录。
1. 从 `payload.zip` 中解压 `payload.elf` 到 SD 卡根目录下的 `wiiu` 文件夹中。