# 常见问题 {docsify-ignore-all}
---

### Homebrew 是否有风险？

当前，破解 Wii U 不会使你被任天堂封禁，除非你在在线游戏中作弊或欺骗 eShop。 然而尤其是当你不信任程序的源代码的时候，你要对你下载并启动的 Homebrew 程序保持一定的警惕，因为 Homebrew 可以破坏系统！

### What are exploits?

Exploits are entry points which allow further homebrew to be run. In the main guide, you will use exploits such as the browser exploit (http://wiiuexploit.xyz) and PayloadLoader (Health & Safety exploit). All current exploits load `SD:/wiiu/payload.elf` which takes over further loading of homebrew.

### What are payloads?

Payloads, which are normally found with the filename `payload.elf`, exist to make it easier to have different exploits load the same next stage, which allows easier updateability. It doesn't matter what exploit loads the payload, the result is always the same. Multiple payloads can be switched between using the PayloadLoaderPayload. The payload used in the main guide is CustomRPXLoader which loads `SD:/wiiu/payload.rpx` and the `payload.rpx` used in the guide is EnvironmentLoader, which allows you to load different environments.

### What are environments?

An environment is a collection of "setup modules", which will be run in a certain order when launching the environment. One such environment is Tiramisu. Setup modules are small pieces of homebrew/code that are executed once to set up an environment.

### Can I install games from my USB instead of SD?

是的。 然而它会比从 SD 卡上安装要复杂一点点。 详细说明在[导出手册](dump-games)中的`从 USB 设备中安装`选项卡里头可以看到。

### How to Delete Update Folder to Block Updates on Wii U

如果你想删除更新文件夹来阻止更新，请参见[阻止更新手册](block-updates)中的选项卡。

### What SD Card size is recommended?

 - **Installing game backups:** 32GB (Smaller size may be used, but certain titles are 20GB in size)
 - **Running game mods:** 8GB (FAT32 USB drive may be used as well for mods)
 - **Only running homebrew apps:** Any size.

**推荐内存卡品牌：** 闪迪、三星或必恩威

?> 注意：远离 class 4 SD 卡和淘宝或 eBay 上的杂牌内存卡！

### Can I install homebrew on Wii U with a USB instead of SD Card?

不行，你必须在 SD 卡中做完初始安装。 USB 存储设备可用于安装游戏备份或注入 VC 游戏等等，但请不要在里头存任何需要用来启动 Homebrew 所需要的程序。

### 当我解压一些文件时，某些叫做 “info.json” & “manifest.install” 的文件重复了，我对这些文件要咋整？

你自己看着整吧，无论是把它们留在原处、删除它们或者替换它们为新的什么的等等都由你自己摆布。 也就是说，这些东西它有没有都无伤大雅。

### What is a Wii U formatted USB drive?

Wii U 会把你的 USB 设备格式化成这台 Wii U 独有的格式。  
一个被一台 Wii U 格式化的 USB 设备***不能被格式化它以外的设备读取。***  
如果你想要将其用在另一台 Wii U 主机上或者其他的设备上，则你就必须重新再次格式化它。
