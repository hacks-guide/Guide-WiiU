# 常见问题修复{docsify-ignore-all}
---
### Haxchi 常见错误

 - **-3：** 未检测到 SD 卡。 重新插一下 SD 卡，然后再试一次。 请确保你的 SD 卡为 FAT32 格式。 如果错误仍然存在，请尝试吹吹卡槽（或尝试其他方法清理），因为可能有一些灰尘在卡槽里头。

 - **-4：** SD 卡已被检测到，但是无法被挂载。 检查 SD 卡是否正在使用 MBR 引导，而非 GPT 引导。 另外，检查 SD 卡上是否有两个以上的分区，如果有请将它们合并为一个。

 - **-5：** SD 卡上缺少文件。 检查你 SD 卡上的以下路径中是否存在此 Homebrew Launcher 的文件：<code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>。

### 浏览器错误

 - **FSGetMountSource failed：** 与上文的 -3 错误一样，意思就是没有检测到内存卡。 重新插一下 SD 卡，然后再试一次。

 - **FSOpenFile failed [...] payload.elf：** SD 卡上缺少 payload 文件。 请确认在 wiiu 文件夹下是否有一个叫做 payload.elf 的文件。

 - **FSOpenFile failed：** SD 卡中缺失 `homebrew_launcher`。 请确认在 <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code> 文件夹中有一个叫做 `homebrew_launcher.elf` 的文件。

### 数据管理说要删除一些不必要的数据，它什么意思？

这里指的是没有安装完成而残留的文件。 Always choose Yes to delete this data, as it takes up space for no good reason. If it ever stays stuck on deleting the data in an infinite loop, you can manually delete the data yourself.  
Use FTPiiU Everywhere and browse to `/storage_mlc/usr/import` then delete any files in the folder if any exists. This is where the partial installs exist after incomplete installs. It'll be `/storage_usb/usr/import` if installed to a USB.  
The `import` folder should always be kept empty.

### My HDD doesn't work or makes a weird clicking sound, what should I do?

The reason behind that is that the Wii U doesn't give enough power through one USB port to use the Hard Drive.

You can fix this by either using a powered HDD or using a Y-Cable to connect the HDD to two USB ports.

If your HDD worked for some time and then stopped working for some games/all games, it is the same issue and can be fixed with the same methods.

### 当我解压一些文件时，某些叫做 “info.json” & “manifest.install” 的文件重复了，我对这些文件要咋整？

你自己看着整吧，无论是把它们留在原处、删除它们或者替换它们为新的什么的等等都由你自己摆布。 也就是说，这些东西它有没有都无伤大雅。

### My console suddenly lost online connectivity and I have an HDD sitting on top of the console, what should I do?

The internal antenna may have been influenced by the hard drive magnet.  
You can move the HDD to a different position atop the Wii U, or move it off the Wii U entirely.