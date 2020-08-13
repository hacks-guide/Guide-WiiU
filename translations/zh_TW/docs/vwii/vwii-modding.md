# vWii Modding Guide
---
This page will guide you through the process of modding your vWii.

We will now place the required Homebrew files on the SD Card.

?> **Notice** Your SD Card will need to be formatted as FAT32. If your SD Card is not formatted to FAT32, use [GUIFormat](http://www.ridgecrop.demon.co.uk/index.htm?guiformat.htm) with 32k (32768) Allocation unit size to format it. It is advised that you do not label the SD Card as `wiiu` as it may cause issues with some applications.

### What You Need {docsify-ignore}

- The latest release of [Wuphax](http://wiiubru.com/appstore/zips/wuphax.zip).
- The latest release of [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper/releases/latest).
- The latest release of [HackMii Installer](https://bootmii.org/download/).
- The <a href="docs/files/Patched_IOS80_Installer_for_vWii.zip" download>Patched IOS 80 Installer for vWii</a>.
- The <a href ="docs/files/d2x_cIOS_Installer.zip" download>d2x cIOS Installer</a>.
- The [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/download/1.4/homebrew_launcher.v1.4.zip).
- The latest release of the [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/download/v1.4/payload.zip).

### Instructions {docsify-ignore}

1. Insert your Wii U's SD Card into your PC.
1. Copy the contents of the `wuphax.zip` file to the root of your SD Card.
1. Copy the contents of the `boot.elf` file from the <code>hackmii_<wbr>installer_<wbr>v1.2<wbr>.zip</code> file to the root of your SD Card.
1. Copy the contents of the `apps` folder from the <code>Patched_<wbr>IOS80_<wbr>Installer_<wbr>for_<wbr>vWii<wbr>.zip</code> file to the root of your SD Card.
1. Copy the contents of the <code>d2x_<wbr>cIOS_<wbr>Installer<wbr>.zip</code> file to the root of your SD Card.
1. Copy the contents of the `nanddumper.zip` file to the root of your SD Card.
1. Copy the contents of the <code>homebrew_<wbr>launcher.<wbr>v1.4.zip</code> file to the root of your SD Card.
1. Copy the contents of the `payload.zip` file to the `wiiu` folder on your SD Card.
1. Take the SD Card out of your computer and plug it into your Wii U console.

### NAND Backup

In case anything goes wrong in the later process and your vWii ends up bricked, restoring a previously made NAND backup can fix it.

1. Launch the [Homebrew Launcher](vwii/browser-exploit).
1. Launch the `Wii U NAND Dumper` application.
1. Use the Wii U GamePad's D-Pad to enter the following configuration:
 - Dump SLC: **optional**
 - Dump SLCCMPT: **yes**
 - Dump MLC: **optional**
 - Dump OTP: **yes**
 - Dump SEEPROM: **optional**
1. Press the A button to start the dumping process.
1. When the process completed, power off your Wii U, take your SD Card out of the Wii U and plug it into your PC.
1. To make sure you don't lose the files, copy the `slccmpt.bin`, `otp.bin` and if you chose to go with a full backup, `seeprom.bin`, `slc.bin`, and `every mlc.bin.part` file to your computer.
1. Delete the files from your SD Card to free up space.
1. Take the SD Card out of your computer and plug it into your Wii U console.

### Wuphax

1. Launch the [Homebrew Launcher](vwii/browser-exploit).
1. Launch Wuphax.
1. Press `A` to backup the Mii Channel and inject the Hackmii Installer then wait until it says <code>Successfully <wbr>injected <wbr>wuphax!</code>.
 - You will be taken back to the Wii U Menu after a few seconds.
1. Launch vWii (the Wii Menu icon).
1. Launch the vWii Mii Channel.
 - If Wuphax has successfully been injected, you will now see the scam warning screen.
1. Wait until you see `Press 1 to continue` and then press the `1` button.
1. Select `continue`, <code>Install <wbr>The <wbr>Homebrew <wbr>Channel</code> and `Yes, continue`.
1. If The Homebrew Channel has successfully been installed, select `continue` and then `exit`.
1. Launch the Wii U Menu channel to return to the Wii U Menu.
1. Launch the [Homebrew Launcher](vwii/browser-exploit).
1. Launch Wuphax.
1. Press `B` to restore the Mii Channel then wait until it says <code>Mii <wbr>Channel <wbr>restored!</code>.
 - You will be taken back to the Wii U Menu after a few seconds.
 - If for some reason, you cannot restore your backup, you will need to [reinstall your Mii Channel](recover-vwii-ioses-channels).

### Installing cIOSes

!> Make sure you have no `.wad` files anywhere else than in the `apps` folder on your SD Card.

?> **Tip** You can hold the `B` button on the GamePad when turning on the Wii U to boot directly into vWii.

1. Power on your Wii U and launch vWii.
1. Launch The Homebrew Channel.
1. Launch d2x cIOS Installer.
1. Set everything to match the following:
 - Select cIOS: `v10 d2x-v10-beta52-vWii`
 - Select cIOS base: `56`
 - Select cIOS slot: `249`
1. Press the `A` button to install.
1. Set everything to match the following:
 - Select cIOS: `v10 d2x-v10-beta52-vWii`
 - Select cIOS base: `57`
 - Select cIOS slot: `250`
1. Press the `A` button to install.
1. Set everything to match the following:
 - Select cIOS: `v10 d2x-v10-beta52-vWii`
 - Select cIOS base: `58`
 - Select cIOS slot: `251`
1. Press the `A` button to install.
1. Press the `B` button to exit.

### Patching IOS 80

!> If for any reason, the Wii U is turned off while patching IOS 80, your vWii will be bricked. This can be fixed by either extracting the IOS 80 from your previously made NAND backup and then replacing it over FTP or by [reinstalling IOS 80](recover-vwii-ioses-channels).

1. Launch Patched IOS 80 Installer for vWii.
1. Read the warning screen and wait 30 seconds.
1. Press any buttons to install.
1. Wait until it says <code>IOS80 <wbr>Installation <wbr>is <wbr>complete!</code>.
1. Press any buttons to exit.

!> Installing custom System Menu is a definite brick risk and you should always have an effective backup before installing one but when done right, won't brick the vWii.

!> Installing any IOS (including TED IOSes) or wads made for the original Wii on your vWii will brick it.

!> Installing Priiloader will brick your vWii.
