# vWii Modding Guide {docsify-ignore-all}

## NAND 备份

In case anything goes wrong in the later process and your vWii ends up bricked, restoring a previously made NAND backup can fix it, or you can completely [reinstall the vWii](http://wiiu.hacks.guide/#/recover-vwii-ioses-channels).

?> If you have recently made a NAND backup that includes SLCCMPT and OTP, feel free to skip this step.

1. Launch the [Wii U NAND Dumper](browser-exploit).
2. 使用 Wii U 游戏手柄上的十字键来配置以下内容：
   - Dump SLC: **optional**
   - Dump SLCCMPT: **yes**
   - Dump MLC: **optional**
   - Dump OTP: **yes**
   - Dump SEEPROM: **optional**
3. 按下 A 键启动导出的进程。
4. 当完成后，将 Wii U 关机，然后把 SD 卡从 Wii U 上拔出并插入电脑。
5. To make sure you don't lose the files, copy the `slccmpt.bin` and `otp.bin` files (and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file) to your computer.
6. 从 SD 卡中删除文件来腾出空间。
7. 把 SD 卡从电脑中弹出并插入 Wii U 主机。
