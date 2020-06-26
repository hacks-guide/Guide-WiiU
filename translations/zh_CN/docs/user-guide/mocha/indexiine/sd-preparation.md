# Mocha - Indexiine

## SD 卡准备 {docsify-ignore}

我们现在需要把一些 CFW 需要使用到的文件放进你的 SD 卡。

?> **注意** 你的 SD 卡需要被格式化为 FAT32。 If your SD Card is not formatted to FAT32, use [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) with 32k (32768) allocation unit size to format it.

### 你需要准备点啥？

- The Mocha <a href="docs/files/config.ini" download>config</a>.
- The latest release of [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest).
  - 你需要下载 `payload.zip` 文件。
- The 1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4).
  - You will need to download the v1.4 `homebrew_launcher.v1.4.zip` release of The Homebrew Launcher.
- 最新版 [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)。
- The latest release of [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest).
- The latest release of the [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest).
  - 你需要下载 `wiiu-extracttosd.zip` 文件。
- The latest release of [Mocha](https://www.wiiubru.com/appstore/zips/mocha.zip).
- The latest release of <a href="docs/files/savemii_mod.zip" download>SaveMii Mod</a>.
- The latest release of [Indexiine-Installer](https://github.com/GaryOderNichts/indexiine-installer/releases/latest).

### 操作步骤

?> **注意** info.json 和 manifest.install 文件在破解过程中是不需要的，可以删除。

1. 将你的 Wii U SD 卡 插入你的电脑。
1. 解压 `wup_installer_gx2.zip` 到你的 SD 卡根目录。
1. 解压 `nanddumper.zip` 到你的 SD 卡根目录。
1. 解压 `wiiu-extracttosd.zip` 到你的 SD 卡根目录。
1. 解压 `homebrew_launcher.v.1.4.zip` 到你的 SD 卡根目录。
1. 解压 `mocha.zip` 到你的 SD 卡根目录。
1. 解压 `indexiine-installer.zip` 到你的 SD 卡根目录。
1. 解压 `savemii_mod.zip` 到你 SD 卡的根目录。
1. 复制 `config.ini` 到 SD 卡的 `/wiiu/apps/mocha` 文件夹下。
1. 从 `payload.zip` 中解压 `payload.elf` 到 SD 卡根目录下的 `wiiu` 文件夹中。
