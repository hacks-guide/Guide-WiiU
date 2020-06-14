# Mocha - Indexiine

## SD 卡准备 {docsify-ignore}

我们现在需要把一些 CFW 需要使用到的文件放进你的 SD 卡。

?> **注意** 你的 SD 卡需要被格式化为 FAT32。 如果你的 SD 卡没有格式化为 FAT32，则你需要用 [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) 格式化，并将分配单元大小设置为 32k（32768）

### 你需要准备点啥？

- The Mocha <a href="docs/files/config.ini" download>config</a>
- 最新版 [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest)
  - 你需要下载 `payload.zip` 文件。
- 1.4版的 [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - 你需要下载 v1.4 `homebrew_launcher.v1.4.zip` 的 Homebrew Launcher。
- 最新版 [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- 最新版 [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest)
- 最新版 [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest)
  - 你需要下载 `wiiu-extracttosd.zip` 文件。
- The latest release of [Mocha](https://www.wiiubru.com/appstore/zips/mocha.zip)
- 最新版 <a href="docs/files/savemii_mod.zip" download>SaveMii mod</a>
- The latest release of [Indexiine-Installer](https://github.com/GaryOderNichts/indexiine-installer/releases/latest)

### 操作步骤

?> **注意** info.json 和 manifest.install 文件在破解过程中是不需要的，可以删除。

1. 将你的 Wii U SD 卡 插入你的电脑。
1. 解压 `wup_installer_gx2.zip` 到你的 SD 卡根目录。
1. Extract the `nanddumper.zip` file to the root of your SD Card.
1. Extract the `wiiu-extracttosd.zip` file to the root of your SD Card.
1. Extract the `homebrew_launcher.v.1.4.zip` file to the root of your SD Card.
1. Extract the `mocha.zip` file to the root of your SD Card.
1. Extract the `indexiine-installer.zip` file to the root of your SD Card.
1. Extract the `savemii_mod.zip` file to the root of your SD Card.
1. Copy the `config.ini` file to the `/wiiu/apps/mocha` folder on your SD Card.
1. Copy the `payload.elf` from the `payload.zip` to the `wiiu` folder on your SD Card.
