# Common Issues & Fixes

## Haxchi 常见错误

- **-3:** No SD Card detected. 重新插一下 SD 卡，然后再试一次。 请确保你的 SD 卡为 FAT32 格式。 If the error persists, try blowing compressed air into the SD slot as it can get dusty inside. **Do not blow into the SD slot with your mouth, as this can introduce moisture that can DAMAGE the slot.**

- **-4:** SD detected but could not mount. 检查 SD 卡是否正在使用 MBR 引导，而非 GPT 引导。 另外，检查 SD 卡上是否有两个以上的分区，如果有请将它们合并为一个。

- **-5:** Missing files on the SD. Check to see if your SD has Homebrew Launcher located in <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher<wbr>/homebrew_launcher.elf</code>.

## 浏览器错误

- **FSGetMountSource failed:** Same as -3 above, means no SD Card detected. 重新插一下 SD 卡，然后再试一次。 This could also mean that the SD card is locked (Slider is down instead of up) or the SD card label is "WIIU", which is stated in the guide causes conflict. If it's not any of these issues, refer to the last suggestion from -3.

- **FSOpenFile failed [...] payload.elf:** Missing payload file on SD. Make sure you have payload.elf in the wiiu folder, and the wiiu folder on the root.

- **FSOpenFile failed:** Missing `homebrew_launcher` on SD. Make sure you have `homebrew_launcher.elf` in the <code>/wiiu<wbr>/apps<wbr>/homebrew_launcher</code> folder.

- **SD Mount Failed:** Similar to -4, the console recognizes the SD card but could not mount it. Make sure it is formatted properly, and it is not damaged. Also, your SD card is more compatible with reputable brands (i.e. SanDisk, Samsung, Lexar, etc.) and less likely to have issues.

## 数据管理说要删除一些不必要的数据，它什么意思？

这里指的是没有安装完成而残留的文件。 请总是确认删除这些数据，因为它们本来就没有存在的必要。
If it ever stays stuck on deleting the data in an infinite loop, you can manually delete the data yourself.  
Use FTPiiU Everywhere and browse to `/storage_mlc/usr/import` then delete any files in the folder if any exists. 这是未完成安装的东西存放的地方。 It'll be `/storage_usb/usr/import` if installed to a USB.  
The `import` folder should always be kept empty.

## 我的 HDD 不工作或它发出了一些很奇怪的打击声，我要怎么办？

出现这个情况是因为 Wii U 的某个 USB 接口没有给出足够的功率来驱动硬盘。

你可以使用带有供电的 HDD，或者使用一根 Y 型硬盘线将硬盘连接至 Wii U 的两个 USB 接口来解决这个问题。

如果你的 HDD 在工作了一段时间后在某些（或所有）游戏上抛锚了，这和上面说的是同个问题，并可以用同样的方法解决。

## When extracting some of the files there are duplicates of certain ones called "info.json" & "manifest.install", what do I do with those?

你自己看着整吧，无论是把它们留在原处、删除它们或者替换它们为新的什么的等等都由你自己摆布。 也就是说，这些东西它有没有都无伤大雅。

## 我的主机突然掉线了，而且我有一块 HDD 放在主机的顶上，怎么办啊？

The internal antenna may have been influenced by the hard drive magnet.  
You can move the HDD to a different position atop the Wii U, or move it off the Wii U entirely.
