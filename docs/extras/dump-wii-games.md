# Dumping Wii Discs
---
Dumping your Discs allows you to: play them on a Wii emulator (namely Dolphin), play them using a USB/SD Card loader such as Wiiflow, make Virtual Console Injects that can be installed on a Wii U formatted USB drive or the NAND and launched from the Wii U Menu.

?> Dumping Wii games require a working homebrew setup on vWii, so make sure to finish the [vWii Modding guide](vwii-modding) beforehand.

<!-- tabs:start -->

#### **Dumping to SD/USB**

### Dumping to SD/USB

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

#### **Dumping over a Network**

### Dumping over a Network

?> Your Wii U and your device must be located on the same network.

### What You Need {docsify-ignore}

1. The latest release of [DVD Dump Tool](https://wii.guide/assets/files/DVDDumpTool.zip).

### Instructions {docsify-ignore}

1. Extract DVD Dump Tool to the `apps` folder on your SD card.
1. Launch the DVD Dump Tool on the HBC in vWii.
1. Scroll using the D-Pad until you reach "Wi-Fi Connection". Press A.
1. Go [on this page](https://wiki.dolphin-emu.org/index.php?title=Category:Dual_Layer_Disc_games) to see if your disc is dual-layered.
1. Scroll through and select either `Single Layer` or `Dual Layer` (Select `Dual Layer` if your disc is dual-layered).

?> GCN Discs cannot be dumped using this tool, as the Wii U cannot play GCN discs.

1. Now, place your disc into the Wii U. If your disc was already in the console, eject the disc and reinsert the disc.
1. Next, remember the URL that is shown on the screen. On your device, type in that URL and click "Download XXXX.iso".
1. The dumping process will now begin.

?> Be prepared to wait a while. The dumping process can take a very long time based on whether you are dumping a Single Layer or Dual Layer Disc.

<!-- tabs:end -->

### Joining Split Files (Only for Cleanrip)

?> If you dumped the disc on a FAT32 formatted device, you should've got at least 2 files that end with `.partX.iso`. They need to be joined up.

1. Copy all the files that share the same name and end with `.partX.iso` in a folder on your computer.
1. Open up a Command Prompt window.
1. Use the `cd <path>` command and replace `<path>` by the path to your `.partX.iso` files.
1. Use the following command as is: `copy /b *.part?.iso game.iso`.