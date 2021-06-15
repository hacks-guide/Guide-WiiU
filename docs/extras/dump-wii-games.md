# Dumping Wii Discs
---
Dumping your Discs allows you to: play them on a Wii emulator (namely Dolphin), play them using a USB/SD Card loader such as Wiiflow, make Virtual Console injects that can be installed on a Wii U formatted USB drive or the NAND and launched from the Wii U Menu.

?> Dumping Wii games require a working homebrew setup on vWii, so make sure to finish the [vWii Modding guide](vwii-modding) beforehand.

!> It is **ILLEGAL** to share the files dumped with this guide.  
If you intend to use this guide to share your dumped games, don't.

### What You Need {docsify-ignore}

1. The latest release of [CleanRip](https://github.com/emukidid/cleanrip/releases/download/2.1.1/CleanRip-v2.1.1.zip).
1. The [wii.dat](https://github.com/emukidid/cleanrip/releases/download/2.1.1/wii.dat) file.

### Instructions {docsify-ignore}

1. Insert your Wii U's SD Card into your computer.
1. Copy the `apps` folder from the `CleanRip-v2.1.1.zip` file to the root of your SD Card.
1. Copy the `wii.dat` file to the root of your SD Card.
1. Take the SD Card out of your computer and plug it into your Wii U console.

### Dumping The Disc

1. Turn on your Wii U then choose the Wii Menu icon to boot up in vWii.
1. Launch the Homebrew Channel.
1. Launch CleanRip.
1. Read the Disclaimer then press A.
1. Select Yes to enable Checksum Calculations.
1. Select either USB or Front SD depending on which device you want to use for the dumping process.
    - Please note that the device you will choose needs to be formatted either in FAT32 or NTFS.
1. Press A to continue.
1. Select No on the screen that asks you to download redump.org DAT files.
1. Insert your disc then press A.
1. Go [on this page](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) to see if your disc is dual-layered.
1. Set everything to match the following:
    - Dual Layer: `Yes/No` (Select `Yes` if your game's disc is dual-layered)
    - Chunk Size: `Max`
    - New device per chunk: `No`
1. If you want to dump multiple discs, select Yes to remember your settings. If not, select No.

?> Be prepared to wait a while. The dumping process can take 30 minutes to 1 hour depending on your SD Card's speeds.

### Joining Split Files

?> If you dumped the disc on a FAT32 formatted, device, you should've got at least 2 files that end with `.partX.iso`. They need to be joined up.

#### Windows

1. Copy all the files that share the same name and end with `.partX.iso` in a folder on your computer.
1. Open up a Command Prompt window.
1. Use the `cd <path>` command and replace `<path>` by the path to your `.partX.iso` files.
1. Use the following command as is: `copy /b *.part?.iso game.iso`.

#### MacOS/Linux
1. Copy all the files that share the same name and end with `.partX.iso` in a folder on your computer.
2. Open up a Terminal.
3. Use the `cd <path>` command and replace `<path>` by the path to your `.partX.iso` files.
4. Use the following command as is: `cat *.part?.iso > game.iso`
