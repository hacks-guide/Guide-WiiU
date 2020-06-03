# 阻止更新
---
目前所有已知的 Wii U 漏洞（例如 Nintendo Switch RCM 漏洞）都可以被通过更新系统失效。 虽然 Wii U 不再会得到任天堂官方的技术支持，但任天堂仍然可以为其发布新的系统更新。 顾名思义，5.5.3 和 5.5.4 系统更新是在 Wii U 停产之后发布的，所以阻止系统更新仍然是一件值得做的事情。

### 说明

目前，这里有两种方法可以阻止 Wii U 进行系统更新：
<!-- tabs:start -->

#### **删除更新文件夹**
?> This method of update blocking is a bit more advanced than DNS Blocking and uses a homebrew app to modify system files. However, it has the advantage that the eShop's functionality will not be restricted.
1. 将 SD 卡插入电脑。
1. Download and extract [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases) to the root of your SD Card.
1. 将 SD 卡插回 Wii U 并将其开机。
1. Enter the Homebrew Launcher.
1. Navigate the Homebrew Launcher and run the UFDiine app.
1. Press the A button to delete the update folder.
1. Confirm that it says `Update folder is deleted`. 你现在已阻止系统更新。

### **DNS 屏蔽**
?> 这种方法比上面那种简单一些，推荐小白做这种方法。 然而这个方法会影响 eShop 的功能。 若要启动 eShop，需要先运行 [NNUPatcher](http://www.wiiubru.com/appstore/zips/nnupatcher.zip) 后再启动 eShop。
1. 将 SD 卡插入电脑。
1. 解压 `nnupatcher.zip` 到你的 SD 卡根目录。 如果有覆盖提示，请点击覆盖所有已存在的文件。
1. 将 SD 卡插回 Wii U 并将其开机。
1. 进入的 Wii U 的系统设置，并移动至`互联网（Internet） > 连接至互联网（Connect to the Internet） > 接入点列表（Connection List） >` `你的 WiFi 接入点（Your WiFi connection） > 更改设置（Change Settings） > DNS` 然后设置选项为 `不自动获取（Do not auto-obtain）`。
1. 你会被分别要求输入一个首先 DNS 和备用 DNS。 输入以下 IP 地址：
 - 首选 DNS：168.235.092.108
 - 备用DNS：081.004.127.020 <img src="docs/assets/img/DNS.png" alt="DNS 屏蔽" />
1. 点击确认.
1. 你现在已阻止系统更新。 In order to access the eShop, run the NNUPatcher app from the Homebrew Launcher before launching the eShop.


<!-- tabs:end -->
