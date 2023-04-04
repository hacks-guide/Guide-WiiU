# 阻止更新
---
目前所有已知的 Wii U 漏洞（例如 Nintendo Switch RCM 漏洞）都可以被通过更新系统失效。 虽然 Wii U 不再会得到任天堂官方的技术支持，但任天堂仍然可以为其发布新的系统更新。 Namely, the updates 5.5.3 up to 5.5.6 were all released after the Wii U was discontinued, so blocking updates is still a recommended action.

While Tiramisu's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. If you get a red warning screen while booting into Tiramisu, the update folder still exists and it is recommended to delete it using the guide below.

### 简介 {docsify-ignore}

Currently, two ways exist to effectively block updates on the Wii U system:
<!-- tabs:start -->

#### **Deleting Update Folder**

### Deleting Update Folder

?> This method of update blocking is a bit more advanced than DNS Blocking and uses a homebrew app to modify system files. However, it has the advantage that the eShop's functionality will not be restricted.
1. 将 SD 卡插入电脑。
1. Download and extract the contents of [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/tag/v1.1) to the root of your SD Card.
1. Plug the SD Card into your Wii U console and boot Tiramisu.
1. 启动 Homebrew Launcher。
1. 移动 Homebrew Launcher 并启动 UFDiine app。
1. 按下 A 键删除更新文件夹。
1. 确认它提示 `Update folder is deleted`。 你现在已阻止系统更新。

#### **DNS Blocking**

### DNS Blocking

?> This method is the easier method and is recommended to less advanced users. It does, however, prevent the eShop from working. This can be worked around by running [NNUPatcher](https://wiiubru.com/appstore/zips/nnupatcher.zip) before starting the eShop.
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
