# Uninstall Indexiine

本页将指导你从你的 Wii U 卸载 Indexiine。

## 你需要准备点啥？

- The latest release of the [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/v1.5). (The `homebrew_launcher.v1.5.zip` file)
- The latest release of the [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest). (The `payload.zip` file)
- The [Indexiine Installer](https://github.com/GaryOderNichts/indexiine-installer/releases/latest). (The `indexiine-installer.zip` file)
- The default [index.html file](/files/backup-index.html){download}. (You will get a file named `backup-index.html`)

## Setting Up The SD Card

First, ensure your SD card is formatted in FAT32. You can do so by using [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm).

1. Extract the contents of the `homebrew_launcher.v1.5.zip` file to the root of your SD card.
2. Extract the contents of the `indexiine-installer.zip` file to the root of your SD card.
3. Extract the `payload.elf` file from the `payload.zip` file to the `wiiu` folder on your SD card.
4. Copy the `backup-index.html` file to the `SD > wiiu > apps > indexiine-installer` folder on your SD card.

You can now eject, and insert your SD card into your console.

## 操作步骤

1. Launch the Homebrew Launcher by launching the internet browser and waiting for a few seconds.
2. 启动 Indexiine Installer。
3. 按下 B 键卸载 Indexiine。
4. Reboot your console, and check that your Wii U no longer automatically launches the Homebrew Launcher upon entering the Internet browser.
