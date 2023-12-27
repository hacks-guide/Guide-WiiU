# vWii Modding Guide {docsify-ignore-all}

***

## SD Preparations

此页将会教你如何修改 vWii。

We will now start by placing the required Homebrew files on the SD Card.

?> **Notice**
Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://ridgecrop.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it. **Do not** label the SD Card as `wiiu` or it will cause issues with homebrew.

?> If you have hacked your Wii U in the past, you can use the same SD Card for this process.

### 你需要准备点啥？

- The latest files from [Tiramisu for your café](https://tiramisu.foryour.cafe).
  - Click on `Download Tiramisu`.
  - If you have already installed Tiramisu, you do not need to redownload it.
- The latest release of the [Compat Title Installer](https://hb-app.store/wiiu/CompatTitleInstaller).
- The <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>. ([Source](https://github.com/Lazr1026/Patched-IOS80-Installer-for-vWii))
- The <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.

## 操作步骤

1. 将你的 Wii U SD 卡 插入你的电脑。
2. Copy the `apps` folder from the `Patched_IOS80_Installer_for_vWii.zip` file to the root of your SD Card.
3. Copy the `d2x-cios-installer` from the `d2x_cIOS_Installer.zip` file to the apps folder on your SD Card.
4. Copy the contents of the downloaded Tiramisu _`.zip`_ file to the root of your SD Card.
5. Copy the contents of the `CompatTitleInstaller.zip` file to the root of your SD Card.
6. 把 SD 卡从电脑中弹出并插入 Wii U 主机。
