# FAQ {docsify-ignore-all}
---
### Homebrew 是否有风险？

当前，破解 Wii U 不会使你被任天堂封禁，除非你在在线游戏中作弊。 然而尤其是当你不信任程序的源代码的时候，你要对你下载并启动的 Homebrew 程序保持一定的警惕，因为 Homebrew 可以破坏系统！

### 什么是 Haxchi，可以吃吗？我需要准备什么东西？

Haxchi 是通过某个 NDS VC（Virtual Console）程序来允许 Homebrew 程序在离线环境下运行的一个辅助入口。（不过仍然可以在在线时使用，但需要在无连接时启动 CFW）

Haxchi 不是必须的，然而如果你需要在离线环境下使用 Homebrew 程序，那你就需要它。 强烈建议使用此方法来代替通过浏览器进入破解，特别是较新的系统版本上。

这里列出了可用于此漏洞的最便宜的 DS VC 游戏：
 - Dr. Kawashima's Brain Training [PAL]
 - Brain Age: Train Your Brain in Minutes a Day! [USA]
 - Kawashima: Motto Nou wo Kitaeru Otona no DS Training [JPN]

### 我可以从我的 USB 设备而不用 SD 卡安装游戏吗？

是的。 然而它会比从 SD 卡上安装要复杂一点点。 详细说明在[导出手册](dump-games)中的`从 USB 设备中安装`选项卡里头可以看到。

### 如何干掉 Wii U 的更新文件夹来阻止 Wii U 更新？

如果你想删除更新文件夹来阻止更新，请参见[阻止更新手册](block-updates)中的选项卡。

### 我需要多大的 SD 卡？

 - **安装游戏备份：** 32 GB（可以用更小的卡，但是有些游戏大小超过了 20 GB）
 - **Running game mods:** 8 GB  (FAT32 USB drive may be used as well for mods)
 - **Only running homebrew apps:** Any size

**Recommended brands:** SanDisk, Samsung or PNY

?> Note: Avoid class 4 SD Cards, and avoid eBay!

### Can I install homebrew on Wii U with a USB instead of SD Card?

No, you must have an SD Card for a first time setup, a USB can then be used to install game backups, VC injects, etc, but not to store Homebrew Apps which are required to set everything up.

### When extracting some of the files there are duplicates of certain ones called "info.json" & "manifest.install", what do I do with those?

Nothing special, you can leave them there, delete them or replace them with new ones. Those files are not used in the process, therefore, won't have any impact by being or not being there.

### What is a Wii U formatted USB drive?

It's a USB drive that has been formatted by a Wii U console to its proprietary format.  
A Wii U formatted USB drive ***cannot be read by any other devices than the Wii U that originally formatted it.***  
If you ever want to use it with another Wii U console or any other devices, you will have to reformat it.