# vWii Modding Guide {docsify-ignore-all}

## NAND Backup

In case anything goes wrong in the later process and your vWii ends up bricked, restoring a previously made NAND backup can fix it, or you can completely [reinstall the vWii](http://wiiu.hacks.guide/#/recover-vwii-ioses-channels).

?> If you have recently made a NAND backup that includes SLCCMPT and OTP, feel free to skip this step.

1. Launch the [Wii U NAND Dumper](browser-exploit).
1. Use the Wii U GamePad's D-Pad to enter the following configuration:
    - Dump SLC: **optional**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **optional**
    - Dump OTP: **yes**
    - Dump SEEPROM: **optional**
1. Press the A button to start the dumping process.
1. When the process completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
1. To make sure you don't lose the files, copy the `slccmpt.bin` and `otp.bin` files (and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file) to your computer.
1. Delete the files from your SD Card to free up space.
1. Take the SD Card out of your computer and plug it into your Wii U console.
