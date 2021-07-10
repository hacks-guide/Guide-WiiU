# 常见问题 {docsify-ignore-all}
---

### Homebrew 是否有风险？

当前，破解 Wii U 不会使你被任天堂封禁，除非你在在线游戏中作弊或欺骗 eShop。 然而尤其是当你不信任程序的源代码的时候，你要对你下载并启动的 Homebrew 程序保持一定的警惕，因为 Homebrew 可以破坏系统！

### 什么是 Haxchi，可以吃吗？我需要准备什么东西？

Haxchi 是通过某个 NDS VC（Virtual Console）程序来允许 Homebrew 程序在离线环境下运行的一个辅助入口。（不过仍然可以在在线时使用，但需要在无连接时启动 CFW）

Haxchi **不是**必要的，然而如果你想在不依靠浏览器的情况下运行自制软件则需要它。 建议使用它进入自制固件，因为它比浏览器和 Mocha 自制固件更方便。

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
 - **运行游戏的 Mod：** 8 GB （FAT32 格式的 USB 设备也可以安装 Mod）
 - **只是为了运行 Homebrew 程序：** 任何大小。

**推荐内存卡品牌：** 闪迪、三星或必恩威

?> 注意：远离 class 4 SD 卡和淘宝或 eBay 上的杂牌内存卡！

### 那么我可以在 Wii U 上使用 USB 设备而不是 SD 卡来安装 Homebrew 程序吗？

不行，你必须在 SD 卡中做完初始安装。 USB 存储设备可用于安装游戏备份或注入 VC 游戏等等，但请不要在里头存任何需要用来启动 Homebrew 所需要的程序。

### 当我解压一些文件时，某些叫做 “info.json” & “manifest.install” 的文件重复了，我对这些文件要咋整？

你自己看着整吧，无论是把它们留在原处、删除它们或者替换它们为新的什么的等等都由你自己摆布。 也就是说，这些东西它有没有都无伤大雅。

### Wii U 会把我的 USB 设备格式化成什么格式？

Wii U 会把你的 USB 设备格式化成这台 Wii U 独有的格式。  
一个被一台 Wii U 格式化的 USB 设备***不能被格式化它以外的设备读取。***  
如果你想要将其用在另一台 Wii U 主机上或者其他的设备上，则你就必须重新再次格式化它。
