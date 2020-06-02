# Haxchi

## Making a NAND Backup {docsify-ignore}

In case anything should go wrong in the later process and your Wii U ends up bricked, restoring a previously made NAND backup can fix it.

### Instructions

?> The Wii U NAND is (depending on your model) either 8GB or 32GB. As a result of this, to create a full backup of your console's NAND, your SD Card has to be larger than the size of your NAND. If you do not have a large enough SD Card, you can skip the optional `MLC` section which includes save files and game data and is not needed to recover most types of bricks.

?> Restoring a NAND Backup on the Wii U requires additional hardware and micro soldering skills.
<br>However, making a NAND Backup is **always** useful, so please do not skip it.
<br>Your NAND Backup is unique to your system. Backups from other consoles **won't** work.

1. Navigate through the Homebrew Launcher and launch the `Wii U NAND Dumper` app.
1. Use the Wii U Gamepad's DPAD to enter the following configuration:
 - Dump SLC: **yes**
 - Dump SLCCMPT: **yes**
 - Dump MLC: **optional**
 - Dump OTP: **yes**
 - Dump SEEPROM: **yes**
1. Press the A button to start the dumping process.
1. When the process completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
1. To make sure you don't lose the files, copy the `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` and if you chose to go with a full backup, `every mlc.bin.part` file to your computer.
1. Delete the files from your SD Card to free up space.