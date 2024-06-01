# Aroma {docsify-ignore-all}

## Making a NAND Backup

In case anything should go wrong in the later process and your Wii U ends up bricked, restoring a previously made NAND backup can fix it.

### Instructions

?> The Wii U NAND is (depending on your model) either 8GB or 32GB. As a result of this, to create a full backup of your console's NAND, your SD Card has to be larger than the size of your NAND. If you do not have a large enough SD Card, you can skip the optional `MLC` section which includes save files and game data and is not needed to recover most types of bricks.

?> Restoring a NAND Backup on the Wii U requires additional hardware and micro soldering skills.
<br>However, making a NAND Backup is **always** useful, so please do not skip it.
<br>Your NAND Backup is unique to your system. Backups from other consoles **won't** work.

1. Navigate to `nanddumper` using the GamePad and press A to launch it.
1. Use the Wii U GamePad's D-Pad to enter the following configuration:
    - Dump SLC: **yes**
    - Dump SLCCMPT: **yes**
    - Dump MLC: **optional**
    - Dump OTP: **yes**
    - Dump SEEPROM: **yes**
1. Press the A button to start the dumping process.
1. When the process is completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
1. To make sure you don't lose the files, copy the `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` and if you chose to go with a full backup, `every mlc.bin.part` file to your computer. This step should not be followed if your computer does not have enough storage for it, or you use ChromeOS, which is known to delete files unrecoverably without consent due to low storage or a variety of other factors.
1. If you followed the step above, delete the files from your SD Card to free up space.
1. To reduce the filesize significantly when backing up the MLC, compress the files with 7zip preferably, or just using the zip compression built into your OS, if you cannot install 7zip due to any reason. This will stop any unused space from the Wii U's storage from taking up storage.
1. If you followed the step above, delete the non-compressed files from your computer to free up space.
