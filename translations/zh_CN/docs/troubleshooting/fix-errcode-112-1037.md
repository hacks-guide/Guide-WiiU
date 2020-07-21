# 如何修复错误代码 112-1037
---
此页面将会教你如何修复错误代码 112-1037。

### 你需要准备些啥？ {docsify-ignore}

- 已安装好[破解](introduction)。
- [wupclient.py](https://raw.githubusercontent.com/Elpunical/mocha/master/ios_mcp/wupclient.py) **（右键单击 -> 保存链接为... -> 点击保存）。**
- 最新版 [Python](https://www.python.org/downloads/)。

### 步骤 {docsify-ignore}

1. 在你的电脑上安装好 Python。

### 修复错误代码

<!-- tabs:start -->

#### **Windows**

### Windows

1. 打开你的 Wii U。
1. 启动 Homebrew Launcher 然后启动 Mocha。
1. 返回 Wii U 主菜单。
1. 打开一个命令提示符窗口。
1. 使用以下命令移动到 wupclient.py 的目录下： `cd <directory>`。
  - 例子：<code>cd C:\Users\<用户名><wbr>\Downloads</code>。
1. 使用以下命令：`py -3 -i wupclient.py`。
1. 输入你的 Wii U 的 IP 地址。
 - 你不知道？ 请读[这个](find-wiiu-ip-address)。
1. 请使用对应你主机区域的命令：
 - 日版：<code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001200a/content<wbr>/pages<wbr>/index.html", 0x644)</code>。
 - 美版：<code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001210a/content<wbr>/pages<wbr>/index.html", 0x644)</code>。
 - 欧版：<code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001220a/content<wbr>/pages<wbr>/index.html", 0x644)</code>。
1. 如果输入正确，你应该会看到命令行输出以下内容： `chmod returned 0x0`。
1. 这个错误代码现在应该没了。

#### **macOS & Linux**

### macOS & Linux

1. 打开你的 Wii U。
1. 启动 Homebrew Launcher 然后启动 Mocha。
1. 返回 Wii U 主菜单。
1. 打开终端窗口。
1. 使用以下命令移动到 wupclient.py 的目录下： `cd <directory>`。
 - 在 macOS 上，下载的文件一般都在 <code>/Users/<用户名><wbr>/Downloads</code>目录下。
 - 在 Linux 上，下载的文件一般都在 <code>/home/<用户名><wbr>/Downloads</code>目录下。
1. 使用以下命令：`python3 -i wupclient.py`。
1. 输入你的 Wii U 的 IP 地址。
 - 你不知道？ 请读[这个](find-wiiu-ip-address)。
1. 请使用对应你主机区域的命令：
 - 日版：<code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001200a/content<wbr>/pages<wbr>/index.html", 0x644)</code>。
 - 美版：<code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001210a/content<wbr>/pages<wbr>/index.html", 0x644)</code>。
 - 欧版：<code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001220a/content<wbr>/pages<wbr>/index.html", 0x644)</code>。
1. 如果输入正确，你应该会看到命令行输出以下内容： `chmod returned 0x0`。
1. 这个错误代码现在应该没了。

<!-- tabs:end -->