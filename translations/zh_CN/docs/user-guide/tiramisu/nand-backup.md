# Tiramisu

## 制作一个 NAND 备份{docsify-ignore}

如果你在之后做错了什么导致 Wii U 变砖了，恢复 NAND 备份就可以修复它。

### 步骤 {docsify-ignore}

?> Wii U NAND 备份的大小取决于你的设备型号，为 8GB 或 32GB。 为了备份 NAND，你需要准备一张大于你设备 NAND 的 SD 卡。 如果你的 SD 卡没有如此大的空间，你在备份的时候可以选择跳过 `MLC` 部分，其中保存的文件是你的游戏和游戏存档，救砖不需要恢复这些东西。

?> 不过恢复 NAND 备份需要额外的设备和一点微焊技能。 <br>但是备份 NAND **是** 为了以防万一，所以不要跳过这些步骤。 <br>你从某一台设备导出的 NAND 备份是那一台设备所独有的。 恢复其他主机的 NAND 备份 **不能救砖**。

1. Launch web browser exploit as [previously explained](browser-exploit) but this time, you will need to hold the B button.
1. Navigate to `nanddumper` using the Gamepad and press A to launch it.
1. 使用 Wii U 游戏手柄上的十字键来配置以下内容：
    - Dump SLC: **yes**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **可选**
    - Dump OTP: **yes**
    - Dump SEEPROM: **yes**
1. 按下 A 键启动导出的进程。
1. 当完成后，将 Wii U 关机，然后把 SD 卡从 Wii U 上拔出并插入电脑。
1. 确认你的内存卡中有以下文件：`slc.bin`、`slccmpt.bin`、`seeprom.bin`、`otp.bin` 然后将其复制到电脑上。 若你选择了全部备份，则你还需要复制 `所有的 mlc.bin.part` 文件到电脑上。
1. 从 SD 卡中删除文件来腾出空间。

?> **If the PayloadLoader is already installed into the Health and Safety Information app and your console is already autobooting it, you do not need to continue following the guide.**