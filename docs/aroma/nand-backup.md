---
prev: true
next: true
---

# Making a NAND Backup

In case anything should go wrong in the later process and your Wii U ends up bricked, restoring a previously made NAND backup can fix it.

## Instructions

::: tip

The Wii U MLC is (depending on your model) either 8GB or 32GB. As a result of this, to create a full backup of your console's NAND, your SD Card has to be larger than the size of your MLC. If you do not have a large enough SD Card, you can skip the optional `MLC` section which includes save files and game data and is not needed to recover any type of brick.

:::

::: tip

Restoring a NAND Backup on the Wii U requires ISFShax or additional hardware and microsoldering skills.

However, making a NAND Backup is **always** useful, so please do not skip it.

Your NAND Backup is unique to your system. Backups from other consoles **won't** work without the required knowledge.

:::

1. Navigate to `nanddumper` using the GamePad and press A to launch it.
1. Use the Wii U GamePad's D-Pad to enter the following configuration:
    ![SLC: Yes, SLCCMPT: Yes, MLC: Yes or No, OTP: Yes, SEEPROM: Yes](/assets/img/guide/NAND.png)
    - MLC is **OPTIONAL**, if you do not want to dump it, leave it on `No`. If you do want to dump it, make sure you have a SD Card big enough for it and put it on `Yes`.
1. Press the A button to start the dumping process.
1. When the process is completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
1. To make sure you don't lose the files, copy the `slc.bin`, `slccmpt.bin`, `seeprom.bin`, `otp.bin` (and if you chose to go with a full backup, `every mlc.bin.part` file) to somewhere safe (Documents, Google Drive, OneDrive, etc.) on your computer.
   - They will appear on the root of the SD Card.
1. Delete the files you just copied from your SD Card to free up space.
