# 常见问题&修复{docsify-ignore-all}
---
### Haxchi 常见错误

 - **-3：** 未检测到 SD 卡。 重新插一下 SD 卡，然后再试一次。 请确保你的 SD 卡为 FAT32 格式。 如果问题仍然存在，请尝试吹吹卡槽（或尝试其他方法清理），因为可能有一些灰尘积在卡槽里头了。

 - **-4：** SD 卡已被检测到，但是无法被挂载。 检查 SD 卡是否正在使用 MBR 引导，而非 GPT 引导。 另外，检查 SD 卡上是否有两个以上的分区，如果有请将它们合并为一个。

 - **-5：** SD 卡上缺少文件。 检查你 SD 卡上的以下路径中是否存在此 Homebrew Launcher 的文件：<code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>。

### 浏览器错误

 - **FSGetMountSource failed：** 与上文的 -3 错误一样，意思就是没有检测到内存卡。 重新插一下 SD 卡，然后再试一次。

 - **FSOpenFile failed [...] payload.elf：** SD 卡上缺少 payload 文件。 请确认在 wiiu 文件夹下是否有一个叫做 payload.elf 的文件。

 - **FSOpenFile failed：** SD 卡中缺失 `homebrew_launcher`。 请确认在 <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code> 文件夹中有一个叫做 `homebrew_launcher.elf` 的文件。

### 数据管理说要删除一些不必要的数据，它什么意思？

这里指的是没有安装完成而残留的文件。 请总是确认删除这些数据，因为它们本来就没有存在的必要。 如果它一直卡在删除数据的进程中，那么你可以选择自己手动删除这些数据。   
使用 FTPiiU 然后浏览至 `/storage_mlc/usr/import` 然后删除这个文件夹中任何存在的文件。 这是未完成安装的东西存放的地方。 如果安装到 USB 设备中，则应该是 `/storage_usb/usr/import` 文件夹。  
`import` 文件夹里头理应始终都没有东西。

### 我的 HDD 不工作或它发出了一些很奇怪的打击声，我要怎么办？

出现这个情况是因为 Wii U 的某个 USB 接口没有给出足够的功率来驱动硬盘。

你可以使用带有供电的 HDD，或者使用一根 Y 型硬盘线将硬盘连接至 Wii U 的两个 USB 接口来解决这个问题。

如果你的 HDD 在工作了一段时间后在某些（或所有）游戏上抛锚了，这和上面说的是同个问题，并可以用同样的方法解决。

### 当我解压一些文件时，某些叫做 “info.json” & “manifest.install” 的文件重复了，我对这些文件要咋整？

你自己看着整吧，无论是把它们留在原处、删除它们或者替换它们为新的什么的等等都由你自己摆布。 也就是说，这些东西它有没有都无伤大雅。

### 我的主机突然掉线了，而且我有一块 HDD 放在主机的顶上，怎么办啊？

The internal antenna may have been influenced by the hard drive magnet.
You can move the HDD to a different position atop the Wii U, or move it off the Wii U entirely.
----------

# SD Card Layout
This is an example of what your SD Card should look like after you set it up. If you have a `-5` error or the `FSOpenFile failed` error your file locations may be incorrect.
```
💾sd:
 ┣ 📂cbhc                             (CBHC only)
 ┃ ┣ 📜bootDrcTex.tga
 ┃ ┣ 📜bootTvTex.tga
 ┃ ┣ 📜iconTex.tga
 ┃ ┗ 📜title.txt
 ┣ 📂haxchi                           (Haxchi & CBHC only)
 ┃ ┣ 📜bootDrcTex.tga
 ┃ ┣ 📜bootTvTex.tga
 ┃ ┣ 📜config.txt
 ┃ ┣ 📜iconTex.tga
 ┃ ┗ 📜title.txt
 ┣ 📂install
 ┃ ┗ 📂Homebrew Launcher Channel      (Haxchi & CBHC only)
 ┃   ┣ 📜00000000.app
 ┃   ┣ 📜00000003.h3
 ┃   ┣ ...
 ┃   ┣ 📜title.cert
 ┃   ┣ 📜title.tik
 ┃   ┗ 📜title.tmd
 ┗ 📂wiiu
   ┣ 📂apps
   ┃ ┣ 📂homebrew_launcher
   ┃ ┃ ┣ 📜homebrew_launcher.elf
   ┃ ┃ ┣ 📜icon.png
   ┃ ┃ ┗ 📜meta.xml
   ┃ ┗ (All other apps like disc2app, nanddumper, etc. should be here too)
   ┗ 📜payload.elf
```
