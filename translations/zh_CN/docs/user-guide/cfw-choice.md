# 选择一个 CFW
---
?> 在开始之前，你需要将你的 Wii U 更新至最新版本（欧版机为 5.5.4，其他区域的为 5.5.3）。

There are two main custom firmwares: Haxchi/Coldboot Haxchi (usually abbreviated as "CBHC"), as well as Mocha.

Haxchi/CBHC are both injected into a paid DS Virtual Console game. Haxchi will need to be manually started off the Wii U Menu to boot custom firmware, while CBHC will boot custom firmware automatically while the system is booting up. Mocha is accessed through the browser exploit or the Indexiine method, which makes it the only free custom firmware.

The custom firmware you decide to use is ultimately **your** preference. There is no right or wrong custom firmware to go with, so it is recommended that you feel free to pick the one that sounds the best for your needs!

## Haxchi

- Requires a legitimately installed, paid DS Virtual Console game from the eShop.
- 可以直接从 Wii U 主菜单中直接启动 CFW。
- Needs to be re-launched from the Wii U Menu every reboot to enable custom firmware.
- Its functionality can be extended by installing Coldboot Haxchi (CBHC) to a Haxchi installation.

### [**点击这里继续使用 Haxchi**](haxchi/ds-vc-choice) {docsify-ignore}

## CBHC

!> Installing CBHC incorrectly can brick your Wii U! Make sure to follow the following rules when installing CBHC: <br>- The DS game has to be legitimately installed from the eShop! <br>- 安装完 CBHC 之后不要初始化系统！ <br>- 不要删除购买此 DS VC 游戏的用户账户！ <br>- 不要在 WUP Installer 或 eShop 中再次安装使用的同一游戏！ <br>- 不要通过 CBHC 安装 Haxchi！ (You will not brick, but it will cause a boot-loop! Hold A when booting to access the Homebrew Launcher and uninstall CBHC.) <br>- Don't uninstall the DS Virtual Console game without [properly uninstalling CBHC first](uninstall-cbhc)! <br>- 不要将使用的 DS VC 游戏移动到 USB 设备中！

!> Breaking one of the above rules **can** result in a brick!

> If you are worried about breaking one of these rules while using CBHC, consider setting up Parental Controls for your user! Blocking `Data Management` and setting `Game Rating` to the highest possible setting can help prevent common mistakes users may make when using CBHC. Check [here](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1081/~/how-to-change-parental-controls) for more information on how to change your Parental Controls settings.

- Requires a legitimately installed paid DS Virtual Console game from the eShop.
- Automatically launches custom firmware on every boot.

### [**点击这里继续使用 CBHC**](cbhc/ds-vc-choice) {docsify-ignore}

## Mocha

- 不需要任何游戏。
- Needs to be re-launched through the browser exploit every reboot to enable custom firmware.
- 与 Homebrew Launcher Channel 不兼容。
- 根据你选择的进入方法可能会需要连接网络。

### [**点击这里继续使用 Mocha**](mocha/entrypoint-choice) {docsify-ignore}
