# 选择一个 CFW
---
?> Before starting, make sure to update your Wii U console to the latest firmware (5.5.5) if you haven't already.

这里有两种主流自制固件：Haxchi/Coldboot Haxchi（简称为“CBHC”）和 Mocha。

Haxchi/CBHC 都需要对一个来自购买的 DS VC 游戏进行注入。 Haxchi 需要手动在 Wii U 主菜单中启动，而 CBHC 可以在开机的时候就自动启动。 Mocha 是通过浏览器漏洞或 Indexiine 方法启动的，它是唯一可以不花任何额外开销而使用自制固件的方法。

**你**需要自行决定使用哪一种自制固件。 请挑一个你认为最合适的自制固件！

## Haxchi

- 需要从 eShop 上购买并下载 DS VC 游戏。
- 可以直接从 Wii U 主菜单中直接启动 CFW。
- 每次重启之后都需要重新在 Wii U 中菜单启动来启用 CFW。
- 它的功能可以通过安装 ColdBoot Haxchi（CBHC）来扩展。

### [**点击这里继续使用 Haxchi**](haxchi/ds-vc-choice) {docsify-ignore}

## CBHC

!> 如果安装 CBHC 不当会导致你的 Wii U 变砖！ 所以请确保你在安装 CBHC 时遵循以下规定： <br>- 使用的 DS 游戏必须是从 eShop 下载的正版游戏！ <br>- 安装完 CBHC 之后不要初始化系统！ <br>- 不要删除购买此 DS VC 游戏的用户账户！ <br>- 不要在 WUP Installer 或 eShop 中再次安装使用的同一游戏！ <br>- 不要通过 CBHC 安装 Haxchi！ （你的主机不会变砖，但这会导致无限重启！ 在开机的时候按住 A 键来进入 Homebrew Launcher 并卸载 CBHC。） <br>- 不要在[正确卸载 CBHC 之前](uninstall-cbhc)卸载使用的 DS VC 游戏！ <br>- 不要将使用的 DS VC 游戏移动到 USB 设备中！

!> 若你想斗胆试试无视上述规定的规则，那么你就**死掉**了。

> 如果你担心你会不小心做了上面的其中一件事，请考虑对你的账户设置家长控制！ 阻止使用`数据管理（Data Management）`并设置`游戏评级（Game Rating）`为最高可防止你在使用 CBHC 的时候犯了错误。 点击[这里](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1081/~/how-to-change-parental-controls)来了解如何更改家长控制的更多信息。

- 需要从 eShop 上购买并下载 DS VC 游戏。
- 重启后会自动启动 CFW。

### [**点击这里继续使用 CBHC**](cbhc/ds-vc-choice) {docsify-ignore}

## Mocha

- 不需要任何游戏。
- 每次重启之后都需要重新在 Wii U 触发浏览器漏洞来启用 CFW。
- 与 Homebrew Launcher Channel 不兼容。
- 根据你选择的进入方法可能会需要连接网络。

### [**点击这里继续使用 Mocha**](mocha/entrypoint-choice) {docsify-ignore}
