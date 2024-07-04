# Aroma {docsify-ignore-all}

## 制作一个 NAND 备份

如果你在之后做错了什么导致 Wii U 变砖了，恢复 NAND 备份就可以修复它。

### 操作步骤

?> The Wii U NAND is (depending on your model) either 8GB or 32GB. 为了备份 NAND，你需要准备一张大于你设备 NAND 的 SD 卡。 If you do not have a large enough SD Card, you can skip the optional `MLC` section which includes save files and game data and is not needed to recover most types of bricks.

?> Restoring a NAND Backup on the Wii U requires additional hardware and micro soldering skills. <br>However, making a NAND Backup is **always** useful, so please do not skip it. <br>你从某一台设备导出的 NAND 备份是那一台设备所独有的。 Backups from other consoles **won't** work.

1. Navigate to `nanddumper` using the GamePad and press A to launch it.
2. 使用 Wii U 游戏手柄上的十字键来配置以下内容：
   - Dump SLC: **yes**
   - Dump SLCCMPT: **yes**
   - Dump MLC: **optional**
   - Dump OTP: **yes**
   - Dump SEEPROM: **yes**
3. 按下 A 键启动导出的进程。
4. When the process is completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
5. To make sure you don't lose the files, copy the `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` and if you chose to go with a full backup, `every mlc.bin.part` file to your computer.
6. 从 SD 卡中删除文件来腾出空间。
