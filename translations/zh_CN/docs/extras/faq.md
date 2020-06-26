# Frequently Asked Questions {docsify-ignore-all}
---
### Does homebrew have any risks?

Currently, homebrewing the Wii U does not expose you to a risk of being banned by Nintendo unless you cheat in online games. You should, however, always be careful with launching downloaded homebrew, especially if you don't trust the source, as homebrew can potentially damage your system!

### 什么是 Haxchi，可以吃吗？我需要准备什么东西？

Haxchi 是通过某个 NDS VC（Virtual Console）程序来允许 Homebrew 程序在离线环境下运行的一个辅助入口。（不过仍然可以在在线时使用，但需要在无连接时启动 CFW）

Haxchi 不是必须的，然而如果你需要在离线环境下使用 Homebrew 程序，那你就需要它。 强烈建议使用此方法来代替通过浏览器进入破解，特别是较新的系统版本上。

The cheapest DS Virtual Console games usable for this exploit:
 - Dr. Kawashima's Brain Training [PAL]
 - Brain Age: Train Your Brain in Minutes a Day! [USA]
 - Kawashima: Motto Nou wo Kitaeru Otona no DS Training [JPN]

### 我可以从我的 USB 设备而不用 SD 卡安装游戏吗？

是的。 然而它会比从 SD 卡上安装要复杂一点点。 详细说明在[导出手册](dump-games)中的`从 USB 设备中安装`选项卡里头可以看到。

### 如何干掉 Wii U 的更新文件夹来阻止 Wii U 更新？

如果你想删除更新文件夹来阻止更新，请参见[阻止更新手册](block-updates)中的选项卡。

### 我需要多大的 SD 卡？

 - **Installing game backups:** 32GB (Smaller size may be used, but certain titles are 20GB in size)
 - **Running game mods:** 8GB (FAT32 USB drive may be used as well for mods)
 - **Only running homebrew apps:** Any size.

**推荐内存卡品牌：** 闪迪、三星或必恩威

?> 注意：远离 class 4 SD 卡和淘宝或 eBay 上的杂牌内存卡！

### 那么我可以在 Wii U 上使用 USB 设备而不是 SD 卡来安装 Homebrew 程序吗？

No, you must have an SD Card for a first time setup. A USB can then be used to install game backups, Virtual Console injects, etc, but not to store homebrew applications which are required to set everything up.

### 当我解压一些文件时，某些叫做 “info.json” & “manifest.install” 的文件重复了，我对这些文件要咋整？

你自己看着整吧，无论是把它们留在原处、删除它们或者替换它们为新的什么的等等都由你自己摆布。 Those files are not used in the process, and therefore, won't have any impact by being or not being there.

### Wii U 会把我的 USB 设备格式化成什么格式？

Wii U 会把你的 USB 设备格式化成这台 Wii U 独有的格式。  
一个被一台 Wii U 格式化的 USB 设备***不能被格式化它以外的设备读取。***  
如果你想要将其用在另一台 Wii U 主机上或者其他的设备上，则你就必须重新再次格式化它。