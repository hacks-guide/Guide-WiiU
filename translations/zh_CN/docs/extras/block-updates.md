# 阻止更新
---
目前所有已知的 Wii U 漏洞（例如 Nintendo Switch RCM 漏洞）都可以被通过更新系统失效。 虽然 Wii U 不再会得到任天堂官方的技术支持，但任天堂仍然可以为其发布新的系统更新。 顾名思义，5.5.3 和 5.5.4 系统更新是在 Wii U 停产之后发布的，所以阻止系统更新仍然是一件值得做的事情。

### 简介 {docsify-ignore}

目前，这里有两种方法可以阻止 Wii U 进行系统更新：
<!-- tabs:start -->

#### **删除更新文件夹**

### 删除更新文件夹

?> 这个阻止更新的办法比使用 DNS 屏蔽更加高级，需要使用一个 Homebrew 程序来修改系统文件。 且 eShop 的功能不会受到限制。
1. 将 SD 卡插入电脑。
1. 下载并解压 [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases) 到你的 SD 卡根目录。
1. 将 SD 卡插回 Wii U 并将其开机。
1. 启动 Homebrew Launcher。
1. 移动 Homebrew Launcher 并启动 UFDiine app。
1. 按下 A 键删除更新文件夹。
1. 确认它提示 `Update folder is deleted`。 你现在已阻止系统更新。

#### **DNS 屏蔽**

### DNS 屏蔽

?> 这种方法比上面那种简单一些，推荐小白做这种方法。 然而这个方法会影响 eShop 的功能。 若要启动 eShop，需要先运行 [NNUPatcher](http://www.wiiubru.com/appstore/zips/nnupatcher.zip) 后再启动 eShop。
1. 将 SD 卡插入电脑。
1. 复制 `nnupatcher.zip` 里的文件到你的 SD 卡根目录。 如果有覆盖提示，请点击覆盖所有已存在的文件。
1. Plug the SD Card into your Wii U console and power it on.
1. 进入的 Wii U 的系统设置，并移动至`互联网（Internet） > 连接至互联网（Connect to the Internet） > 接入点列表（Connection List） >` `你的 WiFi 接入点（Your WiFi connection） > 更改设置（Change Settings） > DNS` 然后设置选项为 `不自动获取（Do not auto-obtain）`。
1. 你会被分别要求输入一个首先 DNS 和备用 DNS。 输入以下 IP 地址：
 - 首选 DNS：168.235.092.108
 - 备用DNS：081.004.127.020 <img src="docs/assets/img/DNS.png" alt="DNS 屏蔽" />
1. 点击确认。
1. You are now blocking updates. 如果你想要启动 eShop，则你需要在 Homebrew Launcher 里运行 NNUPatcher 程序后再启动 eShop。

<!-- tabs:end -->
