# CBHC

## SD 卡准备 {docsify-ignore}

我们现在需要把一些 CFW 需要使用到的文件放进你的 SD 卡。

?> **注意** 你的 SD 卡需要被格式化为 FAT32。 如果你的 SD 卡没有格式化为 FAT32，则你需要用 [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) 格式化，并将分配单元大小设置为 32k（32768）

### 你需要准备点啥？

- Haxchi <a href="docs/files/config.txt" download>配置文件</a>
- 最新版 [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest)
  - 你需要下载 `payload.zip` 文件。
- 1.4版的 [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - 你需要下载 v1.4 `homebrew_launcher.v1.4.zip` 的 Homebrew Launcher。
- 最新版 [WUP Installer GX2](http://wiiubru.com/appstore/zips/wup_installer_gx2.zip)
- 最新版 [The Homebrew Launcher Channel](https://github.com/GaryOderNichts/homebrew_launcher/releases/tag/v2.1_fix)
  - 你需要下载 `homebrew_launcher_channel.v2.1_fix.zip` 文件。
- 最新版 [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest)
- 最新版 [Homebrew App Store](https://github.com/vgmoose/hbas/releases/latest)
  - 你需要下载 `wiiu-extracttosd.zip` 文件。
- 最新版 [Haxchi 和 CBHC](https://github.com/FIX94/haxchi/releases/latest)
  - Download both the Haxchi and CBHC .zip files.
- The latest release of <a href="docs/files/savemii_mod.zip" download>SaveMii mod</a>

### 操作步骤

?> **Notice** The info.json and manifest.install files are not needed for the modding process and therefore can be deleted.

1. Insert your Wii U's SD Card into your PC.
1. Create a folder called `install` on the root of your SD Card.
1. Extract the `homebrew_launcher_channel.v2.1_fix.zip` file to the `install` folder you created.
1. Extract the `Haxchi.zip` file to the root of your SD Card.
1. Extract the `CBHC.zip` file to the root of your SD Card.
1. 解压 `wup_installer_gx2.zip` 到你的 SD 卡根目录。
1. 解压 `nanddumper.zip` 到你的 SD 卡根目录。
1. 解压 `wiiu-extracttosd.zip` 到你的 SD 卡根目录。
1. Extract the `homebrew_launcher.v.1.4.zip` file to the root of your SD Card.
1. Extract the `savemii_mod.zip` file to the root of your SD Card.
1. Copy the `config.txt` file to the `haxchi` folder on the root of your SD Card. Overwrite files if asked.
1. Copy the `payload.elf` from the `payload.zip` to the `wiiu` folder on your SD Card.